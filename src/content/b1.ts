// @ts-nocheck

const B1_TOPICS = [
  { n: 40, slug: "b1-cap40", pt: "Bilder e graficos", de: "Bilder und Diagramme beschreiben", grammar: "Relativsaetze", skill: "descrever dados, imagens e tendencias" },
  { n: 41, slug: "b1-cap41", pt: "Opiniao e discussao", de: "Diskussionen und Argumentation", grammar: "obwohl, trotzdem, einerseits/andererseits", skill: "defender uma opiniao com pro e contra" },
  { n: 42, slug: "b1-cap42", pt: "Trabalho e candidatura", de: "Beruf und Bewerbung", grammar: "Passiv Praesens e N-Deklination", skill: "falar de processos seletivos e rotina profissional" },
  { n: 43, slug: "b1-cap43", pt: "Midia e consumo", de: "Medien, Werbung und Konsum", grammar: "Verben mit Praepositionen", skill: "avaliar propaganda, noticias e consumo consciente" },
  { n: 44, slug: "b1-cap44", pt: "Saude e bem-estar", de: "Gesundheit und Wohlbefinden", grammar: "Konjunktiv II para conselhos", skill: "dar conselhos e relatar sintomas" },
  { n: 45, slug: "b1-cap45", pt: "Meio ambiente", de: "Umwelt und Nachhaltigkeit", grammar: "weil, deshalb, deswegen", skill: "explicar causas e consequencias" },
  { n: 46, slug: "b1-cap46", pt: "Cultura e tradicoes", de: "Kultur, Feste und Braeuche", grammar: "Relativsaetze com preposicoes", skill: "comparar costumes e festividades" },
  { n: 47, slug: "b1-cap47", pt: "Viagens e interculturalidade", de: "Reisen, Mobilitaet und Kultur", grammar: "Konjunktiv II Vergangenheit", skill: "contar experiencias e hipoteses no passado" },
  { n: 48, slug: "b1-cap48", pt: "Convivencia e conflitos", de: "Zusammenleben und Konflikte", grammar: "damit e um...zu", skill: "negociar solucoes em moradia e vizinhanca" },
  { n: 49, slug: "b1-cap49", pt: "Futuro e metas", de: "Zukunft, Wuensche und Ziele", grammar: "TeKaMoLo e ordem da frase", skill: "planejar estudos, carreira e vida" },
  { n: 50, slug: "b1-cap50", pt: "Regras e permissao", de: "Passiv mit Modalverben", grammar: "muss gemacht werden", skill: "entender regras, avisos e instrucoes" },
  { n: 51, slug: "b1-cap51", pt: "Ferramentas e lugares", de: "Relativsaetze mit Praepositionen", grammar: "mit dem, auf dem, worauf", skill: "descrever objetos e sua funcao" },
  { n: 52, slug: "b1-cap52", pt: "Noticias e relatos", de: "Indirekte Rede", grammar: "dass, ob, Konjunktiv I basico", skill: "relatar informacoes de terceiros" },
  { n: 53, slug: "b1-cap53", pt: "Verbos com preposicoes", de: "Verben mit Praepositionen", grammar: "sich freuen auf, sich kuemmern um, abhaengen von", skill: "falar com precisao sobre relacoes e temas" },
  { n: 54, slug: "b1-cap54", pt: "Oracoes subordinadas", de: "damit, um...zu, ohne...zu", grammar: "finalidade e ausencia", skill: "conectar ideias em textos longos" },
  { n: 55, slug: "b1-cap55", pt: "Declinacao de adjetivos", de: "Adjektivdeklination komplett", grammar: "artigo definido, indefinido e sem artigo", skill: "descrever com precisao no Lesen e Schreiben" },
  { n: 56, slug: "b1-cap56", pt: "Passivo no passado", de: "Passiv in der Vergangenheit", grammar: "wurde gemacht, ist gemacht worden", skill: "entender textos formais e noticias" },
  { n: 57, slug: "b1-cap57", pt: "Konjunktiv II avancado", de: "Hypothesen und Wuensche", grammar: "wenn ich haette, wuerde ich", skill: "formular hipoteses, desejos e pedidos educados" },
  { n: 58, slug: "b1-cap58", pt: "Participios como adjetivos", de: "Partizipien als Adjektive", grammar: "Partizip I e Partizip II", skill: "refinar descricoes" },
  { n: 59, slug: "b1-cap59", pt: "Estilo formal", de: "Nominalstil und Passiv", grammar: "nominalizacao e formulas formais", skill: "escrever e-mails formais" },
  { n: 60, slug: "b1-cap60", pt: "Integracao B1", de: "Wiederholung und Konsolidierung", grammar: "revisao geral B1", skill: "combinar gramatica em simulados" },
  { n: 61, slug: "b1-cap61", pt: "Preparacao Goethe B1", de: "Vorbereitung auf die Pruefung", grammar: "estrategias por parte do exame", skill: "Horen, Lesen, Schreiben e Sprechen" },
];

