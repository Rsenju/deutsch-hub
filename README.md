# Deutsch Hub

Plataforma pessoal de estudos de alemão do A1 ao B2, com progresso, XP,
flashcards SRS, banco de erros, simulados Goethe e tutor com IA.

Este guia mostra como configurar o Supabase do zero e abrir o projeto
localmente. Não coloque chaves reais neste arquivo nem envie o arquivo `.env`
para o GitHub.

## 1. Requisitos

- Node.js 20 ou superior
- npm
- Uma conta no [Supabase](https://supabase.com/dashboard)
- Uma conta Google Cloud, caso queira usar login com Google

## 2. Criar o projeto no Supabase

1. Entre no [Supabase Dashboard](https://supabase.com/dashboard).
2. Clique em **New project**.
3. Escolha a organização.
4. Defina nome, senha do banco e região.
5. Aguarde o projeto ficar disponível.

Guarde o **Project Ref**, que aparece na URL e no endereço da API:

```text
https://SEU_PROJECT_REF.supabase.co
```

O arquivo `supabase/config.toml` só é usado pela Supabase CLI. Se conectar este
repositório a outro projeto, atualize o `project_id` desse arquivo.

## 3. Obter URL e chaves

No projeto Supabase, abra o botão **Connect** ou acesse
**Settings > API Keys**.

Você precisará de:

- **Project URL**: `https://SEU_PROJECT_REF.supabase.co`
- **Publishable key**: começa com `sb_publishable_`
- **Secret key** ou chave legada `service_role`: usada somente no servidor

> A chave publicável pode ser usada no navegador. A chave secreta ou
> `service_role` ignora RLS e nunca pode aparecer em variável `VITE_*`, código
> frontend, GitHub ou mensagens públicas.

## 4. Criar o banco de dados

Abra **SQL Editor > New query** no Supabase. Execute os arquivos abaixo, um por
vez e nesta ordem:

1. `supabase/recovery_schema.sql`
2. `supabase/migrations/20260604090000_create_exam_attempts.sql`
3. `supabase/migrations/20260604100000_create_learning_errors.sql`
4. `supabase/migrations/20260604110000_add_error_srs.sql`

Abra cada arquivo no computador, copie todo o conteúdo para o SQL Editor e
clique em **Run**. Espere aparecer `Success` antes de executar o próximo.

O `recovery_schema.sql` é a base recomendada porque pode recuperar uma
instalação parcialmente criada sem falhar ao encontrar a maioria dos objetos
existentes.

### Atenção ao script de reset

Não execute `supabase/reset_app_schema.sql` em uma instalação funcionando.
Esse arquivo apaga as tabelas do Deutsch Hub e deve ser usado somente quando
você quiser reinstalar o banco intencionalmente. Ele não apaga usuários do
Supabase Auth, mas apaga progresso e dados das tabelas do aplicativo.

### Usuário criado antes do schema

Se você já havia criado/loginado com um usuário antes de executar o schema,
rode este SQL uma vez para criar o perfil e a função de estudante:

```sql
insert into public.profiles (id, display_name)
select
  id,
  coalesce(
    raw_user_meta_data->>'display_name',
    raw_user_meta_data->>'full_name',
    split_part(email, '@', 1)
  )
from auth.users
on conflict (id) do nothing;

insert into public.user_roles (user_id, role)
select id, 'student'::public.app_role
from auth.users
on conflict (user_id, role) do nothing;

notify pgrst, 'reload schema';
```

### Conferir as tabelas

Em **Table Editor**, confirme que existem pelo menos:

```text
profiles
user_roles
chapters
lessons
exercises
flashcards
user_lesson_progress
user_vocab_srs
xp_events
chat_threads
chat_messages
exam_attempts
learning_errors
tts_cache
```

As tabelas do schema `public` possuem RLS e políticas de acesso. Não escolha
“Run without RLS” ao criar tabelas manualmente; use os scripts do projeto.

## 5. Configurar autenticação

### Login por e-mail

1. Abra **Authentication > Providers**.
2. Confirme que o provedor **Email** está habilitado.
3. Em projetos pessoais, você pode manter confirmação de e-mail habilitada.
4. Se a confirmação estiver habilitada, confirme o e-mail antes de tentar
   entrar.

### URLs permitidas pelo Supabase

Abra **Authentication > URL Configuration**.

Para produção:

```text
Site URL:
https://SEU-DOMINIO.vercel.app

Redirect URLs:
https://SEU-DOMINIO.vercel.app/auth/callback
https://SEU-DOMINIO.vercel.app/**
```

Para desenvolvimento local, adicione também:

```text
http://127.0.0.1:5173/auth/callback
http://127.0.0.1:5173/**
```

Use sempre o mesmo host que aparece no navegador. `localhost` e `127.0.0.1`
são origens diferentes. Este projeto está documentado usando
`127.0.0.1:5173`.

## 6. Configurar login com Google

### No Google Cloud

1. Abra o [Google Auth Platform](https://console.cloud.google.com/auth/clients).
2. Configure a tela de consentimento OAuth.
3. Crie um cliente OAuth do tipo **Web application**.
4. Em **Authorized JavaScript origins**, adicione:

```text
http://127.0.0.1:5173
https://SEU-DOMINIO.vercel.app
```

5. Em **Authorized redirect URIs**, adicione o callback do Supabase:

```text
https://SEU_PROJECT_REF.supabase.co/auth/v1/callback
```

6. Salve o **Client ID** e o **Client Secret**.

O callback cadastrado no Google é o callback do Supabase, não
`/auth/callback` do Deutsch Hub.

### No Supabase

1. Abra **Authentication > Providers > Google**.
2. Habilite o provedor.
3. Cole o Client ID e o Client Secret do Google.
4. Salve.

O fluxo correto será:

```text
Deutsch Hub -> Google -> Supabase -> /auth/callback -> /dashboard
```

## 7. Configurar o arquivo `.env`

Na pasta que contém `package.json`, crie `.env` a partir de `.env.example`:

```env
VITE_SUPABASE_URL=https://SEU_PROJECT_REF.supabase.co
VITE_SUPABASE_PUBLISHABLE_KEY=sb_publishable_SUA_CHAVE

SUPABASE_URL=https://SEU_PROJECT_REF.supabase.co
SUPABASE_PUBLISHABLE_KEY=sb_publishable_SUA_CHAVE
SUPABASE_SERVICE_ROLE_KEY=SUA_CHAVE_SECRETA_OU_SERVICE_ROLE

OPENAI_API_KEY=
AI_GATEWAY_BASE_URL=https://api.openai.com/v1
AI_GATEWAY_API_KEY=
AI_MODEL=gpt-4o-mini

SITE_URL=http://127.0.0.1:5173
ELEVENLABS_API_KEY=
```

Observações:

- `VITE_SUPABASE_URL` e `SUPABASE_URL` recebem a mesma URL.
- `VITE_SUPABASE_PUBLISHABLE_KEY` e `SUPABASE_PUBLISHABLE_KEY` recebem a
  mesma chave publicável.
- `SUPABASE_SERVICE_ROLE_KEY` fica disponível somente no servidor.
- `VITE_SUPABASE_PROJECT_ID` não é utilizado pelo código atual.
- IA e ElevenLabs são opcionais para abrir a interface principal.
- Reinicie o servidor sempre que alterar o `.env`.

## 8. Instalar e abrir localmente

No PowerShell:

```powershell
cd "C:\caminho\para\deutsch-journey-companion-main"
npm install
npm run dev -- --host 127.0.0.1
```

Abra:

```text
http://127.0.0.1:5173
```

Não abra diretamente uma URL como:

```text
https://SEU_PROJECT_REF.supabase.co/rest/v1/...
```

Esses endereços são endpoints da API e podem mostrar `No API key found`.
Sempre abra o endereço do aplicativo.

## 9. Carregar o conteúdo de estudo

Depois de entrar:

1. Abra `http://127.0.0.1:5173/admin/ingest`.
2. Use o código de bootstrap exibido pela própria tela.
3. Clique em **Promover**.
4. Execute, nesta ordem:
   - **Ingerir A1**
   - **Ingerir A2**
   - **Ingerir B1**
   - **Ingerir B2**
   - **Ingerir Flashcards**

A ingestão usa `upsert`, portanto pode ser repetida quando o conteúdo for
atualizado.

O código de promoção atual serve apenas para o bootstrap deste projeto
pessoal. Se o projeto passar a aceitar outros usuários, substitua esse
mecanismo antes de liberar a rota de administração.

## 10. Configuração equivalente no Vercel

Em **Vercel > Project > Settings > Environment Variables**, adicione as mesmas
variáveis do `.env` para **Production** e, se utilizar, **Preview**:

```text
VITE_SUPABASE_URL
VITE_SUPABASE_PUBLISHABLE_KEY
SUPABASE_URL
SUPABASE_PUBLISHABLE_KEY
SUPABASE_SERVICE_ROLE_KEY
OPENAI_API_KEY
AI_GATEWAY_BASE_URL
AI_GATEWAY_API_KEY
AI_MODEL
SITE_URL
ELEVENLABS_API_KEY
```

Depois de alterar variáveis no Vercel, faça um novo deploy. Atualize também a
**Site URL** e as **Redirect URLs** no Supabase com o domínio definitivo.

## 11. Diagnóstico de erros comuns

### `No API key found in request`

Você abriu um endpoint REST/Auth do Supabase diretamente. Volte para:

```text
http://127.0.0.1:5173
```

Também confira as quatro variáveis de URL/chave publicável no `.env`.

### `Could not find the table public.chapters`

O schema não foi criado ou o cache da API não foi atualizado:

1. Execute os arquivos SQL da seção 4.
2. Rode `notify pgrst, 'reload schema';` no SQL Editor.
3. Reinicie o app.

### Login fica carregando em loop

Confira:

- Google está habilitado em **Authentication > Providers**.
- O Google possui exatamente
  `https://SEU_PROJECT_REF.supabase.co/auth/v1/callback`.
- O Supabase possui `http://127.0.0.1:5173/auth/callback`.
- Você não misturou `localhost` com `127.0.0.1`.
- O servidor foi reiniciado depois de alterar o `.env`.

### `redirect_uri_mismatch` no Google

A URI em **Authorized redirect URIs** deve ser exatamente:

```text
https://SEU_PROJECT_REF.supabase.co/auth/v1/callback
```

Sem `/rest/v1`, sem `/authorize` e sem o domínio do Vercel nesse campo.

### Login funciona, mas não há capítulos

Abra `/admin/ingest` e carregue A1, A2, B1, B2 e flashcards.

### Login funciona, mas perfil ou dashboard falham

Execute o SQL de backfill da seção **Usuário criado antes do schema**.

## Referências oficiais

- [Supabase API keys](https://supabase.com/docs/guides/api/api-keys)
- [Supabase login com Google](https://supabase.com/docs/guides/auth/social-login/auth-google)
- [Supabase redirect URLs](https://supabase.com/docs/guides/auth/redirect-urls)
- [Supabase Row Level Security](https://supabase.com/docs/guides/database/postgres/row-level-security)
