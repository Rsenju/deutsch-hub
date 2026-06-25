export type SkillLevel = "A1" | "A2" | "B1" | "B2";
export type SkillId = "hoeren" | "lesen" | "sprechen";

type BaseTask = {
  id: string;
  level: SkillLevel;
  title: string;
  topic: string;
  focus: string[];
};

export type HoerenTask = BaseTask & {
  skill: "hoeren";
  script: string;
  questions: Array<{ q: string; a: string }>;
};

export type LesenTask = BaseTask & {
  skill: "lesen";
  text: string;
  questions: Array<{ q: string; a: string }>;
};

export type SprechenTask = BaseTask & {
  skill: "sprechen";
  prompt: string;
  phrases: string[];
  model: string;
};

export const SKILL_TASKS: Record<SkillId, Array<HoerenTask | LesenTask | SprechenTask>> = {
  hoeren: [
    {
      id: "h-a1-termin",
      level: "A1",
      skill: "hoeren",
      title: "Mensagem: compromisso",
      topic: "Termine",
      script: "Hallo, hier ist Thomas. Wir treffen uns morgen um zehn Uhr vor dem Bahnhof. Bitte bring deinen Ausweis mit. Bis morgen!",
      focus: ["horario", "lugar", "objeto"],
      questions: [{ q: "Wann treffen sie sich?", a: "morgen um zehn Uhr" }, { q: "Wo treffen sie sich?", a: "vor dem Bahnhof" }],
    },
    {
      id: "h-a2-arzt",
      level: "A2",
      skill: "hoeren",
      title: "Telefonema: consulta médica",
      topic: "Gesundheit",
      script: "Guten Tag, Praxis Dr. Weber. Ihr Termin ist am Dienstag um 16 Uhr. Bitte kommen Sie zehn Minuten frueher und bringen Sie Ihre Versicherungskarte mit.",
      focus: ["datas", "horarios", "instrucoes"],
      questions: [{ q: "Wann ist der Termin?", a: "am Dienstag um 16 Uhr" }, { q: "Was soll die Person mitbringen?", a: "die Versicherungskarte" }],
    },
    {
      id: "h-b1-homeoffice",
      level: "B1",
      skill: "hoeren",
      title: "Entrevista: home office",
      topic: "Arbeit",
      script: "Ich arbeite gern im Homeoffice, weil ich Zeit spare. Trotzdem finde ich zwei Tage im Buero wichtig, damit man Kontakt zum Team hat.",
      focus: ["opiniao", "causa", "contraste"],
      questions: [{ q: "Warum arbeitet die Person gern im Homeoffice?", a: "weil sie Zeit spart" }, { q: "Warum sind Tage im Buero wichtig?", a: "Kontakt zum Team" }],
    },
  ],
  lesen: [
    {
      id: "l-a1-einladung",
      level: "A1",
      skill: "lesen",
      title: "Convite curto",
      topic: "Einladung",
      text: "Hallo Ben,\nam Freitag mache ich eine kleine Party. Sie beginnt um 19 Uhr. Kannst du Salat mitbringen?\nViele Gruesse\nLisa",
      focus: ["intencao", "horario", "pedido"],
      questions: [{ q: "Por que Lisa escreve?", a: "convite para festa" }, { q: "O que Ben deve levar?", a: "Salat" }],
    },
    {
      id: "l-a2-kurs",
      level: "A2",
      skill: "lesen",
      title: "Anúncio de curso",
      topic: "Deutschkurse",
      text: "Der Deutschkurs A2 beginnt am 12. Juni. Der Unterricht findet dienstags und donnerstags von 18 bis 20 Uhr statt. Die Anmeldung kostet 150 Euro.",
      focus: ["datas", "dias", "preco"],
      questions: [{ q: "Wann beginnt der Kurs?", a: "am 12. Juni" }, { q: "Wie viel kostet die Anmeldung?", a: "150 Euro" }],
    },
    {
      id: "l-b1-forum",
      level: "B1",
      skill: "lesen",
      title: "Fórum: celular na escola",
      topic: "Medien",
      text: "Ich finde, dass Handys in der Schule nicht komplett verboten werden sollten. Einerseits stoeren sie manchmal den Unterricht. Andererseits kann man damit schnell Informationen suchen. Wichtig sind klare Regeln.",
      focus: ["opiniao", "pro-contra", "conclusao"],
      questions: [{ q: "Qual é a opinião principal?", a: "não proibir completamente" }, { q: "Qual solução é sugerida?", a: "regras claras" }],
    },
  ],
  sprechen: [
    {
      id: "s-a1-vorstellen",
      level: "A1",
      skill: "sprechen",
      title: "Apresentação pessoal",
      topic: "Vorstellung",
      prompt: "Apresente-se em 5 frases: nome, origem, moradia, estudo/trabalho e hobby.",
      focus: ["apresentacao", "frases simples"],
      phrases: ["Ich heisse ...", "Ich komme aus ...", "Ich wohne in ...", "In meiner Freizeit ..."],
      model: "Ich heisse Ana. Ich komme aus Brasilien. Ich wohne in Sao Paulo. Ich lerne Deutsch. In meiner Freizeit hoere ich Musik.",
    },
    {
      id: "s-a2-planen",
      level: "A2",
      skill: "sprechen",
      title: "Planejar encontro",
      topic: "Planung",
      prompt: "Combine uma atividade no fim de semana: proposta, horário, lugar e alternativa.",
      focus: ["proposta", "horario", "reacao"],
      phrases: ["Wir koennen ...", "Passt dir ...?", "Wenn es regnet, ..."],
      model: "Wir koennen am Samstag ins Museum gehen. Treffen wir uns um 14 Uhr am Bahnhof? Wenn es regnet, gehen wir ins Cafe.",
    },
    {
      id: "s-b1-meinung",
      level: "B1",
      skill: "sprechen",
      title: "Opinião B1",
      topic: "Online lernen",
      prompt: "Fale sobre aprender online: opinião, vantagem, desvantagem, exemplo pessoal e conclusão.",
      focus: ["opiniao", "argumentacao", "conclusao"],
      phrases: ["Meiner Meinung nach ...", "Ein Vorteil ist ...", "Ein Nachteil ist ...", "Zum Schluss ..."],
      model: "Meiner Meinung nach ist Online-Lernen praktisch. Ein Vorteil ist, dass man flexibel ist. Ein Nachteil ist, dass man viel Disziplin braucht. Zum Schluss denke ich, dass eine Mischung am besten ist.",
    },
  ],
};