const B1_MODULES = [
  ...B1_TOPICS.map((t) => ({ slug: t.slug, n: t.n, pt: t.pt, de: t.de, done: false })),
  { slug: "b1-exam", n: 99, pt: "Prova Final B1", de: "B1 Abschlusspruefung", done: false, isExam: true },
];

const vocabByTopic = {
  40: [["das Diagramm", "o grafico"], ["steigen", "subir"], ["sinken", "cair"], ["vergleichen", "comparar"], ["die Tendenz", "a tendencia"]],
  41: [["die Meinung", "a opiniao"], ["zustimmen", "concordar"], ["widersprechen", "discordar"], ["der Kompromiss", "o acordo"], ["sachlich", "objetivo"]],
  42: [["die Bewerbung", "a candidatura"], ["der Lebenslauf", "o curriculo"], ["das Vorstellungsgespraech", "a entrevista"], ["die Stelle", "a vaga"], ["die Erfahrung", "a experiencia"]],
  43: [["die Werbung", "a propaganda"], ["die Nachricht", "a noticia"], ["der Konsum", "o consumo"], ["vergleichen", "comparar"], ["bewusst", "consciente"]],
  44: [["die Vorsorge", "a prevencao"], ["sich ausruhen", "descansar"], ["der Stress", "o estresse"], ["die Beschwerde", "a queixa"], ["der Rat", "o conselho"]],
  45: [["die Umwelt", "o meio ambiente"], ["die Muelltrennung", "separacao de lixo"], ["sparen", "economizar"], ["nachhaltig", "sustentavel"], ["vermeiden", "evitar"]],
  46: [["der Brauch", "o costume"], ["das Fest", "a festa"], ["feiern", "celebrar"], ["die Tradition", "a tradicao"], ["typisch", "tipico"]],
  47: [["die Reise", "a viagem"], ["im Voraus", "com antecedencia"], ["die Verspaetung", "o atraso"], ["die Unterkunft", "a hospedagem"], ["erleben", "vivenciar"]],
  48: [["die Hausordnung", "o regulamento"], ["der Nachbar", "o vizinho"], ["der Konflikt", "o conflito"], ["sich einigen", "chegar a acordo"], ["Ruecksicht nehmen", "ter consideracao"]],
  49: [["das Ziel", "a meta"], ["die Weiterbildung", "a capacitacao"], ["der Plan", "o plano"], ["sich vornehmen", "pretender"], ["erreichen", "alcancar"]],
  50: [["die Regel", "a regra"], ["die Erlaubnis", "a permissao"], ["verboten", "proibido"], ["befolgen", "seguir"], ["erledigen", "resolver"]],
  51: [["das Werkzeug", "a ferramenta"], ["der Ort", "o lugar"], ["verwenden", "usar"], ["funktionieren", "funcionar"], ["reparieren", "consertar"]],
  52: [["die Nachricht", "a noticia"], ["berichten", "relatar"], ["behaupten", "afirmar"], ["die Quelle", "a fonte"], ["das Geruecht", "o boato"]],
  53: [["sich freuen auf", "estar ansioso por"], ["sich kuemmern um", "cuidar de"], ["abhaengen von", "depender de"], ["denken an", "pensar em"], ["sprechen ueber", "falar sobre"]],
  54: [["die Absicht", "a intencao"], ["der Zweck", "a finalidade"], ["ohne etwas zu sagen", "sem dizer nada"], ["damit", "para que"], ["um...zu", "para"]],
  55: [["der gute Rat", "o bom conselho"], ["eine wichtige Frage", "uma pergunta importante"], ["gutes Essen", "boa comida"], ["mit netten Leuten", "com pessoas simpaticas"], ["alte Gebaeude", "predios antigos"]],
  56: [["wurde gebaut", "foi construido"], ["ist repariert worden", "foi consertado"], ["die Meldung", "o comunicado"], ["der Bericht", "o relato"], ["veroeffentlicht", "publicado"]],
  57: [["wenn ich Zeit haette", "se eu tivesse tempo"], ["ich wuerde", "eu faria"], ["ich haette gemacht", "eu teria feito"], ["ich waere gekommen", "eu teria vindo"], ["der Wunsch", "o desejo"]],
  58: [["weinend", "chorando"], ["gemacht", "feito"], ["spannend", "empolgante"], ["geschlossen", "fechado"], ["ueberzeugend", "convincente"]],
  59: [["Sehr geehrte Damen und Herren", "Prezados Senhores"], ["hiermit", "por meio desta"], ["Mit freundlichen Gruessen", "Atenciosamente"], ["die Beschwerde", "a reclamacao"], ["die Anmeldung", "a inscricao"]],
  60: [["die Wiederholung", "a revisao"], ["die Strategie", "a estrategia"], ["die Pruefung", "a prova"], ["bestehen", "passar"], ["die Luecke", "a lacuna"]],
  61: [["das Goethe-Zertifikat B1", "certificado Goethe B1"], ["Schluesselwoerter", "palavras-chave"], ["Einleitung", "introducao"], ["Hauptteil", "desenvolvimento"], ["Schluss", "conclusao"]],
};

