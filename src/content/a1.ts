// @ts-nocheck
// ─────────────────────────────────────────────────
// MÓDULOS A1
// ─────────────────────────────────────────────────
const A1_MODULES = [
    { slug:'a1-cap1',  n:1,  pt:'Saudações, Alfabeto e Primeiros Verbos',    de:'Hallo! — Begrüßungen',        done:false },
    { slug:'a1-cap2',  n:2,  pt:'Família, Números e Pronomes',               de:'Familie und Zahlen',           done:false },
    { slug:'a1-cap3',  n:3,  pt:'Hobbies, Cores e Verbos Regulares',         de:'Hobbys und Farben',            done:false },
    { slug:'a1-cap4',  n:4,  pt:'No Supermercado — Acusativo e Comida',      de:'Im Supermarkt — Akkusativ',    done:false },
    { slug:'a1-cap5',  n:5,  pt:'Meu Dia — Rotina e Verbos Separáveis',      de:'Mein Tag — Tagesroutine',      done:false },
    { slug:'a1-cap6',  n:6,  pt:'Trabalho e Profissões',                     de:'Arbeit und Berufe',            done:false },
    { slug:'a1-cap7',  n:7,  pt:'Na Cidade — Localização e Preposições',     de:'In der Stadt — Ort',           done:false },
    { slug:'a1-cap8',  n:8,  pt:'Clima e Lazer',                             de:'Wetter und Freizeit',          done:false },
    { slug:'a1-cap9',  n:9,  pt:'Roupas e Compras',                          de:'Kleidung und Einkaufen',       done:false },
    { slug:'a1-cap10', n:10, pt:'Datas e Compromissos',                      de:'Termine und Daten',            done:false },
    { slug:'a1-cap11', n:11, pt:'Minha Casa — Descrever Ambientes',          de:'Zuhause — Wohnung',            done:false },
    { slug:'a1-cap12', n:12, pt:'Viagens — Transportes e Destinos',          de:'Reisen — Verkehrsmittel',      done:false },
    { slug:'a1-cap13', n:13, pt:'No Restaurante — Pedir Comida',             de:'Im Restaurant — Bestellen',    done:false },
    { slug:'a1-cap14', n:14, pt:'Sentimentos e Estados',                     de:'Gefühle und Zustände',         done:false },
    { slug:'a1-cap15', n:15, pt:'Descrever — Adjetivos',                     de:'Beschreiben — Adjektive',      done:false },
    { slug:'a1-cap16', n:16, pt:'Verbos Importantes — Comunicação',          de:'Wichtige Verben',              done:false },
    { slug:'a1-cap17', n:17, pt:'Dativo no Dia a Dia',                       de:'Dativ im Alltag',              done:false },
    { slug:'a1-cap18', n:18, pt:'Fazer Perguntas',                           de:'Fragen stellen',               done:false },
    { slug:'a1-cap19', n:19, pt:'Meu Primeiro Diálogo Completo',             de:'Mein erstes Gespräch',         done:false },
    { slug:'a1-cap20', n:20, pt:'Revisão Final A1',                          de:'A1 Abschluss — Wiederholung',  done:false },
    { slug:'a1-exam',  n:99, pt:'Prova Final A1',                            de:'A1 Abschlussprüfung',          done:false, isExam:true },
  ];
  
  // ─────────────────────────────────────────────────
  // LESSONS  
  // ─────────────────────────────────────────────────
  const A1_LESSONS = {
  'a1-cap1':[
    { slug:'a1-l1-1', sort:1, title_pt:'Diálogo: Anna e Ben se conhecem', title_de:'Dialog: Anna und Ben',
      rule:'Use blocos prontos: Ich heiße + nome | Ich komme aus + lugar | Ich spreche + língua',
      content:`DIÁLOGO EM ALEMÃO:
  Anna: Hallo! Guten Morgen!
  Ben: Guten Morgen! Wie heißt du?
  Anna: Ich heiße Anna. Und du?
  Ben: Ich bin Ben. Freut mich, Anna!
  Anna: Freut mich auch! Woher kommst du, Ben?
  Ben: Ich komme aus Berlin. Und du?
  Anna: Ich komme aus München. Sprichst du Deutsch?
  Ben: Ja, ein bisschen. Wie geht es dir?
  Anna: Mir geht es gut, danke! Und dir?
  Ben: Danke, gut! Möchtest du Kaffee trinken?
  Anna: Ja, gerne! Dann gehen wir ins Café.
  
  TRADUÇÃO:
  Anna: Olá! Bom dia!
  Ben: Bom dia! Como você se chama?
  Anna: Eu me chamo Anna. E você?
  Ben: Eu sou Ben. Prazer, Anna!
  Anna: Prazer também! De onde você é, Ben?
  Ben: Sou de Berlim. E você?
  Anna: Sou de Munique. Você fala alemão?
  Ben: Sim, um pouco. Como vai você?
  Anna: Vou bem, obrigada! E você?
  Ben: Obrigado, bem! Quer tomar um café?
  Anna: Sim, com prazer! Então vamos ao café.`,
      notes:['Formal = Sie + cumprimento completo. Informal = du + versão curta.','Guten Tag serve manhã e tarde.','Moin Moin = cumprimento do norte, qualquer hora.'],
      vocab:[{de:'hallo',pt:'olá'},{de:'guten Morgen',pt:'bom dia'},{de:'guten Tag',pt:'boa tarde'},{de:'guten Abend',pt:'boa noite'},{de:'auf Wiedersehen',pt:'adeus (formal)'},{de:'tschüss',pt:'tchau (informal)'},{de:'wie heißt du?',pt:'como você se chama?'},{de:'ich heiße...',pt:'eu me chamo...'},{de:'freut mich',pt:'prazer'},{de:'woher?',pt:'de onde?'},{de:'ich komme aus...',pt:'eu venho de...'},{de:'wie geht es dir?',pt:'como vai você?'},{de:'danke, gut',pt:'obrigado, bem'},{de:'ein bisschen',pt:'um pouco'},{de:'gerne',pt:'com prazer'}],
      examples:[{de:'Ich heiße Anna. Und du?',pt:'Eu me chamo Anna. E você?'},{de:'Ich komme aus Berlin.',pt:'Eu sou de Berlim.'},{de:'Ich spreche Deutsch.',pt:'Eu falo alemão.'}]
    },
    { slug:'a1-l1-2', sort:2, title_pt:'Verbos sein e heißen + Pronomes', title_de:'sein & heißen + Personalpronomen',
      rule:'Terminações regulares: ich -e | du -st | er/sie/es -t | wir -en | ihr -t | sie/Sie -en',
      content:`SEIN (ser/estar): ich bin | du bist | er/sie/es ist | wir sind | ihr seid | sie/Sie sind
  HEIßEN (chamar-se): ich heiße | du heißt | er/sie/es heißt | wir heißen | ihr heißt | sie/Sie heißen
  PRONOMES: ich=eu | du=você (inf) | er/sie/es=ele/ela/isso | wir=nós | ihr=vocês | sie=eles | Sie=o senhor/a senhora
  DICA: Na Alemanha, use Sie com desconhecidos e em situações formais. Du com amigos e família.`,
      notes:['SEIN é totalmente irregular — decorar!','Sie (formal) sempre com maiúscula','Ich bin (estado/identidade) vs. Ich heiße (nome)'],
      vocab:[],
      examples:[{de:'Ich bin Anna.',pt:'Eu sou Anna.'},{de:'Wie heißt du?',pt:'Como você se chama?'},{de:'Sie heißt Petra.',pt:'Ela se chama Petra.'},{de:'Wir sind Studenten.',pt:'Somos estudantes.'}]
    },
    { slug:'a1-l1-3', sort:3, title_pt:'Cultura: Saudações & Etiqueta Social', title_de:'Kultur: Begrüßungen & Etikette',
      rule:'Formal: Guten Tag! / Auf Wiedersehen! — Informal: Hallo! / Tschüss!',
      content:`SAUDAÇÕES REGIONAIS:
  • Grüß Gott! — Baviera e Áustria (qualquer hora)
  • Moin Moin! — Norte da Alemanha (qualquer hora)
  • Servus! — Baviera informal
  
  ETIQUETA:
  • Aperto de mão firme + contato visual ao se apresentar
  • Títulos importam: Herr Dr. Schmidt, Frau Professorin Meyer
  • Pontualidade: chegar 5 min antes é o ideal
  • Du ou Sie: na dúvida, comece com Sie. Aguarde a oferta do Du.
  
  CURIOSIDADE: A Alemanha tem mais de 3.000 tipos de pão registrados!`,
      notes:['Guten Tag em lojas e repartições, sempre','Alemães são famosos pela pontualidade — chegar atrasado é falta de respeito'],
      vocab:[{de:'Grüß Gott!',pt:'Saudação típica da Baviera'},{de:'Moin Moin!',pt:'Saudação do norte'},{de:'Pünktlichkeit',pt:'pontualidade'}],
      examples:[]
    }
  ],
  'a1-cap2':[
    { slug:'a1-l2-1', sort:1, title_pt:'Diálogo: Lisa apresenta sua família', title_de:'Dialog: Familie vorstellen',
      rule:'Possessivo segue o artigo indefinido: mein (masc/neutro), meine (fem/plural)',
      content:`DIÁLOGO:
  Lisa: Hallo! Ich bin Lisa. Ich bin 22 Jahre alt.
  Tom: Hi Lisa! Ich bin Tom. Wie geht es dir?
  Lisa: Danke, gut! Das ist meine Familie.
  Tom: Wer ist das?
  Lisa: Das ist meine Mutter Petra. Sie ist 50.
  Tom: Und wer ist der Mann?
  Lisa: Das ist mein Vater Michael. Er ist 52.
  Tom: Hast du Geschwister?
  Lisa: Ja, einen Bruder und eine Schwester.
  Tom: Wie viele Personen sind in deiner Familie?
  Lisa: Wir sind sechs: Mutter, Vater, Lukas, Emma, Max und ich.
  
  TRADUÇÃO:
  Lisa: Olá! Sou Lisa. Tenho 22 anos.
  Tom: Oi Lisa! Sou Tom. Como vai você?
  Lisa: Obrigada, bem! Esta é minha família.
  Tom: Quem é este?
  Lisa: Esta é minha mãe Petra. Ela tem 50.
  Tom: E quem é o homem?
  Lisa: Este é meu pai Michael. Ele tem 52.
  Tom: Você tem irmãos?
  Lisa: Sim, um irmão e uma irmã.
  Tom: Quantas pessoas há na sua família?
  Lisa: Somos seis: mãe, pai, Lukas, Emma, Max e eu.`,
      notes:['Eltern e Geschwister são sempre plurais','Idade em alemão: Ich bin 22 Jahre alt (não: Ich habe 22 Jahre)','Freundin pode ser amiga OU namorada — contexto define'],
      vocab:[{de:'die Familie',pt:'a família'},{de:'die Mutter',pt:'a mãe'},{de:'der Vater',pt:'o pai'},{de:'der Bruder',pt:'o irmão'},{de:'die Schwester',pt:'a irmã'},{de:'die Eltern',pt:'os pais'},{de:'die Geschwister',pt:'os irmãos'},{de:'das Kind',pt:'a criança/filho'},{de:'der Opa/die Oma',pt:'o avô/a avó'},{de:'ich habe',pt:'eu tenho'},{de:'mein/meine',pt:'meu/minha'}],
      examples:[{de:'Das ist meine Mutter.',pt:'Esta é a minha mãe.'},{de:'Ich habe einen Bruder.',pt:'Tenho um irmão.'},{de:'Meine Eltern wohnen in Frankfurt.',pt:'Meus pais moram em Frankfurt.'}]
    },
    { slug:'a1-l2-2', sort:2, title_pt:'Números 1-100 e Possessivos', title_de:'Zahlen 1-100 & Possessivartikel',
      rule:'Possessivo: Masculino e neutro sem -e (mein/dein). Feminino e plural com -e (meine/deine)',
      content:`NÚMEROS 1-20: 0=null | 1=eins | 2=zwei | 3=drei | 4=vier | 5=fünf | 6=sechs | 7=sieben | 8=acht | 9=neun | 10=zehn
  11=elf | 12=zwölf | 13=dreizehn | 14=vierzehn | 15=fünfzehn
  16=sechzehn (sem s!) | 17=siebzehn (sem en!) | 18=achtzehn | 19=neunzehn | 20=zwanzig
  
  NÚMEROS 21-100: 21=einundzwanzig | 30=dreißig (ß!) | 40=vierzig | 50=fünfzig | 60=sechzig | 70=siebzig | 80=achtzig | 90=neunzig | 100=hundert
  Regra 21-99: unidade + UND + dezena. Ex: 34 = vierunddreißig
  
  POSSESSIVOS:
  ich → mein/meine | du → dein/deine | er/es → sein | sie → ihr | wir → unser | ihr → euer | sie/Sie → ihr/Ihr`,
      notes:['ß é apenas após vogal longa ou ditongo: dreißig, heißen','Atenção: sechzehn (16) = sem o "s" de sechs; siebzehn (17) = sem o "en" de sieben'],
      vocab:[],
      examples:[{de:'Ich bin dreiundzwanzig Jahre alt.',pt:'Tenho vinte e três anos.'},{de:'Das kostet sechzehn Euro.',pt:'Custa dezesseis euros.'},{de:'Dein Vater ist nett.',pt:'Seu pai é legal.'}]
    },
    { slug:'a1-l2-3', sort:3, title_pt:'Cultura: Família & Números na Alemanha', title_de:'Kultur: Familie & Zahlen',
      rule:'Geburtstag: Comemorar no dia exato. Parabéns antes da data é considerado azar!',
      content:`FAMÍLIA ALEMÃ:
  • Média de 1-2 filhos por família
  • Nomes compostos comuns: Anna-Lena, Hans-Peter
  • Familiennamen (sobrenomes) patrilineares como padrão
  
  NÚMEROS NO COTIDIANO:
  • Telefone ditado em pares: null-acht-neun, vier-fünf...
  • CEP tem 5 dígitos: 80331 (Munique), 10115 (Berlim)
  • Vírgula para decimais: 2,5 km (não ponto!)
  • Ponto para milhar: 1.000 Euro
  
  ANIVERSÁRIOS:
  • Celebrados no dia exato
  • Parabéns antes = muito azar (Pech!)
  • "Alles Gute zum Geburtstag!" = frase padrão`,
      notes:['Alemães não comemoram aniversário antecipado — é tabu!','Sistema de CEP: 5 dígitos, enviado antes da cidade no endereço'],
      vocab:[{de:'Alles Gute zum Geburtstag!',pt:'Parabéns!'},{de:'wie alt bist du?',pt:'quantos anos você tem?'},{de:'ich bin 22 Jahre alt.',pt:'tenho 22 anos.'}],
      examples:[]
    }
  ],
  'a1-cap3':[
    { slug:'a1-l3-1', sort:1, title_pt:'Diálogo: Sophie e Jan — Hobbies', title_de:'Dialog: Hobbys und Freizeit',
      rule:'gern após o verbo = gostar de. Ich höre gern Musik = Gosto de ouvir música.',
      content:`DIÁLOGO:
  Sophie: Hallo Jan! Was machst du gern in deiner Freizeit?
  Jan: Ich spiele gern Fußball. Und du?
  Sophie: Ich lese gern Bücher. Welche Farbe hat dein Buch?
  Jan: Mein Buch ist blau. Ich mag blaue Farben.
  Sophie: Ich mag rot und grün. Spielst du ein Instrument?
  Jan: Ja, ich spiele Klavier. Und du?
  Sophie: Ich spiele Gitarre. Was machst du am Wochenende?
  Jan: Am Samstag spiele ich Fußball. Am Sonntag schwimme ich.
  Sophie: Ich koche am Wochenende gern. Kann ich mal essen kommen?
  Jan: Ja, natürlich! Ruf mich an!
  
  TRADUÇÃO:
  Sophie: Oi Jan! O que você gosta de fazer no tempo livre?
  Jan: Gosto de jogar futebol. E você?
  Sophie: Gosto de ler livros. Qual cor é seu livro?
  Jan: Meu livro é azul. Gosto de cores azuis.
  Sophie: Gosto de vermelho e verde. Toca instrumento?
  Jan: Sim, toco piano. E você?
  Sophie: Toco violão. O que você faz no fim de semana?
  Jan: Sábado jogo futebol. Domingo nado.
  Sophie: Cozinho no fim de semana. Posso vir comer?
  Jan: Sim, claro! Me liga!`,
      notes:['gern = com prazer / gostar de. Posição: após verbo conjugado. Ex: Ich spiele GERN Fußball.','Cores: rot=vermelho, blau=azul, grün=verde, gelb=amarelo, schwarz=preto, weiß=branco, grau=cinza','hell = claro, dunkel = escuro: hellblau = azul claro, dunkelrot = vermelho escuro'],
      vocab:[{de:'das Hobby',pt:'o hobby'},{de:'die Freizeit',pt:'o tempo livre'},{de:'spielen',pt:'jogar/tocar'},{de:'lesen',pt:'ler'},{de:'hören',pt:'ouvir'},{de:'kochen',pt:'cozinhar'},{de:'schwimmen',pt:'nadar'},{de:'rot/blau/grün/gelb',pt:'vermelho/azul/verde/amarelo'},{de:'schwarz/weiß/grau',pt:'preto/branco/cinza'},{de:'das Wochenende',pt:'o fim de semana'}],
      examples:[{de:'Ich höre gern Musik.',pt:'Gosto de ouvir música.'},{de:'Am Wochenende gehe ich ins Kino.',pt:'No fim de semana vou ao cinema.'},{de:'Meine Lieblingsfarbe ist Blau.',pt:'Minha cor favorita é azul.'}]
    },
    { slug:'a1-l3-2', sort:2, title_pt:'Verbos Regulares no Presente', title_de:'Regelmäßige Verben im Präsens',
      rule:'Terminações: ich -e | du -st | er/sie/es -t | wir -en | ihr -t | sie/Sie -en',
      content:`CONJUGAÇÃO (ex: machen):
  ich mache | du machst | er/sie/es macht | wir machen | ihr macht | sie/Sie machen
  
  VERBOS COM MUDANÇA DE VOGAL (e→i ou a→ä na 2ª/3ª pessoa):
  lesen: du liest, er liest
  fahren: du fährst, er fährt
  schlafen: du schläfst, er schläft
  essen: du isst, er isst
  sprechen: du sprichst, er spricht
  
  USO DE GERN:
  Ich + verbo + gern = Gosto de fazer X
  Ex: Ich spiele gern Fußball. / Wir kochen gern.
  Em perguntas: Was machst du gern?`,
      notes:['gern vem DEPOIS do verbo conjugado','Mudança de vogal só na 2ª e 3ª pessoa do singular','ich e wir/sie/Sie sempre têm as formas regulares'],
      vocab:[],
      examples:[{de:'Du spielst gut Fußball.',pt:'Você joga bem futebol.'},{de:'Er liest ein Buch.',pt:'Ele lê um livro.'},{de:'Wir hören Musik.',pt:'Nós ouvimos música.'}]
    },
    { slug:'a1-l3-3', sort:3, title_pt:'Cultura: Lazer & Gostos na Alemanha', title_de:'Kultur: Freizeit & Interessen',
      rule:'Sonntagsruhe: Aos domingos lojas fecham e barulho é evitado. É dia de família e Kaffee und Kuchen.',
      content:`VEREIN-KULTUR:
  • Mais de 600.000 Vereine (clubes) na Alemanha
  • Futebol, canto, xadrez, jardinagem, tiro, carnaval...
  • Participação no clube = identidade local forte
  
  LAZER FAVORITO:
  • Wandern (caminhadas): trilhas por todo o país
  • Fahrrad fahren: ciclovias em todas as cidades
  • Kaffee & Kuchen: tradição de domingo à tarde
  • Grillen (churrasco): evento social no verão
  
  MÍDIA E CULTURA:
  • Bundesliga: liga mais assistida da Europa
  • Música clássica: terra de Bach, Beethoven, Brahms
  • Kino: cinemas com sublegendas em alemão`,
      notes:['Verein-Kultur é central na identidade alemã','Sonntagsruhe: sem furadeira, sem música alta aos domingos'],
      vocab:[{de:'der Verein',pt:'clube/associação'},{de:'Sonntagsruhe',pt:'descanso dominical'},{de:'Kaffee und Kuchen',pt:'café e bolo (tarde de domingo)'},{de:'das Wandern',pt:'a caminhada'}],
      examples:[]
    }
  ],
  'a1-cap4':[
    { slug:'a1-l4-1', sort:1, title_pt:'Diálogo: Maria faz compras', title_de:'Dialog: Im Supermarkt',
      rule:'Pedido educado: Ich möchte / Ich hätte gern + artigo acusativo + produto.',
      content:`DIÁLOGO:
  Verkäuferin: Guten Tag! Kann ich Ihnen helfen?
  Maria: Ja, bitte. Ich brauche Obst und Gemüse.
  Verkäuferin: Was möchten Sie gern?
  Maria: Ich hätte gern Äpfel, Bananen und Tomaten.
  Verkäuferin: Wie viele Äpfel?
  Maria: Ein Kilo, bitte. Und zwei Bananen.
  Verkäuferin: Sonst noch etwas?
  Maria: Ja, Brot, Milch und Eier. Das Vollkornbrot, bitte.
  Verkäuferin: Das macht 15 Euro, bitte.
  Maria: Hier, 20 Euro.
  Verkäuferin: Danke. Ihr Wechselgeld: 5 Euro.
  Maria: Vielen Dank! Schönen Tag noch!
  
  TRADUÇÃO:
  Vendedora: Boa tarde! Posso ajudá-la?
  Maria: Sim, por favor. Preciso de frutas e legumes.
  Vendedora: O que a senhora gostaria?
  Maria: Eu gostaria de maçãs, bananas e tomates.
  Vendedora: Quantas maçãs?
  Maria: Um quilo, por favor. E duas bananas.
  Vendedora: Mais alguma coisa?
  Maria: Sim, pão, leite e ovos. O pão integral, por favor.
  Vendedora: São 15 euros, por favor.
  Maria: Aqui, 20 euros.
  Vendedora: Obrigada. Seu troco: 5 euros.
  Maria: Muito obrigada! Tenha um bom dia!`,
      notes:['Entschuldigung = com licença (para abordar desconhecido)','vielen Dank = muito obrigado','bitte = por favor / de nada (conforme contexto)'],
      vocab:[{de:'der Supermarkt',pt:'o supermercado'},{de:'ich brauche',pt:'eu preciso'},{de:'das Obst',pt:'as frutas'},{de:'das Gemüse',pt:'os legumes'},{de:'das Brot',pt:'o pão'},{de:'die Milch',pt:'o leite'},{de:'das Ei',pt:'o ovo'},{de:'der Käse',pt:'o queijo'},{de:'der Apfel',pt:'a maçã'},{de:'wie viel?/wie viele?',pt:'quanto?/quantos?'},{de:'das Wechselgeld',pt:'o troco'},{de:'bezahlen',pt:'pagar'},{de:'sonst noch etwas?',pt:'mais alguma coisa?'}],
      examples:[{de:'Ich hätte gern einen Apfel.',pt:'Eu gostaria de uma maçã.'},{de:'Ich brauche das Brot.',pt:'Eu preciso do pão.'},{de:'Das macht 15 Euro.',pt:'São 15 euros.'}]
    },
    { slug:'a1-l4-2', sort:2, title_pt:'Artigos no Acusativo', title_de:'Artikel im Akkusativ',
      rule:'ÚNICA mudança: masculino der→den, ein→einen. Feminino, neutro e plural ficam iguais.',
      content:`ACUSATIVO = OBJETO DIRETO (o que recebe a ação)
  
  ARTIGOS DEFINIDOS:
  Masculino: der → den    | Feminino: die → die
  Neutro:    das → das    | Plural:   die → die
  
  ARTIGOS INDEFINIDOS:
  Masculino: ein → einen  | Feminino: eine → eine
  Neutro:    ein → ein    | Plural:   — → —
  
  DICA PRÁTICA: Pergunte "O quê?" ou "Quem?" após o verbo.
  A resposta é o acusativo.
  Ex: Ich kaufe [was?] → einen Apfel ✓
  
  VERBOS QUE PEDEM ACUSATIVO:
  kaufen, brauchen, haben, sehen, möchten, essen, trinken, nehmen, kennen, lieben`,
      notes:['Só masculino muda — fem/neut/plural ficam iguais!','Esta é a regra mais importante do nível A1.'],
      vocab:[],
      examples:[{de:'Ich möchte einen Liter Milch.',pt:'Quero um litro de leite.'},{de:'Ich kaufe einen Kaffee.',pt:'Compro um café.'},{de:'Siehst du den Mann?',pt:'Você vê o homem?'},{de:'Sie trinkt eine Cola.',pt:'Ela bebe uma cola.'}]
    },
    { slug:'a1-l4-3', sort:3, title_pt:'Cultura: Compras & Alimentação na Alemanha', title_de:'Kultur: Einkaufen & Lebensmittel',
      rule:'Sonntag geschlossen: Supermercados fecham aos domingos. Planeje suas compras!',
      content:`SISTEMA DE COMPRAS:
  • Pfand-System: Garrafas e latas têm depósito de 8-25 Cent.
    Devolva nas máquinas do supermercado para receber de volta.
  • Tüten?: Sacolas plásticas são pagas (~0,10€). Leve sua Einkaufstasche (sacola).
  • Sonntag geschlossen: Supermercados fecham aos domingos.
    Exceção: lojas em estações de trem e aeroportos.
  
  ALIMENTAÇÃO:
  • Bio-Produkte: Produtos orgânicos com selo Bio ou Öko.
  • Regional & Saisonal: Alemães valorizam produtos locais e da estação.
  • Wochenmarkt: Feiras semanais com produtos frescos, muito populares.
  • Discounter: Aldi, Lidl, Penny — supermercados de baixo custo, muito frequentados.`,
      notes:['Pfand = depósito de garrafas. Sistema obrigatório desde 2003.','Aos domingos, só farmácias de plantão, postos e lojas em aeroportos abrem.'],
      vocab:[{de:'der Pfand',pt:'depósito (garrafas)'},{de:'die Einkaufstasche',pt:'a sacola de compras'},{de:'der Wochenmarkt',pt:'a feira semanal'},{de:'Bio',pt:'orgânico'}],
      examples:[]
    }
  ],
  'a1-cap5':[
    { slug:'a1-l5-1', sort:1, title_pt:'Diálogo: Lukas conta sua rotina', title_de:'Dialog: Tagesablauf',
      rule:'Verbos separáveis: prefixo vai ao FINAL. Halb + PRÓXIMA hora: halb neun = 8:30.',
      content:`DIÁLOGO:
  Anna: Hallo Lukas! Wie läuft dein Tag?
  Lukas: Hallo Anna! Mein Tag beginnt um 6 Uhr. Ich stehe auf, dusche mich und frühstücke.
  Anna: Was isst du zum Frühstück?
  Lukas: Ich esse Brot mit Käse und trinke Kaffee. Dann putze ich mir die Zähne.
  Anna: Wann gehst du zur Arbeit?
  Lukas: Um 8 Uhr fange ich an zu arbeiten. Ich arbeite bis 17 Uhr.
  Anna: Machst du eine Pause?
  Lukas: Ja, um 12 Uhr esse ich zu Mittag. Abends koche ich und sehe fern.
  Anna: Wann gehst du ins Bett?
  Lukas: Um 23 Uhr. Wie spät ist es jetzt?
  Anna: Es ist halb acht.
  Lukas: Hast du heute Abend Zeit? Wollen wir um 20 Uhr telefonieren?
  Anna: Ja, gerne! Bis später!
  Lukas: Tschüss, Anna!
  
  TRADUÇÃO:
  Anna: Oi Lukas! Como está seu dia?
  Lukas: Oi Anna! Meu dia começa às 6h. Levanto, tomo banho e café da manhã.
  Anna: O que você come no café da manhã?
  Lukas: Como pão com queijo e tomo café. Depois escovo os dentes.
  Anna: Quando você vai trabalhar?
  Lukas: Às 8h começo a trabalhar. Trabalho até as 17h.
  Anna: Você faz pausa?
  Lukas: Sim, às 12h almoço. À noite cozinho e assisto TV.
  Anna: Quando vai dormir?
  Lukas: Às 23h. Que horas são agora?
  Anna: São 7:30.
  Lukas: Tem tempo hoje à noite? Queremos falar às 20h?
  Anna: Sim, com prazer! Até mais!
  Lukas: Tchau, Anna!`,
      notes:['HORAS: Es ist drei Uhr. Es ist halb acht (=7:30!). Viertel nach drei (3:15). Viertel vor neun (8:45).','halb + PRÓXIMA hora. halb acht = metade do caminho ATÉ as 8h = 7:30','SEPARÁVEIS: ich stehe auf | fange an | rufe an | sehe fern | kaufe ein'],
      vocab:[{de:'aufstehen',pt:'levantar-se'},{de:'frühstücken',pt:'tomar café da manhã'},{de:'anfangen',pt:'começar'},{de:'aufhören',pt:'parar/terminar'},{de:'fernsehen',pt:'assistir TV'},{de:'die Pause',pt:'a pausa'},{de:'wie spät ist es?',pt:'que horas são?'},{de:'es ist... Uhr',pt:'são... horas'},{de:'halb...',pt:'meia hora (halb acht=7:30)'},{de:'pünktlich',pt:'pontual'}],
      examples:[{de:'Ich stehe um sieben Uhr auf.',pt:'Levanto-me às sete horas.'},{de:'Der Unterricht beginnt um halb neun.',pt:'A aula começa às oito e meia.'},{de:'Um acht Uhr fange ich an.',pt:'Às oito horas eu começo.'}]
    },
    { slug:'a1-l5-2', sort:2, title_pt:'Verbos Separáveis e Horas', title_de:'Trennbare Verben & Uhrzeiten',
      rule:'Separáveis: tronco na posição 2, prefixo no FINAL. Ich rufe dich AN.',
      content:`VERBOS SEPARÁVEIS COMUNS:
  aufstehen (levantar): ich stehe...auf
  anfangen (começar): ich fange...an
  anrufen (ligar): ich rufe...an
  fernsehen (TV): ich sehe...fern
  einkaufen (compras): ich kaufe...ein
  aufräumen (arrumar): ich räume...auf
  abfahren (partir): ich fahre...ab
  
  HORAS DETALHADAS:
  8:00 = acht Uhr (genau/exato)
  8:05 = fünf nach acht
  8:15 = Viertel nach acht
  8:30 = halb neun ← ARMADILHA!
  8:45 = Viertel vor neun
  8:55 = fünf vor neun
  9:00 = neun Uhr`,
      notes:['ARMADILHA: halb acht = 7:30, NÃO 8:30!','Separáveis em perguntas: Wann stehst du auf? (prefixo no final)','Em infinitivo: aufstehen, anrufen (junto)'],
      vocab:[],
      examples:[{de:'Ich stehe um 7 Uhr auf.',pt:'Levanto às 7h.'},{de:'Wann fängt der Film an?',pt:'Quando o filme começa?'},{de:'Er ruft mich um 20 Uhr an.',pt:'Ele me liga às 20h.'}]
    },
    { slug:'a1-l5-3', sort:3, title_pt:'Cultura: Rotina & Hábitos Alemães', title_de:'Kultur: Tagesroutine & Gewohnheiten',
      rule:'Feierabend = fim do expediente. Sagrado! E-mails após 17h são raros.',
      content:`ROTINA ALEMÃ:
  • Frühstück: Importante! Pão, queijo, frios, café ou chá.
  • Mittagspause: Almoço 12-13h. Muitos vão para casa.
  • Kaffeezeit: Café da tarde às 15h com Kuchen (bolo).
  • Feierabend: Fim do expediente respeitado rigorosamente.
  • Abendbrot: Jantar FRIO — pão, frios, queijo. Não é refeição quente!
  • Schlafenszeit: Silêncio após as 22h (Nachtruhe).
  
  PONTOS IMPORTANTES:
  • Pontualidade é essencial em reuniões e compromissos.
  • Pausas de trabalho são respeitadas e valorizadas.
  • Fim de semana = família e lazer. Trabalho não invade.`,
      notes:['Abendbrot = jantar frio é tradição alemã. Surpresa para brasileiros!','Feierabend é levado a sério. Ligar para colegas após o expediente é invasão.'],
      vocab:[{de:'der Feierabend',pt:'fim do expediente'},{de:'das Frühstück',pt:'café da manhã'},{de:'das Abendbrot',pt:'jantar (frio)'},{de:'die Mittagspause',pt:'pausa do almoço'}],
      examples:[]
    }
  ],
  'a1-cap6':[
    { slug:'a1-l6-1', sort:1, title_pt:'Diálogo: Profissões no Escritório', title_de:'Dialog: Berufe im Büro',
      rule:'Profissão feminina: acrescentar -in. Arzt→Ärztin. Lehrer→Lehrerin.',
      content:`DIÁLOGO:
  Klara: Guten Morgen! Was machen Sie beruflich?
  Tim: Ich bin Ingenieur. Und Sie?
  Klara: Ich bin Lehrerin. Wo arbeiten Sie?
  Tim: Ich arbeite in einem Büro in München. Und Sie?
  Klara: Ich arbeite in einer Schule in Berlin.
  Tim: Wie lange arbeiten Sie schon hier?
  Klara: Seit drei Jahren. Ich mag meinen Job sehr.
  Tim: Das ist schön! Ich auch — die Arbeit ist interessant.
  
  TRADUÇÃO:
  Klara: Bom dia! O que o senhor faz profissionalmente?
  Tim: Sou engenheiro. E a senhora?
  Klara: Sou professora. Onde o senhor trabalha?
  Tim: Trabalho em um escritório em Munique. E a senhora?
  Klara: Trabalho em uma escola em Berlim.
  Tim: Há quanto tempo trabalha aqui?
  Klara: Há três anos. Gosto muito do meu trabalho.
  Tim: Que bom! Eu também — o trabalho é interessante.`,
      notes:['sein + profissão = SEM artigo: Ich bin Lehrer (não: Ich bin ein Lehrer)','Feminino: -in. Plural feminino: -innen (Lehrerinnen, Ärztinnen)','seit + Dativ = há/desde: seit drei Jahren = há três anos'],
      vocab:[{de:'der Beruf',pt:'a profissão'},{de:'Was machen Sie beruflich?',pt:'O que você faz profissionalmente?'},{de:'Ich bin... (profissão)',pt:'Eu sou...'},{de:'arbeiten',pt:'trabalhar'},{de:'das Büro',pt:'o escritório'},{de:'die Schule',pt:'a escola'},{de:'der Arzt/die Ärztin',pt:'o médico/a médica'},{de:'der Lehrer/die Lehrerin',pt:'o professor/a professora'},{de:'der Ingenieur/die Ingenieurin',pt:'o/a engenheiro/a'},{de:'seit',pt:'há/desde'}],
      examples:[{de:'Ich bin Ingenieur.',pt:'Eu sou engenheiro.'},{de:'Sie ist Ärztin.',pt:'Ela é médica.'},{de:'Ich arbeite seit drei Jahren hier.',pt:'Trabalho aqui há três anos.'}]
    },
    { slug:'a1-l6-2', sort:2, title_pt:'Profissões e Gênero Gramatical', title_de:'Berufe & Genus',
      rule:'sein + profissão = sem artigo. Ich bin Lehrer. Er ist Arzt.',
      content:`FORMAÇÃO DO FEMININO:
  der Arzt → die Ärztin
  der Lehrer → die Lehrerin
  der Ingenieur → die Ingenieurin
  der Student → die Studentin
  der Koch → die Köchin
  der Kaufmann → die Kauffrau (exceção!)
  der Polizist → die Polizistin
  
  PLURAL FEMININO: sempre -innen
  Lehrerinnen, Ärztinnen, Studentinnen
  
  SEIN + PROFISSÃO (sem artigo!):
  ✓ Ich bin Lehrer.
  ✗ Ich bin ein Lehrer. (errado)
  
  ARBEITEN IN + lugar:
  in einem Büro (neut-dat) | in einer Schule (fem-dat) | in einem Krankenhaus (neut-dat)`,
      notes:['NUNCA use artigo com profissão após sein','-in acrescenta umlaut quando possível: Koch→Köchin','Plural feminino: SEMPRE -innen'],
      vocab:[],
      examples:[{de:'Er ist Arzt.',pt:'Ele é médico.'},{de:'Sie ist Ingenieurin.',pt:'Ela é engenheira.'},{de:'Wir sind Studenten.',pt:'Somos estudantes.'}]
    },
    { slug:'a1-l6-3', sort:3, title_pt:'Cultura: Trabalho & Profissões na Alemanha', title_de:'Kultur: Arbeit & Berufe',
      rule:'Ausbildung = formação profissional dual. Muito valorizada — combina teoria e prática.',
      content:`SISTEMA DE TRABALHO:
  • Ausbildung: Formação dual de 2-3 anos (empresa + escola). Muito respeitada.
  • Studium: Ensino superior. Muitas universidades públicas e gratuitas.
  • Arbeitszeugnis: Carta de recomendação do empregador. Necessária para novo emprego.
  
  DIREITOS TRABALHISTAS:
  • Urlaub: 24-30 dias de férias por ano (lei).
  • Krankenstand: Atestado após 3 dias de falta.
  • Betriebsrat: Conselho de trabalhadores (representação forte).
  
  SALÁRIO:
  • Gehalt = salário mensal. Brutto (bruto) vs. Netto (líquido).
  • Minijob: trabalho parcial até 520€/mês sem imposto.`,
      notes:['Ausbildung é tão valorizada quanto faculdade na Alemanha','Férias mínimas garantidas por lei: 20 dias/ano (base)'],
      vocab:[{de:'die Ausbildung',pt:'formação profissional'},{de:'das Gehalt',pt:'o salário'},{de:'der Urlaub',pt:'as férias'},{de:'die Bewerbung',pt:'a candidatura/currículo'}],
      examples:[]
    }
  ],
  'a1-cap7':[
    { slug:'a1-l7-1', sort:1, title_pt:'Diálogo: Dar e Pedir Direções', title_de:'Dialog: Wegbeschreibung',
      rule:'Direções: geradeaus (reto), links (esquerda), rechts (direita). Neben/zwischen/gegenüber + Dativo.',
      content:`DIÁLOGO:
  Tourist: Entschuldigung! Wo ist der Bahnhof, bitte?
  Einwohner: Der Bahnhof ist geradeaus, dann links.
  Tourist: Wie weit ist es?
  Einwohner: Etwa 10 Minuten zu Fuß. Die Post ist auf der rechten Seite.
  Tourist: Gibt es eine U-Bahn-Station in der Nähe?
  Einwohner: Ja, gleich um die Ecke. Die Station heißt Marienplatz.
  Tourist: Vielen Dank!
  Einwohner: Bitte sehr! Schönen Tag!
  
  TRADUÇÃO:
  Turista: Com licença! Onde fica a estação, por favor?
  Morador: A estação fica em frente, depois à esquerda.
  Turista: Fica longe?
  Morador: Cerca de 10 minutos a pé. O correio fica à direita.
  Turista: Há uma estação de metrô perto?
  Morador: Sim, logo na esquina. A estação se chama Marienplatz.
  Turista: Muito obrigado!
  Morador: De nada! Tenha um bom dia!`,
      notes:['Entschuldigung! = Com licença! (para abordar desconhecido) / Desculpe! (para pedir desculpas)','zu Fuß = a pé | mit dem Bus/Zug/Auto = de ônibus/trem/carro','in der Nähe = perto | weit = longe | gleich = logo/imediatamente'],
      vocab:[{de:'geradeaus',pt:'reto/em frente'},{de:'links',pt:'à esquerda'},{de:'rechts',pt:'à direita'},{de:'die Ecke',pt:'a esquina'},{de:'in der Nähe',pt:'perto'},{de:'zu Fuß',pt:'a pé'},{de:'neben',pt:'ao lado de'},{de:'gegenüber',pt:'em frente a'},{de:'zwischen',pt:'entre'},{de:'die Straße',pt:'a rua'},{de:'der Platz',pt:'a praça'}],
      examples:[{de:'Der Bahnhof ist geradeaus, dann links.',pt:'A estação fica em frente, depois à esquerda.'},{de:'Das Café ist neben der Bank.',pt:'O café fica ao lado do banco.'},{de:'Die Post ist gegenüber dem Hotel.',pt:'O correio fica em frente ao hotel.'}]
    },
    { slug:'a1-l7-2', sort:2, title_pt:'Preposições de Lugar', title_de:'Lokalpräpositionen',
      rule:'Wo? (posição estática) = Dativo. Wohin? (movimento) = Acusativo.',
      content:`PREPOSIÇÕES DE LUGAR:
  
  WO? (onde? — posição estática) + DATIVO:
  in (dentro de): im Zimmer (in + dem)
  an (em/na): an der Wand
  auf (sobre): auf dem Tisch
  neben (ao lado): neben dem Bett
  zwischen (entre): zwischen Sofa und Fenster
  vor (na frente): vor dem Haus
  hinter (atrás): hinter der Tür
  unter (embaixo): unter dem Tisch
  
  WOHIN? (para onde? — movimento) + ACUSATIVO:
  in das = ins Kino (ir ao cinema)
  an das = ans Fenster (ir à janela)
  auf den = auf den Tisch (colocar na mesa)
  
  VERBOS DE POSIÇÃO:
  stehen = estar em pé (móveis)
  liegen = estar deitado/horizontal
  hängen = estar pendurado`,
      notes:['Regra simples: SEM movimento = Dativo | COM movimento = Acusativo','stehen/liegen/hängen = posição | stellen/legen/hängen = ação de colocar'],
      vocab:[],
      examples:[{de:'Das Café ist um die Ecke.',pt:'O café fica na esquina.'},{de:'Ich gehe zur Post.',pt:'Vou ao correio.'},{de:'Das Hotel liegt am Marktplatz.',pt:'O hotel fica na praça do mercado.'}]
    },
    { slug:'a1-l7-3', sort:3, title_pt:'Cultura: Cidades & Vida Urbana Alemã', title_de:'Kultur: Städte & Stadtleben',
      rule:'ÖPNV (transporte público) é excelente. Valide sempre o bilhete antes de entrar!',
      content:`TRANSPORTE PÚBLICO (ÖPNV):
  • U-Bahn: metrô
  • S-Bahn: trem suburbano
  • Tram/Straßenbahn: bonde
  • Bus: ônibus
  • Ticket: validar ao entrar (Entwerter). Fiscais fazem blitz!
  
  CICLISMO:
  • Ciclovias em todas as cidades
  • Andar na ciclofaixa de pedestres = infração
  • Bicicleta deve ter luz dianteira e traseira
  
  VIDA URBANA:
  • Altstadt: Centro histórico preservado
  • Fußgängerzone: Área de pedestres no centro
  • Marktplatz: Praça central com mercados semanais
  • Mülltonnen: Lixeiras coloridas em cada prédio`,
      notes:['Sem validar o bilhete = Schwarzfahren. Multa de 60€','Berlim, Munique, Hamburgo, Colônia = maiores cidades'],
      vocab:[{de:'die U-Bahn',pt:'o metrô'},{de:'die S-Bahn',pt:'o trem urbano'},{de:'das Fahrrad',pt:'a bicicleta'},{de:'die Fußgängerzone',pt:'a zona de pedestres'},{de:'das Ticket',pt:'o bilhete'}],
      examples:[]
    }
  ],
  'a1-cap8':[
    { slug:'a1-l8-1', sort:1, title_pt:'Diálogo: Que tempo faz hoje?', title_de:'Dialog: Wie ist das Wetter?',
      rule:'Impessoais: es ist + adjetivo | es + verbo meteorológico: es regnet, es schneit.',
      content:`DIÁLOGO:
  Lea: Wie ist das Wetter heute?
  Max: Es ist sonnig und warm. Die Temperatur ist 22 Grad.
  Lea: Super! Wollen wir in den Park gehen?
  Max: Ja, gerne! Aber nimm eine Jacke mit — abends wird es kühler.
  Lea: Was machst du bei Regen?
  Max: Ich lese oder gehe ins Kino. Und du?
  Lea: Ich bleibe zu Hause und koche. Magst du Schnee?
  Max: Ja! Im Winter fahre ich gern Ski.
  
  TRADUÇÃO:
  Lea: Como está o tempo hoje?
  Max: Está ensolarado e quente. A temperatura é 22 graus.
  Lea: Ótimo! Quer ir ao parque?
  Max: Sim, com prazer! Mas leva uma jaqueta — à noite fica mais frio.
  Lea: O que você faz quando chove?
  Max: Leio ou vou ao cinema. E você?
  Lea: Fico em casa e cozinho. Você gosta de neve?
  Max: Sim! No inverno gosto de esquiar.`,
      notes:['IMPESSOAIS: es regnet (chove), es schneit (neva), es donnert (trova), es blitzt (relampeja)','TEMPERATURAS: heiß (>30°), warm (20-30°), kühl (10-20°), kalt (<10°)','ESTAÇÕES: der Frühling, der Sommer, der Herbst, der Winter. Preposição: im.'],
      vocab:[{de:'das Wetter',pt:'o tempo'},{de:'es regnet',pt:'está chovendo'},{de:'es schneit',pt:'está nevando'},{de:'sonnig',pt:'ensolarado'},{de:'bewölkt',pt:'nublado'},{de:'windig',pt:'ventoso'},{de:'die Temperatur / der Grad',pt:'a temperatura / o grau'},{de:'im Sommer/Winter',pt:'no verão/inverno'},{de:'der Frühling/Herbst',pt:'a primavera/o outono'}],
      examples:[{de:'Es ist heute sonnig und 25 Grad.',pt:'Hoje está ensolarado e 25 graus.'},{de:'Im Winter schneit es oft.',pt:'No inverno neva bastante.'},{de:'Bei Regen bleibe ich zu Hause.',pt:'Na chuva fico em casa.'}]
    },
    { slug:'a1-l8-2', sort:2, title_pt:'Verbos Impessoais e Estações', title_de:'Unpersönliche Verben & Jahreszeiten',
      rule:'Es + verbo: es regnet, es schneit, es ist. Estações: im + nome da estação.',
      content:`VERBOS METEOROLÓGICOS (sempre com "es"):
  es regnet = chove/está chovendo
  es schneit = neva/está nevando
  es hagelt = graniza
  es donnert = troveja
  es blitzt = relampeja
  es ist warm/kalt/heiß/kühl/bewölkt/neblig (nebuloso)
  
  ESTAÇÕES DO ANO:
  der Frühling (a primavera) — März bis Mai
  der Sommer (o verão) — Juni bis August
  der Herbst (o outono) — September bis November
  der Winter (o inverno) — Dezember bis Februar
  
  Preposição: IM + estação
  im Frühling, im Sommer, im Herbst, im Winter`,
      notes:['Verbos meteorológicos NUNCA mudam de sujeito — sempre "es"','Estações com "der" (masculino), mas im (in + dem)'],
      vocab:[],
      examples:[{de:'Im Herbst ist es oft bewölkt.',pt:'No outono costuma estar nublado.'},{de:'Es hagelt! Geh nicht raus!',pt:'Está granizando! Não saia.'},{de:'Im Sommer gehe ich gern schwimmen.',pt:'No verão gosto de nadar.'}]
    },
    { slug:'a1-l8-3', sort:3, title_pt:'Cultura: Clima & Lazer ao Ar Livre', title_de:'Kultur: Wetter & Freizeit im Freien',
      rule:'"Es gibt kein schlechtes Wetter, nur schlechte Kleidung." — Ditado alemão famoso.',
      content:`ALEMÃES E O CLIMA:
  • Saem mesmo com chuva, frio e neve
  • Roupa adequada resolve tudo
  • Wandern (caminhadas) o ano todo — trilhas sinalizadas
  
  ATIVIDADES AO AR LIVRE:
  • Biergarten: Jardins de cerveja abertos no verão
  • Volksfest: Festivais ao ar livre (primavera/verão/outono)
  • Freibad: Piscina ao ar livre (muito popular no verão)
  • Weihnachtsmarkt: Mercado de Natal (novembro-dezembro)
  • Eislaufen: Patinação no gelo (inverno)
  
  DICA DE VOCABULÁRIO:
  Beim Wandern: der Wanderweg (trilha), die Aussicht (vista), der Gipfel (cume)`,
      notes:['Weihnachtsmarkt começa geralmente em 1° de dezembro (Adventszeit)','Biergartens têm regras: pode levar própria comida, mas não bebidas'],
      vocab:[{de:'das Wandern',pt:'a caminhada'},{de:'der Biergarten',pt:'o jardim de cerveja'},{de:'das Freibad',pt:'a piscina ao ar livre'},{de:'der Weihnachtsmarkt',pt:'o mercado de Natal'}],
      examples:[]
    }
  ],
  'a1-cap9':[
    { slug:'a1-l9-1', sort:1, title_pt:'Diálogo: Roupas e Compras', title_de:'Dialog: Kleidung und Einkaufen',
      rule:'tragen = usar (hábito). anhaben = estar vestindo agora. anprobieren = experimentar.',
      content:`DIÁLOGO:
  Emma: Leo, wie findest du meine Jacke?
  Leo: Sehr schön! Das Rot steht dir gut.
  Emma: Danke! Heute suche ich eine neue Hose.
  Leo: Welche Farbe möchtest du? Schwarz oder Grau?
  Emma: Am liebsten Schwarz. Hier ist ein schwarzer Jeans.
  Leo: Probiere ihn an!
  Emma: Gute Idee! Wo ist die Umkleidekabine?
  Leo: Dort hinten, neben den Schuhen.
  Emma: Wie hat die Hose gepasst?
  Leo: Sie passt perfekt! Und ist bequem.
  Emma: Welche Größe hast du?
  Leo: Ich bin 1,80 m groß.
  
  TRADUÇÃO:
  Emma: Leo, o que você acha da minha jaqueta?
  Leo: Muito bonita! O vermelho fica bem em você.
  Emma: Obrigada! Hoje procuro uma calça nova.
  Leo: Qual cor você quer? Preto ou cinza?
  Emma: De preferência preto. Aqui está um jeans preto.
  Leo: Experimente!
  Emma: Boa ideia! Onde fica o provador?
  Leo: Ali no fundo, ao lado dos sapatos.
  Emma: Como ficou a calça?
  Leo: Ficou perfeita! E é confortável.
  Emma: Qual é o seu tamanho?
  Leo: Meço 1,80 m.`,
      notes:['Größe = tamanho. Welche Größe haben Sie?','aus Wolle/Baumwolle = de lã/algodão','aussehen = parecer (separável): sieht...aus'],
      vocab:[{de:'die Kleidung',pt:'as roupas'},{de:'die Hose',pt:'calça'},{de:'das Kleid',pt:'vestido'},{de:'die Jacke',pt:'jaqueta'},{de:'das Hemd',pt:'camisa'},{de:'der Schuh',pt:'sapato'},{de:'anprobieren',pt:'experimentar'},{de:'passen',pt:'servir'},{de:'tragen',pt:'usar (hábito)'},{de:'die Umkleidekabine',pt:'o provador'},{de:'die Größe',pt:'o tamanho'},{de:'bequem',pt:'confortável'}],
      examples:[{de:'Ich probiere die Hose an.',pt:'Experimento a calça.'},{de:'Sie trägt das Kleid.',pt:'Ela usa o vestido.'},{de:'Die Jacke steht dir gut.',pt:'A jaqueta fica bem em você.'}]
    },
    { slug:'a1-l9-2', sort:2, title_pt:'Acusativo com Roupas e Adjetivos', title_de:'Akkusativ & Adjektive bei Kleidung',
      rule:'der→den, ein→einen (masc). Adj antes do subst: das rote Kleid, eine schwarze Hose.',
      content:`ACUSATIVO COM ROUPAS:
  Masculino: der Pullover → den Pullover
  Feminino:  die Hose → die Hose (não muda!)
  Neutro:    das Kleid → das Kleid (não muda!)
  
  ADJETIVOS ANTES DE SUBSTANTIVOS (A1):
  Artigo + adjetivo + substantivo:
  das rote Kleid (neut) | eine schwarze Hose (fem) | einen blauen Pullover (masc-akk)
  
  VERBOS DE VESTIR:
  tragen    = usar (hábito): Er trägt Jeans.
  anhaben   = estar vestindo (agora): Sie hat ein blaues Kleid an.
  anziehen  = vestir-se (ação): Ich ziehe mich an.
  ausziehen = tirar (roupa): Er zieht den Mantel aus.`,
      notes:['Só masculino muda no acusativo: den / einen','Adjetivos antes do substantivo precisam de terminações — aprenda aos poucos'],
      vocab:[],
      examples:[{de:'Sie trägt eine schwarze Brille.',pt:'Ela usa óculos pretos.'},{de:'Ich kaufe den blauen Pullover.',pt:'Compro o suéter azul.'},{de:'Er ist ein freundlicher Mann.',pt:'Ele é um homem simpático.'}]
    },
    { slug:'a1-l9-3', sort:3, title_pt:'Cultura: Moda & Estilo Alemão', title_de:'Kultur: Mode & Stil',
      rule:'Zweckmäßig (praticidade) acima de tudo. Sapatos fora em casas. Brechós populares.',
      content:`MODA ALEMÃ:
  • Praticidade e funcionalidade dominam
  • Roupas duráveis preferidas a modas passageiras
  • Marcas nacionais: Adidas, Puma, Hugo Boss
  
  ETIQUETA EM CASAS:
  • Schuhe ausziehen (tirar sapatos) ao entrar
  • Muitas casas têm Hausschuhe (chinelos) para visitas
  • Perguntar antes: "Soll ich die Schuhe ausziehen?"
  
  SUSTENTABILIDADE:
  • Second-Hand: Brechós (Flohmarkt, Vintageläden) muito populares
  • Nachhaltigkeit: Moda sustentável em alta
  • Flohmarkt (mercado de pulga): ótimo para roupas e móveis
  
  ESTILOS REGIONAIS:
  • München (Munique): Dirndl e Lederhosen (traditional)
  • Berlin: Alternativo, criativo, vanguarda`,
      notes:['Flohmarkt = mercado de pulgas. Muito popular aos fins de semana','Dirndl e Lederhosen = roupas tradicionais bávaras, usadas principalmente no Oktoberfest'],
      vocab:[{de:'zweckmäßig',pt:'prático/funcional'},{de:'die Hausschuhe',pt:'chinelos de visita'},{de:'der Flohmarkt',pt:'o mercado de pulgas'},{de:'nachhaltig',pt:'sustentável'}],
      examples:[]
    }
  ],
  'a1-cap10':[
    { slug:'a1-l10-1', sort:1, title_pt:'Diálogo: Sarah e Ben marcam consulta', title_de:'Dialog: Termin vereinbaren',
      rule:'Datas: am + dia/data. Horas: um + hora. Meses: im + mês.',
      content:`DIÁLOGO:
  Sarah: Hallo Ben! Hast du nächste Woche Zeit?
  Ben: Mal sehen. Wann genau?
  Sarah: Am Montag, dem 15. Mai. Kannst du mich zum Arzt begleiten?
  Ben: Leider kann ich am Montag nicht. Ich habe ein Meeting.
  Sarah: Schade! Und am Dienstag?
  Ben: Dienstag geht besser. Um wie viel Uhr?
  Sarah: Der Arzt hat um 14 Uhr frei. Passt das?
  Ben: Ja, perfekt! Wo treffen wir uns?
  Sarah: Um 13:45 Uhr vor der Praxis?
  Ben: Einverstanden. Vielleicht danach Kaffee?
  Sarah: Gute Idee! Bis zum 16. Mai!
  Ben: Tschüss, Sarah!
  
  TRADUÇÃO:
  Sarah: Oi Ben! Tem tempo semana que vem?
  Ben: Vamos ver. Quando exatamente?
  Sarah: Na segunda, dia 15 de maio. Pode me acompanhar ao médico?
  Ben: Infelizmente não posso na segunda. Tenho reunião.
  Sarah: Que pena! E na terça?
  Ben: Terça é melhor. Que horas?
  Sarah: O médico tem horário às 14h. Serve?
  Ben: Sim, perfeito! Onde nos encontramos?
  Sarah: Às 13:45 em frente à clínica?
  Ben: Combinado. Talvez café depois?
  Sarah: Boa ideia! Até o dia 16!
  Ben: Tchau, Sarah!`,
      notes:['am + dia: am Montag, am 15. Mai','um + hora: um 10:30 Uhr','im + mês: im Mai, im Sommer','Ordinais em datas: der fünfzehnte Mai'],
      vocab:[{de:'der Termin',pt:'o compromisso'},{de:'planen',pt:'planejar'},{de:'heute/morgen/gestern',pt:'hoje/amanhã/ontem'},{de:'nächste Woche',pt:'próxima semana'},{de:'um wie viel Uhr?',pt:'a que horas?'},{de:'pünktlich',pt:'pontual'},{de:'absagen',pt:'cancelar'},{de:'bestätigen',pt:'confirmar'},{de:'einverstanden',pt:'combinado'},{de:'die Praxis',pt:'o consultório'}],
      examples:[{de:'Ich habe am Montag Zeit.',pt:'Tenho tempo na segunda.'},{de:'Der Termin ist um 14:30 Uhr.',pt:'O compromisso é às 14:30.'},{de:'Im Mai reise ich.',pt:'Viajo em maio.'}]
    },
    { slug:'a1-l10-2', sort:2, title_pt:'Datas e Preposições de Tempo', title_de:'Daten & Zeitpräpositionen',
      rule:'am + dia/data | um + hora | im + mês/estação | von...bis = de...a',
      content:`PREPOSIÇÕES DE TEMPO:
  am + dia da semana: am Montag, am Dienstag...
  am + data: am 15. Mai, am ersten März
  um + hora: um 10:30 Uhr, um Mitternacht
  im + mês: im Januar, im Mai, im Dezember
  im + estação: im Frühling, im Sommer, im Herbst, im Winter
  in der Nacht: à noite (período noturno)
  von... bis...: von Montag bis Freitag
  
  DATAS POR EXTENSO:
  15.05.2024 → der fünfzehnte Mai zweitausendvierundzwanzig
  Após am: am fünfzehnten Mai (ordinal + en)
  
  ORDINAIS 1-31:
  1. = erste | 2. = zweite | 3. = dritte | 4. = vierte
  5-19: +te (fünfte, zehnte...) | 20-31: +ste (zwanzigste...)`,
      notes:['am + dia/data | um + hora | im + mês/estação — regra de ouro!','Ordinais após am: terminação -en. am fünfzehnTEN Mai.'],
      vocab:[],
      examples:[{de:'Am Montag um 10 Uhr.',pt:'Na segunda às 10h.'},{de:'Im Sommer fahre ich weg.',pt:'No verão viajo.'},{de:'Von Montag bis Freitag.',pt:'De seg a sex.'}]
    },
    { slug:'a1-l10-3', sort:3, title_pt:'Cultura: Pontualidade & Agenda Alemã', title_de:'Kultur: Pünktlichkeit & Kalender',
      rule:'Pünktlichkeit ist eine Tugend! Pontualidade é uma virtude. Confirme compromissos por e-mail.',
      content:`CALENDÁRIO E PONTUALIDADE:
  • Kalender-Kultur: Alemães planejam com semanas/meses de antecedência
  • Bestätigungen: Confirme compromissos por e-mail ou SMS
  • Pünktlichkeit: Chegar atrasado sem aviso é ofensa grave
  
  FERIADOS NACIONAIS E REGIONAIS:
  • Nacionais: Neujahr, Tag der Arbeit, Einheit, Weihnachten...
  • Regionais: Variam por estado (Bayern tem mais feriados!)
  • Brückentage: Emenda entre feriado e fim de semana
  
  DIAS DA SEMANA:
  Montag | Dienstag | Mittwoch | Donnerstag
  Freitag | Samstag | Sonntag
  
  MESES:
  Januar | Februar | März | April | Mai | Juni
  Juli | August | September | Oktober | November | Dezember`,
      notes:['Bayern tem 13 feriados nacionais. Berlim tem apenas 9.','Brückentag: quando o feriado é quinta-feira, sexta vira ponte comum'],
      vocab:[{de:'der Feiertag',pt:'o feriado'},{de:'der Brückentag',pt:'a ponte (feriado)'},{de:'pünktlich sein',pt:'ser pontual'},{de:'der Kalender',pt:'a agenda/calendário'}],
      examples:[]
    }
  ],
  'a1-cap11':[
    { slug:'a1-l11-1', sort:1, title_pt:'Diálogo: Mia mostra seu apartamento', title_de:'Dialog: Die Wohnung',
      rule:'Es gibt + Akkusativ. Preposições estáticas + Dativ: in, an, auf, neben.',
      content:`DIÁLOGO:
  Lena: Wow, Mia! Deine Wohnung ist wirklich schön!
  Mia: Danke, Lena! Ich zeige dir alles.
  Lena: Wie viele Zimmer hast du?
  Mia: Drei: Wohnzimmer, Schlafzimmer und Küche.
  Lena: Sehr hell! Hast du auch einen Balkon?
  Mia: Ja! Vom Balkon sieht man den Park.
  Lena: Was gibt es im Wohnzimmer?
  Mia: Ein Sofa, einen Tisch und einen Fernseher.
  Lena: Und in der Küche?
  Mia: Einen Kühlschrank, einen Herd und viele Schränke.
  Lena: Wie viel Miete zahlst du?
  Mia: 650 Euro warm. Günstig für München!
  Lena: Ich suche auch eine Wohnung.
  Mia: Dann helfe ich dir gerne!
  
  TRADUÇÃO:
  Lena: Uau, Mia! Seu apartamento é realmente bonito!
  Mia: Obrigada, Lena! Vou te mostrar tudo.
  Lena: Quantos cômodos você tem?
  Mia: Três: sala, quarto e cozinha.
  Lena: Muito claro! Você também tem varanda?
  Mia: Sim! Da varanda dá para ver o parque.
  Lena: O que há na sala?
  Mia: Um sofá, uma mesa e uma TV.
  Lena: E na cozinha?
  Mia: Uma geladeira, um fogão e muitos armários.
  Lena: Quanto de aluguel você paga?
  Mia: 650 euros com despesas. Barato para Munique!
  Lena: Eu também procuro apartamento.
  Mia: Então te ajudo com prazer!`,
      notes:['Es gibt + acusativo: Es gibt einen Tisch (masc), eine Lampe (fem), ein Bett (neut)','Preposições estáticas (Wo?): in, an, auf, neben, zwischen + Dativo','stehen = vertical | liegen = horizontal | hängen = pendurado'],
      vocab:[{de:'die Wohnung',pt:'o apartamento'},{de:'das Zimmer',pt:'o cômodo'},{de:'das Wohnzimmer',pt:'a sala de estar'},{de:'das Schlafzimmer',pt:'o quarto'},{de:'die Küche',pt:'a cozinha'},{de:'das Bad',pt:'o banheiro'},{de:'der Balkon',pt:'a varanda'},{de:'das Sofa',pt:'o sofá'},{de:'der Tisch',pt:'a mesa'},{de:'der Kühlschrank',pt:'a geladeira'},{de:'der Herd',pt:'o fogão'},{de:'die Miete',pt:'o aluguel'},{de:'gemütlich',pt:'aconchegante'}],
      examples:[{de:'Es gibt ein Sofa.',pt:'Há um sofá.'},{de:'Das Bild hängt an der Wand.',pt:'O quadro está pendurado na parede.'},{de:'Der Schrank steht neben dem Bett.',pt:'O armário fica ao lado da cama.'}]
    },
    { slug:'a1-l11-2', sort:2, title_pt:'"Es gibt" e Preposições de Lugar', title_de:'Es gibt & Lokalpräpositionen',
      rule:'Es gibt + Akkusativ. Preposições estáticas: in, an, auf, neben + Dativ.',
      content:`ES GIBT (Há/Existe):
  Masculino: Es gibt einen Tisch.
  Feminino:  Es gibt eine Lampe.
  Neutro:    Es gibt ein Bett.
  Plural:    Es gibt viele Stühle.
  
  PREPOSIÇÕES ESTÁTICAS (WO?):
  in (dentro): im Schlafzimmer (= in dem)
  an (em/na): an der Wand
  auf (sobre): auf dem Tisch
  neben (ao lado): neben dem Bett
  zwischen (entre): zwischen dem Sofa und dem Fenster
  vor (na frente): vor dem Haus
  hinter (atrás): hinter der Tür
  unter (embaixo): unter dem Tisch
  
  DATIVO DOS ARTIGOS:
  Masculino: der → dem | Feminino: die → der | Neutro: das → dem | Plural: die → den (+n no subst)`,
      notes:['Es gibt é sempre seguido de Acusativo, não Dativo','Preposições de posição estática usam DATIVO'],
      vocab:[],
      examples:[{de:'Es gibt einen Tisch.',pt:'Há uma mesa.'},{de:'Das Bild hängt an der Wand.',pt:'O quadro está na parede.'},{de:'Der Stuhl steht auf dem Boden.',pt:'A cadeira está no chão.'}]
    },
    { slug:'a1-l11-3', sort:3, title_pt:'Cultura: Moradia & Vida Doméstica', title_de:'Kultur: Wohnen & Haushalt',
      rule:'Kaltmiete vs Warmmiete. Mülltrennung obrigatória. Nachtruhe das 22h às 6h.',
      content:`TIPOS DE ALUGUEL:
  • Kaltmiete: aluguel base (sem despesas)
  • Warmmiete: inclui água, aquecimento, lixo
  • Nebenkosten: despesas adicionais (energia, internet = à parte)
  • Kaution: caução (geralmente 3 meses de aluguel)
  
  DOCUMENTOS PARA ALUGAR:
  • Schufa-Auskunft: certidão de crédito
  • Einkommensnachweis: comprovante de renda
  • Gehaltsnachweise: contracheques dos últimos 3 meses
  
  MÜLLTRENNUNG (separação de lixo OBRIGATÓRIA):
  • Restmüll (cinza): lixo geral
  • Papier (azul): papel e papelão
  • Gelber Sack/Tonne (amarelo): plásticos e embalagens
  • Bio (verde/marrom): orgânicos
  • Glas: vidro (por cor: branco, verde, marrom)
  
  NACHTRUHE (silêncio noturno):
  • Das 22h às 6h: sem barulho, sem furadeira
  • Domingos: silêncio o dia todo
  • Mittagsruhe: 13h às 15h em alguns prédios`,
      notes:['Mülltrennung é lei — multas para quem não separa','Kaution = caução. Deve ser devolvida após saída (com juros!)'],
      vocab:[{de:'die Miete',pt:'o aluguel'},{de:'die Nebenkosten',pt:'as despesas'},{de:'die Mülltrennung',pt:'separação de lixo'},{de:'die Kaution',pt:'a caução'},{de:'die Nachtruhe',pt:'o silêncio noturno'}],
      examples:[]
    }
  ],
  'a1-cap12':[
    { slug:'a1-l12-1', sort:1, title_pt:'Diálogo: Jonas planeja viagem a Berlim', title_de:'Dialog: Reise nach Berlin',
      rule:'nach + cidade/país (sem artigo). mit dem Zug/Bus/Auto = de trem/ônibus/carro.',
      content:`DIÁLOGO:
  Jonas: Ich möchte im Sommer nach Berlin fahren.
  Lena: Wie möchtest du reisen?
  Jonas: Mit dem Zug. Das ist bequem und umweltfreundlich.
  Lena: Wie lange dauert die Fahrt?
  Jonas: Etwa 4 Stunden mit dem ICE.
  Lena: Vergiss deinen Ausweis nicht!
  Jonas: Was kann man in Berlin machen?
  Lena: Das Brandenburger Tor, den Reichstag, die Museumsinsel.
  Jonas: Und abends?
  Lena: In Kreuzberg essen gehen — viele internationale Restaurants.
  Jonas: Wie komme ich zum Hotel?
  Lena: Nimm die U-Bahn. Direkt unter dem Bahnhof.
  Jonas: Danke! Ich schicke dir Fotos!
  Lena: Schöne Reise und viel Spaß!
  
  TRADUÇÃO:
  Jonas: Quero ir a Berlim no verão.
  Lena: Como você quer viajar?
  Jonas: De trem. É confortável e ecológico.
  Lena: Quanto tempo dura a viagem?
  Jonas: Cerca de 4 horas com o ICE.
  Lena: Não esqueça seu documento!
  Jonas: O que se pode fazer em Berlim?
  Lena: Portão de Brandenburgo, Reichstag, Ilha dos Museus.
  Jonas: E à noite?
  Lena: Jantar em Kreuzberg — muitos restaurantes internacionais.
  Jonas: Como chego ao hotel?
  Lena: Pega o metrô. Direto embaixo da estação.
  Jonas: Obrigado! Te mando fotos!
  Lena: Boa viagem e se divirta!`,
      notes:['nach + cidade: nach Berlin, nach München. SEM artigo!','in + país feminino/plural (com artigo): in die Schweiz, in die USA','mit dem Zug/Bus/Auto/Flugzeug = de trem/ônibus/carro/avião'],
      vocab:[{de:'reisen',pt:'viajar'},{de:'der Zug',pt:'o trem'},{de:'das Flugzeug',pt:'o avião'},{de:'der Bus',pt:'o ônibus'},{de:'der Bahnhof',pt:'a estação'},{de:'das Ticket',pt:'o bilhete'},{de:'buchen',pt:'reservar'},{de:'dauern',pt:'durar'},{de:'etwa',pt:'cerca de'},{de:'umweltfreundlich',pt:'ecológico'},{de:'umsteigen',pt:'fazer baldeação'}],
      examples:[{de:'Ich fahre nach Berlin.',pt:'Vou a Berlim.'},{de:'Mit dem Zug dauert es 4 Stunden.',pt:'De trem leva 4 horas.'},{de:'Wo steigst du ein?',pt:'Onde você embarca?'}]
    },
    { slug:'a1-l12-2', sort:2, title_pt:'Transportes e Preposições de Destino', title_de:'Verkehrsmittel & Richtungspräpositionen',
      rule:'nach + cidade. in + país com artigo. zu + pessoa/local. mit dem = de (transporte).',
      content:`PREPOSIÇÕES DE DESTINO:
  
  NACH + cidade/país sem artigo:
  nach Berlin | nach Deutschland | nach Hause (para casa)
  
  IN + país com artigo (acusativo):
  in die Schweiz (fem) | in die USA (plural) | in den Iran (masc)
  
  ZU + pessoa/local específico (dativo):
  zum Arzt (zu + dem) | zur Post (zu + der) | zu meinen Eltern
  
  MIT DEM + meio de transporte (dativo):
  mit dem Zug | mit dem Auto | mit dem Bus | mit dem Fahrrad
  mit der U-Bahn | mit der S-Bahn | mit dem Flugzeug
  
  OUTROS DESTINOS:
  ans Meer (für praia) | in die Berge (nas montanhas) | aufs Land (para o campo)`,
      notes:['nach = mais comum para destinos | zu = para pessoas e locais específicos','ZU + DEM = ZUM | ZU + DER = ZUR (contrações obrigatórias)'],
      vocab:[],
      examples:[{de:'Ich fahre mit dem Zug nach Hamburg.',pt:'Vou de trem para Hamburgo.'},{de:'Sie fliegt in die USA.',pt:'Ela voa para os EUA.'},{de:'Ich gehe zum Arzt.',pt:'Vou ao médico.'}]
    },
    { slug:'a1-l12-3', sort:3, title_pt:'Cultura: Viagens & Turismo na Alemanha', title_de:'Kultur: Reisen & Tourismus',
      rule:'Deutsche Bahn (DB): Sparpreis = tarifa promocional. Compre online com antecedência!',
      content:`TRANSPORTE NA ALEMANHA:
  • Deutsche Bahn: Sistema ferroviário nacional
  • ICE: Trem de alta velocidade (até 300 km/h)
  • Sparpreis: Tarifa promocional (até 70% de desconto se comprar cedo)
  • BahnCard: Cartão de desconto para viajantes frequentes
  • Deutschlandticket: 49€/mês para todos os transportes locais
  
  DESTINOS POPULARES:
  • Berlim: capital, cultura, história
  • Munique: Oktoberfest, Alpes, arquitetura
  • Hamburgo: porto, vida noturna, Speicherstadt
  • Colônia: catedral gótica, carnaval
  • Frankfurt: centro financeiro, aeroporto hub
  
  DICAS DE VIAGEM:
  • Buchungsnummer: guarde sempre o número de reserva
  • Gleis: plataforma do trem. Preste atenção!
  • Bahnsteig = Gleis: mesma coisa`,
      notes:['Deutschlandticket (49€/mês) revolucionou o transporte público a partir de 2023','Sparpreis: quanto mais cedo comprar, mais barato. Não reembolsável!'],
      vocab:[{de:'die Deutsche Bahn',pt:'a ferrovia nacional'},{de:'der Sparpreis',pt:'tarifa promocional'},{de:'das Gleis',pt:'a plataforma'},{de:'die Reservierung',pt:'a reserva'},{de:'umweltfreundlich',pt:'ecológico'}],
      examples:[]
    }
  ],
  'a1-cap13':[
    { slug:'a1-l13-1', sort:1, title_pt:'Diálogo: No Restaurante', title_de:'Dialog: Im Restaurant',
      rule:'Pedir: Ich möchte / Ich hätte gern + acusativo. Conta: Die Rechnung, bitte!',
      content:`DIÁLOGO:
  Kellner: Guten Abend! Was möchten Sie?
  Gast: Ich hätte gern die Tomatensuppe und das Schnitzel.
  Kellner: Und zu trinken?
  Gast: Ein Wasser ohne Kohlensäure, bitte.
  Kellner: Gerne! Noch etwas?
  Gast: Ja, einen Salat, bitte.
  Kellner: Hat es Ihnen geschmeckt?
  Gast: Ja, sehr gut, danke!
  Kellner: Möchten Sie noch eine Nachspeise?
  Gast: Nein, danke. Die Rechnung, bitte.
  Kellner: Zusammen oder getrennt?
  Gast: Zusammen, bitte. Das macht 24,50 Euro.
  Gast: Stimmt so! (sem troco)
  
  TRADUÇÃO:
  Garçom: Boa noite! O que o(a) senhor(a) deseja?
  Cliente: Eu gostaria da sopa de tomate e do Schnitzel.
  Garçom: E para beber?
  Cliente: Uma água sem gás, por favor.
  Garçom: Com prazer! Mais alguma coisa?
  Cliente: Sim, uma salada, por favor.
  Garçom: Estava bom?
  Cliente: Sim, muito, obrigado!
  Garçom: Gostaria de sobremesa?
  Cliente: Não, obrigado. A conta, por favor.
  Garçom: Junto ou separado?
  Cliente: Junto, por favor. São 24,50 euros.
  Cliente: Pode ficar! (sem troco)`,
      notes:['Ich möchte / Ich hätte gern = formas educadas de pedir','zusammen (junto) vs. getrennt (separado) na conta','Trinkgeld: gorjeta opcional, geralmente 5-10%. "Stimmt so" = pode ficar o troco.'],
      vocab:[{de:'die Speisekarte',pt:'o cardápio'},{de:'die Vorspeise',pt:'a entrada'},{de:'das Hauptgericht',pt:'o prato principal'},{de:'die Nachspeise',pt:'a sobremesa'},{de:'Ich möchte/hätte gern',pt:'Eu gostaria de'},{de:'die Rechnung',pt:'a conta'},{de:'das Trinkgeld',pt:'a gorjeta'},{de:'schmecken',pt:'ser gostoso'},{de:'zusammen/getrennt',pt:'junto/separado'},{de:'stimmt so',pt:'pode ficar o troco'}],
      examples:[{de:'Ich hätte gern einen Salat.',pt:'Eu gostaria de uma salada.'},{de:'Für mich einen Kaffee mit Milch.',pt:'Para mim um café com leite.'},{de:'Die Rechnung, bitte. Zusammen.',pt:'A conta, por favor. Junto.'}]
    },
    { slug:'a1-l13-2', sort:2, title_pt:'Möchten e Hätte gern no Restaurante', title_de:'möchten & hätte gern',
      rule:'möchten + infinitivo no final. hätte gern + substantivo direto.',
      content:`MÖCHTEN (modal — querer/gostar):
  Conjugação:
  ich möchte | du möchtest | er/sie/es möchte
  wir möchten | ihr möchtet | sie/Sie möchten
  
  Uso: modal + infinitivo no FINAL
  Ich möchte ein Wasser trinken.
  Ich möchte bezahlen.
  
  HÄTTE GERN (condicional — gostaria):
  Estrutura: hätte gern + substantivo (acusativo)
  Ich hätte gern einen Kaffee.
  Sie hätte gern die Suppe.
  
  DIFERENÇA PRÁTICA:
  möchten = mais genérico | hätte gern = pedido específico
  Ambas são igualmente educadas.
  
  PARA CHAMAR O GARÇOM:
  Entschuldigung! (Com licença!)
  Herr Ober! (Garçom! — formal)`,
      notes:['möchten: ich e er têm a mesma forma (möchte) — como todos os modais!','hätte gern = condicional de haben. Mais direto para pedidos.'],
      vocab:[],
      examples:[{de:'Ich möchte bezahlen.',pt:'Eu gostaria de pagar.'},{de:'Ich hätte gern einen Salat.',pt:'Eu gostaria de uma salada.'},{de:'Wir möchten die Speisekarte.',pt:'Gostaríamos do cardápio.'}]
    },
    { slug:'a1-l13-3', sort:3, title_pt:'Cultura: Gastronomia Alemã', title_de:'Kultur: Deutsche Küche',
      rule:'Guten Appetit! dizer antes de comer. Schnitzel, Wurst, Brot — clássicos alemães.',
      content:`CULINÁRIA ALEMÃ:
  • Brot: Mais de 300 tipos. Sauerteigbrot (fermentação natural) é o mais amado.
  • Wurst: Bratwurst, Weißwurst, Currywurst. Cada região tem a sua!
  • Schnitzel: Carne empanada. Wiener Art = estilo vienense (vitela).
  • Brezel: Pretzel. Salgadinho típico da Baviera.
  • Kartoffeln: Batatas em mil formas: Kartoffelsalat, Bratkartoffeln, Knödel...
  
  BEBIDAS:
  • Bier: +1.300 cervejarias. Reinheitsgebot desde 1516.
  • Wein: Regiões vinícolas: Mosel, Rheingau, Baden.
  • Apfelschorle: Suco de maçã com água com gás. Bebida nacional não alcoólica!
  • Kaffee: Alemães adoram café. Kaffee und Kuchen = tradição.
  
  RESTAURANTES:
  • Gaststätte: restaurante tradicional
  • Biergarten: cervejaria ao ar livre
  • Imbiss: lanchonete rápida`,
      notes:['Weißwurst = salsicha branca bávara. Regra: comer antes do meio-dia!','Reinheitsgebot = lei de pureza da cerveja (água, malte, lúpulo, fermento)'],
      vocab:[{de:'das Schnitzel',pt:'o Schnitzel (carne empanada)'},{de:'die Wurst',pt:'a salsicha'},{de:'das Brot',pt:'o pão'},{de:'die Gaststätte',pt:'o restaurante tradicional'},{de:'Guten Appetit!',pt:'Bom apetite!'}],
      examples:[]
    }
  ],
  'a1-cap14':[
    { slug:'a1-l14-1', sort:1, title_pt:'Diálogo: Sentimentos e Saúde', title_de:'Dialog: Gefühle und Gesundheit',
      rule:'Sentimentos: Ich bin + adj. Dor: Es tut mir weh / Mein Kopf tut weh.',
      content:`DIÁLOGO:
  Lisa: Wie geht es dir heute, Tom?
  Tom: Ich fühle mich nicht gut. Ich bin müde und mein Kopf tut weh.
  Lisa: Das tut mir leid! Bist du krank?
  Tom: Vielleicht. Ich habe auch Halsschmerzen.
  Lisa: Geh zum Arzt! Oder ruh dich aus.
  Tom: Ich nehme eine Tablette. Normalerweise bin ich fit und gesund.
  Lisa: Gut! Gute Besserung, Tom!
  Tom: Danke, Lisa. Du bist sehr nett.
  Lisa: Herzlichen Glückwunsch zum Geburtstag übrigens!
  Tom: Oh! Danke! Heute bin ich krank, aber morgen feiere ich!
  
  TRADUÇÃO:
  Lisa: Como vai você hoje, Tom?
  Tom: Não me sinto bem. Estou cansado e minha cabeça dói.
  Lisa: Sinto muito! Você está doente?
  Tom: Talvez. Também tenho dor de garganta.
  Lisa: Vai ao médico! Ou descanse.
  Tom: Vou tomar um comprimido. Normalmente sou ativo e saudável.
  Lisa: Ótimo! Melhoras, Tom!
  Tom: Obrigado, Lisa. Você é muito legal.
  Lisa: Parabéns pelo aniversário a propósito!
  Tom: Oh! Obrigado! Hoje estou doente, mas amanhã comemoro!`,
      notes:['sich fühlen + adj: Ich fühle mich gut/schlecht/müde','tun weh: Es tut mir weh. Mein Kopf tut weh. Was tut dir weh?','Gute Besserung = melhoras (desejo de melhora)'],
      vocab:[{de:'sich fühlen',pt:'sentir-se'},{de:'müde',pt:'cansado'},{de:'krank',pt:'doente'},{de:'gesund',pt:'saudável'},{de:'glücklich',pt:'feliz'},{de:'traurig',pt:'triste'},{de:'nervös',pt:'nervoso'},{de:'weh tun',pt:'doer'},{de:'der Kopf',pt:'a cabeça'},{de:'der Hals',pt:'a garganta'},{de:'der Bauch',pt:'a barriga'},{de:'Gute Besserung!',pt:'Melhoras!'},{de:'Herzlichen Glückwunsch!',pt:'Parabéns!'}],
      examples:[{de:'Ich fühle mich glücklich und gesund.',pt:'Eu me sinto feliz e saudável.'},{de:'Mein Kopf tut weh.',pt:'Minha cabeça dói.'},{de:'Das tut mir leid.',pt:'Sinto muito.'}]
    },
    { slug:'a1-l14-2', sort:2, title_pt:'Adjetivos Predicativos e Sentimentos', title_de:'Prädikative Adjektive & Gefühle',
      rule:'Sein + adj = invariável: Er ist krank. Sie ist müde. Es ist heiß.',
      content:`ADJETIVOS PREDICATIVOS (após sein):
  = Forma básica. NÃO MUDA!
  Er ist krank. (não: kranke/kranken)
  Sie ist müde. (não: müdige)
  Das Wetter ist kalt. (não: kaltes)
  
  EMOÇÕES POSITIVAS:
  glücklich = feliz | froh = contente | fröhlich = alegre
  aufgeregt = animado/nervoso | verliebt = apaixonado
  begeistert = entusiasmado | zufrieden = satisfeito
  
  EMOÇÕES NEGATIVAS:
  traurig = triste | wütend = com raiva | gestresst = estressado
  nervös = nervoso | enttäuscht = decepcionado | ängstlich = ansioso
  erschöpft = exausto | einsam = solitário
  
  DOR E SAÚDE:
  weh tun: Mein Kopf tut weh. Was tut dir weh?
  sich fühlen: Ich fühle mich gut/schlecht/müde.
  krank sein: Sie ist krank. Er fühlt sich nicht gut.`,
      notes:['Predicativo (após sein) = invariável. Atributivo (antes do subst) = declina.','sich fühlen = verbo reflexivo: ich fühle MICH, du fühlst DICH'],
      vocab:[],
      examples:[{de:'Er ist sehr müde.',pt:'Ele está muito cansado.'},{de:'Sie ist krank und bleibt zu Hause.',pt:'Ela está doente e fica em casa.'},{de:'Ich bin aufgeregt!',pt:'Estou animado!'}]
    },
    { slug:'a1-l14-3', sort:3, title_pt:'Cultura: Saúde & Sistema de Saúde Alemão', title_de:'Kultur: Gesundheit & Krankenkasse',
      rule:'Krankenversicherung é obrigatória para todos. Kassenarzt = médico do plano público.',
      content:`SISTEMA DE SAÚDE:
  • Krankenversicherung: seguro saúde OBRIGATÓRIO para todos
  • Gesetzliche Kassen (públicas): AOK, TK, DAK, Barmer...
  • Private Krankenversicherung: para renda alta ou autônomos
  • Zuzahlung: copagamento simbólico (geralmente 10€/trimestre)
  
  CONSULTA MÉDICA:
  • Kassenarzt: médico credenciado pelo plano público
  • Termin: agendar com antecedência (pode demorar semanas!)
  • Überweisung: encaminhamento para especialista
  • Rezept: receita médica (necessária para muitos remédios)
  
  FARMÁCIAS:
  • Apotheke: farmácias bem equipadas, com farmacêutico presente
  • Cruz verde = símbolo da farmácia
  • Notdienst: farmácia de plantão (fins de semana)
  
  ATESTADO:
  • Krankschreibung: atestado obrigatório após 3 dias de falta`,
      notes:['Termin beim Arzt = consulta médica. Ligue ou use app como Doctolib para agendar','Apotheke vs. Drogerie: Apotheke = remédios com farmacêutico. Drogerie (dm, Rossmann) = cosméticos e vitaminas.'],
      vocab:[{de:'die Krankenkasse',pt:'o plano de saúde'},{de:'der Arzt/die Ärztin',pt:'o/a médico/a'},{de:'die Apotheke',pt:'a farmácia'},{de:'das Rezept',pt:'a receita médica'},{de:'die Krankmeldung',pt:'o atestado médico'}],
      examples:[]
    }
  ],
  'a1-cap15':[
    { slug:'a1-l15-1', sort:1, title_pt:'Diálogo: Descrever Pessoas', title_de:'Dialog: Personen beschreiben',
      rule:'aussehen (separável): Er sieht gut aus. Adjetivos após sein não declinam.',
      content:`DIÁLOGO:
  Maria: Wer ist das auf dem Foto?
  Karl: Das ist meine Freundin Sophie.
  Maria: Wie sieht sie aus?
  Karl: Sie hat lange, blonde Haare und blaue Augen. Sie ist 1,70 m groß.
  Maria: Sie sieht sehr freundlich aus!
  Karl: Ja! Und sie ist genauso kreativ wie du.
  Maria: Das ist ein Kompliment! Wie ist ihre Persönlichkeit?
  Karl: Sie ist sehr intelligent, lustig und zuverlässig.
  Maria: Klingt toll! Wann lerne ich sie kennen?
  Karl: Nächste Woche! Sie kommt zu meiner Party.
  
  TRADUÇÃO:
  Maria: Quem é esse na foto?
  Karl: É minha namorada Sophie.
  Maria: Como ela é?
  Karl: Ela tem cabelos longos e loiros e olhos azuis. Mede 1,70 m.
  Maria: Ela parece muito simpática!
  Karl: Sim! E é tão criativa quanto você.
  Maria: Que elogio! Como é a personalidade dela?
  Karl: É muito inteligente, engraçada e confiável.
  Maria: Parece ótima! Quando a conheço?
  Karl: Semana que vem! Ela vem à minha festa.`,
      notes:['aussehen (separável): sieht...aus. Wie siehst du aus? Er sieht müde aus.','Adjetivos PREDICATIVOS (após sein) = invariáveis','COMPARAÇÃO: genauso...wie = tão...quanto'],
      vocab:[{de:'aussehen',pt:'parecer / ter aparência'},{de:'die Haare',pt:'os cabelos'},{de:'das Auge',pt:'o olho'},{de:'groß/klein',pt:'alto/baixo'},{de:'dick/dünn',pt:'gordo/magro'},{de:'jung/alt',pt:'jovem/velho'},{de:'freundlich',pt:'simpático'},{de:'intelligent',pt:'inteligente'},{de:'lustig',pt:'engraçado'},{de:'zuverlässig',pt:'confiável'},{de:'genauso...wie',pt:'tão...quanto'}],
      examples:[{de:'Sie hat lange, blonde Haare.',pt:'Ela tem cabelos longos e loiros.'},{de:'Er sieht heute müde aus.',pt:'Ele parece cansado hoje.'},{de:'Sie ist genauso kreativ wie ihre Schwester.',pt:'Ela é tão criativa quanto sua irmã.'}]
    },
    { slug:'a1-l15-2', sort:2, title_pt:'Adjetivos: Predicativo vs. Atributivo', title_de:'Prädikativ vs. attributiv',
      rule:'APÓS sein: invariável. ANTES do substantivo: terminações de concordância.',
      content:`PREDICATIVO (após sein/werden/bleiben):
  = INVARIÁVEL
  Das Haus ist schön. | Er ist jung. | Sie ist freundlich.
  
  ATRIBUTIVO (antes do substantivo):
  = CONCORDÂNCIA com gênero, caso, número
  (A1: aprenda os casos mais comuns)
  ein netter Mann | eine nette Frau | ein nettes Kind
  der nette Mann | die nette Frau | das nette Kind
  
  AUSSEHEN (separável = parecer):
  Er sieht gut aus.
  Sie sieht müde aus.
  Wie siehst du aus?
  
  COMPARAÇÕES (A1):
  genauso + adj + wie = tão...quanto
  Er ist genauso groß wie ich.
  Sie ist genauso intelligent wie ihr Bruder.
  
  SUPERLATIVO BÁSICO:
  der/die/das + adj + -ste
  das größte Haus | die schönste Stadt`,
      notes:['Predicativo após sein = SEMPRE forma básica, sem terminação','Atributivo antes do subst = precisa de terminação (aprenda gradualmente)'],
      vocab:[],
      examples:[{de:'Das Kleid ist rot.',pt:'O vestido é vermelho.'},{de:'Das ist ein rotes Kleid.',pt:'Isso é um vestido vermelho.'},{de:'Er sieht freundlich aus.',pt:'Ele parece simpático.'}]
    },
    { slug:'a1-l15-3', sort:3, title_pt:'Cultura: Aparência & Estética Alemã', title_de:'Kultur: Aussehen & Ästhetik',
      rule:'Direktheit: Alemães fazem elogios diretos e sinceros. Comentários sobre o corpo são menos comuns.',
      content:`APARÊNCIA E CULTURA:
  • Sachlichkeit: objetividade. Elogios diretos e genuínos.
  • Körperbild: Comentários sobre peso ou aparência são considerados invasivos.
  • Kleidung: Funcionalidade > status. Roupas não precisam mostrar riqueza.
  • Schönheitsideale: Saúde e naturalidade são valorizadas.
  
  ELOGIOS COMUNS:
  • Du siehst toll aus! (Você está ótimo/a!)
  • Das steht dir gut! (Fica bem em você!)
  • Was für ein schönes Lächeln! (Que sorriso bonito!)
  
  TATTOOS & PIERCING:
  • Aceitos em contextos informais
  • Em ambientes de trabalho formais: atenção
  • Cada vez mais normalizados nas cidades grandes
  
  SAÚDE COMO VALOR:
  • Fitness-Studios (academias) cada vez mais populares
  • Gesunde Ernährung (alimentação saudável) valorizada
  • Bio-Lebensmittel: consumo consciente em alta`,
      notes:['Perguntas sobre peso ou aparência física são consideradas invasivas na Alemanha','Du siehst gut aus! é um elogio muito bem recebido'],
      vocab:[{de:'Du siehst gut aus!',pt:'Você está bem!'},{de:'Das steht dir gut!',pt:'Fica bem em você!'},{de:'die Schönheit',pt:'a beleza'},{de:'das Aussehen',pt:'a aparência'}],
      examples:[]
    }
  ],
  'a1-cap16':[
    { slug:'a1-l16-1', sort:1, title_pt:'Diálogo: Verbos Importantes', title_de:'Dialog: Wichtige Verben',
      rule:'Irregulares e→i: essen→isst, sprechen→spricht, lesen→liest. Modais + infinitivo no FINAL.',
      content:`DIÁLOGO:
  Paul: Weißt du, wo der nächste Supermarkt ist?
  Nina: Ja! Geradeaus und dann rechts. Kennst du diese Straße?
  Paul: Nein, ich bin neu hier. Kannst du mir helfen?
  Nina: Natürlich! Ich muss auch einkaufen. Wollen wir zusammen gehen?
  Paul: Ja, gerne! Ich muss noch Brot und Milch kaufen.
  Nina: Ich auch. Und ich will noch Kaffee trinken. Magst du Kaffee?
  Paul: Ja, sehr! Ich trinke jeden Morgen Kaffee.
  Nina: Perfekt! Dann gehen wir erst einkaufen, dann Kaffee trinken.
  Paul: Super! Ich freue mich!
  
  TRADUÇÃO:
  Paul: Você sabe onde fica o próximo supermercado?
  Nina: Sim! Em frente e depois à direita. Conhece esta rua?
  Paul: Não, sou novo aqui. Pode me ajudar?
  Nina: Claro! Também preciso fazer compras. Quer ir juntos?
  Paul: Sim, com prazer! Preciso comprar pão e leite.
  Nina: Eu também. E quero tomar café. Você gosta de café?
  Paul: Sim, muito! Tomo café toda manhã.
  Nina: Perfeito! Primeiro fazemos compras, depois tomamos café.
  Paul: Ótimo! Estou animado!`,
      notes:['IRREGULARES (e→i): essen→isst | sprechen→spricht | lesen→liest | geben→gibt | sehen→sieht','IRREGULARES (a→ä): fahren→fährt | schlafen→schläft | laufen→läuft','kennen = conhecer (pessoa/lugar) vs. wissen = saber (fato)'],
      vocab:[{de:'können',pt:'poder/saber'},{de:'müssen',pt:'precisar/ter que'},{de:'wollen',pt:'querer'},{de:'dürfen',pt:'poder (permissão)'},{de:'sollen',pt:'dever'},{de:'mögen',pt:'gostar'},{de:'kennen',pt:'conhecer'},{de:'wissen',pt:'saber (fato)'},{de:'essen→isst',pt:'comer (irregular)'},{de:'sprechen→spricht',pt:'falar (irregular)'},{de:'lesen→liest',pt:'ler (irregular)'}],
      examples:[{de:'Er spricht sehr gut Deutsch.',pt:'Ele fala alemão muito bem.'},{de:'Kannst du mir helfen?',pt:'Pode me ajudar?'},{de:'Kennst du Berlin?',pt:'Conhece Berlim?'},{de:'Ich weiß, dass er kommt.',pt:'Sei que ele vem.'}]
    },
    { slug:'a1-l16-2', sort:2, title_pt:'Verbos Modais', title_de:'Modalverben',
      rule:'Modal na posição 2 + infinitivo no FINAL. ich/er têm a mesma forma.',
      content:`VERBOS MODAIS — CONJUGAÇÃO:
            können  müssen  wollen  dürfen  mögen   sollen
  ich       kann    muss    will    darf    mag     soll
  du        kannst  musst   willst  darfst  magst   sollst
  er/sie/es kann    muss    will    darf    mag     soll
  wir       können  müssen  wollen  dürfen  mögen   sollen
  ihr       könnt   müsst   wollt   dürft   mögt    sollt
  sie/Sie   können  müssen  wollen  dürfen  mögen   sollen
  
  SIGNIFICADOS:
  können = poder (capacidade) / saber fazer
  müssen = precisar / ter que (obrigação)
  wollen = querer (desejo forte)
  dürfen = poder (permissão)
  mögen = gostar
  sollen = dever (obrigação externa)
  
  ESTRUTURA: Modal(2) + ... + Infinitivo(final)
  Ich muss heute arbeiten.
  Wir wollen nach Berlin fahren.
  Du kannst morgen kommen.`,
      notes:['ich e er/sie/es têm a MESMA forma em todos os modais','Infinitivo vai SEMPRE ao final da frase'],
      vocab:[],
      examples:[{de:'Ich kann schwimmen.',pt:'Sei nadar.'},{de:'Du musst jetzt lernen.',pt:'Você precisa estudar agora.'},{de:'Wir wollen nach Berlin fahren.',pt:'Queremos ir a Berlim.'}]
    },
    { slug:'a1-l16-3', sort:3, title_pt:'Cultura: Comunicação Alemã', title_de:'Kultur: Kommunikationsstil',
      rule:'Direktheit: Alemães são diretos. "Nein" é respeitado. Sem rodeios!',
      content:`ESTILO DE COMUNICAÇÃO:
  • Direkt: Alemães dizem o que pensam. Não é grosseria — é respeito!
  • Auf den Punkt kommen: Ir direto ao ponto. Sem enrolação.
  • Smalltalk: Menos comum. Prefer conversas com substância.
  • Nein: Uma recusa direta é respeitada. Não se insiste.
  
  COMUNICAÇÃO ESCRITA:
  • E-mails respondidos dentro do prazo comercial
  • Förmlich (formal): Sehr geehrte Damen und Herren (Dear Sir/Madam)
  • Informal: Hallo / Hi / Lieber/e
  
  PRIVACIDADE:
  • Datenschutz: privacidade muito valorizada
  • Não compartilhe dados pessoais de terceiros
  • GDPR (DSGVO): lei de proteção de dados rigorosa
  
  FEEDBACK:
  • Kritik (crítica construtiva) é bem-vinda em ambientes de trabalho
  • Lob (elogio) público não é tão comum quanto no Brasil
  • Meckern (reclamar) é quase um esporte nacional!`,
      notes:['"Nein ist eine vollständige Antwort" (Não é uma resposta completa) — respeite o não dos alemães','Meckern = reclamar. Alemães reclamam bastante, mas isso não significa que estão com raiva!'],
      vocab:[{de:'direkt sein',pt:'ser direto'},{de:'auf den Punkt kommen',pt:'ir direto ao ponto'},{de:'das Feedback',pt:'o feedback'},{de:'die Kritik',pt:'a crítica'},{de:'das Lob',pt:'o elogio'}],
      examples:[]
    }
  ],
  'a1-cap17':[
    { slug:'a1-l17-1', sort:1, title_pt:'Diálogo: Julia e Lena no Mercado', title_de:'Dialog: Mit Freunden interagieren',
      rule:'Dativo: mir, dir, ihm, ihr. Preposições: mit/zu/von + dativo.',
      content:`DIÁLOGO:
  Julia: Kommst du mit mir zum Markt?
  Lena: Gerne! Ich muss noch etwas von meiner Mutter holen.
  Julia: Kein Problem. Schenkt ihr deinem Bruder zum Geburtstag etwas?
  Lena: Ja, ich kaufe ihm ein Buch. Schenkst du deiner Freundin etwas?
  Julia: Ja, ich gebe ihr Blumen. Sie mag Rosen sehr gern.
  Lena: Hilfst du mir bitte mit den Taschen?
  Julia: Natürlich! Ich trage sie für dich.
  Lena: Danke, Julia! Du bist eine gute Freundin.
  Julia: Gern geschehen! Der Markt schließt um 18 Uhr.
  Lena: Von hier sind es nur zehn Minuten zu Fuß.
  
  TRADUÇÃO:
  Julia: Você vem comigo ao mercado?
  Lena: Com prazer! Ainda preciso pegar algo da minha mãe.
  Julia: Sem problema. Vocês dão algo ao seu irmão pelo aniversário?
  Lena: Sim, compro um livro para ele. Você dá algo à sua amiga?
  Julia: Sim, dou flores a ela. Ela gosta muito de rosas.
  Lena: Você me ajuda com as sacolas?
  Julia: Claro! Carrego elas para você.
  Lena: Obrigada, Julia! Você é uma boa amiga.
  Julia: De nada! O mercado fecha às 18h.
  Lena: Daqui são apenas dez minutos a pé.`,
      notes:['Pronomes dativo: mir, dir, ihm, ihr, uns, euch, ihnen','Artigos dativo: der/das→dem, die→der, plural→den (+n no substantivo)','Verbos + dativo: helfen, danken, gefallen, gehören, schenken, geben'],
      vocab:[{de:'mir',pt:'a/para mim'},{de:'dir',pt:'a/para você'},{de:'ihm/ihr',pt:'a/para ele/ela'},{de:'uns/euch',pt:'a/para nós/vocês'},{de:'mit + Dativ',pt:'com + dativo'},{de:'zu + Dativ',pt:'para/a + dativo'},{de:'von + Dativ',pt:'de + dativo'},{de:'bei + Dativ',pt:'na casa de'},{de:'helfen',pt:'ajudar (+ dativo)'},{de:'gefallen',pt:'agradar (+ dativo)'},{de:'gehören',pt:'pertencer (+ dativo)'},{de:'gern geschehen!',pt:'de nada!'}],
      examples:[{de:'Ich helfe dir.',pt:'Eu ajudo você.'},{de:'Ich gehe mit dir zum Markt.',pt:'Vou com você ao mercado.'},{de:'Das Geschenk ist von meinem Bruder.',pt:'O presente é do meu irmão.'}]
    },
    { slug:'a1-l17-2', sort:2, title_pt:'Introdução ao Dativo', title_de:'Einführung in den Dativ',
      rule:'mit/zu/von + dativo sempre. Pronomes: mir/dir/ihm. Artigos: der→dem, die→der, das→dem.',
      content:`PRONOMES PESSOAIS NO DATIVO:
  ich → mir | du → dir | er/es → ihm | sie → ihr
  wir → uns | ihr → euch | sie/Sie → ihnen/Ihnen
  
  ARTIGOS NO DATIVO:
  Masculino: der Mann → dem Mann
  Feminino:  die Frau → der Frau
  Neutro:    das Kind → dem Kind
  Plural:    die Freunde → den Freunden (+n no substantivo!)
  
  PREPOSIÇÕES QUE EXIGEM DATIVO (sempre):
  mit (com): Ich gehe mit dir.
  zu (para/a): Ich gehe zum Markt. (zu + dem = zum)
  von (de): Das ist von meinem Bruder.
  bei (na casa de): Ich wohne bei meinen Eltern.
  nach (para cidades/casa): nach Berlin | nach Hause
  aus (de/proveniente): Ich komme aus Brasilien.
  seit (desde/há): seit drei Jahren
  
  VERBOS QUE REGEM DATIVO:
  helfen | danken | gefallen | gehören | schenken
  Kann ich dir helfen? | Das gehört mir. | Das gefällt mir.`,
      notes:['CONTRAÇÕES obrigatórias: zu+dem=ZUM | zu+der=ZUR | bei+dem=BEIM | von+dem=VOM','Plural dativo: SEMPRE +n no substantivo (den Freunden, den Kindern)'],
      vocab:[],
      examples:[{de:'Ich danke dir sehr.',pt:'Agradeço muito a você.'},{de:'Das Buch gehört mir.',pt:'O livro pertence a mim.'},{de:'Ich gehe zu meiner Mutter.',pt:'Vou à minha mãe.'}]
    },
    { slug:'a1-l17-3', sort:3, title_pt:'Cultura: Interação Social & Cortesia', title_de:'Kultur: Soziale Interaktion',
      rule:'Helfen é valorizado. Vielen Dank é mais formal que Danke. Presentes: abre na frente.',
      content:`CORTESIA ALEMÃ:
  • Helfen (ajudar): Oferecer ajuda (Kann ich helfen?) é bem-visto.
  • Danken: Vielen Dank / Herzlichen Dank soa mais educado que apenas Danke.
  • Bitte: Palavra mágica — por favor / de nada.
  
  PRESENTES:
  • Abre-se na frente de quem deu — sempre!
  • Comentário positivo esperado: "Wie schön! Danke!"
  • Não dar flores vermelhas (símbolo romântico) sem intenção
  
  VISITAS:
  • Ich bin bei Freunden = Estou na casa de amigos (bei + dativo)
  • Sem convite para entrar = não entre!
  • Pünktlichkeit ao visitar = essencial
  
  DATIV NA PRÁTICA:
  • Formulários: Empfänger (destinatário), Absender (remetente)
  • "Wem gehört das?" (De quem é isso? — pergunta com dativo)`,
      notes:['Flores amarelas = inveja em algumas regiões. Seguro: escolha flores mistas','Klingeln (tocar a campainha) antes de entrar, mesmo se a porta estiver aberta'],
      vocab:[{de:'Kann ich helfen?',pt:'Posso ajudar?'},{de:'Vielen Dank!',pt:'Muito obrigado!'},{de:'Herzlichen Dank!',pt:'Muito obrigado! (mais formal)'},{de:'Ich bin bei Freunden.',pt:'Estou na casa de amigos.'}],
      examples:[]
    }
  ],
  'a1-cap18':[
    { slug:'a1-l18-1', sort:1, title_pt:'Diálogo: Fazendo Perguntas', title_de:'Dialog: Fragen stellen',
      rule:'W-Fragen: Fragewort(1)+Verbo(2)+Sujeito(3). Ja/Nein: Verbo(1)+Sujeito(2). weil: verbo no FINAL.',
      content:`DIÁLOGO (entrevista escolar):
  Interviewer: Wie heißt du?
  Sophie: Ich heiße Sophie. Ich bin 16 Jahre alt.
  Interviewer: Woher kommst du?
  Sophie: Ich komme aus Frankfurt, wohne aber jetzt in Berlin.
  Interviewer: Was machst du gern?
  Sophie: Ich lese gern Bücher und höre Musik.
  Interviewer: Warum lernst du Deutsch?
  Sophie: Weil ich in Deutschland studieren möchte.
  Interviewer: Wie lange lernst du schon?
  Sophie: Seit einem Jahr. Es macht Spaß!
  Interviewer: Hast du Geschwister?
  Sophie: Ja, ich habe eine Schwester.
  Interviewer: Wie alt ist sie?
  Sophie: Sie ist 14 Jahre alt.
  
  TRADUÇÃO:
  Entrevistador: Como você se chama?
  Sophie: Me chamo Sophie. Tenho 16 anos.
  Entrevistador: De onde você é?
  Sophie: Sou de Frankfurt, mas moro em Berlim agora.
  Entrevistador: O que você gosta de fazer?
  Sophie: Gosto de ler livros e ouvir música.
  Entrevistador: Por que você aprende alemão?
  Sophie: Porque quero estudar na Alemanha.
  Entrevistador: Há quanto tempo aprende?
  Sophie: Há um ano. É divertido!
  Entrevistador: Você tem irmãos?
  Sophie: Sim, tenho uma irmã.
  Entrevistador: Quantos anos ela tem?
  Sophie: Ela tem 14 anos.`,
      notes:['W-FRAGEN: Wer/Was/Wo/Woher/Wohin/Wann/Warum/Wie/Wie viel/Welcher','JA/NEIN: Verbo em 1ª posição. Hast du Zeit? Kommst du mit?','WEIL + verbo no FINAL: Ich lerne, weil es wichtig ist.'],
      vocab:[{de:'wer',pt:'quem'},{de:'was',pt:'o quê'},{de:'wo',pt:'onde'},{de:'wann',pt:'quando'},{de:'warum',pt:'por quê'},{de:'wie',pt:'como'},{de:'woher/wohin',pt:'de onde/para onde'},{de:'welcher/welche/welches',pt:'qual (m/f/n)'},{de:'wie viel/wie viele',pt:'quanto/quantos'},{de:'weil + verbo final',pt:'porque + verbo no final'}],
      examples:[{de:'Wann kommst du?',pt:'Quando você vem?'},{de:'Warum lernst du Deutsch?',pt:'Por que você aprende alemão?'},{de:'Hast du Zeit?',pt:'Você tem tempo?'}]
    },
    { slug:'a1-l18-2', sort:2, title_pt:'W-Fragen e Ja/Nein-Fragen', title_de:'W-Fragen & Ja/Nein-Fragen',
      rule:'W-Fragen: W-wort(1)+Verbo(2). Ja/Nein: Verbo(1). weil/dass: verbo no FINAL.',
      content:`W-FRAGEN (com pronome interrogativo):
  Wo wohnst du?
  Was machst du?
  Wann kommst du?
  Wie alt bist du?
  Woher kommst du?
  
  JA/NEIN-FRAGEN (verbo em 1ª posição):
  Wohnst du in Berlin?
  Hast du Zeit?
  Kommst du mit?
  Ist das teuer?
  
  WEIL (porque — verbo no final!):
  Ich lerne, weil es wichtig ist.
  Warum? Weil es Spaß macht.
  Ich bleibe, weil ich müde bin.
  
  DASS (que — verbo no final!):
  Ich glaube, dass er kommt.
  Ich weiß, dass sie in Berlin wohnt.
  
  WENN (quando/se — verbo no final!):
  Wenn ich Zeit habe, gehe ich ins Kino.`,
      notes:['weil/dass/wenn = subordinativas = verbo no FINAL','W-Fragen: W(1) + Verbo(2) + Sujeito(3) | Ja/Nein: Verbo(1) + Sujeito(2)'],
      vocab:[],
      examples:[{de:'Wie viel kostet dieses Buch?',pt:'Quanto custa este livro?'},{de:'Welches Buch liest du?',pt:'Qual livro você lê?'},{de:'Wohnst du in Berlin?',pt:'Você mora em Berlim?'}]
    },
    { slug:'a1-l18-3', sort:3, title_pt:'Cultura: Fazer Perguntas na Alemanha', title_de:'Kultur: Fragen im Alltag',
      rule:'Entschuldigung! antes de qualquer pergunta a desconhecido. Privacidade é sagrada.',
      content:`PERGUNTAS NO COTIDIANO:
  • Sempre comece com: Entschuldigung! (Com licença!)
  • Em lojas: Kann ich Ihnen helfen? (Posso ajudar o(a) senhor(a)?)
  • Pode pedir repetição: Können Sie das bitte wiederholen?
  • Não entendeu? Ich verstehe nicht / Können Sie langsamer sprechen?
  
  TÓPICOS EVITAR COM DESCONHECIDOS:
  • Salário (Gehalt) — muito pessoal!
  • Religião e política — delicados
  • Peso e aparência — invasivo
  • Relacionamentos — privado
  
  TÓPICOS SEGUROS PARA SMALLTALK:
  • Wetter (clima) — sempre funciona!
  • Sport (esportes) — Bundesliga especialmente
  • Reisen (viagens) — muito popular
  • Lokale Nachrichten (notícias locais)
  
  PERGUNTAR NO TRABALHO:
  • Darf ich fragen...? (Posso perguntar...?)
  • Ich habe eine Frage. (Tenho uma pergunta.)
  • Für E-Mails: Ich wäre dankbar für... (Seria grato por...)`,
      notes:['Ohne Entschuldigung jemanden ansprechen = unhöflich (sem "com licença" = grosseiro)','Direkt Fragen sind normal (perguntas diretas são normais) — sem rodeios'],
      vocab:[{de:'Entschuldigung!',pt:'Com licença!'},{de:'Darf ich fragen...?',pt:'Posso perguntar...?'},{de:'Können Sie das wiederholen?',pt:'Pode repetir?'},{de:'Ich verstehe nicht.',pt:'Não entendo.'}],
      examples:[]
    }
  ],
  'a1-cap19':[
    { slug:'a1-l19-1', sort:1, title_pt:'Diálogo: Primeiro Contato na Cidade', title_de:'Dialog: Erstes Gespräch',
      rule:'und/aber/oder = posição 0. weil/dass/wenn = verbo no FINAL.',
      content:`DIÁLOGO:
  Pedro: Entschuldigung, ist dieser Platz frei?
  Laura: Ja, natürlich! Setzen Sie sich.
  Pedro: Danke! Ich bin neu in Berlin. Können Sie mir helfen?
  Laura: Gerne! Woher kommen Sie?
  Pedro: Ich komme aus Brasilien. Ich lerne Deutsch, aber es ist noch schwierig.
  Laura: Das verstehe ich! Deutsch ist nicht einfach.
  Pedro: Haben Sie eine Empfehlung für ein Restaurant?
  Laura: Ich kenne ein gutes Restaurant gleich um die Ecke.
  Pedro: Können wir uns um 19 Uhr am U-Bahnhof treffen?
  Laura: Ja, gerne! Ich freue mich darauf.
  Pedro: Super! Bis dann, Laura!
  Laura: Bis dann, Pedro! Schön, Sie kennenzulernen!
  
  TRADUÇÃO:
  Pedro: Com licença, este lugar está livre?
  Laura: Sim, claro! Sente-se.
  Pedro: Obrigado! Sou novo em Berlim. Pode me ajudar?
  Laura: Com prazer! De onde você é?
  Pedro: Sou do Brasil. Aprendo alemão, mas ainda é difícil.
  Laura: Entendo! Alemão não é fácil.
  Pedro: Tem uma recomendação de restaurante?
  Laura: Conheço um bom restaurante logo na esquina.
  Pedro: Podemos nos encontrar às 19h na estação de metrô?
  Laura: Sim, com prazer! Estou ansiosa.
  Pedro: Ótimo! Até então, Laura!
  Laura: Até então, Pedro! Prazer em conhecê-lo!`,
      notes:['CONECTIVOS: und/aber/oder = posição 0 (não alteram a ordem)','SUBORDINADAS: weil/dass/wenn = verbo SEMPRE no final','sich treffen = se encontrar. Reflexivo: treffe mich / treffen uns'],
      vocab:[{de:'frei',pt:'livre/disponível'},{de:'sich vorstellen',pt:'apresentar-se'},{de:'kennenlernen',pt:'conhecer'},{de:'und/aber/dann/weil/oder',pt:'e/mas/então/porque/ou'},{de:'sich freuen auf',pt:'estar ansioso por'},{de:'Geld abheben',pt:'sacar dinheiro'},{de:'die Empfehlung',pt:'a recomendação'},{de:'gleich um die Ecke',pt:'logo na esquina'},{de:'sich treffen',pt:'se encontrar'},{de:'Bis dann!',pt:'Até então!'}],
      examples:[{de:'Ich bin müde, aber ich gehe aus.',pt:'Estou cansado, mas saio.'},{de:'Weil ich neu bin, brauche ich Hilfe.',pt:'Porque sou novo, preciso de ajuda.'},{de:'Können wir uns um 19 Uhr treffen?',pt:'Podemos nos encontrar às 19h?'}]
    },
    { slug:'a1-l19-2', sort:2, title_pt:'Conectivos e Orações Subordinadas', title_de:'Konjunktionen & Nebensätze',
      rule:'und/aber/oder = posição 0 (ordem normal). weil/dass/wenn = verbo no FINAL.',
      content:`COORDENATIVOS (posição 0 — não mudam a ordem):
  und (e): Ich lerne Deutsch und spiele Gitarre.
  aber (mas): Ich bin müde, aber ich gehe aus.
  oder (ou): Möchtest du Kaffee oder Tee?
  denn (pois/porque): Ich bleibe zu Hause, denn es regnet.
  sondern (mas sim): Nicht ich, sondern du.
  
  SUBORDINATIVOS (verbo conjugado vai para o FINAL):
  weil (porque): Ich lerne, weil es wichtig ist.
  dass (que): Ich glaube, dass er kommt.
  wenn (quando/se): Wenn ich Zeit habe, gehe ich ins Kino.
  obwohl (embora): Ich gehe raus, obwohl es regnet.
  
  ATENÇÃO COM WEIL vs. DENN:
  denn = coordenativo (posição 0, verbo na posição 2)
  weil = subordinativo (verbo no final)
  Ich lerne, DENN es ist wichtig. (verbo na 2ª)
  Ich lerne, WEIL es wichtig ist. (verbo no final)`,
      notes:['DICA: weil "empurra" o verbo para o final. Pense: weil = "porque [razão, e daí o verbo]"','denn vs weil: ambos significam "porque". denn = mais informal, coordenativo.'],
      vocab:[],
      examples:[{de:'Ich lerne, weil es Spaß macht.',pt:'Aprendo porque é divertido.'},{de:'Ich denke, dass Deutsch schwierig ist.',pt:'Acho que alemão é difícil.'},{de:'Wenn ich Zeit habe, rufe ich an.',pt:'Quando tiver tempo, ligo.'}]
    },
    { slug:'a1-l19-3', sort:3, title_pt:'Cultura: Primeiros Contatos na Alemanha', title_de:'Kultur: Erste Kontakte',
      rule:'Beginne mit Sie. Warte auf das Duzen-Angebot. (Comece com Sie. Espere a oferta do Du.)',
      content:`PRIMEIROS CONTATOS:
  • Förmlichkeit: Comece com Sie (formal). A outra pessoa oferecerá o Du.
  • "Wir können uns duzen." = Podemos nos tratar por tu.
  • Händedruck: Aperto de mão firme + contato visual = confiança.
  • Visitenkarte: Troca de cartões ainda é comum em ambientes profissionais.
  
  VIDA EM COMUNIDADE:
  • Wohngemeinschaft (WG): Dividir apartamento é muito comum entre jovens.
  • Nachbarschaft: Cumprimente vizinhos. Tür halten (segurar a porta) é educado.
  • Hausordnung: Regras do prédio. Leia e respeite!
  
  TEMAS DE CONVERSA SEGUROS:
  • Wetter (sempre!) | Sport | Reisen | Essen
  • Localidades e bairros
  
  REDES SOCIAIS NA ALEMANHA:
  • WhatsApp: muito usado
  • Instagram, TikTok: populares entre jovens
  • XING: LinkedIn alemão para networking profissional`,
      notes:['WG = Wohngemeinschaft = república. MUITO comum em cidades universitárias','Darf ich Sie duzen? = Posso te chamar de "tu"? (pedir permissão para mudar para du)'],
      vocab:[{de:'Darf ich mich vorstellen?',pt:'Posso me apresentar?'},{de:'Wir können uns duzen.',pt:'Podemos nos tratar por tu.'},{de:'die Visitenkarte',pt:'o cartão de visita'},{de:'die WG (Wohngemeinschaft)',pt:'o apartamento compartilhado'}],
      examples:[]
    }
  ],
  'a1-cap20':[
    { slug:'a1-l20-1', sort:1, title_pt:'Diálogo de Revisão Final A1', title_de:'A1 Abschluss — Dialog',
      rule:'4 pilares A1: Präsens | Akkusativ | Dativ (básico) | Satzstellung.',
      content:`DIÁLOGO COMPLETO — TODOS OS TEMAS A1:
  Rebeca: Guten Tag! Ich heiße Rebeca und komme aus Brasilien.
  Tim: Hallo Rebeca! Ich bin Tim. Freut mich! Wie lange lernst du schon Deutsch?
  Rebeca: Seit sechs Monaten. Es ist schwierig, aber interessant.
  Tim: Das stimmt! Was machst du gern?
  Rebeca: Ich lese gern und gehe ins Kino. Und du?
  Tim: Ich spiele Gitarre. Möchtest du Kaffee?
  Rebeca: Ja, gerne! Ich hätte gern einen Kaffee mit Milch.
  Tim: Ich gehe zum Café. Kannst du mir helfen? Wo ist die Kasse?
  Rebeca: Die Kasse ist neben dem Ausgang. Ich komme mit!
  Tim: Super! Heute ist das Wetter schön — es ist sonnig und warm.
  Rebeca: Ja! Nach dem Kaffee gehen wir in den Park?
  Tim: Gerne! Wir treffen uns um 15 Uhr dort.
  Rebeca: Einverstanden! Bis dann, Tim!
  
  TRADUÇÃO COMPLETA:
  Rebeca: Boa tarde! Meu nome é Rebeca e sou do Brasil.
  Tim: Olá Rebeca! Sou Tim. Prazer! Há quanto tempo aprende alemão?
  Rebeca: Há seis meses. É difícil, mas interessante.
  Tim: É verdade! O que você gosta de fazer?
  Rebeca: Gosto de ler e ir ao cinema. E você?
  Tim: Toco violão. Quer café?
  Rebeca: Sim, com prazer! Gostaria de um café com leite.
  Tim: Vou ao café. Pode me ajudar? Onde fica o caixa?
  Rebeca: O caixa fica ao lado da saída. Vou com você!
  Tim: Ótimo! Hoje o tempo está bonito — ensolarado e quente.
  Rebeca: Sim! Após o café, vamos ao parque?
  Tim: Com prazer! Nos encontramos às 15h lá.
  Rebeca: Combinado! Até então, Tim!`,
      notes:['ESTRUTURAS ESSENCIAIS A1:','Apresentar-se: Ich heiße... / Ich komme aus...','Pedir: Ich hätte gern... / Können Sie bitte...?','Localização: Die Kasse ist neben dem Ausgang. (Dativo)','Marcar: Wir treffen uns um 15 Uhr. (reflexivo + hora)'],
      vocab:[{de:'stimmen',pt:'estar certo / estar correto'},{de:'üben',pt:'praticar'},{de:'schaffen',pt:'conseguir'},{de:'schwierig/einfach',pt:'difícil/fácil'},{de:'verstehen',pt:'entender'},{de:'wiederholen',pt:'repetir/revisar'},{de:'Übung macht den Meister!',pt:'A prática leva à perfeição!'}],
      examples:[{de:'Ich komme aus Brasilien und lerne Deutsch.',pt:'Sou do Brasil e aprendo alemão.'},{de:'Die Kasse ist neben dem Ausgang.',pt:'O caixa fica ao lado da saída.'},{de:'Wir treffen uns um 15 Uhr.',pt:'Nos encontramos às 15h.'}]
    },
    { slug:'a1-l20-2', sort:2, title_pt:'Resumo Gramatical A1 — Os 4 Pilares', title_de:'A1 Grammatik — 4 Säulen',
      rule:'Verbo na posição 2. Acusativo: só masc muda. Dativ: mit/zu/von. Communicate first!',
      content:`OS 4 PILARES GRAMATICAIS DO A1:
  
  1. PRÄSENS (Presente):
  Regular: -e, -st, -t, -en, -t, -en
  ich lerne, du lernst, er lernt, wir lernen...
  Irregular: sein/haben/modais (decorar!)
  Separável: ich stehe um 7 Uhr auf.
  
  2. AKKUSATIV (Acusativo):
  Só masculino muda: der→den | ein→einen
  Ich kaufe den Apfel (def) / einen Apfel (indef).
  Fem/neut/plural: iguais ao nominativo.
  
  3. DATIV (intro):
  mit/zu/von/bei/nach/aus + dativo
  Pronomes: mir/dir/ihm/ihr/uns/euch/ihnen
  Artigos: der→dem | die→der | das→dem | die(pl)→den(+n)
  
  4. SATZSTELLUNG (Ordem das Palavras):
  Verbo conjugado SEMPRE na posição 2.
  Normal: Ich gehe heute ins Kino.
  Invertida: Heute gehe ich ins Kino.
  weil/dass/wenn: verbo no FINAL.`,
      notes:['Regra de ouro: o verbo conjugado SEMPRE na posição 2 em frases afirmativas','Comunicar > perfeição. Erros são parte do aprendizado!'],
      vocab:[],
      examples:[{de:'Ich kaufe den Apfel.',pt:'Compro a maçã (acusativo masc).'},{de:'Ich gehe mit dir zum Markt.',pt:'Vou com você ao mercado (dativo).'},{de:'Heute gehe ich ins Kino.',pt:'Hoje vou ao cinema (inversão).'}]
    },
    { slug:'a1-l20-3', sort:3, title_pt:'Cultura: Celebrando Conquistas & Próximos Passos', title_de:'Kultur: Erfolge feiern & weiter',
      rule:'Zertifikat A1 vale para vistos e empregos. Com A1 você já se vira no básico!',
      content:`VOCÊ CHEGOU AO A1!
  
  O QUE VOCÊ JÁ CONSEGUE FAZER:
  ✓ Apresentar-se e apresentar outras pessoas
  ✓ Pedir em restaurantes, lojas e supermercados
  ✓ Dar e receber direções
  ✓ Falar sobre sua rotina e hobbies
  ✓ Descrever sua casa e seu bairro
  ✓ Marcar compromissos e combinar encontros
  ✓ Expressar sentimentos e estados
  ✓ Viajar com autonomia básica
  
  CERTIFICADO A1:
  • Goethe-Zertifikat A1 — reconhecido mundialmente
  • telc Deutsch A1 — válido para vistos
  • ÖSD A1 — reconhecido na Áustria
  • Uso: vistos, reunificação familiar, empregos básicos
  
  PRÓXIMOS PASSOS (A2):
  • Perfekt (passado composto): Ich habe gegessen.
  • Präteritum: war, hatte (passado simples)
  • Dativo completo: todos os artigos e pronomes
  • Mais vocabulário cotidiano
  • Conversas mais longas e naturais
  
  MOTIVAÇÃO:
  "Übung macht den Meister!" — Continue praticando!
  "Deutsch lernen ist eine Reise, kein Sprint." — É uma jornada!`,
      notes:['Celebre cada progresso. A1 é uma base sólida!','Tandem, HelloTalk, Podcasts alemães — recursos para continuar além do hub.'],
      vocab:[{de:'das Zertifikat',pt:'o certificado'},{de:'Übung macht den Meister.',pt:'A prática leva à perfeição.'},{de:'Viel Erfolg!',pt:'Muito sucesso!'},{de:'Weiter so!',pt:'Continue assim!'}],
      examples:[]
    }
  ],
  'a1-exam':[
    { slug:'a1-exam-l1-horen', sort:1, title_pt:'Prova A1: Hören (Audição)', title_de:'A1 Prüfung: Hören',
      rule:'Ouça com atenção a preposições, números e horários.', content:'Teste de compreensão auditiva. Leia as opções antes de ouvir. Foque em preposições de lugar, horários e vocabulário de compras e transportes.',
      notes:['Dica: leia as opções antes de "ouvir"','Atenção a números, horas e preposições de lugar'],vocab:[],examples:[] },
    { slug:'a1-exam-l2-lesen', sort:2, title_pt:'Prova A1: Lesen (Leitura)', title_de:'A1 Prüfung: Lesen',
      rule:'Leia o texto e identifique remetente, intenção e informações-chave.', content:'Teste de compreensão de leitura. Identifique o remetente, a intenção do texto, datas, horários e preços.',
      notes:['Sublinhe datas, nomes e valores no texto','Leia as perguntas antes do texto'],vocab:[],examples:[] },
    { slug:'a1-exam-l3-schreiben', sort:3, title_pt:'Prova A1: Schreiben (Escrita)', title_de:'A1 Prüfung: Schreiben',
      rule:'Complete frases com a forma correta do verbo ou palavra.', content:'Teste de produção escrita. Complete frases com verbos conjugados, preposições de tempo e formas corretas.',
      notes:['Apresentação: Ich heiße / ich bin / ich komme aus','Preposições de tempo: am/um/im'],vocab:[],examples:[] },
    { slug:'a1-exam-l4-sprechen', sort:4, title_pt:'Prova A1: Sprechen (Fala)', title_de:'A1 Prüfung: Sprechen',
      rule:'Traduza frases do português para o alemão.', content:'Teste de produção oral. Traduza frases de apresentação, hobbies, restaurante e situações cotidianas.',
      notes:['Hobbies: verbo + gern. Ich spiele gern Fußball.','Restaurante: Ich hätte gern... / Die Rechnung, bitte.'],vocab:[],examples:[] },
    { slug:'a1-exam-l5-grammatik', sort:5, title_pt:'Prova A1: Grammatik', title_de:'A1 Prüfung: Grammatik',
      rule:'Escolha a forma gramaticalmente correta e transforme frases.', content:'Teste de gramática: conjugação de sein/haben, verbos irregulares e construção de perguntas.',
      notes:['sein: bin/bist/ist/sind/seid','Ja/Nein-Frage: verbo em 1ª posição'],vocab:[],examples:[] }
  ]
  };
  
  // ─────────────────────────────────────────────────
  // EXERCÍCIOS (agrupados por lesson_slug)
  // ─────────────────────────────────────────────────
  const A1_EXERCISES = {
  'a1-l1-1':[
    {type:'choose',q:'Qual cumprimento é FORMAL?',opts:['Hallo!','Guten Tag!','Tschüss!','Moin!'],a:'Guten Tag!',exp:'Guten Tag = formal para qualquer hora do dia.',xp:10},
    {type:'choose',q:'Você está encerrando uma reunião formal. O que diz?',opts:['Tschüss!','Bis bald!','Auf Wiedersehen!','Moin!'],a:'Auf Wiedersehen!',exp:'Auf Wiedersehen = despedida formal.',xp:10},
    {type:'fill',q:'___ Morgen! (saudação formal matinal)',a:'Guten',exp:'Guten Morgen = bom dia (formal).',xp:10}
  ],
  'a1-l1-2':[
    {type:'translate',q:'Traduza: Meu nome é Tom. Sou do Brasil.',a:'Ich heiße Tom. Ich komme aus Brasilien.',exp:'Ich heiße = meu nome é. Ich komme aus = sou de.',xp:10},
    {type:'choose',q:'"Freut mich auch!" significa:',opts:['Prazer!','Prazer também!','Como vai?','De nada.'],a:'Prazer também!',exp:'freut mich = prazer! auch = também.',xp:10},
    {type:'fill',q:'Eu falo um pouco de alemão: Ich spreche ___ ___ Deutsch.',a:'ein bisschen',exp:'ein bisschen = um pouco.',xp:10}
  ],
  'a1-l1-3':[
    {type:'choose',q:'Conjugue sein: Wir ___',opts:['bin','bist','sind','seid'],a:'sind',exp:'wir sind = nós somos/estamos.',xp:10},
    {type:'fill',q:'haben — 2ª pessoa do singular: du ___',a:'hast',exp:'haben: ich habe, du hast, er hat.',xp:10},
    {type:'choose',q:'"Guten Abend" é usado:',opts:['de manhã','à tarde','à noite','a qualquer hora'],a:'à noite',exp:'Guten Abend = boa noite (saudação após ~18h).',xp:10}
  ],
  'a1-l2-1':[
    {type:'choose',q:'Qual artigo tem "Mutter"?',opts:['der','die','das'],a:'die',exp:'die Mutter = a mãe (feminino).',xp:10},
    {type:'fill',q:'Ich ___ (haben) einen Bruder und eine Schwester.',a:'habe',exp:'ich habe = eu tenho.',xp:10},
    {type:'translate',q:'Traduza: Minha mãe se chama Petra.',a:'Meine Mutter heißt Petra.',exp:'meine = minha (fem). heißt = 3ª pessoa.',xp:10}
  ],
  'a1-l2-2':[
    {type:'choose',q:'Como se escreve 16 em alemão?',opts:['sechzehn','sechszehn','siebenzehn','zwanzig'],a:'sechzehn',exp:'sechzehn = 16. Sem o "s" de sechs!',xp:10},
    {type:'fill',q:'17 em alemão: ___zehn',a:'sieb',exp:'siebzehn = 17. sieben → sieb (perde -en).',xp:10},
    {type:'choose',q:'"mein" é usado antes de:',opts:['substantivo feminino','substantivo masculino/neutro','todos','plural'],a:'substantivo masculino/neutro',exp:'mein (masc/neut), meine (fem/plural).',xp:10}
  ],
  'a1-l2-3':[
    {type:'translate',q:'Traduza: Parabéns!',a:'Alles Gute zum Geburtstag!',exp:'Expressão fixa para parabéns.',xp:10},
    {type:'choose',q:'Como se diz "os pais" em alemão?',opts:['die Eltern','der Vater','die Mutter','das Kind'],a:'die Eltern',exp:'die Eltern = os pais. Sempre plural!',xp:10},
    {type:'fill',q:'Ich bin 25 ___ alt.',a:'Jahre',exp:'X Jahre alt = X anos de idade.',xp:10}
  ],
  'a1-l3-1':[
    {type:'choose',q:'Posição de "gern" na frase?',opts:['antes do verbo','após o verbo conjugado','no início','no final'],a:'após o verbo conjugado',exp:'Ich spiele GERN Fußball. gern após o verbo.',xp:10},
    {type:'fill',q:'Ich ___ (spielen) gern Gitarre.',a:'spiele',exp:'ich spiele = eu toco/jogo.',xp:10},
    {type:'translate',q:'Traduza: Minha cor favorita é vermelho.',a:'Meine Lieblingsfarbe ist rot.',exp:'Lieblingsfarbe = cor favorita. rot = vermelho.',xp:10}
  ],
  'a1-l3-2':[
    {type:'choose',q:'Conjugue lesen: er ___',opts:['leset','lest','liest','lese'],a:'liest',exp:'lesen: mudança e→i. er liest.',xp:10},
    {type:'fill',q:'fahren: du ___ (2ª pessoa)',a:'fährst',exp:'fahren: mudança a→ä. du fährst.',xp:10},
    {type:'translate',q:'Traduza: Eu gosto de ouvir música.',a:'Ich höre gern Musik.',exp:'gern após o verbo: höre gern.',xp:10}
  ],
  'a1-l3-3':[
    {type:'choose',q:'O que é "Verein" em alemão?',opts:['empresa','clube/associação','escola','restaurante'],a:'clube/associação',exp:'der Verein = clube/associação.',xp:10},
    {type:'fill',q:'O descanso dominical alemão se chama ___.',a:'Sonntagsruhe',exp:'Sonntagsruhe = silêncio e descanso no domingo.',xp:10},
    {type:'choose',q:'"Sonntagsruhe" significa:',opts:['feriado','descanso dominical','aula dominical','reunião'],a:'descanso dominical',exp:'Sonntag=domingo, Ruhe=descanso/silêncio.',xp:10}
  ],
  'a1-l4-1':[
    {type:'choose',q:'Como pedir educadamente no supermercado?',opts:['Ich will Äpfel.','Ich hätte gern Äpfel.','Gib mir Äpfel!'],a:'Ich hätte gern Äpfel.',exp:'hätte gern = forma educada de pedir.',xp:10},
    {type:'fill',q:'___ (Quantas) Eier möchten Sie?',a:'Wie viele',exp:'wie viele = quantos (contável).',xp:10},
    {type:'translate',q:'Traduza: Eu preciso de pão, leite e ovos.',a:'Ich brauche Brot, Milch und Eier.',exp:'brauchen = precisar.',xp:10}
  ],
  'a1-l4-2':[
    {type:'choose',q:'"der Apfel" no acusativo fica:',opts:['der Apfel','den Apfel','das Apfel','die Apfel'],a:'den Apfel',exp:'Masculino acusativo: der → den.',xp:10},
    {type:'fill',q:'Ich kaufe ___ (ein, masc) Kaffee.',a:'einen',exp:'ein → einen (acusativo masculino).',xp:10},
    {type:'choose',q:'"die Banane" no acusativo fica:',opts:['den Banane','die Banane','das Banane','eine Banane'],a:'die Banane',exp:'Feminino não muda no acusativo.',xp:10}
  ],
  'a1-l4-3':[
    {type:'choose',q:'O que é "Pfand" na Alemanha?',opts:['imposto','depósito de garrafas','desconto','taxa'],a:'depósito de garrafas',exp:'Pfand = depósito pago por garrafas/latas.',xp:10},
    {type:'fill',q:'Supermercados alemães ___ (fechar) aos domingos.',a:'schließen',exp:'Am Sonntag schließen die Supermärkte.',xp:10},
    {type:'translate',q:'Traduza: Mais alguma coisa?',a:'Sonst noch etwas?',exp:'Frase padrão do atendente.',xp:10}
  ],
  'a1-l5-1':[
    {type:'choose',q:'"halb acht" significa:',opts:['8:00','8:30','7:30','7:15'],a:'7:30',exp:'halb acht = metade do caminho PARA as 8h = 7:30.',xp:10},
    {type:'fill',q:'aufstehen — 1ª pessoa: Ich ___ um 7 Uhr ___.',a:'stehe / auf',exp:'Separável: stehe...auf.',xp:10},
    {type:'translate',q:'Traduza: A aula começa às oito e meia.',a:'Der Unterricht beginnt um halb neun.',exp:'halb neun = 8:30.',xp:10}
  ],
  'a1-l5-2':[
    {type:'choose',q:'"Viertel nach drei" é:',opts:['3:45','3:15','2:45','2:15'],a:'3:15',exp:'Viertel nach = quinze depois. 3:15.',xp:10},
    {type:'fill',q:'fernsehen — 1ª pessoa: Ich ___ jeden Abend ___.',a:'sehe / fern',exp:'fernsehen separável: sehe...fern.',xp:10},
    {type:'choose',q:'"Viertel vor fünf" é:',opts:['5:15','4:45','5:45','4:15'],a:'4:45',exp:'Viertel vor = quinze para. 4:45.',xp:10}
  ],
  'a1-l5-3':[
    {type:'choose',q:'O que é "Feierabend"?',opts:['feriado','fim do expediente','festa','férias'],a:'fim do expediente',exp:'Feierabend = fim do dia de trabalho.',xp:10},
    {type:'translate',q:'Traduza: No fim de semana durmo mais.',a:'Am Wochenende schlafe ich länger.',exp:'am Wochenende + länger (comparativo).',xp:10},
    {type:'fill',q:'O jantar frio alemão se chama ___.',a:'Abendbrot',exp:'Abendbrot = jantar frio (pão com frios).',xp:10}
  ],
  'a1-l6-1':[
    {type:'choose',q:'Como se forma o feminino de "Arzt"?',opts:['Arztfrau','Ärztin','Arzterin','Arztin'],a:'Ärztin',exp:'der Arzt → die Ärztin. Umlaut + in.',xp:10},
    {type:'fill',q:'Ich ___ (sein) Lehrerin (sem artigo!).',a:'bin',exp:'sein + profissão SEM artigo: Ich bin Lehrerin.',xp:10},
    {type:'translate',q:'Traduza: Ela é engenheira e trabalha em Berlim.',a:'Sie ist Ingenieurin und arbeitet in Berlin.',exp:'Ingenieur (m) → Ingenieurin (f).',xp:10}
  ],
  'a1-l6-2':[
    {type:'choose',q:'"seit" indica:',opts:['futuro','duração desde o passado','momento específico','frequência'],a:'duração desde o passado',exp:'seit + Dativ = desde/há. seit drei Jahren.',xp:10},
    {type:'fill',q:'Ich arbeite ___ (preposição) zwei Jahren hier.',a:'seit',exp:'seit + dativo para duração.',xp:10},
    {type:'choose',q:'Plural feminino de "Lehrerin":',opts:['Lehrerinne','Lehrerinnen','Lehrerin','Lehrerinen'],a:'Lehrerinnen',exp:'Plural feminino: sempre -innen.',xp:10}
  ],
  'a1-l6-3':[
    {type:'choose',q:'O que é "Ausbildung"?',opts:['ensino superior','formação profissional dual','intercâmbio','curso'],a:'formação profissional dual',exp:'Ausbildung = formação profissional (teoria + prática).',xp:10},
    {type:'fill',q:'Salário bruto = Brutto | Salário líquido = ___',a:'Netto',exp:'Brutto = bruto. Netto = líquido.',xp:10},
    {type:'translate',q:'Traduza: Quantos dias de férias você tem?',a:'Wie viele Urlaubstage haben Sie?',exp:'Urlaubstage = dias de férias.',xp:10}
  ],
  'a1-l7-1':[
    {type:'choose',q:'"geradeaus" significa:',opts:['à esquerda','à direita','em frente','atrás'],a:'em frente',exp:'geradeaus = reto / em frente.',xp:10},
    {type:'fill',q:'Die Post ist ___ (em frente a) dem Hotel.',a:'gegenüber',exp:'gegenüber = em frente a + Dativo.',xp:10},
    {type:'translate',q:'Traduza: Vá em frente e depois vire à esquerda.',a:'Gehen Sie geradeaus und dann links.',exp:'geradeaus + dann links.',xp:10}
  ],
  'a1-l7-2':[
    {type:'choose',q:'Preposição para POSIÇÃO fixa (Wo?) pede:',opts:['acusativo','dativo','genitivo','nominativo'],a:'dativo',exp:'Wo? = posição estática → Dativo.',xp:10},
    {type:'fill',q:'Das Buch liegt auf ___ (dem) Tisch.',a:'dem',exp:'auf + dativo. der Tisch → dem Tisch.',xp:10},
    {type:'choose',q:'"neben" pode pedir:',opts:['sempre acusativo','sempre dativo','ambos (depende de Wo/Wohin)','genitivo'],a:'ambos (depende de Wo/Wohin)',exp:'neben: Wo? (dativo) | Wohin? (acusativo).',xp:10}
  ],
  'a1-l7-3':[
    {type:'translate',q:'Traduza: Onde fica a próxima farmácia?',a:'Wo ist die nächste Apotheke?',exp:'nächste = próxima.',xp:10},
    {type:'choose',q:'O que é "U-Bahn"?',opts:['ônibus','trem regional','metrô','bonde'],a:'metrô',exp:'U-Bahn (Untergrundbahn) = metrô.',xp:10},
    {type:'fill',q:'Die Station ist gleich um die ___.',a:'Ecke',exp:'gleich um die Ecke = logo na esquina.',xp:10}
  ],
  'a1-l8-1':[
    {type:'choose',q:'Como dizer "Está chovendo"?',opts:['Es ist Regen.','Es regnet.','Regen macht.','Es gibt Regen.'],a:'Es regnet.',exp:'Verbo impessoal: es regnet.',xp:10},
    {type:'fill',q:'Im ___ (verão) ist es oft heiß.',a:'Sommer',exp:'im Sommer = no verão.',xp:10},
    {type:'translate',q:'Traduza: Hoje está ensolarado e quente.',a:'Heute ist es sonnig und warm.',exp:'sonnig = ensolarado, warm = quente.',xp:10}
  ],
  'a1-l8-2':[
    {type:'choose',q:'"es schneit" significa:',opts:['está chovendo','está nevando','está ventando','está granizando'],a:'está nevando',exp:'schneien = nevar. es schneit.',xp:10},
    {type:'fill',q:'___ (O) Herbst ist meine Lieblingsjahreszeit.',a:'Der',exp:'der Herbst = o outono (masculino).',xp:10},
    {type:'translate',q:'Traduza: No inverno neva muito na Alemanha.',a:'Im Winter schneit es viel in Deutschland.',exp:'im Winter + es schneit.',xp:10}
  ],
  'a1-l8-3':[
    {type:'choose',q:'O que é "Biergarten"?',opts:['fábrica de cerveja','jardim de cerveja (área externa)','bar fechado','loja'],a:'jardim de cerveja (área externa)',exp:'Biergarten = área aberta para tomar cerveja.',xp:10},
    {type:'fill',q:'O mercado de Natal alemão se chama ___.',a:'Weihnachtsmarkt',exp:'Weihnachtsmarkt = mercado de Natal.',xp:10},
    {type:'choose',q:'O ditado "kein schlechtes Wetter" quer dizer:',opts:['todo tempo é bom','roupa adequada resolve qualquer clima','a chuva é boa','neve é rara'],a:'roupa adequada resolve qualquer clima',exp:'Não há mau tempo, apenas roupa inadequada.',xp:10}
  ],
  'a1-l9-1':[
    {type:'choose',q:'Como dizer "experimentar roupa"?',opts:['ausprobieren','anprobieren','probieren','aufprobieren'],a:'anprobieren',exp:'anprobieren = experimentar roupa (separável).',xp:10},
    {type:'fill',q:'Die Hose ___ (passen) mir perfekt.',a:'passt',exp:'passen = servir/caber. 3ª sg: passt.',xp:10},
    {type:'translate',q:'Traduza: Onde fica o provador?',a:'Wo ist die Umkleidekabine?',exp:'die Umkleidekabine = o provador.',xp:10}
  ],
  'a1-l9-2':[
    {type:'choose',q:'"der Pullover" no acusativo:',opts:['der Pullover','die Pullover','den Pullover','das Pullover'],a:'den Pullover',exp:'Masculino acusativo: der → den.',xp:10},
    {type:'fill',q:'tragen — 3ª pessoa: Er ___ immer Jeans.',a:'trägt',exp:'tragen irregular: trägt (a→ä).',xp:10},
    {type:'translate',q:'Traduza: Compro o suéter azul.',a:'Ich kaufe den blauen Pullover.',exp:'den Pullover (masc, akk) + blauen.',xp:10}
  ],
  'a1-l9-3':[
    {type:'choose',q:'O que são "Hausschuhe"?',opts:['sapatos de festa','sapatos de esporte','chinelos para uso doméstico','botas de chuva'],a:'chinelos para uso doméstico',exp:'Hausschuhe = chinelos usados dentro de casa.',xp:10},
    {type:'fill',q:'Brechó em alemão = ___',a:'Second-Hand-Laden / Flohmarkt',exp:'Second-Hand ou Flohmarkt = mercado de pulgas/brechó.',xp:10},
    {type:'choose',q:'Estilo de moda típico de Berlim:',opts:['conservador','alternativo e criativo','tradicional bávaro','esportivo'],a:'alternativo e criativo',exp:'Berlim = estilo alternativo/criativo.',xp:10}
  ],
  'a1-l10-1':[
    {type:'choose',q:'Como dizer "na segunda-feira"?',opts:['in Montag','am Montag','um Montag','bei Montag'],a:'am Montag',exp:'am + dia da semana.',xp:10},
    {type:'fill',q:'O compromisso é às 14h: um ___ Uhr.',a:'14',exp:'um 14 Uhr = às 14 horas.',xp:10},
    {type:'translate',q:'Traduza: Viajo em maio.',a:'Im Mai reise ich.',exp:'im + mês: im Mai.',xp:10}
  ],
  'a1-l10-2':[
    {type:'choose',q:'"im" é usado com:',opts:['dias da semana','horas','meses e estações','nomes'],a:'meses e estações',exp:'im = in dem. Usado com meses e estações.',xp:10},
    {type:'fill',q:'___ Montag ___ Freitag arbeite ich. (de/a)',a:'Von / bis',exp:'von...bis = de...a (intervalo).',xp:10},
    {type:'translate',q:'Traduza: De segunda a sexta eu trabalho.',a:'Von Montag bis Freitag arbeite ich.',exp:'von...bis para intervalos.',xp:10}
  ],
  'a1-l10-3':[
    {type:'choose',q:'O que é "Brückentag"?',opts:['feriado nacional','dia de ponte (emendar feriado)','férias de verão','folga médica'],a:'dia de ponte (emendar feriado)',exp:'Brückentag = dia entre feriado e fim de semana.',xp:10},
    {type:'fill',q:'Pontualidade em alemão = ___',a:'Pünktlichkeit',exp:'Pünktlichkeit = pontualidade.',xp:10},
    {type:'translate',q:'Traduza: Você pode vir amanhã às 15h?',a:'Kannst du morgen um 15 Uhr kommen?',exp:'können + infinitivo final.',xp:10}
  ],
  'a1-l11-1':[
    {type:'choose',q:'Complete: "___ gibt es einen Kühlschrank."',opts:['Er','Sie','Es','Das'],a:'Es',exp:'es gibt = há/existe.',xp:10},
    {type:'fill',q:'Im Wohnzimmer ___ es ein Sofa und zwei Stühle.',a:'gibt',exp:'es gibt + acusativo.',xp:10},
    {type:'translate',q:'Traduza: No quarto há uma cama grande.',a:'Im Schlafzimmer gibt es ein großes Bett.',exp:'es gibt + adj + subst.',xp:10}
  ],
  'a1-l11-2':[
    {type:'choose',q:'Qual preposição? "Das Bild hängt ___ der Wand."',opts:['im','auf','an','neben'],a:'an',exp:'an der Wand = na parede.',xp:10},
    {type:'fill',q:'Der Tisch steht zwischen dem Sofa ___ dem Fenster.',a:'und',exp:'zwischen...und = entre...e.',xp:10},
    {type:'translate',q:'Traduza: A lâmpada está sobre a mesa.',a:'Die Lampe steht auf dem Tisch.',exp:'auf + dativo. der Tisch → dem Tisch.',xp:10}
  ],
  'a1-l11-3':[
    {type:'choose',q:'"Im Schlafzimmer" significa:',opts:['no banheiro','na cozinha','no quarto','na sala'],a:'no quarto',exp:'Schlafzimmer = quarto de dormir.',xp:10},
    {type:'fill',q:'Plásticos vão no ___ (lixo amarelo).',a:'Gelben Sack',exp:'Gelber Sack = saco amarelo para plásticos.',xp:10},
    {type:'translate',q:'Traduza: Minha cozinha é pequena, mas prática.',a:'Meine Küche ist klein, aber praktisch.',exp:'aber = mas.',xp:10}
  ],
  'a1-l12-1':[
    {type:'choose',q:'Complete: "Ich fahre ___ Berlin."',opts:['in','nach','zu','an'],a:'nach',exp:'nach + cidade/país sem artigo.',xp:10},
    {type:'fill',q:'Sie fliegt ___ (de) dem Flugzeug.',a:'mit',exp:'mit + dativo = de (meio de transporte).',xp:10},
    {type:'translate',q:'Traduza: Vou a Berlim de trem.',a:'Ich fahre mit dem Zug nach Berlin.',exp:'mit dem Zug + nach Berlin.',xp:10}
  ],
  'a1-l12-2':[
    {type:'choose',q:'Qual correto? "Er fährt ___ Schweiz."',opts:['nach','in die','in der','zu der'],a:'in die',exp:'países femininos: in + acusativo.',xp:10},
    {type:'fill',q:'Wie lange ___ (dauern) die Fahrt?',a:'dauert',exp:'dauern = durar. 3ª pessoa: dauert.',xp:10},
    {type:'translate',q:'Traduza: A viagem dura cerca de três horas.',a:'Die Fahrt dauert etwa drei Stunden.',exp:'etwa = cerca de.',xp:10}
  ],
  'a1-l12-3':[
    {type:'choose',q:'"ICE" significa:',opts:['trem regional','trem de alta velocidade','ônibus expresso','avião doméstico'],a:'trem de alta velocidade',exp:'ICE = InterCityExpress.',xp:10},
    {type:'fill',q:'Comprar passagem de trem antecipada e barata: ___',a:'Sparpreis',exp:'Sparpreis = tarifa promocional da Deutsche Bahn.',xp:10},
    {type:'translate',q:'Traduza: Como você vai para Munique?',a:'Wie fährst du nach München?',exp:'Wie fährst du + nach + cidade.',xp:10}
  ],
  'a1-l13-1':[
    {type:'choose',q:'Complete: "Ich ___ gern einen Salat."',opts:['möchte','möchtest','möchten','möchtet'],a:'möchte',exp:'ich möchte = eu gostaria.',xp:10},
    {type:'fill',q:'Ich ___ (möchten) bezahlen, bitte.',a:'möchte',exp:'ich möchte + infinitivo no final.',xp:10},
    {type:'translate',q:'Traduza: Eu gostaria de uma sopa de tomate.',a:'Ich hätte gern eine Tomatensuppe.',exp:'hätte gern + acusativo.',xp:10}
  ],
  'a1-l13-2':[
    {type:'choose',q:'Qual correto? "Er nimmt ___ Schnitzel."',opts:['der','den','das','die'],a:'das',exp:'Schnitzel é neutro: das.',xp:10},
    {type:'fill',q:'Möchtest du ___ (eine) Cola oder ___ (ein) Wasser?',a:'eine / ein',exp:'Cola (fem) → eine. Wasser (neut) → ein.',xp:10},
    {type:'translate',q:'Traduza: A conta, por favor. Juntos.',a:'Die Rechnung, bitte. Zusammen.',exp:'zusammen = juntos.',xp:10}
  ],
  'a1-l13-3':[
    {type:'choose',q:'"Hat es Ihnen geschmeckt?" significa:',opts:['Você pagou?','Estava bom?','Quer sobremesa?','Pode repetir?'],a:'Estava bom?',exp:'schmecken = ter gosto/ser saboroso.',xp:10},
    {type:'fill',q:'Antes de comer, os alemães dizem: ___!',a:'Guten Appetit',exp:'Guten Appetit = bom apetite.',xp:10},
    {type:'translate',q:'Traduza: Para mim, um café com leite.',a:'Für mich einen Kaffee mit Milch.',exp:'für mich + acusativo.',xp:10}
  ],
  'a1-l14-1':[
    {type:'choose',q:'Complete: "Ich ___ heute sehr müde."',opts:['bin','bist','ist','sind'],a:'bin',exp:'ich bin = eu estou.',xp:10},
    {type:'fill',q:'Mein Bauch ___ weh.',a:'tut',exp:'tut weh = dói.',xp:10},
    {type:'translate',q:'Traduza: Eu me sinto feliz e saudável.',a:'Ich fühle mich glücklich und gesund.',exp:'sich fühlen + adj.',xp:10}
  ],
  'a1-l14-2':[
    {type:'choose',q:'Qual correto? "Sie ist ___ ." (doente)',opts:['kranken','krank','krankes','kranke'],a:'krank',exp:'Adj após sein não declina: sie ist krank.',xp:10},
    {type:'fill',q:'Wir fühlen ___ heute gut.',a:'uns',exp:'wir fühlen uns = nos sentimos.',xp:10},
    {type:'translate',q:'Traduza: Minha cabeça dói e estou estressado.',a:'Mein Kopf tut weh und ich bin gestresst.',exp:'tut weh + bin + adj.',xp:10}
  ],
  'a1-l14-3':[
    {type:'choose',q:'"Das tut mir leid" expressa:',opts:['alegria','pena/tristeza','raiva','surpresa'],a:'pena/tristeza',exp:'tut mir leid = sinto muito.',xp:10},
    {type:'fill',q:'Was tut ___ (du) weh?',a:'dir',exp:'dativo: dir = a você.',xp:10},
    {type:'translate',q:'Traduza: Melhoras!',a:'Gute Besserung!',exp:'Gute Besserung = melhoras.',xp:10}
  ],
  'a1-l15-1':[
    {type:'choose',q:'Complete: "Sie ___ sehr freundlich."',opts:['bin','bist','ist','sind'],a:'ist',exp:'sie ist = ela é.',xp:10},
    {type:'fill',q:'Er sieht ___ wie sein Bruder. (separável)',a:'aus',exp:'aussehen: sieht...aus.',xp:10},
    {type:'translate',q:'Traduza: Meu quarto é pequeno, mas claro.',a:'Mein Zimmer ist klein, aber hell.',exp:'aber = mas.',xp:10}
  ],
  'a1-l15-2':[
    {type:'choose',q:'Qual correto? "Das Buch ist ___." (interessante)',opts:['interessanten','interessante','interessantes','interessanter'],a:'interessante',exp:'Adj após sein = forma básica.',xp:10},
    {type:'fill',q:'Lena ist genauso nett ___ Anna.',a:'wie',exp:'genauso...wie = comparação de igualdade.',xp:10},
    {type:'translate',q:'Traduza: Você parece cansado hoje.',a:'Du siehst heute müde aus.',exp:'aussehen + adj.',xp:10}
  ],
  'a1-l15-3':[
    {type:'choose',q:'"aussehen" é usado para:',opts:['personalidade','aparência física','profissão','nacionalidade'],a:'aparência física',exp:'aussehen = aparência.',xp:10},
    {type:'fill',q:'Ela é tão criativa quanto: Sie ist genauso kreativ ___ ihre Schwester.',a:'wie',exp:'genauso...wie.',xp:10},
    {type:'translate',q:'Traduza: Ela tem cabelos longos e loiros.',a:'Sie hat lange, blonde Haare.',exp:'haben + adj + Haare.',xp:10}
  ],
  'a1-l16-1':[
    {type:'choose',q:'Complete: "Er ___ sehr gut Deutsch." (sprechen)',opts:['spreche','sprichst','spricht','sprechen'],a:'spricht',exp:'er spricht (e→i).',xp:10},
    {type:'fill',q:'essen — 3ª pessoa: er ___',a:'isst',exp:'essen irregular: isst (e→i).',xp:10},
    {type:'translate',q:'Traduza: Você sabe onde fica a estação?',a:'Weißt du, wo der Bahnhof ist?',exp:'wissen + wo.',xp:10}
  ],
  'a1-l16-2':[
    {type:'choose',q:'Qual correto? "Wir ___ Pizza." (essen)',opts:['esse','esst','essen','isst'],a:'essen',exp:'wir essen (forma regular plural).',xp:10},
    {type:'fill',q:'anrufen — 2ª pessoa: du ___ mich morgen ___.',a:'rufst / an',exp:'separável: rufst...an.',xp:10},
    {type:'translate',q:'Traduza: Preciso estudar e você quer sair.',a:'Ich muss lernen und du willst ausgehen.',exp:'müssen + wollen.',xp:10}
  ],
  'a1-l16-3':[
    {type:'choose',q:'"kennen" vs "wissen": "___ du Berlin?"',opts:['Weißt','Kennst','Hast','Bist'],a:'Kennst',exp:'kennen + lugar/pessoa.',xp:10},
    {type:'fill',q:'Ich ___ (müssen) jetzt gehen.',a:'muss',exp:'ich muss = eu preciso.',xp:10},
    {type:'translate',q:'Traduza: Posso ajudar você?',a:'Kann ich dir helfen?',exp:'können + dativo.',xp:10}
  ],
  'a1-l17-1':[
    {type:'choose',q:'Complete: "Ich helfe ___." (você)',opts:['du','dich','dir','dein'],a:'dir',exp:'helfen + dativo: dir.',xp:10},
    {type:'fill',q:'Das Buch gehört ___ (ich).',a:'mir',exp:'gehören + dativo: mir.',xp:10},
    {type:'translate',q:'Traduza: Eu dou flores à minha mãe.',a:'Ich gebe meiner Mutter Blumen.',exp:'geben + dativo (pessoa) + acusativo (objeto).',xp:10}
  ],
  'a1-l17-2':[
    {type:'choose',q:'Qual correto? "Ich gehe ___ Markt."',opts:['zu dem','zum','beide corretos','a und b'],a:'beide corretos',exp:'zu dem = zum. Ambos corretos.',xp:10},
    {type:'fill',q:'Ich schreibe ___ (mein) Freund eine E-Mail.',a:'meinem',exp:'schreiben + dativo: meinem Freund.',xp:10},
    {type:'translate',q:'Traduza: O presente é do meu irmão.',a:'Das Geschenk ist von meinem Bruder.',exp:'von + dativo.',xp:10}
  ],
  'a1-l17-3':[
    {type:'choose',q:'"Das gefällt ___." (a mim)',opts:['ich','mich','mir','mein'],a:'mir',exp:'gefallen + dativo.',xp:10},
    {type:'fill',q:'Wir danken ___ (die) Lehrerin.',a:'der',exp:'danken + dativo feminino: der.',xp:10},
    {type:'translate',q:'Traduza: Você vem comigo ao cinema?',a:'Kommst du mit mir ins Kino?',exp:'mit + dativo.',xp:10}
  ],
  'a1-l18-1':[
    {type:'choose',q:'Complete: "___ wohnst du?"',opts:['Wer','Was','Wo','Wann'],a:'Wo',exp:'wo = onde.',xp:10},
    {type:'fill',q:'___ (Quantos) Geschwister hast du?',a:'Wie viele',exp:'wie viele = quantos.',xp:10},
    {type:'translate',q:'Traduza: Por que você aprende alemão?',a:'Warum lernst du Deutsch?',exp:'warum = por quê.',xp:10}
  ],
  'a1-l18-2':[
    {type:'choose',q:'Qual pergunta espera sim/não?',opts:['Woher kommst du?','Hast du Zeit?','Wie heißt du?','Was machst du?'],a:'Hast du Zeit?',exp:'Verbo em 1º lugar = Ja/Nein-Frage.',xp:10},
    {type:'fill',q:'weil: Ich lerne, ___ es wichtig ___. (verbo no final)',a:'weil / ist',exp:'weil + verbo no final.',xp:10},
    {type:'translate',q:'Traduza: Quanto custa este livro?',a:'Wie viel kostet dieses Buch?',exp:'wie viel = quanto.',xp:10}
  ],
  'a1-l18-3':[
    {type:'choose',q:'"Wohin gehst du?" pergunta sobre:',opts:['origem','destino','posição atual','tempo'],a:'destino',exp:'wohin = para onde (destino).',xp:10},
    {type:'fill',q:'___ (Qual, neutro) Buch liest du?',a:'Welches',exp:'welches = qual (neutro).',xp:10},
    {type:'translate',q:'Traduza: Pode repetir mais devagar?',a:'Können Sie bitte langsamer sprechen?',exp:'langsamer = mais devagar.',xp:10}
  ],
  'a1-l19-1':[
    {type:'choose',q:'Complete: "ist dieser Platz ___?" (livre)',opts:['besetzt','frei','voll','teuer'],a:'frei',exp:'frei = livre/disponível.',xp:10},
    {type:'fill',q:'Ich ___ mich ___ (auf) das Treffen.',a:'freue / auf',exp:'sich freuen auf.',xp:10},
    {type:'translate',q:'Traduza: Onde posso sacar dinheiro aqui?',a:'Wo kann ich hier Geld abheben?',exp:'Geld abheben = sacar dinheiro.',xp:10}
  ],
  'a1-l19-2':[
    {type:'choose',q:'Qual conectivo? "Ich lerne Deutsch, ___ es ist schwierig."',opts:['und','aber','dann','weil'],a:'aber',exp:'aber = mas (coordenativo).',xp:10},
    {type:'fill',q:'Geh geradeaus, dann siehst du ___ (der) Supermarkt.',a:'den',exp:'der → den (acusativo).',xp:10},
    {type:'translate',q:'Traduza: Aprendo alemão porque é importante.',a:'Ich lerne Deutsch, weil es wichtig ist.',exp:'weil + verbo no final.',xp:10}
  ],
  'a1-l19-3':[
    {type:'choose',q:'"Gern geschehen!" significa:',opts:['com prazer','de nada','até logo','boa sorte'],a:'de nada',exp:'Gern geschehen = de nada.',xp:10},
    {type:'fill',q:'___ (Porque) ich neu in Berlin bin, brauche ich Hilfe.',a:'Weil',exp:'weil + verbo no final.',xp:10},
    {type:'translate',q:'Traduza: Podemos nos encontrar às 19h no metrô?',a:'Können wir uns um 19 Uhr am U-Bahnhof treffen?',exp:'sich treffen + am.',xp:10}
  ],
  'a1-l20-1':[
    {type:'choose',q:'Complete: "Ich ___ aus Brasilien und ___ Deutsch."',opts:['bin/lernen','komme/lernen','komme/lerne','bin/lerne'],a:'komme/lerne',exp:'kommen aus + lernen.',xp:10},
    {type:'fill',q:'zu + dem = ___ (contração)',a:'zum',exp:'zu + dem = zum (obrigatório).',xp:10},
    {type:'translate',q:'Traduza: Gostaria de uma água sem gás e a conta.',a:'Ich hätte gern ein Wasser ohne Kohlensäure und die Rechnung, bitte.',exp:'ohne Kohlensäure + Rechnung.',xp:10}
  ],
  'a1-l20-2':[
    {type:'choose',q:'Qual frase está correta?',opts:['Ich gehe mit dem Supermarkt.','Ich gehe zum Supermarkt.','Ich gehe nach dem Supermarkt.','Ich gehe bei Supermarkt.'],a:'Ich gehe zum Supermarkt.',exp:'zu + dem = zum (movimento para local).',xp:10},
    {type:'fill',q:'___ (Porque) ich müde bin, gehe ich früh ins Bett.',a:'Weil',exp:'weil + verbo no final.',xp:10},
    {type:'translate',q:'Traduza: Onde você mora e o que você gosta de fazer?',a:'Wo wohnst du und was machst du gern?',exp:'wo wohnst du + was machst du gern.',xp:10}
  ],
  'a1-l20-3':[
    {type:'choose',q:'"Das Buch gefällt ___." (a mim)',opts:['ich','mich','mir','mein'],a:'mir',exp:'gefallen + dativo.',xp:10},
    {type:'fill',q:'Wir treffen uns ___ Samstag ___ 15 Uhr ___ Café.',a:'am / um / im',exp:'am+dia, um+hora, im+local.',xp:10},
    {type:'translate',q:'Traduza: Fala mais devagar? Estou aprendendo alemão.',a:'Können Sie bitte langsamer sprechen? Ich lerne Deutsch.',exp:'langsamer sprechen + lernen.',xp:10}
  ],
  'a1-exam-l1-horen':[
    {type:'choose',q:'Wo ist die Apotheke?',opts:['neben dem Supermarkt','gegenüber der Bank','am Bahnhof'],a:'neben dem Supermarkt',exp:'Preposições de lugar.',xp:10},
    {type:'choose',q:'Qual horário foi mencionado?',opts:['14 Uhr','15:30 Uhr','16 Uhr'],a:'15:30 Uhr',exp:'Horários.',xp:10},
    {type:'choose',q:'Qual meio de transporte foi citado?',opts:['Bus','U-Bahn','Zug'],a:'U-Bahn',exp:'Transportes.',xp:10}
  ],
  'a1-exam-l2-lesen':[
    {type:'choose',q:'Qual é o pedido principal da mensagem?',opts:['Einen Termin machen','Eine Einladung zum Kaffee','Eine Frage stellen'],a:'Eine Einladung zum Kaffee',exp:'Intenção do texto.',xp:10},
    {type:'choose',q:'Quando é o encontro?',opts:['Montag 10 Uhr','Samstag 15 Uhr','Freitag 18 Uhr'],a:'Samstag 15 Uhr',exp:'Datas e horas.',xp:10},
    {type:'choose',q:'Qual bebida não tem álcool?',opts:['Bier','Wein','Apfelschorle'],a:'Apfelschorle',exp:'Vocabulário de bebidas.',xp:10}
  ],
  'a1-exam-l3-schreiben':[
    {type:'fill',q:'Ich ___ Anna und bin 25 Jahre alt.',a:'heiße',exp:'Apresentação.',xp:10},
    {type:'fill',q:'Wir treffen uns ___ Samstag ___ 10 Uhr.',a:'am / um',exp:'Preposições de tempo.',xp:10},
    {type:'fill',q:'Ich ___ (morar) in München.',a:'wohne',exp:'wohnen conjugado.',xp:10}
  ],
  'a1-exam-l4-sprechen':[
    {type:'translate',q:'Traduza: Meu nome é Lucas e tenho 28 anos.',a:'Ich heiße Lucas und ich bin 28 Jahre alt.',exp:'Apresentação.',xp:10},
    {type:'translate',q:'Traduza: Gosto de jogar futebol e ouvir música.',a:'Ich spiele gern Fußball und höre gern Musik.',exp:'gern + hobbies.',xp:10},
    {type:'translate',q:'Traduza: Quanto custa isso?',a:'Wie viel kostet das?',exp:'Pergunta de preço.',xp:10}
  ],
  'a1-exam-l5-grammatik':[
    {type:'choose',q:'Complete: Ich ___ Student.',opts:['bin','bist','ist','sind'],a:'bin',exp:'sein 1ª pessoa: bin.',xp:10},
    {type:'choose',q:'Complete: Du ___ ein Auto.',opts:['habe','hast','hat','haben'],a:'hast',exp:'haben 2ª pessoa: hast.',xp:10},
    {type:'choose',q:'Complete: Er ___ Pizza. (essen)',opts:['esse','isst','essen','esst'],a:'isst',exp:'essen irregular: isst.',xp:10},
    {type:'fill',q:'Transforme: "Du wohnst in Berlin." → pergunta Ja/Nein: ___?',a:'Wohnst du in Berlin?',exp:'Verbo em 1ª posição = Ja/Nein-Frage.',xp:10}
  ]
  };
  
  
  // ─────────────────────────────────────────────────
  // EXPORT GLOBAL
  // ─────────────────────────────────────────────────

export { A1_MODULES, A1_LESSONS, A1_EXERCISES };
