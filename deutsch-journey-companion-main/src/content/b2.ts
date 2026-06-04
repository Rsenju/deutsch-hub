// @ts-nocheck

const B2_TOPICS = [
  { n: 62, slug: "b2-cap62", pt: "Argumentação avançada", de: "Komplex argumentieren", grammar: "Konnektoren, Nominalstil, Redemittel", skill: "defender opinioes com nuance" },
  { n: 63, slug: "b2-cap63", pt: "Trabalho e sociedade", de: "Beruf und Gesellschaft", grammar: "Passiv, Ersatzformen, Partizipialkonstruktionen", skill: "discutir trabalho, tecnologia e sociedade" },
  { n: 64, slug: "b2-cap64", pt: "Ciência, mídia e opinião", de: "Wissenschaft, Medien und Meinung", grammar: "Indirekte Rede, Konjunktiv I/II", skill: "resumir informacoes e avaliar fontes" },
  { n: 65, slug: "b2-cap65", pt: "Preparação Goethe B2", de: "Goethe B2 Pruefungstraining", grammar: "revisao integrada", skill: "Lesen, Hoeren, Schreiben, Sprechen em tempo de prova" },
];

const B2_MODULES = [
  ...B2_TOPICS.map((t) => ({ slug: t.slug, n: t.n, pt: t.pt, de: t.de, done: false })),
  { slug: "b2-exam", n: 99, pt: "Prova Final B2", de: "B2 Abschlusspruefung", done: false, isExam: true },
];

function makeB2Lessons(topic) {
  return [
    {
      slug: `b2-l${topic.n}-1`,
      sort: 1,
      title_pt: `Leitura e debate: ${topic.pt}`,
      title_de: `Lesen und Diskussion: ${topic.de}`,
      rule: `Foco B2: ${topic.grammar}.`,
      content: `AUFGABE:
Lesen Sie einen anspruchsvolleren Text zum Thema "${topic.de}" und markieren Sie These, Argumente, Gegenargumente und Fazit.

STRUKTUR B2:
1. Thema einordnen
2. These formulieren
3. Argument mit Beispiel
4. Gegenargument beruecksichtigen
5. differenziertes Fazit

REDEMITTEL:
Aus meiner Sicht...
Es laesst sich nicht leugnen, dass...
Ein weiterer Aspekt ist...
Gleichzeitig sollte man bedenken, dass...
Zusammenfassend laesst sich sagen...`,
      notes: ["B2 exige nuance, nao apenas frases corretas.", "Sempre diferencie opiniao, fato e exemplo."],
      vocab: [
        { de: "die These", pt: "a tese" },
        { de: "das Gegenargument", pt: "o contra-argumento" },
        { de: "differenziert", pt: "nuançado" },
      ],
      examples: [
        { de: "Es laesst sich nicht leugnen, dass digitale Medien unseren Alltag veraendert haben.", pt: "Não se pode negar que mídias digitais mudaram nosso cotidiano." },
      ],
    },
    {
      slug: `b2-l${topic.n}-2`,
      sort: 2,
      title_pt: `Produção B2: ${topic.pt}`,
      title_de: `Produktion B2: ${topic.de}`,
      rule: "Escreva e fale com estrutura, precisão e conectores avançados.",
      content: `SCHREIBEN:
Escreva 140-180 palavras com introducao, dois argumentos, contra-argumento e conclusao.

SPRECHEN:
Fale 2 minutos. Use pelo menos: einerseits, andererseits, ausserdem, dennoch, zusammenfassend.`,
      notes: ["Evite repetir ich denke em toda frase.", "Use exemplos concretos e conectores variados."],
      vocab: [],
      examples: [
        { de: "Einerseits bietet diese Entwicklung viele Chancen, andererseits entstehen neue Herausforderungen.", pt: "Por um lado esse desenvolvimento oferece chances, por outro surgem novos desafios." },
      ],
    },
  ];
}