function makeLessons(topic) {
  const vocab = (vocabByTopic[topic.n] ?? []).map(([de, pt]) => ({ de, pt }));
  return [
    {
      slug: `b1-l${topic.n}-1`,
      sort: 1,
      title_pt: `Dialogo B1: ${topic.pt}`,
      title_de: `Dialog: ${topic.de}`,
      rule: `Foco B1: ${topic.grammar}. Use frases completas, conectores e exemplos pessoais.`,
      content: `DIALOGO EM ALEMAO:
Anna: Ich bereite mich auf die B1-Pruefung vor und uebe heute das Thema "${topic.de}".
Ben: Das passt gut. Bei diesem Thema muss man nicht nur Woerter kennen, sondern auch die eigene Meinung klar ausdruecken.
Anna: Genau. Zuerst beschreibe ich die Situation, danach nenne ich ein Beispiel und am Ende ziehe ich ein kurzes Fazit.
Ben: Achte auch auf die Grammatik: ${topic.grammar}. Damit klingt dein Text viel genauer.
Anna: Ich versuche, lange Saetze zu bilden, ohne unklar zu werden.
Ben: Sehr gut. Im Goethe-Zertifikat B1 ist wichtig, dass du verstaendlich, strukturiert und sachlich bleibst.

TRADUCAO:
Anna: Estou me preparando para a prova B1 e pratico hoje o tema "${topic.pt}".
Ben: Combina bem. Nesse tema, nao basta conhecer palavras; e preciso expressar a propria opiniao com clareza.
Anna: Exato. Primeiro descrevo a situacao, depois dou um exemplo e no fim tiro uma breve conclusao.
Ben: Preste atencao tambem na gramatica: ${topic.grammar}. Assim seu texto soa mais preciso.
Anna: Tento formar frases longas sem ficar confusa.
Ben: Muito bem. No Goethe-Zertifikat B1, e importante ser compreensivel, estruturado e objetivo.`,
      notes: [
        `Competencia: ${topic.skill}.`,
        "Modelo de resposta B1: situacao -> opiniao -> exemplo -> conclusao.",
        "Use conectores como zuerst, danach, ausserdem, trotzdem e zum Schluss.",
      ],
      vocab,
      examples: [
        { de: "Meiner Meinung nach ist das Thema sehr wichtig.", pt: "Na minha opiniao, o tema e muito importante." },
        { de: "Ein Vorteil ist, dass man mehr Zeit spart.", pt: "Uma vantagem e que se economiza mais tempo." },
        { de: "Zum Schluss moechte ich sagen, dass es auf die Situation ankommt.", pt: "Para concluir, gostaria de dizer que depende da situacao." },
      ],
    },
    {
      slug: `b1-l${topic.n}-2`,
      sort: 2,
      title_pt: `Gramatica: ${topic.grammar}`,
      title_de: `Grammatik: ${topic.grammar}`,
      rule: topic.grammar,
      content: `PONTO GRAMATICAL:
${topic.grammar}

COMO USAR NO B1:
1. Comece com uma frase simples e correta.
2. Acrescente um conector ou uma oracao subordinada.
3. Inclua um exemplo concreto.

PADROES UTEIS:
Ich bin der Meinung, dass ...
Obwohl es schwierig ist, ...
Das haengt davon ab, ob ...
Ich lerne, um die Pruefung zu bestehen.
Wenn ich mehr Zeit haette, wuerde ich jeden Tag sprechen ueben.`,
      notes: [
        "Em subordinadas com dass, weil, obwohl, wenn, ob e damit, o verbo conjugado vai ao final.",
        "Depois de trotzdem, deshalb, deswegen e darum, o verbo fica na posicao 2.",
        "Em B1, clareza vale mais que frases longas demais.",
      ],
      vocab: [],
      examples: [
        { de: "Obwohl ich wenig Zeit habe, uebe ich jeden Tag.", pt: "Embora eu tenha pouco tempo, pratico todos os dias." },
        { de: "Ich mache Notizen, damit ich den Text besser verstehe.", pt: "Faco anotacoes para que eu entenda melhor o texto." },
        { de: "Das Thema ist schwierig. Trotzdem kann man es gut erklaeren.", pt: "O tema e dificil. Mesmo assim, da para explica-lo bem." },
      ],
    },
    {
      slug: `b1-l${topic.n}-3`,
      sort: 3,
      title_pt: "Treino Goethe: Horen, Lesen e Sprechen",
      title_de: "Pruefungstraining: Hoeren, Lesen und Sprechen",
      rule: "Treine com palavras-chave, intencao do texto e resposta oral estruturada.",
      content: `HOREN:
Ouvir por palavras-chave: Wer? Was? Wann? Wo? Warum? A resposta correta muitas vezes aparece com sinonimos.

LESEN:
Leia primeiro as perguntas. Depois procure no texto marcadores como Datum, Ort, Grund, Meinung e Folge.

SPRECHEN:
Use este roteiro: 1) Ich moechte ueber ... sprechen. 2) Meiner Meinung nach ... 3) Ein Beispiel ist ... 4) Zum Schluss ...

TEMA DO CAPITULO:
${topic.skill}.`,
      notes: [
        "No Horen, anote numeros, horarios, nomes e mudancas de opiniao.",
        "No Lesen, cuidado com alternativas parecidas mas absolutas demais.",
        "No Sprechen, corrija-se naturalmente: Entschuldigung, ich meine ...",
      ],
      vocab,
      examples: [
        { de: "Ich moechte ueber dieses Thema sprechen, weil es im Alltag wichtig ist.", pt: "Gostaria de falar sobre esse tema porque ele e importante no dia a dia." },
        { de: "Ich sehe sowohl Vorteile als auch Nachteile.", pt: "Vejo tanto vantagens quanto desvantagens." },
        { de: "Koennten Sie die Frage bitte wiederholen?", pt: "Poderia repetir a pergunta, por favor?" },
      ],
    },
  ];
}

