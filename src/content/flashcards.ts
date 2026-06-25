// @ts-nocheck
// ─────────────────────────────────────────────────
// FLASHCARDS A1
// ─────────────────────────────────────────────────
const A1_FLASHCARDS = [
    // ── Cap 1: Saudações ──
    {slug:'fc-a1-c01-01',level:'A1',chapter:1,theme:'dia',front:'hallo',back:'olá',ex_de:'Hallo! Wie geht es dir?',ex_pt:'Olá! Como vai você?'},
    {slug:'fc-a1-c01-02',level:'A1',chapter:1,theme:'dia',front:'guten Morgen',back:'bom dia',ex_de:'Guten Morgen, Frau Weber!',ex_pt:'Bom dia, senhora Weber!'},
    {slug:'fc-a1-c01-03',level:'A1',chapter:1,theme:'dia',front:'guten Tag',back:'bom dia / boa tarde (formal)',ex_de:'Guten Tag! Kann ich helfen?',ex_pt:'Boa tarde! Posso ajudar?'},
    {slug:'fc-a1-c01-04',level:'A1',chapter:1,theme:'dia',front:'guten Abend',back:'boa noite (saudação)',ex_de:'Guten Abend! Herzlich willkommen.',ex_pt:'Boa noite! Bem-vindo.'},
    {slug:'fc-a1-c01-05',level:'A1',chapter:1,theme:'dia',front:'auf Wiedersehen',back:'adeus (formal)',ex_de:'Auf Wiedersehen! Schönen Tag noch!',ex_pt:'Até logo! Tenha um bom dia!'},
    {slug:'fc-a1-c01-06',level:'A1',chapter:1,theme:'dia',front:'tschüss',back:'tchau (informal)',ex_de:'Tschüss! Bis morgen!',ex_pt:'Tchau! Até amanhã!'},
    {slug:'fc-a1-c01-07',level:'A1',chapter:1,theme:'dia',front:'wie heißt du?',back:'como você se chama?',ex_de:'Wie heißt du? — Ich heiße Anna.',ex_pt:'Como você se chama? — Eu me chamo Anna.'},
    {slug:'fc-a1-c01-08',level:'A1',chapter:1,theme:'dia',front:'ich heiße... / ich bin...',back:'eu me chamo... / eu sou...',ex_de:'Ich heiße Tom. Ich bin Student.',ex_pt:'Meu nome é Tom. Sou estudante.'},
    {slug:'fc-a1-c01-09',level:'A1',chapter:1,theme:'dia',front:'freut mich! / freut mich auch!',back:'prazer! / prazer também!',ex_de:'Freut mich! — Freut mich auch!',ex_pt:'Prazer! — Prazer também!'},
    {slug:'fc-a1-c01-10',level:'A1',chapter:1,theme:'dia',front:'woher kommst du?',back:'de onde você é?',ex_de:'Woher kommst du? — Ich komme aus Brasilien.',ex_pt:'De onde você é? — Sou do Brasil.'},
    {slug:'fc-a1-c01-11',level:'A1',chapter:1,theme:'dia',front:'wie geht es dir?',back:'como vai você? (informal)',ex_de:'Wie geht es dir? — Danke, gut!',ex_pt:'Como vai você? — Bem, obrigado!'},
    {slug:'fc-a1-c01-12',level:'A1',chapter:1,theme:'dia',front:'ein bisschen',back:'um pouco',ex_de:'Ich spreche ein bisschen Deutsch.',ex_pt:'Eu falo um pouco de alemão.'},
    {slug:'fc-a1-c01-13',level:'A1',chapter:1,theme:'gramática',front:'sein: bin/bist/ist/sind',back:'ser/estar — irregular',ex_de:'Ich bin müde. Du bist nett. Wir sind hier.',ex_pt:'Estou cansado. Você é legal. Estamos aqui.'},
    {slug:'fc-a1-c01-14',level:'A1',chapter:1,theme:'gramática',front:'heißen: heiße/heißt',back:'chamar-se',ex_de:'Ich heiße Ben. Sie heißt Anna.',ex_pt:'Meu nome é Ben. O nome dela é Anna.'},
    // ── Cap 2: Família e Números ──
    {slug:'fc-a1-c02-01',level:'A1',chapter:2,theme:'família',front:'die Familie / die Eltern',back:'a família / os pais (sempre plural)',ex_de:'Meine Eltern wohnen in Köln.',ex_pt:'Meus pais moram em Colônia.'},
    {slug:'fc-a1-c02-02',level:'A1',chapter:2,theme:'família',front:'der Vater / die Mutter',back:'o pai / a mãe',ex_de:'Mein Vater heißt Michael.',ex_pt:'Meu pai se chama Michael.'},
    {slug:'fc-a1-c02-03',level:'A1',chapter:2,theme:'família',front:'der Bruder / die Schwester',back:'o irmão / a irmã',ex_de:'Ich habe einen Bruder und zwei Schwestern.',ex_pt:'Tenho um irmão e duas irmãs.'},
    {slug:'fc-a1-c02-04',level:'A1',chapter:2,theme:'família',front:'die Geschwister',back:'os irmãos (sempre plural)',ex_de:'Hast du Geschwister?',ex_pt:'Você tem irmãos?'},
    {slug:'fc-a1-c02-05',level:'A1',chapter:2,theme:'gramática',front:'mein / meine',back:'meu / minha (masc/neut vs fem/pl)',ex_de:'mein Vater, meine Mutter, meine Eltern',ex_pt:'meu pai, minha mãe, meus pais'},
    {slug:'fc-a1-c02-06',level:'A1',chapter:2,theme:'números',front:'eins bis zwölf (1–12)',back:'um até doze (irregulares!)',ex_de:'Ich habe zwölf Monate.',ex_pt:'Tenho doze meses.'},
    {slug:'fc-a1-c02-07',level:'A1',chapter:2,theme:'números',front:'sechzehn / siebzehn',back:'dezesseis (sem s) / dezessete (sem en)',ex_de:'Er ist siebzehn Jahre alt.',ex_pt:'Ele tem dezessete anos.'},
    {slug:'fc-a1-c02-08',level:'A1',chapter:2,theme:'números',front:'dreißig / vierzig / fünfzig',back:'trinta (ß!) / quarenta / cinquenta',ex_de:'Das kostet dreißig Euro.',ex_pt:'Custa trinta euros.'},
    {slug:'fc-a1-c02-09',level:'A1',chapter:2,theme:'números',front:'einundzwanzig (21)',back:'vinte e um — regra: unidade+und+dezena',ex_de:'Ich bin einundzwanzig Jahre alt.',ex_pt:'Tenho vinte e um anos.'},
    {slug:'fc-a1-c02-10',level:'A1',chapter:2,theme:'família',front:'wie alt bist du? / ich bin X Jahre alt.',back:'quantos anos você tem? / tenho X anos.',ex_de:'Wie alt bist du? — Ich bin 22.',ex_pt:'Quantos anos você tem? — Tenho 22.'},
    // ── Cap 3: Hobbies e Cores ──
    {slug:'fc-a1-c03-01',level:'A1',chapter:3,theme:'dia',front:'das Hobby / die Freizeit',back:'o hobby / o tempo livre',ex_de:'Was machst du in deiner Freizeit?',ex_pt:'O que você faz no seu tempo livre?'},
    {slug:'fc-a1-c03-02',level:'A1',chapter:3,theme:'dia',front:'spielen / lesen / hören / kochen',back:'jogar/tocar / ler / ouvir / cozinhar',ex_de:'Ich spiele Gitarre und lese gern.',ex_pt:'Toco violão e gosto de ler.'},
    {slug:'fc-a1-c03-03',level:'A1',chapter:3,theme:'dia',front:'rot / blau / grün / gelb / schwarz / weiß',back:'vermelho / azul / verde / amarelo / preto / branco',ex_de:'Meine Lieblingsfarbe ist blau.',ex_pt:'Minha cor favorita é azul.'},
    {slug:'fc-a1-c03-04',level:'A1',chapter:3,theme:'gramática',front:'gern (após o verbo)',back:'gostar de (indica preferência)',ex_de:'Ich höre gern Musik. Er spielt gern Fußball.',ex_pt:'Gosto de ouvir música. Ele gosta de jogar futebol.'},
    {slug:'fc-a1-c03-05',level:'A1',chapter:3,theme:'dia',front:'das Wochenende / am Wochenende',back:'o fim de semana / no fim de semana',ex_de:'Am Wochenende gehe ich ins Kino.',ex_pt:'No fim de semana vou ao cinema.'},
    {slug:'fc-a1-c03-06',level:'A1',chapter:3,theme:'gramática',front:'Vokalwechsel e→i: lesen/essen/sprechen',back:'mudança e→i na 2ª/3ª pessoa',ex_de:'Er liest. Du isst. Sie spricht.',ex_pt:'Ele lê. Você come. Ela fala.'},
    // ── Cap 4: Supermercado ──
    {slug:'fc-a1-c04-01',level:'A1',chapter:4,theme:'compras',front:'der Supermarkt / einkaufen',back:'o supermercado / fazer compras',ex_de:'Ich kaufe im Supermarkt ein.',ex_pt:'Faço compras no supermercado.'},
    {slug:'fc-a1-c04-02',level:'A1',chapter:4,theme:'gramática',front:'Akkusativ: der→den / ein→einen',back:'acusativo: só masculino muda!',ex_de:'Ich kaufe einen Apfel und eine Banane.',ex_pt:'Compro uma maçã e uma banana.'},
    {slug:'fc-a1-c04-03',level:'A1',chapter:4,theme:'compras',front:'das Obst / das Gemüse / das Brot',back:'as frutas / os legumes / o pão',ex_de:'Ich brauche Obst, Gemüse und Brot.',ex_pt:'Preciso de frutas, legumes e pão.'},
    {slug:'fc-a1-c04-04',level:'A1',chapter:4,theme:'compras',front:'die Milch / der Käse / das Ei',back:'o leite (fem) / o queijo (masc) / o ovo (neut)',ex_de:'Ich nehme die Milch und den Käse.',ex_pt:'Pego o leite e o queijo.'},
    {slug:'fc-a1-c04-05',level:'A1',chapter:4,theme:'compras',front:'ich hätte gern... / ich möchte...',back:'eu gostaria de... (pedido educado)',ex_de:'Ich hätte gern ein Kilo Äpfel, bitte.',ex_pt:'Gostaria de um quilo de maçãs.'},
    {slug:'fc-a1-c04-06',level:'A1',chapter:4,theme:'compras',front:'wie viel? / wie viele?',back:'quanto? (incontável) / quantos? (contável)',ex_de:'Wie viel kostet das? Wie viele Eier?',ex_pt:'Quanto custa? Quantos ovos?'},
    // ── Cap 5: Rotina ──
    {slug:'fc-a1-c05-01',level:'A1',chapter:5,theme:'dia',front:'aufstehen / frühstücken / anfangen',back:'levantar-se / tomar café / começar',ex_de:'Ich stehe um 7 auf und frühstücke.',ex_pt:'Levanto às 7h e tomo café.'},
    {slug:'fc-a1-c05-02',level:'A1',chapter:5,theme:'horas',front:'wie spät ist es? / es ist... Uhr',back:'que horas são? / são... horas',ex_de:'Wie spät ist es? — Es ist drei Uhr.',ex_pt:'Que horas são? — São três horas.'},
    {slug:'fc-a1-c05-03',level:'A1',chapter:5,theme:'horas',front:'halb acht = 7:30 ⚠️',back:'ARMADILHA: halb + PRÓXIMA hora',ex_de:'Der Zug fährt um halb acht ab.',ex_pt:'O trem parte às 7:30.'},
    {slug:'fc-a1-c05-04',level:'A1',chapter:5,theme:'horas',front:'Viertel nach / Viertel vor',back:'quinze depois / quinze para',ex_de:'Viertel nach drei (3:15). Viertel vor fünf (4:45).',ex_pt:'Três e quinze. Cinco menos quinze.'},
    {slug:'fc-a1-c05-05',level:'A1',chapter:5,theme:'gramática',front:'trennbare Verben (separáveis)',back:'prefixo vai ao FINAL em frases simples',ex_de:'Ich stehe auf. Ich rufe an. Ich sehe fern.',ex_pt:'Levanto-me. Ligo. Assisto TV.'},
    // ── Cap 6: Profissões ──
    {slug:'fc-a1-c06-01',level:'A1',chapter:6,theme:'trabalho',front:'der Beruf / Was machen Sie beruflich?',back:'a profissão / O que você faz profissionalmente?',ex_de:'Was ist dein Beruf? — Ich bin Lehrer.',ex_pt:'Qual é sua profissão? — Sou professor.'},
    {slug:'fc-a1-c06-02',level:'A1',chapter:6,theme:'gramática',front:'sein + Beruf (sem artigo!)',back:'Ich bin Lehrer. (NÃO: ein Lehrer)',ex_de:'Er ist Arzt. Sie ist Ingenieurin.',ex_pt:'Ele é médico. Ela é engenheira.'},
    {slug:'fc-a1-c06-03',level:'A1',chapter:6,theme:'gramática',front:'-in Endung → feminino',back:'der Arzt→die Ärztin | der Lehrer→die Lehrerin',ex_de:'Sie ist Ärztin und arbeitet im Krankenhaus.',ex_pt:'Ela é médica e trabalha no hospital.'},
    {slug:'fc-a1-c06-04',level:'A1',chapter:6,theme:'gramática',front:'seit + Dativ (há/desde)',back:'seit drei Jahren = há três anos',ex_de:'Ich arbeite seit drei Jahren hier.',ex_pt:'Trabalho aqui há três anos.'},
    // ── Cap 7: Cidade ──
    {slug:'fc-a1-c07-01',level:'A1',chapter:7,theme:'dia',front:'links / rechts / geradeaus',back:'à esquerda / à direita / em frente',ex_de:'Gehen Sie links, dann geradeaus.',ex_pt:'Vá à esquerda, depois em frente.'},
    {slug:'fc-a1-c07-02',level:'A1',chapter:7,theme:'lugar',front:'neben / zwischen / gegenüber',back:'ao lado / entre / em frente a (+Dativo)',ex_de:'Das Café ist neben der Bank.',ex_pt:'O café fica ao lado do banco.'},
    {slug:'fc-a1-c07-03',level:'A1',chapter:7,theme:'lugar',front:'in der Nähe / weit / zu Fuß',back:'perto / longe / a pé',ex_de:'Der Bahnhof ist in der Nähe.',ex_pt:'A estação fica perto.'},
    {slug:'fc-a1-c07-04',level:'A1',chapter:7,theme:'gramática',front:'Wo? + Dativ | Wohin? + Akkusativ',back:'posição estática = Dat | movimento = Akk',ex_de:'Das Buch liegt auf dem Tisch. Ich lege es auf den Tisch.',ex_pt:'O livro está sobre a mesa. Coloco-o na mesa.'},
    // ── Cap 8: Clima ──
    {slug:'fc-a1-c08-01',level:'A1',chapter:8,theme:'clima',front:'es regnet / es schneit / es ist sonnig',back:'está chovendo / nevando / ensolarado',ex_de:'Es regnet heute. Nimm einen Schirm!',ex_pt:'Está chovendo. Leve um guarda-chuva!'},
    {slug:'fc-a1-c08-02',level:'A1',chapter:8,theme:'clima',front:'die Jahreszeiten: Frühling/Sommer/Herbst/Winter',back:'as estações: primavera/verão/outono/inverno',ex_de:'Im Sommer ist es heiß. Im Winter schneit es.',ex_pt:'No verão está quente. No inverno neva.'},
    {slug:'fc-a1-c08-03',level:'A1',chapter:8,theme:'clima',front:'heiß / warm / kühl / kalt',back:'muito quente / quente / fresco / frio',ex_de:'Im Winter ist es sehr kalt in Berlin.',ex_pt:'No inverno está muito frio em Berlim.'},
    // ── Cap 9: Roupas ──
    {slug:'fc-a1-c09-01',level:'A1',chapter:9,theme:'roupas',front:'die Hose / das Kleid / die Jacke / der Pullover',back:'calça / vestido / jaqueta / suéter',ex_de:'Ich suche eine schwarze Hose.',ex_pt:'Procuro uma calça preta.'},
    {slug:'fc-a1-c09-02',level:'A1',chapter:9,theme:'roupas',front:'anprobieren / passen / tragen',back:'experimentar / servir / usar (hábito)',ex_de:'Ich probiere die Jacke an. Sie passt!',ex_pt:'Experimento a jaqueta. Serve!'},
    {slug:'fc-a1-c09-03',level:'A1',chapter:9,theme:'roupas',front:'die Umkleidekabine / die Größe',back:'o provador / o tamanho',ex_de:'Welche Größe haben Sie? — Größe 38.',ex_pt:'Qual é o seu tamanho? — Tamanho 38.'},
    // ── Cap 10: Datas ──
    {slug:'fc-a1-c10-01',level:'A1',chapter:10,theme:'tempo',front:'am + dia | um + hora | im + mês',back:'preposições de tempo (regra de ouro)',ex_de:'Am Montag um 10 Uhr im Mai.',ex_pt:'Na segunda às 10h em maio.'},
    {slug:'fc-a1-c10-02',level:'A1',chapter:10,theme:'tempo',front:'von... bis... / nächste Woche',back:'de... a... / semana que vem',ex_de:'Von Montag bis Freitag arbeite ich.',ex_pt:'De segunda a sexta eu trabalho.'},
    {slug:'fc-a1-c10-03',level:'A1',chapter:10,theme:'tempo',front:'Montag bis Sonntag',back:'segunda a domingo',ex_de:'Am Samstag habe ich frei.',ex_pt:'No sábado tenho folga.'},
    // ── Cap 11: Casa ──
    {slug:'fc-a1-c11-01',level:'A1',chapter:11,theme:'casa',front:'das Wohnzimmer / Schlafzimmer / Küche / Bad',back:'sala / quarto / cozinha / banheiro',ex_de:'Meine Wohnung hat vier Zimmer.',ex_pt:'Meu apartamento tem quatro cômodos.'},
    {slug:'fc-a1-c11-02',level:'A1',chapter:11,theme:'gramática',front:'es gibt + Akkusativ',back:'há/existe + acusativo',ex_de:'Im Wohnzimmer gibt es ein Sofa.',ex_pt:'Na sala há um sofá.'},
    {slug:'fc-a1-c11-03',level:'A1',chapter:11,theme:'casa',front:'stehen / liegen / hängen',back:'estar em pé / estar deitado / estar pendurado',ex_de:'Das Bild hängt an der Wand.',ex_pt:'O quadro está pendurado na parede.'},
    {slug:'fc-a1-c11-04',level:'A1',chapter:11,theme:'casa',front:'die Miete / warm / kalt (Miete)',back:'o aluguel / com despesas / sem despesas',ex_de:'Ich zahle 700 Euro warm.',ex_pt:'Pago 700 euros com despesas.'},
    // ── Cap 12: Viagens ──
    {slug:'fc-a1-c12-01',level:'A1',chapter:12,theme:'viagem',front:'nach + cidade / mit dem Zug',back:'para + cidade / de trem',ex_de:'Ich fahre mit dem Zug nach Berlin.',ex_pt:'Vou de trem para Berlim.'},
    {slug:'fc-a1-c12-02',level:'A1',chapter:12,theme:'viagem',front:'der Zug / das Flugzeug / der Bus / das Fahrrad',back:'o trem / o avião / o ônibus / a bicicleta',ex_de:'Nimmst du den Zug oder das Flugzeug?',ex_pt:'Você pega trem ou avião?'},
    {slug:'fc-a1-c12-03',level:'A1',chapter:12,theme:'viagem',front:'dauern / etwa / der Bahnhof',back:'durar / cerca de / a estação',ex_de:'Die Fahrt dauert etwa vier Stunden.',ex_pt:'A viagem dura cerca de quatro horas.'},
    // ── Cap 13: Restaurante ──
    {slug:'fc-a1-c13-01',level:'A1',chapter:13,theme:'restaurante',front:'die Speisekarte / bestellen / bezahlen',back:'o cardápio / pedir / pagar',ex_de:'Kann ich bitte die Speisekarte haben?',ex_pt:'Posso ver o cardápio, por favor?'},
    {slug:'fc-a1-c13-02',level:'A1',chapter:13,theme:'restaurante',front:'ich hätte gern... / ich möchte...',back:'eu gostaria de... (pedido educado)',ex_de:'Ich hätte gern das Schnitzel.',ex_pt:'Eu gostaria do Schnitzel.'},
    {slug:'fc-a1-c13-03',level:'A1',chapter:13,theme:'restaurante',front:'die Rechnung / zusammen / getrennt',back:'a conta / junto / separado',ex_de:'Die Rechnung, bitte. Zusammen.',ex_pt:'A conta, por favor. Junto.'},
    {slug:'fc-a1-c13-04',level:'A1',chapter:13,theme:'restaurante',front:'Hat es Ihnen geschmeckt?',back:'Estava bom? (pergunta do garçom)',ex_de:'Hat es Ihnen geschmeckt? — Ja, sehr gut!',ex_pt:'Estava bom? — Sim, muito!'},
    // ── Cap 14: Sentimentos ──
    {slug:'fc-a1-c14-01',level:'A1',chapter:14,theme:'sentimentos',front:'sich fühlen + adj',back:'sentir-se + adj (reflexivo)',ex_de:'Ich fühle mich gut. Wir fühlen uns müde.',ex_pt:'Sinto-me bem. Sentimo-nos cansados.'},
    {slug:'fc-a1-c14-02',level:'A1',chapter:14,theme:'sentimentos',front:'glücklich / traurig / müde / krank / nervös',back:'feliz / triste / cansado / doente / nervoso',ex_de:'Ich bin heute sehr müde und gestresst.',ex_pt:'Hoje estou muito cansado e estressado.'},
    {slug:'fc-a1-c14-03',level:'A1',chapter:14,theme:'sentimentos',front:'weh tun: Mein Kopf tut weh.',back:'doer: Minha cabeça dói.',ex_de:'Was tut dir weh? — Mein Bauch tut weh.',ex_pt:'O que te dói? — Minha barriga dói.'},
    {slug:'fc-a1-c14-04',level:'A1',chapter:14,theme:'sentimentos',front:'Gute Besserung! / Das tut mir leid.',back:'Melhoras! / Sinto muito.',ex_de:'Gute Besserung! Ich hoffe, du wirst bald besser.',ex_pt:'Melhoras! Espero que melhore logo.'},
    // ── Cap 15: Descrever ──
    {slug:'fc-a1-c15-01',level:'A1',chapter:15,theme:'descrição',front:'aussehen (separável): sieht...aus',back:'parecer / ter aparência',ex_de:'Er sieht gut aus. Sie sieht müde aus.',ex_pt:'Ele está bem. Ela parece cansada.'},
    {slug:'fc-a1-c15-02',level:'A1',chapter:15,theme:'descrição',front:'groß / klein / jung / alt / dick / dünn',back:'alto / baixo / jovem / velho / gordo / magro',ex_de:'Er ist groß und jung.',ex_pt:'Ele é alto e jovem.'},
    {slug:'fc-a1-c15-03',level:'A1',chapter:15,theme:'gramática',front:'genauso...wie (comparação de igualdade)',back:'tão...quanto',ex_de:'Er ist genauso groß wie ich.',ex_pt:'Ele é tão alto quanto eu.'},
    // ── Cap 16: Verbos importantes ──
    {slug:'fc-a1-c16-01',level:'A1',chapter:16,theme:'gramática',front:'können / müssen / wollen / dürfen',back:'poder / precisar / querer / poder(permissão)',ex_de:'Ich kann schwimmen. Ich muss lernen.',ex_pt:'Sei nadar. Preciso estudar.'},
    {slug:'fc-a1-c16-02',level:'A1',chapter:16,theme:'gramática',front:'Modal + ... + Infinitiv (FINAL)',back:'modal na posição 2, infinitivo no final',ex_de:'Ich will nach Berlin fahren.',ex_pt:'Quero ir para Berlim.'},
    {slug:'fc-a1-c16-03',level:'A1',chapter:16,theme:'gramática',front:'kennen vs. wissen',back:'conhecer (pessoa/lugar) vs. saber (fato)',ex_de:'Kennst du Berlin? Ich weiß, dass er kommt.',ex_pt:'Conhece Berlim? Sei que ele vem.'},
    {slug:'fc-a1-c16-04',level:'A1',chapter:16,theme:'gramática',front:'essen→isst / sprechen→spricht / lesen→liest',back:'irregulares e→i (2ª e 3ª pessoa sg)',ex_de:'Er isst Schnitzel. Sie spricht gut Deutsch.',ex_pt:'Ele come Schnitzel. Ela fala bem alemão.'},
    // ── Cap 17: Dativo ──
    {slug:'fc-a1-c17-01',level:'A1',chapter:17,theme:'gramática',front:'mir / dir / ihm / ihr / uns / euch / ihnen',back:'pronomes dativos: a mim/você/ele/ela/nós/vocês/eles',ex_de:'Das gehört mir. Ich helfe dir.',ex_pt:'Isso é meu. Ajudo você.'},
    {slug:'fc-a1-c17-02',level:'A1',chapter:17,theme:'gramática',front:'mit / zu / von / bei + Dativ',back:'preposições fixas com dativo',ex_de:'Ich gehe mit dir zum Markt.',ex_pt:'Vou com você ao mercado.'},
    {slug:'fc-a1-c17-03',level:'A1',chapter:17,theme:'gramática',front:'zu+dem=zum / zu+der=zur / bei+dem=beim',back:'contrações obrigatórias do dativo',ex_de:'Ich gehe zum Arzt. Er ist beim Bäcker.',ex_pt:'Vou ao médico. Ele está na padaria.'},
    {slug:'fc-a1-c17-04',level:'A1',chapter:17,theme:'gramática',front:'helfen/gefallen/gehören/danken + Dativ',back:'verbos que regem dativo',ex_de:'Das gefällt mir. Das Buch gehört ihr.',ex_pt:'Isso me agrada. O livro pertence a ela.'},
    // ── Cap 18: Perguntas ──
    {slug:'fc-a1-c18-01',level:'A1',chapter:18,theme:'gramática',front:'wer/was/wo/wann/warum/wie/woher/wohin',back:'quem/o quê/onde/quando/por quê/como/de onde/para onde',ex_de:'Wo wohnst du? Warum lernst du Deutsch?',ex_pt:'Onde você mora? Por que aprende alemão?'},
    {slug:'fc-a1-c18-02',level:'A1',chapter:18,theme:'gramática',front:'wie viel / wie viele / welcher-e-es',back:'quanto / quantos / qual',ex_de:'Wie viel kostet das? Welches Buch liest du?',ex_pt:'Quanto custa? Qual livro você lê?'},
    {slug:'fc-a1-c18-03',level:'A1',chapter:18,theme:'gramática',front:'weil + verbo no FINAL',back:'porque + verbo conjugado ao final',ex_de:'Ich lerne, weil es wichtig ist.',ex_pt:'Aprendo porque é importante.'},
    // ── Cap 19: Diálogo ──
    {slug:'fc-a1-c19-01',level:'A1',chapter:19,theme:'gramática',front:'und/aber/oder (posição 0) vs. weil/dass/wenn (final)',back:'coordenativos vs. subordinativos',ex_de:'Ich bin müde, aber ich gehe aus.',ex_pt:'Estou cansado, mas saio.'},
    {slug:'fc-a1-c19-02',level:'A1',chapter:19,theme:'gramática',front:'sich treffen / sich vorstellen',back:'se encontrar / se apresentar (reflexivos)',ex_de:'Treffen wir uns um 19 Uhr!',ex_pt:'Nos encontramos às 19h!'},
    {slug:'fc-a1-c19-03',level:'A1',chapter:19,theme:'dia',front:'frei / einverstanden / gleich um die Ecke',back:'livre / combinado / logo na esquina',ex_de:'Ist dieser Platz frei? — Ja, einverstanden!',ex_pt:'Este lugar está livre? — Sim, combinado!'},
    // ── Cap 20: Revisão ──
    {slug:'fc-a1-c20-01',level:'A1',chapter:20,theme:'gramática',front:'Verbo SEMPRE na posição 2',back:'regra de ouro da sintaxe alemã',ex_de:'Ich gehe heute ins Kino. Heute gehe ich ins Kino.',ex_pt:'Hoje vou ao cinema. (verbo sempre em 2ª posição)'},
    {slug:'fc-a1-c20-02',level:'A1',chapter:20,theme:'gramática',front:'4 pilares A1: Präsens/Akkusativ/Dativ/Satzstellung',back:'presento/acusativo/dativo/ordem das palavras',ex_de:'Ich kaufe den Apfel. Ich gehe mit dir.',ex_pt:'Compro a maçã. Vou com você.'},
    {slug:'fc-a1-c20-03',level:'A1',chapter:20,theme:'dia',front:'Übung macht den Meister! / Viel Erfolg!',back:'A prática leva à perfeição! / Muito sucesso!',ex_de:'Weiter so! Du schaffst das!',ex_pt:'Continue assim! Você consegue!'},
    // ── Prova Final ──
    {slug:'fc-a1-exam-01',level:'A1',chapter:99,theme:'exame',front:'die Prüfung / bestehen / bestanden!',back:'a prova / passar / aprovado!',ex_de:'Ich bestehe die A1-Prüfung!',ex_pt:'Passo na prova A1!'},
    {slug:'fc-a1-exam-02',level:'A1',chapter:99,theme:'exame',front:'Hören / Lesen / Schreiben / Sprechen / Grammatik',back:'as 5 partes da prova A1',ex_de:'Teil 1 ist Hören. Teil 5 ist Grammatik.',ex_pt:'Parte 1 é Audição. Parte 5 é Gramática.'},
    {slug:'fc-a1-exam-03',level:'A1',chapter:99,theme:'exame',front:'Keine Angst! Du schaffst das!',back:'Sem medo! Você consegue!',ex_de:'Keine Angst vor Fehlern! Weiter so!',ex_pt:'Sem medo de errar! Continue assim!'},
    ];

    A1_FLASHCARDS.push(
        // ── Cap 21: Perfekt haben ──
        {slug:'fc-a2-c21-01',level:'A2',chapter:21,theme:'gramática',front:'Perfekt mit haben',back:'haben (pos.2) + ... + Partizip II (final)',ex_de:'Ich habe Pasta gekocht.',ex_pt:'Cozinhei macarrão.'},
        {slug:'fc-a2-c21-02',level:'A2',chapter:21,theme:'gramática',front:'Partizip II regular: ge-+raiz+-t',back:'machen→gemacht | kaufen→gekauft | spielen→gespielt',ex_de:'Ich habe Musik gehört.',ex_pt:'Ouvi música.'},
        {slug:'fc-a2-c21-03',level:'A2',chapter:21,theme:'gramática',front:'Partizip II irregular: ge-+raiz(muda)+-en',back:'lesen→gelesen | schreiben→geschrieben | sehen→gesehen',ex_de:'Er hat ein Buch gelesen.',ex_pt:'Ele leu um livro.'},
        {slug:'fc-a2-c21-04',level:'A2',chapter:21,theme:'gramática',front:'Partizip II inseparáveis: sem ge-',back:'besuchen→besucht | verstehen→verstanden | erzählen→erzählt',ex_de:'Sie hat ihre Oma besucht.',ex_pt:'Ela visitou a avó.'},
        {slug:'fc-a2-c21-05',level:'A2',chapter:21,theme:'gramática',front:'Partizip II verbos -ieren: sem ge-',back:'telefonieren→telefoniert | studieren→studiert',ex_de:'Ich habe telefoniert.',ex_pt:'Telefonei.'},
        {slug:'fc-a2-c21-06',level:'A2',chapter:21,theme:'gramática',front:'Partizip II separáveis: pref+ge-+raiz',back:'aufräumen→aufgeräumt | fernsehen→ferngesehen | anrufen→angerufen',ex_de:'Ich habe aufgeräumt.',ex_pt:'Arrumei.'},
        // ── Cap 22: Perfekt sein ──
        {slug:'fc-a2-c22-01',level:'A2',chapter:22,theme:'gramática',front:'Perfekt mit sein — movimento',back:'gehen→gegangen | fahren→gefahren | fliegen→geflogen | steigen→gestiegen',ex_de:'Ich bin nach Berlin gefahren.',ex_pt:'Fui a Berlim.'},
        {slug:'fc-a2-c22-02',level:'A2',chapter:22,theme:'gramática',front:'Perfekt mit sein — mudança de estado + bleiben',back:'werden→geworden | einschlafen→eingeschlafen | aufstehen→aufgestanden | bleiben→geblieben',ex_de:'Sie ist zu Hause geblieben.',ex_pt:'Ela ficou em casa.'},
        // ── Cap 23: Saúde ──
        {slug:'fc-a2-c23-01',level:'A2',chapter:23,theme:'saúde',front:'können/müssen/sollen — diferença',back:'können=poder | müssen=precisar | sollen=dever(conselho médico)',ex_de:'Du sollst viel Wasser trinken.',ex_pt:'Você deve beber muita água.'},
        {slug:'fc-a2-c23-02',level:'A2',chapter:23,theme:'saúde',front:'die Kopfschmerzen / Halsschmerzen (pl!)',back:'dor de cabeça / dor de garganta — sempre plural',ex_de:'Ich habe starke Kopfschmerzen.',ex_pt:'Estou com forte dor de cabeça.'},
        {slug:'fc-a2-c23-03',level:'A2',chapter:23,theme:'saúde',front:'nicht müssen ≠ dürfen nicht ⚠️',back:'não precisa ≠ não pode/é proibido',ex_de:'Du musst nicht kommen. Du darfst nicht rauchen.',ex_pt:'Não precisa vir. Não pode fumar.'},
        // ── Cap 24: Moradia ──
        {slug:'fc-a2-c24-01',level:'A2',chapter:24,theme:'gramática',front:'Wo? + Dativ: vor/hinter/neben/auf/in/an/unter/zwischen',back:'Posição estática = dativo sempre',ex_de:'Das Sofa steht vor dem Fenster.',ex_pt:'O sofá está em frente à janela.'},
        {slug:'fc-a2-c24-02',level:'A2',chapter:24,theme:'gramática',front:'stehen / liegen / hängen',back:'estar em pé / estar deitado / estar pendurado',ex_de:'Das Bild hängt an der Wand.',ex_pt:'O quadro está na parede.'},
        // ── Cap 25: Adjetivos ──
        {slug:'fc-a2-c25-01',level:'A2',chapter:25,theme:'gramática',front:'Adj + def art (Nom sing): -e',back:'der nette Mann | die nette Frau | das nette Kind',ex_de:'Der alte Mann ist freundlich.',ex_pt:'O homem velho é simpático.'},
        {slug:'fc-a2-c25-02',level:'A2',chapter:25,theme:'gramática',front:'Adj + indef art (Nom sing): -er/-e/-es',back:'ein netter Mann | eine nette Frau | ein nettes Kind',ex_de:'Das ist ein modernes Fahrrad.',ex_pt:'Isso é uma bicicleta moderna.'},
        // ── Cap 26: Reflexivos ──
        {slug:'fc-a2-c26-01',level:'A2',chapter:26,theme:'gramática',front:'Reflexivos akk: mich/dich/sich/uns/euch/sich',back:'Ich wasche mich. Er freut sich.',ex_de:'Ich informiere mich über die Nachrichten.',ex_pt:'Me informo sobre as notícias.'},
        {slug:'fc-a2-c26-02',level:'A2',chapter:26,theme:'gramática',front:'sich ärgern über / sich freuen auf / sich interessieren für',back:'irritar-se com / estar animado para / interessar-se por',ex_de:'Er interessiert sich für Technologie.',ex_pt:'Ele se interessa por tecnologia.'},
        // ── Cap 27: Konjunktiv II ──
        {slug:'fc-a2-c27-01',level:'A2',chapter:27,theme:'gramática',front:'Konjunktiv II: hätte/wäre/würde/könnte/sollte',back:'haben→hätte | sein→wäre | werden→würde | können→könnte',ex_de:'Das wäre sehr nett. Könnten Sie helfen?',ex_pt:'Isso seria gentil. Poderia ajudar?'},
        // ── Cap 28: Präteritum ──
        {slug:'fc-a2-c28-01',level:'A2',chapter:28,theme:'gramática',front:'Präteritum sein/haben — na fala cotidiana',back:'SEMPRE Präteritum: war/hatte (não Perfekt!)',ex_de:'Wo warst du? Ich hatte keine Zeit.',ex_pt:'Onde você estava? Não tinha tempo.'},
        {slug:'fc-a2-c28-02',level:'A2',chapter:28,theme:'gramática',front:'Präteritum irregular mais usados',back:'ging | kam | fuhr | sah | sprach | schrieb | las | trank | aß',ex_de:'Er kam gestern an.',ex_pt:'Ele chegou ontem.'},
        // ── Cap 29: Dois objetos ──
        {slug:'fc-a2-c29-01',level:'A2',chapter:29,theme:'gramática',front:'Dois objetos: Dat(pessoa) + Akk(coisa)',back:'Ich schenke MEINER MUTTER (Dat) EIN BUCH (Akk).',ex_de:'Zeigst du mir das Foto?',ex_pt:'Você me mostra a foto?'},
        {slug:'fc-a2-c29-02',level:'A2',chapter:29,theme:'gramática',front:'Dois pronomes: Akk antes Dat',back:'Ich gebe ES (Akk) IHM (Dat).',ex_de:'Kannst du es ihr geben?',ex_pt:'Pode dar isso a ela?'},
        // ── Cap 30: Formal ──
        {slug:'fc-a2-c30-01',level:'A2',chapter:30,theme:'formal',front:'Imperativo formal: Verbo + Sie',back:'Füllen Sie aus! | Unterschreiben Sie! | Bestätigen Sie!',ex_de:'Nehmen Sie bitte Platz.',ex_pt:'Por favor sente-se.'},
        // ── Cap 31: Verbos dativo ──
        {slug:'fc-a2-c31-01',level:'A2',chapter:31,theme:'gramática',front:'gefallen/gehören/fehlen/schmecken/passen/stehen + Dativ',back:'agradar/pertencer/faltar/ser gostoso/servir/ficar bem',ex_de:'Das Kleid steht dir gut!',ex_pt:'O vestido fica bem em você!'},
        // ── Cap 32: Genitivo ──
        {slug:'fc-a2-c32-01',level:'A2',chapter:32,theme:'gramática',front:'Genitivo: des+(e)s (masc/neut) | der (fem/pl)',back:'das Auto des Mannes | die Tasche der Frau',ex_de:'Das ist das Buch meines Vaters.',ex_pt:'É o livro do meu pai.'},
        // ── Cap 33-34: Subordinadas ──
        {slug:'fc-a2-c33-01',level:'A2',chapter:33,theme:'gramática',front:'weil/dass/wenn/ob + verbo no FINAL',back:'Todas as subordinadas: verbo conjugado ao final.',ex_de:'Ich weiß, dass er kommt, weil er Zeit hat.',ex_pt:'Sei que ele vem porque tem tempo.'},
        {slug:'fc-a2-c34-01',level:'A2',chapter:34,theme:'gramática',front:'wenn vs. ob',back:'wenn = se/quando (condição) | ob = se (dúvida/whether)',ex_de:'Wenn ich Zeit habe. Ich weiß nicht, ob er kommt.',ex_pt:'Se eu tiver tempo. Não sei se ele vem.'},
        // ── Cap 35: Präteritum irregular ──
        {slug:'fc-a2-c35-01',level:'A2',chapter:35,theme:'gramática',front:'Es war einmal... (Märchen)',back:'Präteritum de sein. Início de contos de fadas.',ex_de:'Es war einmal ein König...',ex_pt:'Era uma vez um rei...'},
        // ── Cap 36: man ──
        {slug:'fc-a2-c36-01',level:'A2',chapter:36,theme:'gramática',front:'man + 3ª pessoa singular',back:'Man lernt. Man kann. Man sollte. Man sagt.',ex_de:'Wie sagt man das auf Deutsch?',ex_pt:'Como se diz isso em alemão?'},
        // ── Cap 37: Sintomas ──
        {slug:'fc-a2-c37-01',level:'A2',chapter:37,theme:'saúde',front:'seit + Dativ para duração de sintomas',back:'Seit drei Tagen / seit Montag / seit einer Woche',ex_de:'Seit drei Tagen habe ich Fieber.',ex_pt:'Tenho febre há três dias.'},
        // ── Cap 38: Futuro ──
        {slug:'fc-a2-c38-01',level:'A2',chapter:38,theme:'gramática',front:'Futur I: werden (pos.2) + Infinitiv (final)',back:'ich werde / du wirst / er wird / wir werden',ex_de:'Ich werde mein Bestes geben!',ex_pt:'Vou dar o meu melhor!'},
        // ── Cap 39: Finalidade ──
        {slug:'fc-a2-c39-01',level:'A2',chapter:39,theme:'gramática',front:'um...zu (mesmo sujeito) vs. damit (sujeitos dif.)',back:'Ich lerne, um besser zu werden. | Ich helfe, damit du lernst.',ex_de:'Sie macht Sport, um fit zu bleiben.',ex_pt:'Ela faz esporte para ficar em forma.'},
        // ── Prova Final ──
        {slug:'fc-a2-exam-01',level:'A2',chapter:99,theme:'exame',front:'haben ou sein no Perfekt?',back:'Para onde? → sein | O quê? → haben',ex_de:'Ich bin gefahren. Ich habe gegessen.',ex_pt:'Fui. Eu comi.'},
        {slug:'fc-a2-exam-02',level:'A2',chapter:99,theme:'exame',front:'weil/dass/wenn/ob/damit/um...zu',back:'Todas as subordinadas: verbo no FINAL.',ex_de:'Ich lerne, weil es wichtig ist, um besser zu werden.',ex_pt:'Aprendo porque é importante, para melhorar.'}
      );
      
// ─────────────────────────────────────────────────
// EXPORT GLOBAL
// ─────────────────────────────────────────────────

export { A1_FLASHCARDS };