const B2_LESSONS = Object.fromEntries(B2_TOPICS.map((topic) => [topic.slug, makeB2Lessons(topic)]));
B2_LESSONS["b2-exam"] = [
  { slug: "b2-exam-l1-lesen", sort: 1, title_pt: "Goethe B2: Lesen", title_de: "B2 Lesen", rule: "Ler textos longos por tese, estrutura e detalhes.", content: "Treine artigos, comentários e textos informativos com alternativas próximas.", notes: [], vocab: [], examples: [] },
  { slug: "b2-exam-l2-hoeren", sort: 2, title_pt: "Goethe B2: Hoeren", title_de: "B2 Hoeren", rule: "Ouvir entrevistas e palestras curtas por opinião e detalhe.", content: "Treine anotações de tese, mudança de opinião, números e exemplos.", notes: [], vocab: [], examples: [] },
  { slug: "b2-exam-l3-schreiben", sort: 3, title_pt: "Goethe B2: Schreiben", title_de: "B2 Schreiben", rule: "Escrever opinião estruturada e mensagem formal.", content: "Use argumentos, contra-argumentos e conclusão diferenciada.", notes: [], vocab: [], examples: [] },
  { slug: "b2-exam-l4-sprechen", sort: 4, title_pt: "Goethe B2: Sprechen", title_de: "B2 Sprechen", rule: "Apresentar, discutir e reagir com nuance.", content: "Prepare fala de 2 minutos e debate com reação a objeções.", notes: [], vocab: [], examples: [] },
];

const B2_EXERCISES = {};
for (const topic of B2_TOPICS) {
  B2_EXERCISES[`b2-l${topic.n}-1`] = [
    { type: "choose", q: "Qual conector introduz contraste sofisticado?", opts: ["dennoch", "und", "oder", "hallo"], a: "dennoch", exp: "dennoch = mesmo assim; útil em argumentação.", xp: 10 },
    { type: "write", q: `Escreva uma tese B2 sobre: ${topic.pt}.`, criteria: ["Tese clara", "Conector avançado", "Exemplo concreto"], minWords: 60, model: "Aus meiner Sicht sollte man dieses Thema differenziert betrachten, weil sowohl Chancen als auch Risiken bestehen.", xp: 18 },
  ];
  B2_EXERCISES[`b2-l${topic.n}-2`] = [
    { type: "speak", q: `Fale por 2 minutos sobre: ${topic.pt}.`, criteria: ["Introdução", "Dois argumentos", "Contra-argumento", "Conclusão"], minWords: 50, model: "Zunaechst moechte ich betonen, dass das Thema sehr aktuell ist. Einerseits..., andererseits... Zusammenfassend...", xp: 18 },
  ];
}

const B2_FLASHCARDS = [
  { slug: "fc-b2-c62-01", level: "B2", chapter: 62, theme: "gramatica", front: "Es laesst sich nicht leugnen, dass ...", back: "Não se pode negar que ...", ex_de: "Es laesst sich nicht leugnen, dass KI den Arbeitsmarkt veraendert.", ex_pt: "Não se pode negar que IA muda o mercado de trabalho." },
  { slug: "fc-b2-c62-02", level: "B2", chapter: 62, theme: "gramatica", front: "Einerseits ..., andererseits ...", back: "Por um lado ..., por outro ...", ex_de: "Einerseits ist Homeoffice flexibel, andererseits fehlt der direkte Kontakt.", ex_pt: "Por um lado home office é flexível, por outro falta contato direto." },
  { slug: "fc-b2-c63-01", level: "B2", chapter: 63, theme: "wortschatz", front: "die Herausforderung", back: "o desafio", ex_de: "Digitalisierung ist eine grosse Herausforderung.", ex_pt: "Digitalização é um grande desafio." },
  { slug: "fc-b2-c64-01", level: "B2", chapter: 64, theme: "gramatica", front: "Indirekte Rede: Er sagte, er habe ...", back: "Discurso indireto com Konjunktiv I", ex_de: "Die Expertin sagte, die Studie habe klare Ergebnisse.", ex_pt: "A especialista disse que o estudo tinha resultados claros." },
];

export { B2_MODULES, B2_LESSONS, B2_EXERCISES, B2_FLASHCARDS };