const B1_LESSONS = Object.fromEntries(B1_TOPICS.map((topic) => [topic.slug, makeLessons(topic)]));
B1_LESSONS["b1-exam"] = [
  { slug: "b1-exam-l1-horen", sort: 1, title_pt: "Goethe B1: Horen", title_de: "B1 Pruefung: Hoeren", rule: "Ouvir intencao, detalhes e opiniao.", content: "Treine anuncios, conversas curtas e entrevistas. Leia as opcoes antes, anote palavras-chave e cuidado com sinonimos.", notes: ["Numeros, horarios e lugares costumam decidir a resposta.", "A segunda fala pode corrigir a primeira."], vocab: [], examples: [] },
  { slug: "b1-exam-l2-lesen", sort: 2, title_pt: "Goethe B1: Lesen", title_de: "B1 Pruefung: Lesen", rule: "Ler por objetivo: quem escreve, por que escreve e o que pede.", content: "Treine e-mails, anuncios, artigos curtos e opinioes. Marque palavras de contraste: aber, trotzdem, jedoch, obwohl.", notes: ["Leia primeiro as tarefas.", "Nao traduza tudo; procure funcao e informacao."], vocab: [], examples: [] },
  { slug: "b1-exam-l3-schreiben", sort: 3, title_pt: "Goethe B1: Schreiben", title_de: "B1 Pruefung: Schreiben", rule: "Estrutura clara: saudacao, motivo, detalhes, pedido, despedida.", content: "Use conectores e frases B1: hiermit moechte ich, ausserdem, leider, koennten Sie, ich freue mich auf Ihre Antwort.", notes: ["Responda todos os pontos da tarefa.", "Em e-mail formal, use Sie e Mit freundlichen Gruessen."], vocab: [], examples: [] },
  { slug: "b1-exam-l4-sprechen", sort: 4, title_pt: "Goethe B1: Sprechen", title_de: "B1 Pruefung: Sprechen", rule: "Apresentar, reagir, perguntar e negociar.", content: "Fale em blocos: introducao, opiniao, exemplo, conclusao. Na parte em dupla, proponha, reaja e confirme combinados.", notes: ["Comunicacao vem antes da perfeicao.", "Use Wie sehen Sie das? e Ich bin einverstanden."], vocab: [], examples: [] },
  { slug: "b1-exam-l5-grammatik", sort: 5, title_pt: "Revisao gramatical B1", title_de: "Grammatik Wiederholung", rule: "Relativsaetze, Passiv, Konjunktiv II, Adjektivdeklination, Nebensaetze.", content: "Revise os padroes que mais aparecem no Goethe B1 e pratique transformacoes de frase.", notes: ["Verbo final em subordinadas.", "Passiv: werden + Partizip II.", "Konjunktiv II: haette, waere, wuerde."], vocab: [], examples: [] },
];

