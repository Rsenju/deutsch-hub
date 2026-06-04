export type GoetheLevel = "A1" | "A2" | "B1";

export type GoetheSectionId = "hoeren" | "lesen" | "schreiben" | "sprechen";

export type ObjectiveQuestion = {
  id: string;
  type: "single";
  prompt: string;
  options: string[];
  answer: string;
  explanation: string;
  tag?: string;
};

export type ProductionTask = {
  id: string;
  type: "writing" | "speaking";
  prompt: string;
  requirements: string[];
  modelAnswer?: string;
  tag?: string;
};

export type GoetheSection = {
  id: GoetheSectionId;
  title: string;
  durationMinutes: number;
  instructions: string;
  sourceText?: string;
  audioScript?: string;
  questions?: ObjectiveQuestion[];
  task?: ProductionTask;
  maxScore: number;
};

export type GoetheSimulation = {
  level: GoetheLevel;
  title: string;
  description: string;
  passPercent: number;
  sections: GoetheSection[];
};

export const GOETHE_SIMULADOS: Record<GoetheLevel, GoetheSimulation> = {
  A1: {
    level: "A1",
    title: "Goethe-Zertifikat A1 - Simulado 1",
    description: "Formato inicial para Start Deutsch 1: avisos, mensagens curtas, formulario e apresentacao oral.",
    passPercent: 60,
    sections: [
      {
        id: "hoeren",
        title: "Hoeren",
        durationMinutes: 20,
        instructions: "Ouça o aviso duas vezes. Marque a alternativa correta.",
        audioScript:
          "Achtung, eine Durchsage. Der Zug nach Berlin faehrt heute von Gleis drei ab. Die Abfahrt ist um 15:30 Uhr. Bitte steigen Sie jetzt ein.",
        questions: [
          {
            id: "a1-h-1",
            type: "single",
            prompt: "Para onde vai o trem?",
            options: ["Nach Berlin", "Nach Hamburg", "Nach Muenchen"],
            answer: "Nach Berlin",
            explanation: "O aviso diz: Der Zug nach Berlin.",
            tag: "destino",
          },
          {
            id: "a1-h-2",
            type: "single",
            prompt: "De qual plataforma o trem sai?",
            options: ["Gleis zwei", "Gleis drei", "Gleis fuenf"],
            answer: "Gleis drei",
            explanation: "A palavra-chave e Gleis drei.",
            tag: "plataforma",
          },
          {
            id: "a1-h-3",
            type: "single",
            prompt: "Qual horario foi mencionado?",
            options: ["14:30", "15:30", "16:30"],
            answer: "15:30",
            explanation: "O aviso diz: um 15:30 Uhr.",
            tag: "horarios",
          },
        ],
        maxScore: 15,
      },
      {
        id: "lesen",
        title: "Lesen",
        durationMinutes: 25,
        instructions: "Leia a mensagem e responda.",
        sourceText:
          "Hallo Anna,\nich habe am Samstag Geburtstag. Die Party beginnt um 18 Uhr bei mir zu Hause. Bring bitte einen Kuchen mit. Kommst du?\nLiebe Gruesse\nMaria",
        questions: [
          {
            id: "a1-l-1",
            type: "single",
            prompt: "Por que Maria escreve?",
            options: ["Ela convida Anna para uma festa", "Ela cancela uma viagem", "Ela pede um endereco"],
            answer: "Ela convida Anna para uma festa",
            explanation: "Birthday party + kommst du indicam convite.",
            tag: "intencao_texto",
          },
          {
            id: "a1-l-2",
            type: "single",
            prompt: "Quando a festa comeca?",
            options: ["Samstag um 18 Uhr", "Sonntag um 18 Uhr", "Samstag um 8 Uhr"],
            answer: "Samstag um 18 Uhr",
            explanation: "O texto diz: am Samstag, beginnt um 18 Uhr.",
            tag: "horarios",
          },
          {
            id: "a1-l-3",
            type: "single",
            prompt: "O que Anna deve levar?",
            options: ["Kaffee", "Kuchen", "Blumen"],
            answer: "Kuchen",
            explanation: "Bring bitte einen Kuchen mit.",
            tag: "detalhes",
          },
        ],
        maxScore: 15,
      },
      {
        id: "schreiben",
        title: "Schreiben",
        durationMinutes: 20,
        instructions: "Escreva um texto curto em alemao. Depois compare com os criterios.",
        task: {
          id: "a1-s-1",
          type: "writing",
          prompt: "Voce quer responder a Maria. Diga se voce vai, agradeca o convite e diga o que voce leva.",
          requirements: ["Agradecer pelo convite", "Confirmar presenca ou ausencia", "Mencionar o que vai levar"],
          modelAnswer: "Liebe Maria, danke fuer die Einladung. Ich komme gern am Samstag. Ich bringe einen Kuchen mit. Liebe Gruesse, Anna",
          tag: "mensagem_curta",
        },
        maxScore: 20,
      },
      {
        id: "sprechen",
        title: "Sprechen",
        durationMinutes: 15,
        instructions: "Treine em voz alta. Grave sua resposta se quiser comparar depois.",
        task: {
          id: "a1-sp-1",
          type: "speaking",
          prompt: "Apresente-se: nome, origem, moradia, profissao/estudo e hobbies.",
          requirements: ["Dizer nome", "Dizer origem", "Dizer onde mora", "Dizer um hobby", "Fazer uma pergunta simples"],
          modelAnswer: "Guten Tag. Ich heisse Ana. Ich komme aus Brasilien und wohne in Sao Paulo. Ich lerne Deutsch. In meiner Freizeit hoere ich Musik. Und Sie?",
          tag: "apresentacao",
        },
        maxScore: 20,
      },
    ],
  },
  A2: {
    level: "A2",
    title: "Goethe-Zertifikat A2 - Simulado 1",
    description: "Treino A2 com conversa cotidiana, aviso, mensagem escrita e planejamento oral.",
    passPercent: 60,
    sections: [
      {
        id: "hoeren",
        title: "Hoeren",
        durationMinutes: 30,
        instructions: "Ouça a mensagem telefonica e escolha as respostas corretas.",
        audioScript:
          "Hallo Paul, hier ist Lisa. Ich kann heute leider nicht ins Kino kommen, weil ich krank bin. Koennen wir uns morgen um 19 Uhr treffen? Ruf mich bitte zurueck.",
        questions: [
          {
            id: "a2-h-1",
            type: "single",
            prompt: "Por que Lisa nao pode ir ao cinema?",
            options: ["Ela esta doente", "Ela precisa trabalhar", "Ela perdeu o onibus"],
            answer: "Ela esta doente",
            explanation: "Lisa diz: weil ich krank bin.",
            tag: "motivo",
          },
          {
            id: "a2-h-2",
            type: "single",
            prompt: "Quando Lisa quer encontrar Paul?",
            options: ["Hoje as 19h", "Amanha as 19h", "Amanha as 9h"],
            answer: "Amanha as 19h",
            explanation: "morgen um 19 Uhr.",
            tag: "horarios",
          },
          {
            id: "a2-h-3",
            type: "single",
            prompt: "O que Paul deve fazer?",
            options: ["Comprar ingressos", "Ligar de volta", "Escrever um email"],
            answer: "Ligar de volta",
            explanation: "Ruf mich bitte zurueck.",
            tag: "pedido",
          },
        ],
        maxScore: 20,
      },
      {
        id: "lesen",
        title: "Lesen",
        durationMinutes: 30,
        instructions: "Leia o anuncio e marque as respostas.",
        sourceText:
          "Sprachkurs Deutsch A2\nDer Kurs beginnt am 10. Mai und findet montags und mittwochs von 18 bis 20 Uhr statt. Die Anmeldung ist bis zum 3. Mai online moeglich. Der Kurs kostet 180 Euro. Buecher sind nicht im Preis enthalten.",
        questions: [
          {
            id: "a2-l-1",
            type: "single",
            prompt: "Quando o curso comeca?",
            options: ["3. Mai", "10. Mai", "18. Mai"],
            answer: "10. Mai",
            explanation: "Der Kurs beginnt am 10. Mai.",
            tag: "datas",
          },
          {
            id: "a2-l-2",
            type: "single",
            prompt: "Em quais dias acontece o curso?",
            options: ["Montag und Mittwoch", "Dienstag und Donnerstag", "Samstag und Sonntag"],
            answer: "Montag und Mittwoch",
            explanation: "montags und mittwochs.",
            tag: "dias_semana",
          },
          {
            id: "a2-l-3",
            type: "single",
            prompt: "Os livros estao incluidos no preco?",
            options: ["Sim", "Nao", "Somente online"],
            answer: "Nao",
            explanation: "Buecher sind nicht im Preis enthalten.",
            tag: "negacao",
          },
        ],
        maxScore: 20,
      },
      {
        id: "schreiben",
        title: "Schreiben",
        durationMinutes: 30,
        instructions: "Escreva uma mensagem curta cobrindo todos os pontos.",
        task: {
          id: "a2-s-1",
          type: "writing",
          prompt: "Voce nao pode ir ao curso na proxima segunda. Escreva para a escola: explique o motivo, pergunte sobre material perdido e peca uma resposta.",
          requirements: ["Explicar ausencia", "Perguntar sobre o material", "Pedir resposta", "Usar saudacao e despedida"],
          modelAnswer:
            "Sehr geehrte Damen und Herren, am Montag kann ich leider nicht zum Kurs kommen, weil ich einen Termin beim Arzt habe. Koennen Sie mir bitte sagen, welche Aufgaben ich machen soll? Vielen Dank fuer Ihre Antwort. Mit freundlichen Gruessen",
          tag: "email_formal",
        },
        maxScore: 20,
      },
      {
        id: "sprechen",
        title: "Sprechen",
        durationMinutes: 15,
        instructions: "Responda em voz alta e tente planejar algo com outra pessoa.",
        task: {
          id: "a2-sp-1",
          type: "speaking",
          prompt: "Planeje uma atividade no fim de semana: lugar, horario, transporte e alternativa se chover.",
          requirements: ["Fazer uma proposta", "Combinar horario", "Mencionar transporte", "Reagir a um problema"],
          modelAnswer:
            "Wir koennen am Samstag ins Museum gehen. Treffen wir uns um 14 Uhr am Bahnhof? Ich komme mit dem Bus. Wenn es regnet, koennen wir danach ein Cafe besuchen.",
          tag: "planejamento",
        },
        maxScore: 20,
      },
    ],
  },
  B1: {
    level: "B1",
    title: "Goethe-Zertifikat B1 - Simulado 1",
    description: "Treino B1 com opiniao, informacoes detalhadas, e-mail formal e apresentacao curta.",
    passPercent: 60,
    sections: [
      {
        id: "hoeren",
        title: "Hoeren",
        durationMinutes: 40,
        instructions: "Ouça uma entrevista curta. Foque em opiniao, motivo e detalhe.",
        audioScript:
          "Moderator: Heute sprechen wir ueber Homeoffice. Frau Keller, was denken Sie? Keller: Ich finde Homeoffice praktisch, weil man Zeit spart. Aber fuer junge Mitarbeiter ist es manchmal schwierig, denn sie brauchen direkten Kontakt zum Team. Deshalb sollten Firmen zwei oder drei Tage im Buero anbieten.",
        questions: [
          {
            id: "b1-h-1",
            type: "single",
            prompt: "Qual e a opiniao geral de Frau Keller sobre home office?",
            options: ["Ela acha pratico", "Ela acha completamente inutil", "Ela nao tem opiniao"],
            answer: "Ela acha pratico",
            explanation: "Ela diz: Ich finde Homeoffice praktisch.",
            tag: "opiniao",
          },
          {
            id: "b1-h-2",
            type: "single",
            prompt: "Qual problema ela menciona?",
            options: ["Falta de internet", "Jovens precisam de contato direto", "Salarios baixos"],
            answer: "Jovens precisam de contato direto",
            explanation: "junge Mitarbeiter brauchen direkten Kontakt zum Team.",
            tag: "argumento",
          },
          {
            id: "b1-h-3",
            type: "single",
            prompt: "Qual solucao ela sugere?",
            options: ["Nunca trabalhar em casa", "Dois ou tres dias no escritorio", "So trabalhar a noite"],
            answer: "Dois ou tres dias no escritorio",
            explanation: "zwei oder drei Tage im Buero.",
            tag: "solucao",
          },
        ],
        maxScore: 25,
      },
      {
        id: "lesen",
        title: "Lesen",
        durationMinutes: 65,
        instructions: "Leia o post de forum e identifique opiniao, argumento e consequencia.",
        sourceText:
          "Forum: Sollten Kinder frueh ein Smartphone bekommen?\nIch bin der Meinung, dass Kinder nicht zu frueh ein eigenes Smartphone brauchen. Einerseits ist es praktisch, weil Eltern ihre Kinder erreichen koennen. Andererseits verbringen viele Kinder zu viel Zeit online. In unserer Familie gibt es deshalb klare Regeln: Das Handy bleibt beim Essen und vor dem Schlafen ausgeschaltet.",
        questions: [
          {
            id: "b1-l-1",
            type: "single",
            prompt: "Qual e a opiniao principal do texto?",
            options: ["Criancas nao precisam de smartphone muito cedo", "Toda crianca deve ter celular", "Celulares devem ser proibidos para adultos"],
            answer: "Criancas nao precisam de smartphone muito cedo",
            explanation: "nicht zu frueh ein eigenes Smartphone.",
            tag: "opiniao",
          },
          {
            id: "b1-l-2",
            type: "single",
            prompt: "Qual vantagem e mencionada?",
            options: ["Pais conseguem falar com os filhos", "As criancas dormem mais", "A escola fica mais barata"],
            answer: "Pais conseguem falar com os filhos",
            explanation: "Eltern koennen ihre Kinder erreichen.",
            tag: "argumento",
          },
          {
            id: "b1-l-3",
            type: "single",
            prompt: "Qual regra existe na familia?",
            options: ["Celular desligado durante refeicao e antes de dormir", "Celular so no domingo", "Celular proibido na escola"],
            answer: "Celular desligado durante refeicao e antes de dormir",
            explanation: "beim Essen und vor dem Schlafen ausgeschaltet.",
            tag: "detalhes",
          },
        ],
        maxScore: 25,
      },
      {
        id: "schreiben",
        title: "Schreiben",
        durationMinutes: 60,
        instructions: "Escreva um texto B1 estruturado. Cumpra todos os pontos.",
        task: {
          id: "b1-s-1",
          type: "writing",
          prompt:
            "Voce comprou um curso online, mas o acesso nao funciona. Escreva um e-mail formal para o suporte: explique o problema, diga quando comprou, peca uma solucao e mencione que precisa do curso para uma prova.",
          requirements: ["E-mail formal", "Problema claro", "Data ou contexto da compra", "Pedido de solucao", "Motivo/importancia"],
          modelAnswer:
            "Sehr geehrte Damen und Herren, ich habe am Montag einen Onlinekurs gekauft, aber mein Zugang funktioniert leider nicht. Ich kann mich einloggen, aber die Videos werden nicht angezeigt. Koennten Sie das Problem bitte pruefen und mir schnell helfen? Ich brauche den Kurs fuer meine B1-Pruefung. Mit freundlichen Gruessen",
          tag: "email_formal_reclamacao",
        },
        maxScore: 30,
      },
      {
        id: "sprechen",
        title: "Sprechen",
        durationMinutes: 15,
        instructions: "Prepare uma fala curta com introducao, opiniao, exemplo e conclusao.",
        task: {
          id: "b1-sp-1",
          type: "speaking",
          prompt: "Apresente o tema: Aprender online ou presencialmente? Fale sobre vantagens, desvantagens, sua experiencia e conclusao.",
          requirements: ["Introduzir o tema", "Dar opiniao", "Citar vantagem e desvantagem", "Dar exemplo pessoal", "Concluir"],
          modelAnswer:
            "Ich moechte ueber Onlinekurse sprechen. Meiner Meinung nach sind sie praktisch, weil man flexibel lernen kann. Ein Nachteil ist aber, dass man weniger direkten Kontakt hat. Ich habe online Deutsch gelernt und brauche viel Disziplin. Zum Schluss denke ich, dass eine Mischung am besten ist.",
          tag: "opiniao_b1",
        },
        maxScore: 30,
      },
    ],
  },
};