const B1_EXERCISES = {};
for (const topic of B1_TOPICS) {
  B1_EXERCISES[`b1-l${topic.n}-1`] = [
    { type: "choose", q: "Qual estrutura ajuda a expressar opiniao no B1?", opts: ["Meiner Meinung nach ...", "Ich bin zehn Jahre.", "Guten Morgen!", "eins, zwei, drei"], a: "Meiner Meinung nach ...", exp: "Meiner Meinung nach introduz opiniao de forma clara.", xp: 10 },
    { type: "fill", q: "Complete: Ich bin der Meinung, ___ Deutsch im Alltag wichtig ist.", a: "dass", exp: "dass introduz conteudo/opiniao e leva verbo ao final.", xp: 10 },
    { type: "translate", q: "Traduza: No fim, depende da situacao.", a: "Am Ende kommt es auf die Situation an.", exp: "es kommt auf ... an = depende de ...", xp: 12 },
    {
      type: "write",
      q: `Escreva uma resposta curta B1 sobre: ${topic.pt}. Use opiniao, motivo e exemplo.`,
      criteria: ["Comece com uma opiniao clara", "Use pelo menos um conector", "Inclua um exemplo pessoal", "Feche com uma conclusao curta"],
      minWords: 45,
      model: `Meiner Meinung nach ist das Thema "${topic.de}" wichtig. Ein Grund dafuer ist, dass es viele Menschen im Alltag betrifft. Ein Beispiel aus meinem Leben ist, dass ich beim Deutschlernen oft genau darueber sprechen muss. Zum Schluss denke ich, dass man dieses Thema regelmaessig ueben sollte.`,
      xp: 18,
    },
  ];
  B1_EXERCISES[`b1-l${topic.n}-2`] = [
    { type: "choose", q: "Depois de obwohl, onde fica o verbo conjugado?", opts: ["no final", "sempre no inicio", "antes do sujeito", "nao ha verbo"], a: "no final", exp: "obwohl e conjuncao subordinativa.", xp: 10 },
    { type: "fill", q: "Es ist schwierig. ___ lerne ich weiter.", a: "Trotzdem", exp: "trotzdem inicia uma oracao principal; verbo na posicao 2.", xp: 10 },
    { type: "translate", q: "Traduza: Eu estudo para passar na prova.", a: "Ich lerne, um die Pruefung zu bestehen.", exp: "Mesmo sujeito: um...zu.", xp: 12 },
  ];
  B1_EXERCISES[`b1-l${topic.n}-3`] = [
    { type: "choose", q: "No Horen, o que voce deve anotar primeiro?", opts: ["palavras-chave", "todas as palavras", "somente artigos", "apenas verbos no infinitivo"], a: "palavras-chave", exp: "Palavras-chave ajudam a capturar informacao relevante.", xp: 10 },
    { type: "fill", q: "Pedido util no Sprechen: Koennten Sie die Frage bitte ___?", a: "wiederholen", exp: "wiederholen = repetir.", xp: 10 },
    { type: "translate", q: "Traduza: Vejo vantagens e desvantagens.", a: "Ich sehe Vorteile und Nachteile.", exp: "Frase curta, clara e util para discussao.", xp: 10 },
    {
      type: "speak",
      q: `Fale em voz alta por 60-90 segundos sobre: ${topic.pt}. Depois escreva aqui o roteiro que voce falou.`,
      criteria: ["Introduza o tema", "Diga sua opiniao", "Cite uma vantagem ou dificuldade", "Use um exemplo", "Finalize com Zum Schluss"],
      minWords: 35,
      model: `Ich moechte ueber "${topic.de}" sprechen. Meiner Meinung nach ist das Thema wichtig, weil es im Alltag oft vorkommt. Ein Vorteil ist, dass man dadurch klarer kommunizieren kann. Ein Nachteil ist, dass man manchmal nicht genug Wortschatz hat. Zum Schluss moechte ich sagen, dass Uebung sehr wichtig ist.`,
      xp: 18,
    },
  ];
}
B1_EXERCISES["b1-exam-l1-horen"] = [
  { type: "choose", q: "Qual detalhe costuma ser decisivo no Horen?", opts: ["horario", "cor da tela", "fonte do app"], a: "horario", exp: "Horarios, numeros e lugares aparecem frequentemente.", xp: 10 },
];
B1_EXERCISES["b1-exam-l5-grammatik"] = [
  { type: "choose", q: "Passiv Praesens correto:", opts: ["Das Auto wird repariert.", "Das Auto ist reparieren.", "Das Auto hat repariert."], a: "Das Auto wird repariert.", exp: "Passiv: werden + Partizip II.", xp: 10 },
  { type: "fill", q: "Relativsatz: Die Stadt, in ___ ich wohne, ist gross.", a: "der", exp: "in + Dativ; Stadt e feminino: der.", xp: 10 },
];

const B1_FLASHCARDS = [
  { slug: "fc-b1-c40-01", level: "B1", chapter: 40, theme: "gramatica", front: "Relativsatz: der/die/das + verbo final", back: "Das Diagramm, das ich gesehen habe, zeigt einen Trend.", ex_de: "Die Frau, der ich danke, ist Lehrerin.", ex_pt: "A mulher a quem agradeco e professora." },
  { slug: "fc-b1-c40-02", level: "B1", chapter: 40, theme: "gramatica", front: "Relativsatz com preposicao", back: "Preposicao + pronome relativo: in der, auf dem, mit dem", ex_de: "Die Stadt, in der ich wohne, ist gross.", ex_pt: "A cidade na qual moro e grande." },
  { slug: "fc-b1-c41-01", level: "B1", chapter: 41, theme: "gramatica", front: "obwohl + verbo final", back: "Embora: Obwohl ich muede bin, lerne ich.", ex_de: "Obwohl es regnet, gehe ich raus.", ex_pt: "Embora chova, eu saio." },
  { slug: "fc-b1-c41-02", level: "B1", chapter: 41, theme: "gramatica", front: "trotzdem + verbo posicao 2", back: "Mesmo assim: Es regnet. Trotzdem gehe ich raus.", ex_de: "Ich bin muede. Trotzdem lerne ich.", ex_pt: "Estou cansado. Mesmo assim estudo." },
  { slug: "fc-b1-c42-01", level: "B1", chapter: 42, theme: "gramatica", front: "Passiv Praesens", back: "werden + Partizip II", ex_de: "Das Projekt wird geplant.", ex_pt: "O projeto esta sendo planejado." },
  { slug: "fc-b1-c42-02", level: "B1", chapter: 42, theme: "gramatica", front: "N-Deklination", back: "der Student -> den/dem/des Studenten", ex_de: "Ich helfe dem Studenten.", ex_pt: "Ajudo o estudante." },
  { slug: "fc-b1-c43-01", level: "B1", chapter: 43, theme: "gramatica", front: "achten auf + Akkusativ", back: "prestar atencao em algo", ex_de: "Ich achte auf die Qualitaet.", ex_pt: "Presto atencao na qualidade." },
  { slug: "fc-b1-c44-01", level: "B1", chapter: 44, theme: "gramatica", front: "Konjunktiv II conselho", back: "Du solltest ... / An deiner Stelle wuerde ich ...", ex_de: "Du solltest dich ausruhen.", ex_pt: "Voce deveria descansar." },
  { slug: "fc-b1-c45-01", level: "B1", chapter: 45, theme: "gramatica", front: "weil vs deshalb", back: "weil + verbo final; deshalb + verbo posicao 2", ex_de: "Ich spare Strom, weil es wichtig ist. Deshalb dusche ich kurz.", ex_pt: "Economizo energia porque e importante. Por isso tomo banho curto." },
  { slug: "fc-b1-c48-01", level: "B1", chapter: 48, theme: "gramatica", front: "damit vs um...zu", back: "damit = oracao completa; um...zu = mesmo sujeito", ex_de: "Ich lerne, um zu bestehen. Ich helfe dir, damit du bestehst.", ex_pt: "Estudo para passar. Ajudo voce para que passe." },
  { slug: "fc-b1-c49-01", level: "B1", chapter: 49, theme: "gramatica", front: "TeKaMoLo", back: "Tempo - Causa - Modo - Lugar", ex_de: "Ich fahre morgen wegen der Arbeit mit dem Bus nach Berlin.", ex_pt: "Vou amanha por causa do trabalho de onibus para Berlim." },
  { slug: "fc-b1-c50-01", level: "B1", chapter: 50, theme: "gramatica", front: "Passiv mit Modalverben", back: "muss/soll/kann + Partizip II + werden", ex_de: "Die Regel muss befolgt werden.", ex_pt: "A regra deve ser seguida." },
  { slug: "fc-b1-c52-01", level: "B1", chapter: 52, theme: "gramatica", front: "Indirekte Rede com dass/ob", back: "Er sagt, dass ... / Sie fragt, ob ...", ex_de: "Sie fragt, ob er kommt.", ex_pt: "Ela pergunta se ele vem." },
  { slug: "fc-b1-c53-01", level: "B1", chapter: 53, theme: "gramatica", front: "sich freuen auf + Akk", back: "estar ansioso por algo futuro", ex_de: "Ich freue mich auf den Urlaub.", ex_pt: "Estou ansioso pelas ferias." },
  { slug: "fc-b1-c54-01", level: "B1", chapter: 54, theme: "gramatica", front: "ohne...zu", back: "sem fazer algo; mesmo sujeito", ex_de: "Er ging, ohne etwas zu sagen.", ex_pt: "Ele saiu sem dizer nada." },
  { slug: "fc-b1-c55-01", level: "B1", chapter: 55, theme: "gramatica", front: "Adjektivdeklination definido", back: "der gute Mann, die gute Frau, das gute Kind", ex_de: "Der alte Mann ist freundlich.", ex_pt: "O homem velho e simpatico." },
  { slug: "fc-b1-c55-02", level: "B1", chapter: 55, theme: "gramatica", front: "Adjektivdeklination indefinido", back: "ein guter Mann, eine gute Frau, ein gutes Kind", ex_de: "Das ist ein modernes Fahrrad.", ex_pt: "Isso e uma bicicleta moderna." },
  { slug: "fc-b1-c56-01", level: "B1", chapter: 56, theme: "gramatica", front: "Praeteritum Passiv", back: "wurde + Partizip II", ex_de: "Der Server wurde repariert.", ex_pt: "O servidor foi consertado." },
  { slug: "fc-b1-c56-02", level: "B1", chapter: 56, theme: "gramatica", front: "Perfekt Passiv", back: "ist + Partizip II + worden", ex_de: "Das Problem ist geloest worden.", ex_pt: "O problema foi resolvido." },
  { slug: "fc-b1-c57-01", level: "B1", chapter: 57, theme: "gramatica", front: "Konjunktiv II irreal", back: "Wenn ich Zeit haette, wuerde ich reisen.", ex_de: "Wenn ich das gewusst haette, waere ich gekommen.", ex_pt: "Se eu soubesse disso, teria vindo." },
  { slug: "fc-b1-c58-01", level: "B1", chapter: 58, theme: "gramatica", front: "Partizip I como adjetivo", back: "verbo + d: lachend, weinend, spannend", ex_de: "Das lachende Kind spielt.", ex_pt: "A crianca rindo brinca." },
  { slug: "fc-b1-c58-02", level: "B1", chapter: 58, theme: "gramatica", front: "Partizip II como adjetivo", back: "resultado/estado: geschlossen, gemacht", ex_de: "Die geschlossene Tuer ist rot.", ex_pt: "A porta fechada e vermelha." },
  { slug: "fc-b1-c59-01", level: "B1", chapter: 59, theme: "gramatica", front: "Nominalstil", back: "verbo vira substantivo: besprechen -> die Besprechung", ex_de: "Die Anmeldung ist bis Freitag moeglich.", ex_pt: "A inscricao e possivel ate sexta." },
  { slug: "fc-b1-c61-01", level: "B1", chapter: 61, theme: "gramatica", front: "B1 checklist gramatical", back: "Relativsatz, Passiv, Konjunktiv II, Adjektive, Nebensaetze", ex_de: "Kommunikation geht vor Perfektion.", ex_pt: "Comunicacao vem antes da perfeicao." },
];

export { B1_MODULES, B1_LESSONS, B1_EXERCISES, B1_FLASHCARDS };
