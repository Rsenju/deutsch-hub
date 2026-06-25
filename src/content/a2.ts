// @ts-nocheck
// ─────────────────────────────────────────────────
// DEUTSCH HUB — a2.js
// Módulos A2 (capítulos 21-39 + prova final)
// ─────────────────────────────────────────────────

const A2_MODULES = [
  { slug:'a2-cap21', n:21, pt:'Ontem foi… – Falar sobre o passado',           de:'Gestern war… – Über die Vergangenheit',     done:false },
  { slug:'a2-cap22', n:22, pt:'Minha Viagem – Relatar deslocamentos',          de:'Meine Reise – Unterwegs berichten',         done:false },
  { slug:'a2-cap23', n:23, pt:'Saúde – No médico',                             de:'Gesundheit – Beim Arzt sprechen',           done:false },
  { slug:'a2-cap24', n:24, pt:'Moradia – Descrever ambientes',                 de:'Wohnen – Zuhause beschreiben',              done:false },
  { slug:'a2-cap25', n:25, pt:'Aparência – Descrever pessoas',                 de:'Aussehen – Personen beschreiben',           done:false },
  { slug:'a2-cap26', n:26, pt:'Mídias – Tecnologia no dia a dia',              de:'Medien – Alltag mit Technologie',           done:false },
  { slug:'a2-cap27', n:27, pt:'No Restaurante – Pedir e reagir',               de:'Im Restaurant – Bestellen und reagieren',   done:false },
  { slug:'a2-cap28', n:28, pt:'Biografias – Contar histórias',                 de:'Biografien – Lebensgeschichten erzählen',   done:false },
  { slug:'a2-cap29', n:29, pt:'Presentes – Dar e receber',                     de:'Geschenke – Geben und bekommen',            done:false },
  { slug:'a2-cap30', n:30, pt:'Correios & Banco – Situações formais',          de:'Post und Bank – Formelle Situationen',      done:false },
  { slug:'a2-cap31', n:31, pt:'Dativo no Cotidiano – Relações sociais',        de:'Dativ im Alltag – Beziehungen ausdrücken',  done:false },
  { slug:'a2-cap32', n:32, pt:'Posse – Genitivo e von + dativo',               de:'Besitz und Beziehungen – Genitiv',          done:false },
  { slug:'a2-cap33', n:33, pt:'Justificativas – dass e weil',                  de:'Gründe und Aussagen – dass und weil',       done:false },
  { slug:'a2-cap34', n:34, pt:'Condições e Dúvidas – wenn e ob',               de:'Bedingungen und Fragen – wenn und ob',      done:false },
  { slug:'a2-cap35', n:35, pt:'Passado Aprofundado – Präteritum',              de:'Vergangenheit – Präteritum im Alltag',      done:false },
  { slug:'a2-cap36', n:36, pt:'Generalizações – O pronome man',                de:'Allgemeine Aussagen – Das Pronomen man',    done:false },
  { slug:'a2-cap37', n:37, pt:'Sintomas – Descrever dor e duração',            de:'Beim Arzt – Symptome beschreiben',          done:false },
  { slug:'a2-cap38', n:38, pt:'Futuro – Planejar e projetar',                  de:'Zukunft planen – Über Pläne sprechen',      done:false },
  { slug:'a2-cap39', n:39, pt:'Trabalho & Estudo – Organizar rotina',          de:'Arbeit und Studium – Alltag organisieren',  done:false },
  { slug:'a2-exam',  n:99, pt:'Prova Final A2',                                de:'A2 Abschlussprüfung',                       done:false, isExam:true },
];

// ─────────────────────────────────────────────────
// LESSONS A2
// ─────────────────────────────────────────────────
const A2_LESSONS = {
'a2-cap21':[
  { slug:'a2-l21-1', sort:1, title_pt:'Diálogo: Lukas e Sarah — fim de semana', title_de:'Dialog: Über das Wochenende',
    rule:'Perfekt com haben: Sujeito + haben + ... + Partizip II (final). Regulares: ge-+raiz+-t.',
    content:`DIÁLOGO:
Lukas: Hey Sarah, wie war dein Wochenende?
Sarah: Es war schön. Am Samstag habe ich geputzt und mit meiner Schwester Pasta gekocht.
Lukas: Was habt ihr gemacht? Ich habe erst geschlafen, dann bin ich ins Fitnessstudio gegangen.
Sarah: Am Sonntag habe ich meine Oma besucht. Wir haben gesprochen und sie hat mir alte Fotos gezeigt.
Lukas: Gestern habe ich viel gearbeitet und am Abend ferngesehen.
Sarah: Komm, wir bestellen einen Kaffee!

TRADUÇÃO:
Lukas: Oi Sarah, como foi seu fim de semana?
Sarah: Foi legal. No sábado limpei e cozinhei macarrão com minha irmã.
Lukas: O que fizeram? Eu dormi, depois fui à academia.
Sarah: No domingo visitei minha avó. Conversamos e ela me mostrou fotos antigas.
Lukas: Ontem trabalhei muito e à noite assisti TV.
Sarah: Vamos pedir um café!`,
    notes:['Regulares: ge-+raiz+-t → machen→gemacht','Irregulares: ge-+raiz(muda)+-en → lesen→gelesen','Inseparáveis (be-/ver-/ent-): sem ge- → besuchen→besucht','Verbos -ieren: sem ge- → telefonieren→telefoniert','Separáveis: pref+ge-+raiz → ausräumen→aufgeräumt'],
    vocab:[{de:'putzen',pt:'limpar'},{de:'kochen',pt:'cozinhar'},{de:'schlafen',pt:'dormir'},{de:'besuchen',pt:'visitar'},{de:'zeigen',pt:'mostrar'},{de:'fernsehen',pt:'assistir TV'},{de:'der Termin',pt:'o compromisso'},{de:'verdient',pt:'merecido'}],
    examples:[{de:'Ich habe Pasta gemacht.',pt:'Fiz macarrão.'},{de:'Sie hat mir Fotos gezeigt.',pt:'Ela me mostrou fotos.'},{de:'Ich habe telefoniert.',pt:'Telefonei.'}]
  },
  { slug:'a2-l21-2', sort:2, title_pt:'Perfekt com „haben" — Estrutura e Partizip II', title_de:'Perfekt mit haben',
    rule:'haben (pos.2) + ... + Partizip II (final). ich/er têm mesma forma em haben.',
    content:`CONJUGAÇÃO DE HABEN: ich habe | du hast | er hat | wir haben | ihr habt | sie haben

FORMAÇÃO DO PARTIZIP II:
1. Regulares: ge- + raiz + -t → machen→gemacht | kaufen→gekauft
2. Irregulares: ge- + raiz(muda) + -en → lesen→gelesen | schreiben→geschrieben
3. Separáveis: pref + ge- + raiz → aufräumen→aufgeräumt | fernsehen→ferngesehen
4. Inseparáveis (be-/ver-/ent-): sem ge- → besuchen→besucht | verstehen→verstanden
5. Verbos -ieren: sem ge- → telefonieren→telefoniert | studieren→studiert

POSIÇÃO: haben na pos.2, Partizip II no FINAL.
Sie hat am Wochenende ihre Oma besucht.
Em subordinada (weil): auxiliar vai ao final após Partizip II.
..., weil sie den ganzen Tag gearbeitet hat.`,
    notes:['Partizip II é invariável — não muda com gênero','ARMADILHA: arbeiten → arbeitete → gearbeitet (raiz em -t)'],
    vocab:[],
    examples:[{de:'Ich habe gestern Kaffee getrunken.',pt:'Bebi café ontem.'},{de:'Hast du die E-Mail geschrieben?',pt:'Você escreveu o e-mail?'}]
  },
  { slug:'a2-l21-3', sort:3, title_pt:'Cultura: Passado no Cotidiano Alemão', title_de:'Kultur: Vergangenheit im Alltag',
    rule:'"Wie war dein Wochenende?" = quebra-gelo clássico. Perfekt = fala. Präteritum = escrita.',
    content:`• "Wie war dein Wochenende?" — pergunta ritual às segundas.
• Perfekt = fala cotidiana. Präteritum = narrativas escritas.
• Exceção: sein/haben sempre no Präteritum na fala (war, hatte).
• Contração informal: "Ich hab'" em vez de "Ich habe" é autêntico.
• Objetividade: "Ganz gut" ou "War okay" — sem exageros.`,
    notes:['sein/haben: SEMPRE Präteritum na fala: ich war, ich hatte'],
    vocab:[{de:'Wie war dein Wochenende?',pt:'Como foi seu fim de semana?'},{de:'Ganz gut.',pt:'Bem, obrigado.'}],
    examples:[]
  }
],
'a2-cap22':[
  { slug:'a2-l22-1', sort:1, title_pt:'Diálogo: Tom fala sobre viagem a Munique', title_de:'Dialog: Reise nach München',
    rule:'Perfekt com sein: verbos de movimento (gehen, fahren, fliegen) e mudança de estado (werden, einschlafen).',
    content:`DIÁLOGO:
Anna: Wo warst du letzte Woche?
Tom: Ich war im Urlaub — ich bin nach München gefahren.
Anna: Wie bist du hingekommen? Mit dem Zug. Etwa sechs Stunden.
Tom: Am ersten Tag bin ich in der Altstadt spazieren gegangen und auf den Glockenturm gestiegen.
Tom: Ich habe Weißwurst probiert. Am zweiten Tag bin ich an den See gefahren und geschwommen.
Tom: Mit meiner Schwester. Am letzten Tag sind wir früh aufgestanden.
Anna: Bist du mit dem Flugzeug zurück? Nein, wieder mit dem Zug. Zugfahren ist entspannter.

TRADUÇÃO:
Anna: Onde você estava na semana passada?
Tom: De férias — fui a Munique.
Anna: Como chegou lá? De trem. Cerca de seis horas.
Tom: No primeiro dia caminhei pelo centro e subi na torre do relógio.
Tom: Experimentei Weißwurst. No segundo dia fui ao lago e nadei.
Tom: Com minha irmã. No último dia acordamos cedo.
Anna: Voltou de avião? Não, de trem de novo. Viajar de trem é mais relaxante.`,
    notes:['SEIN: gehen, fahren, fliegen, steigen, reisen, kommen, bleiben, werden, einschlafen, aufstehen','ARMADILHA: schwimmen/fahren → sein(destino) OU haben(duração/ação)'],
    vocab:[{de:'die Altstadt',pt:'o centro histórico'},{de:'spazieren gehen',pt:'caminhar'},{de:'steigen',pt:'subir'},{de:'probieren',pt:'experimentar'},{de:'der See',pt:'o lago'},{de:'schwimmen',pt:'nadar'},{de:'aufstehen',pt:'levantar-se'},{de:'entspannt',pt:'relaxante'}],
    examples:[{de:'Ich bin nach München gefahren.',pt:'Fui a Munique.'},{de:'Wir sind früh aufgestanden.',pt:'Acordamos cedo.'},{de:'Sie ist zu Hause geblieben.',pt:'Ela ficou em casa.'}]
  },
  { slug:'a2-l22-2', sort:2, title_pt:'Perfekt com „sein" — Movimento e Mudança', title_de:'Perfekt mit sein',
    rule:'sein + Partizip II: movimento com destino + mudança de estado + bleiben.',
    content:`QUANDO USAR SEIN:
1. Movimento com destino: gehen→gegangen | fahren→gefahren | fliegen→geflogen | steigen→gestiegen | fallen→gefallen | laufen→gelaufen | reisen→gereist | kommen→gekommen
2. Mudança de estado: werden→geworden | einschlafen→eingeschlafen | aufwachen→aufgewacht | aufstehen→aufgestanden
3. Permanência: bleiben→geblieben

HABEN vs. SEIN:
schwimmen: bin geschwommen (destino) OU habe geschwommen (duração)
fahren: bin gefahren (destino) OU habe gefahren (ação)
Teste: "Para onde?" → sein. "O quê?" → haben.`,
    notes:['1ª e 3ª pessoa sing. = mesma forma em sein: ich war / er war'],
    vocab:[],
    examples:[{de:'Er ist auf den Berg gestiegen.',pt:'Ele subiu a montanha.'},{de:'Das Kind ist eingeschlafen.',pt:'A criança adormeç.'},{de:'Bist du nach Österreich geflogen?',pt:'Você voou para a Áustria?'}]
  },
  { slug:'a2-l22-3', sort:3, title_pt:'Cultura: Viagens & Deutsche Bahn', title_de:'Kultur: Reisen & DB',
    rule:'Sparpreis: compre antecipado para economizar até 70%. Deutschlandticket: 49€/mês.',
    content:`• Deutsche Bahn (DB): ICE = até 300 km/h.
• Sparpreis: mais barato, não reembolsável. Flexpreis: reembolsável.
• Deutschlandticket: 49€/mês para todos os transportes locais.
• Destinos: Munique (Oktoberfest, Alpes) | Berlim (história, cultura) | Hamburgo (porto).
• Wandern: trilhas sinalizadas em todo o país — cultura nacional.
• Weißwurst só antes do meio-dia (regra bávara)!`,
    notes:['Gleis = plataforma. Preste atenção: pode mudar até 10 min antes!'],
    vocab:[{de:'der Sparpreis',pt:'tarifa promocional'},{de:'das Wandern',pt:'a caminhada'},{de:'das Gleis',pt:'a plataforma'}],
    examples:[]
  }
],
'a2-cap23':[
  { slug:'a2-l23-1', sort:1, title_pt:'Diálogo: Markus vai ao médico', title_de:'Dialog: Beim Arzt',
    rule:'Descrever sintomas: Ich habe + sintoma | Mir ist + adj | tut weh. Modais: können/müssen/sollen.',
    content:`DIÁLOGO:
Markus: Guten Tag! Ich fühle mich nicht gut. Seit drei Tagen habe ich starke Kopfschmerzen und mir ist schwindelig.
Ärztin: Haben Sie Fieber? Gestern Abend 38,5 Grad.
Ärztin: Husten oder Halsschmerzen? Ein bisschen Husten, aber kein Hals.
Ärztin: Atmen Sie tief ein, bitte. Ich sehe eine leichte Entzündung.
Ärztin: Sie können das Medikament dreimal täglich nehmen. Viel trinken!
Markus: Muss ich im Bett bleiben?
Ärztin: Sie sollen sich schonen. Wenn es nicht besser wird, kommen Sie wieder.

TRADUÇÃO:
Markus: Bom dia! Não me sinto bem. Há três dias tenho forte dor de cabeça e fico tonto.
Médica: Você tem febre? Ontem à noite 38,5 graus.
Médica: Tosse ou dor de garganta? Um pouco de tosse, mas não a garganta.
Médica: Respire fundo. Vejo uma leve inflamação.
Médica: Pode tomar o remédio três vezes ao dia. Beba bastante líquido!
Markus: Preciso ficar de cama?
Médica: Deve poupar-se. Se não melhorar, volte.`,
    notes:['sollen = conselho médico (mais educado que müssen)','können = permissão/possibilidade','müssen = obrigação forte'],
    vocab:[{de:'die Kopfschmerzen',pt:'dor de cabeça (pl)'},{de:'das Fieber',pt:'a febre'},{de:'der Husten',pt:'a tosse'},{de:'schwindelig',pt:'tonto'},{de:'die Entzündung',pt:'a inflamação'},{de:'das Medikament',pt:'o remédio'},{de:'täglich',pt:'diariamente'},{de:'sich schonen',pt:'poupar-se'}],
    examples:[{de:'Ich habe starke Kopfschmerzen.',pt:'Estou com forte dor de cabeça.'},{de:'Sie sollen viel Wasser trinken.',pt:'Deve beber muita água.'},{de:'Kann ich einen Termin vereinbaren?',pt:'Posso marcar consulta?'}]
  },
  { slug:'a2-l23-2', sort:2, title_pt:'Modalverben: können, müssen, sollen', title_de:'Modalverben A2',
    rule:'ich/er: kann/muss/soll (mesma forma). Modal na pos.2, infinitivo no FINAL.',
    content:`CONJUGAÇÃO:
können: ich kann | du kannst | er kann | wir können | ihr könnt | sie können
müssen: ich muss | du musst | er muss | wir müssen | ihr müsst | sie müssen
sollen:  ich soll  | du sollst  | er soll  | wir sollen  | ihr sollt  | sie sollen

SIGNIFICADOS:
können = poder/saber (habilidade, possibilidade, permissão)
müssen = precisar/ter que (obrigação forte, necessidade)
sollen  = dever (conselho, recomendação, ordem indireta)

ESTRUTURA: Modal(pos.2) + ... + Infinitivo(FINAL)
Sie müssen das Medikament dreimal täglich nehmen.
nicht müssen ≠ dürfen nicht: não precisa ≠ é proibido`,
    notes:['ich e er/sie/es = SEMPRE mesma forma nos modais'],
    vocab:[],
    examples:[{de:'Ich kann schwimmen.',pt:'Sei nadar.'},{de:'Du sollst viel Wasser trinken.',pt:'Deve beber muita água.'},{de:'Wir müssen jetzt gehen.',pt:'Precisamos ir agora.'}]
  },
  { slug:'a2-l23-3', sort:3, title_pt:'Cultura: Saúde & Sistema Médico Alemão', title_de:'Kultur: Gesundheit',
    rule:'Krankenkasse obrigatória. 116117 = plantão não emergencial. 112 = emergência.',
    content:`• Krankenkasse: seguro universal. 90% = público (AOK, TK, DAK). 10% = privado.
• Termin beim Arzt: agende com antecedência — pode demorar semanas!
• Krankschreibung: atestado obrigatório após 3º dia. eAU = envio digital.
• Apotheke (Cruz verde) vs. Drogerie (dm, Rossmann): farmácia vs. drogueria.
• 112 = emergência | 116117 = plantão não emergencial.
• Vorsorgeuntersuchung: check-ups anuais cobertos pelo seguro.`,
    notes:['Apotheke ≠ Drogerie: só na Apotheke há farmacêutico e medicamentos de prescrição'],
    vocab:[{de:'die Krankenkasse',pt:'o plano de saúde'},{de:'die Krankschreibung',pt:'o atestado médico'},{de:'die Apotheke',pt:'a farmácia'}],
    examples:[]
  }
],
'a2-cap24':[
  { slug:'a2-l24-1', sort:1, title_pt:'Diálogo: Julia descreve seu apartamento', title_de:'Dialog: Neue Wohnung',
    rule:'Dativo para posição estática (Wo?): in, an, auf, neben, vor, hinter, zwischen + dativo.',
    content:`DIÁLOGO:
Markus: Como você está gostando do novo apartamento?
Julia: Muito bem! Três cômodos: sala, quarto e escritório.
Julia: No Wohnzimmer steht ein großes Sofa vor dem Fenster. An der Wand hängt ein Bild.
Julia: In der Küche steht der Kühlschrank links neben der Spüle.
Julia: Gegenüber vom Haus gibt es einen Bio-Supermarkt. Hinter dem Haus ist ein Park.
Julia: Ich wohne in der Gartenstraße 15, im dritten Stock. 5 Minuten zu Fuß zur U-Bahn.`,
    notes:['Wo? + Dativo: in, an, auf, neben, vor, hinter, zwischen','Artigos dativo: der/das→dem | die→der | pl→den(+n)','stehen=vertical | liegen=horizontal | hängen=pendurado'],
    vocab:[{de:'das Arbeitszimmer',pt:'o escritório'},{de:'gemütlich',pt:'aconchegante'},{de:'die Einrichtung',pt:'a decoração'},{de:'die Wand',pt:'a parede'},{de:'die Spüle',pt:'a pia'},{de:'gegenüber',pt:'em frente a'},{de:'der Stock',pt:'o andar'},{de:'der Umzug',pt:'a mudança'}],
    examples:[{de:'Das Sofa steht vor dem Fenster.',pt:'O sofá está em frente à janela.'},{de:'Das Bild hängt an der Wand.',pt:'O quadro está na parede.'},{de:'Der Kühlschrank steht neben der Spüle.',pt:'A geladeira fica ao lado da pia.'}]
  },
  { slug:'a2-l24-2', sort:2, title_pt:'Dativo com Preposições e Verbos', title_de:'Dativ mit Präpositionen',
    rule:'Preposições fixas: aus/bei/mit/nach/seit/von/zu/gegenüber + dativo SEMPRE.',
    content:`PREPOSIÇÕES FIXAS COM DATIVO:
aus | bei | mit | nach | seit | von | zu | gegenüber

ARTIGOS NO DATIVO:
Masc: der→dem | Fem: die→der | Neut: das→dem | Pl: die→den(+n!)

CONTRAÇÕES:
zu+dem=zum | zu+der=zur | bei+dem=beim | von+dem=vom

VERBOS QUE EXIGEM DATIVO:
helfen | danken | gefallen | gehören | antworten | passen | schmecken | stehen (ficar bem)

PRONOMES DATIVO:
ich→mir | du→dir | er/es→ihm | sie→ihr | wir→uns | ihr→euch | sie→ihnen`,
    notes:['Plural dativo: SEMPRE +n no substantivo: den Kindern, den Freunden'],
    vocab:[],
    examples:[{de:'Ich helfe dem Nachbarn.',pt:'Ajudo o vizinho.'},{de:'Die Wohnung gefällt mir.',pt:'O apartamento me agrada.'},{de:'Ich gehe zur Ärztin.',pt:'Vou à médica.'}]
  },
  { slug:'a2-l24-3', sort:3, title_pt:'Cultura: Moradia & Vizinhança', title_de:'Kultur: Wohnen',
    rule:'Erdgeschoss = térreo. Ruhezeiten: 22h-6h e domingos. Mülltrennung obrigatória.',
    content:`• Erdgeschoss = térreo. Erster Stock = 1º andar.
• Ruhezeiten: lei — silêncio 22h-6h e domingos. Multas possíveis.
• Mülltrennung: Restmüll (cinza) | Papier (azul) | Gelber Sack (plástico) | Bio (verde) | Glas.
• Wohnungssuche: Schufa + Einkommensnachweis + Kaution (3 meses).
• Kaltmiete = sem despesas | Warmmiete = com aquecimento/água.`,
    notes:['Kaution = caução. Deve ser devolvida com juros após saída!'],
    vocab:[{de:'die Ruhezeiten',pt:'horários de silêncio'},{de:'die Mülltrennung',pt:'separação de lixo'},{de:'die Kaution',pt:'a caução'}],
    examples:[]
  }
],
'a2-cap25':[
  { slug:'a2-l25-1', sort:1, title_pt:'Diálogo: Sophie descreve novos vizinhos', title_de:'Dialog: Nachbarn beschreiben',
    rule:'Adjetivos atributivos concordam com gênero, caso e número. Após art. def.: -e/-en.',
    content:`DIÁLOGO:
Sophie: Hast du die neuen Nachbarn schon gesehen?
Lukas: Ja! Der Mann ist groß und schlank, mit kurzen braunen Haaren. Die Frau hat lange blonde Haare und trägt eine Brille.
Lukas: Sehr sympathisch! Der Mann hat eine ruhige Stimme. Sie wirken wie ein nettes, junges Paar.
Sophie: Die Frau trägt bunte Kleidung. Der Mann hat ein modernes Fahrrad.
Lukas: Der Mann hat blaue Augen und die Frau hat grüne. Beide sind Mitte dreißig.
Lukas: Die Frau ist offen und direkt. Der Mann ist ruhig und nachdenklich. Beide sind hilfsbereit.
Lukas: Sie kommen aus Hamburg. Sie ist Grafikdesignerin und er ist Fotograf.`,
    notes:['Após artigo definido (Nom/Akk sing): -e | resto: -en','Após artigo indefinido (Nom sing): -er/-e/-es'],
    vocab:[{de:'schlank',pt:'magro'},{de:'kurz/lang',pt:'curto/longo'},{de:'braun',pt:'castanho'},{de:'sympathisch',pt:'simpático'},{de:'bunt',pt:'colorido'},{de:'nachdenklich',pt:'reflexivo'},{de:'hilfsbereit',pt:'prestativo'},{de:'ungefähr',pt:'aproximadamente'}],
    examples:[{de:'Er hat kurze, braune Haare.',pt:'Ele tem cabelos curtos e castanhos.'},{de:'Das ist ein nettes, junges Paar.',pt:'É um casal jovem e legal.'}]
  },
  { slug:'a2-l25-2', sort:2, title_pt:'Deklinação de Adjetivos A2', title_de:'Adjektivdeklination',
    rule:'Def. art. + adj: -e (Nom/Akk sing) ou -en (resto). Indef. art. + adj: -er/-e/-es (Nom sing).',
    content:`COM ARTIGO DEFINIDO:
Nom sing: -e → der nette Mann | die nette Frau | das nette Kind
Akk sing: -en (masc) / -e (fem/neut) → den netten Mann | die nette Frau
Dat sing: -en sempre → dem netten Mann | der netten Frau
Plural: -en sempre → die netten Leute

COM ARTIGO INDEFINIDO (Nom sing):
Masc: -er → ein netter Mann
Fem:  -e  → eine nette Frau
Neut: -es → ein nettes Kind

DICA A2: Foque em Nom/Akk sing primeiro:
• Def + Nom sing → sempre -e
• Indef + Nom sing → -er/-e/-es (masc/fem/neut)`,
    notes:['Regra prática: após def art no Nom → sempre -e (sing) | resto → -en'],
    vocab:[],
    examples:[{de:'Das ist ein modernes Fahrrad.',pt:'Isso é uma bicicleta moderna.'},{de:'Sie hat lange, blonde Haare.',pt:'Ela tem cabelos longos e loiros.'}]
  },
  { slug:'a2-l25-3', sort:3, title_pt:'Cultura: Aparência & Diversidade na Alemanha', title_de:'Kultur: Aussehen & Vielfalt',
    rule:'Comentários diretos sobre peso/aparência = invasivo. Elogios sinceros são bem-vindos.',
    content:`• Mais de 20% da população tem origem migratória.
• Berlim = alternativo/criativo | Munique = tradicional | Hamburg = cosmopolita.
• Perguntas sobre peso, idade, aparência física = muito pessoal.
• Elogios diretos e genuínos: "Du siehst gut aus!" = bem recebido.
• Funktionalität über Status: roupas práticas > status.
• "Sachlichkeit" nas descrições: objetividade e precisão são valorizadas.`,
    notes:['"Direkt sein" = ser objetivo. Não é grosseria!'],
    vocab:[{de:'die Vielfalt',pt:'a diversidade'},{de:'sachlich',pt:'objetivo, neutro'},{de:'Du siehst gut aus!',pt:'Você está bem!'}],
    examples:[]
  }
],
'a2-cap26':[
  { slug:'a2-l26-1', sort:1, title_pt:'Diálogo: Nina e Leo — redes sociais', title_de:'Dialog: Soziale Medien',
    rule:'Reflexivos acus.: mich/dich/sich/uns/euch/sich. Reflexivos dat.: mir/dir/sich. sich ärgern, sich interessieren.',
    content:`DIÁLOGO:
Nina: Wie oft checkst du dein Handy?
Leo: Zu oft! Ich informiere mich über Nachrichten. Abends schaue ich mir Videos an.
Nina: Ich nutze Social Media für die Arbeit. Ich poste Fotos und reagiere auf Kommentare.
Leo: Ich interessiere mich weniger für Social Media. Aber ich bestelle viel online.
Nina: Ich kaufe mir auch oft Sachen online. Schnell und bequem!
Leo: Manchmal ärgere ich mich über Datenschutzprobleme.
Leo: Letzte Woche habe ich mich über einen Virus geärgert. Ich habe mich an den Support gewandt. Das hat sich gelohnt!`,
    notes:['Reflexivo akk: direto sobre si (mich/dich/sich)','Reflexivo dat: quando já há objeto akk na frase (mir/dir/sich)'],
    vocab:[{de:'das Handy',pt:'o celular'},{de:'posten',pt:'postar'},{de:'der Datenschutz',pt:'proteção de dados'},{de:'sich kümmern um',pt:'cuidar de'},{de:'sich lohnen',pt:'valer a pena'},{de:'sich ärgern über',pt:'irritar-se com'},{de:'sich interessieren für',pt:'interessar-se por'}],
    examples:[{de:'Ich informiere mich über die Nachrichten.',pt:'Me informo sobre as notícias.'},{de:'Er interessiert sich für Technologie.',pt:'Ele se interessa por tecnologia.'},{de:'Ich habe mir ein Handy gekauft.',pt:'Comprei um celular para mim.'}]
  },
  { slug:'a2-l26-2', sort:2, title_pt:'Pronomes Reflexivos e Verbos com „sich"', title_de:'Reflexivpronomen',
    rule:'Akk: mich/dich/sich. Dat: mir/dir/sich. Verbo reflexivo: sempre acompanha sich no infinitivo.',
    content:`PRONOMES REFLEXIVOS:
           Akusativ    Dativ
ich:       mich        mir
du:        dich        dir
er/sie/es: sich        sich
wir:       uns         uns
ihr:       euch        euch
sie/Sie:   sich        sich

ACUSATIVO: verbo direto sobre si → Ich wasche mich.
DATIVO: quando já há objeto akk → Ich kaufe mir ein Buch.

VERBOS REFLEXIVOS COMUNS:
sich fühlen | sich freuen | sich ärgern | sich interessieren
sich informieren | sich erinnern | sich kümmern um
sich melden | sich befinden | sich lohnen | sich anmelden`,
    notes:['sich = pronome universal para 3ª pessoa e formal Sie'],
    vocab:[],
    examples:[{de:'Er freut sich auf das Wochenende.',pt:'Ele está animado para o fim de semana.'},{de:'Hast du dich angemeldet?',pt:'Você se inscreveu?'}]
  },
  { slug:'a2-l26-3', sort:3, title_pt:'Cultura: Tecnologia & Datenschutz', title_de:'Kultur: Technologie & Datenschutz',
    rule:'DSGVO = lei de proteção de dados mais rigorosa do mundo. Privacidade digital = valor central.',
    content:`• DSGVO (Datenschutz-Grundverordnung): lei europeia aplicada com rigor na Alemanha.
• Cookie-Banner em todos os sites = obrigação legal.
• Signal > WhatsApp: muitos preferem Signal por privacidade.
• Bargeld (dinheiro em espécie) ainda muito usado — cultura de privacidade.
• ARD/ZDF = TV pública respeitada e confiável.
• Impressum: rodapé legal obrigatório em sites alemães.`,
    notes:['Impressum = informações legais do site. Obrigatório para sites comerciais.'],
    vocab:[{de:'der Datenschutz',pt:'proteção de dados'},{de:'die DSGVO',pt:'GDPR (lei europeia)'},{de:'das Bargeld',pt:'dinheiro em espécie'}],
    examples:[]
  }
],
'a2-cap27':[
  { slug:'a2-l27-1', sort:1, title_pt:'Diálogo: No Restaurante — Konjunktiv II', title_de:'Dialog: Im Restaurant',
    rule:'Konjunktiv II para cortesia: hätte gern, würde gern, könnte. Mais educado que möchte.',
    content:`DIÁLOGO:
Kellner: Haben Sie schon gewählt?
Anna: Ich hätte gern die Karte nochmal kurz.
Anna: Ich würde gern die Tomatensuppe nehmen. Und das Lachsfilet, bitte.
Kellner: Zu trinken? Ich hätte gern ein Glas Weißwein und ein stilles Wasser.
Kellner: Hat es Ihnen geschmeckt?
Anna: Ja, sehr! Der Lachs war ausgezeichnet. Könnten Sie mir die Rechnung bringen?
Kellner: Zusammen oder getrennt? Getrennt, bitte. Ich zahle mit Karte.
Anna: Vielen Dank! Das Essen war wirklich toll.`,
    notes:['hätte gern = mais direto para pedido','würde gern = mais formal','Könnten Sie? = muito educado (Konj. II de können)'],
    vocab:[{de:'wählen',pt:'escolher'},{de:'die Vorspeise',pt:'a entrada'},{de:'das Hauptgericht',pt:'o prato principal'},{de:'das Lachsfilet',pt:'o filé de salmão'},{de:'still',pt:'sem gás'},{de:'ausgezeichnet',pt:'excelente'},{de:'getrennt',pt:'separado'},{de:'unterschreiben',pt:'assinar'},{de:'stimmt so',pt:'pode ficar o troco'}],
    examples:[{de:'Ich hätte gern die Tomatensuppe.',pt:'Gostaria da sopa de tomate.'},{de:'Könnten Sie die Rechnung bringen?',pt:'Poderia trazer a conta?'},{de:'Das wäre sehr nett.',pt:'Isso seria muito gentil.'}]
  },
  { slug:'a2-l27-2', sort:2, title_pt:'Konjunktiv II — Cortesia e Desejo', title_de:'Konjunktiv II',
    rule:'hätte/wäre/würde/könnte/sollte/müsste. Mais educado que indicativo.',
    content:`FORMAS PRINCIPAIS:
haben → hätte | sein → wäre | werden → würde

MODAIS NO KONJUNKTIV II:
können→könnte | müssen→müsste | dürfen→dürfte | sollen→sollte

USOS:
1. Cortesia: Ich hätte gern einen Kaffee. | Könnten Sie mir helfen?
2. Desejo/hipótese: Ich würde gern nach Deutschland fahren. | Das wäre toll!
3. Conselho: Du solltest mehr schlafen. | Man müsste früher anfangen.`,
    notes:['Konjunktiv II = mais educado e elegante — use em situações formais'],
    vocab:[],
    examples:[{de:'Das wäre sehr nett von Ihnen.',pt:'Seria muito gentil.'},{de:'Ich hätte gern noch Brot.',pt:'Gostaria de mais pão.'},{de:'Könnten Sie langsamer sprechen?',pt:'Poderia falar mais devagar?'}]
  },
  { slug:'a2-l27-3', sort:3, title_pt:'Cultura: Gastronomia & Gorjeta', title_de:'Kultur: Gastronomie',
    rule:'Gorjeta 5-10%, não obrigatória. "Stimmt so" = pode ficar o troco.',
    content:`• Gaststätte (tradicional) | Bistro (informal) | Imbiss (rua) | Biergarten (verão).
• Gorjeta: 5-10% ou arredondar. "Stimmt so" = fica o troco.
• Küche zu (cozinha fechada) é respeitado — não peça às 22h!
• Leitungswasser (água da torneira): peça explicitamente se quiser.
• Weißwurst: consumir antes do meio-dia (regra bávara).
• Tagesmenü = menu do dia = mais barato.`,
    notes:['Leitungswasser: sem pedir, o garçom traz água mineral (paga)!'],
    vocab:[{de:'das Trinkgeld',pt:'a gorjeta'},{de:'stimmt so',pt:'pode ficar o troco'},{de:'das Tagesmenü',pt:'o menu do dia'}],
    examples:[]
  }
],
'a2-cap28':[
  { slug:'a2-l28-1', sort:1, title_pt:'Diálogo: Biografia de uma professora', title_de:'Dialog: Biografie',
    rule:'Präteritum para narrativas: sein=war, haben=hatte. Regulares: raiz+-te. Irregulares: mudança de vogal.',
    content:`TEXTO:
Anna Müller wurde 1975 in Leipzig geboren. Als Kind war sie neugierig und las viele Bücher. Ihre Eltern waren Lehrer.
Anna war eine gute Schülerin. Mit 18 Jahren machte sie ihr Abitur und zog nach Berlin.
Dort studierte sie Germanistik. Das Studium war intensiv, aber sie arbeitete nebenbei als Kellnerin.
Nach dem Studium fand sie sofort eine Stelle als Lehrerin. Sie lehrte viele Jahre in Berlin.
Ihre Schüler mochten sie, weil sie geduldig und kreativ war. Sie heiratete 2005 und bekam zwei Kinder.

TRADUÇÃO:
Anna Müller nasceu em Leipzig em 1975. Em criança era curiosa e lia muitos livros. Seus pais eram professores.
Era boa aluna. Aos 18 fez o vestibular e se mudou para Berlim.
Lá estudou germanística. Era intenso, mas trabalhava como garçonete.
Após o curso encontrou emprego como professora. Lecionou muitos anos em Berlim.
Seus alunos gostavam dela, pois era paciente e criativa. Casou em 2005 e teve dois filhos.`,
    notes:['Präteritum para narrativas escritas','sein/haben = Präteritum mesmo na fala (war, hatte)'],
    vocab:[{de:'geboren werden',pt:'nascer'},{de:'neugierig',pt:'curioso'},{de:'das Abitur',pt:'vestibular alemão'},{de:'studieren',pt:'estudar (faculdade)'},{de:'nebenbei',pt:'paralelamente'},{de:'geduldig',pt:'paciente'},{de:'heiraten',pt:'casar-se'}],
    examples:[{de:'Das Wetter war schön.',pt:'O tempo estava bonito.'},{de:'Er hatte keine Zeit.',pt:'Ele não tinha tempo.'},{de:'Wir besuchten Oma.',pt:'Visitamos a vovó.'}]
  },
  { slug:'a2-l28-2', sort:2, title_pt:'Präteritum: sein, haben e Verbos', title_de:'Präteritum',
    rule:'sein: war/warst/war/waren. haben: hatte/hattest/hatte/hatten. Regulares: raiz+-te.',
    content:`SEIN: ich war | du warst | er war | wir waren | ihr wart | sie waren
HABEN: ich hatte | du hattest | er hatte | wir hatten | ihr hattet | sie hatten

REGULARES: raiz + -te + terminação
machen→machte | lernen→lernte | kaufen→kaufte
EXCEÇÃO (raiz em t/d): +ete → arbeiten→arbeitete

IRREGULARES PRINCIPAIS:
gehen→ging | kommen→kam | fahren→fuhr | sehen→sah
schreiben→schrieb | lesen→las | sprechen→sprach | trinken→trank
essen→aß | treffen→traf | stehen→stand | bleiben→blieb

PERFEKT vs. PRÄTERITUM:
Fala cotidiana: Perfekt (Ich habe gekauft)
Narrativa/Escrita: Präteritum (Ich kaufte)
EXCEÇÃO: sein/haben sempre Präteritum na fala!`,
    notes:['1ª e 3ª pessoa sing. = MESMA FORMA nos irregulares: er ging = ich ging'],
    vocab:[],
    examples:[{de:'Sie arbeitete viel.',pt:'Ela trabalhou muito.'},{de:'Er las jeden Tag.',pt:'Ele lia todos os dias.'},{de:'Wir fuhren nach Berlin.',pt:'Fomos a Berlim.'}]
  },
  { slug:'a2-l28-3', sort:3, title_pt:'Cultura: Currículo & Narrativas na Alemanha', title_de:'Kultur: Lebenslauf',
    rule:'Lebenslauf tabular, cronologia inversa. Anschreiben com Präteritum. Foto ainda comum.',
    content:`• Lebenslauf: tabular, cronologia inversa. Foto profissional comum.
• Sem Lücken (lacunas) sem explicação.
• Anschreiben: narrativa formal. Präteritum para experiências passadas.
• Ausbildung vale tanto quanto Studium.
• Títulos e certificados são valorizados.
• Mobilidade entre cidades é normal e bem vista.`,
    notes:['Lebenslauf: máximo 2 páginas. Lücken devem ser explicadas.'],
    vocab:[{de:'der Lebenslauf',pt:'o currículo'},{de:'das Anschreiben',pt:'carta de apresentação'},{de:'die Ausbildung',pt:'a formação profissional'}],
    examples:[]
  }
],
'a2-cap29':[
  { slug:'a2-l29-1', sort:1, title_pt:'Diálogo: Julia e Tim trocam presentes', title_de:'Dialog: Geschenke',
    rule:'Verbos com dois objetos: Dativo (pessoa) + Acusativo (coisa). schenken, geben, kaufen, zeigen.',
    content:`DIÁLOGO:
Julia: Hast du schon ein Geschenk für Omas Geburtstag?
Tim: Ja! Ich habe ihr eine Halskette gekauft. Was schenkst du ihr?
Julia: Ich habe ihr ein Buch über Gartenarbeit geschenkt und in buntes Papier eingepackt.
Julia: Letztes Jahr habe ich meinem Bruder eine Uhr geschenkt und meiner Schwester einen Gutschein.
Tim: Ich habe von meinen Eltern ein Fahrrad bekommen. Total überrascht!
Tim: Ich habe dir selbstgemachte Marmelade mitgebracht.
Julia: Oh, wie lieb! Ich gebe dir dafür einen selbstgebackenen Kuchen.
Tim: Abgemacht! Schenken macht Spaß, wenn es von Herzen kommt.`,
    notes:['Regra: Pessoa (Dat) + Coisa (Akk)','Ambos pronomes: Akk antes do Dat → Ich gebe ES IHM'],
    vocab:[{de:'schenken',pt:'dar de presente'},{de:'bekommen',pt:'receber'},{de:'die Halskette',pt:'o colar'},{de:'einpacken',pt:'embrulhar'},{de:'der Gutschein',pt:'o voucher'},{de:'überrascht',pt:'surpreso'},{de:'mitbringen',pt:'trazer'},{de:'die Marmelade',pt:'a geleia'},{de:'von Herzen',pt:'do coração'}],
    examples:[{de:'Ich schenke meiner Mutter eine Blume.',pt:'Dou uma flor à minha mãe.'},{de:'Er gibt mir das Buch.',pt:'Ele me dá o livro.'},{de:'Ich bringe es dir.',pt:'Eu trago para você.'}]
  },
  { slug:'a2-l29-2', sort:2, title_pt:'Dois Objetos: Dativo + Acusativo', title_de:'Zwei Objekte',
    rule:'Subst: Dat + Akk. Com pronome: pronome primeiro. Ambos pronomes: Akk antes Dat.',
    content:`VERBOS: geben, schenken, kaufen, bringen, zeigen, sagen, schreiben, erzählen.

ORDEM COM SUBSTANTIVOS:
Ich schenke MEINER MUTTER (Dat) EIN BUCH (Akk).

COM UM PRONOME (pronome vem primeiro):
Ich schenke IHR (Dat-pron) EIN BUCH (Akk-subst).
Ich schenke MEINER MUTTER (Dat-subst) ES (Akk-pron).

AMBOS PRONOMES (Akk antes Dat):
Ich gebe ES (Akk) IHM (Dat). = Dou isso a ele.
Kannst du ES MIR geben? = Pode me dar isso?

PERGUNTAS:
Wem? = A quem? (dativo)
Was? = O quê? (acusativo)`,
    notes:['Pronomes dativo: mir/dir/ihm/ihr/uns/euch/ihnen','Pronomes akk: mich/dich/ihn/sie/es/uns/euch/sie'],
    vocab:[],
    examples:[{de:'Zeigst du mir das Foto?',pt:'Me mostra a foto?'},{de:'Ich sage dir die Wahrheit.',pt:'Te digo a verdade.'},{de:'Kannst du es ihr geben?',pt:'Pode dar isso a ela?'}]
  },
  { slug:'a2-l29-3', sort:3, title_pt:'Cultura: Presentes & Ocasiões na Alemanha', title_de:'Kultur: Geschenke',
    rule:'Qualidade > Quantidade. Selbstgemacht muito valorizado. Abrir na frente de quem deu.',
    content:`• Qualidade > Quantidade. Selbstgemacht (feito à mão) = muito valorizado.
• Embrulhar com capricho + cartão escrito à mão.
• Abrir na frente de quem deu. Agradecer com entusiasmo.
• Ocasiões: Geburtstag | Weihnachten | Hochzeit | Einschulung (único!).
• Schultüte: cone de doces para o primeiro dia de aula — tradição exclusiva alemã.
• Flores: evite amarelas (ciúme em algumas regiões).`,
    notes:['Schultüte = cone gigante de doces no primeiro dia de aula. Tradição única alemã!'],
    vocab:[{de:'selbstgemacht',pt:'caseiro, feito à mão'},{de:'die Verpackung',pt:'a embalagem'},{de:'der Anlass',pt:'a ocasião'}],
    examples:[]
  }
],
'a2-cap30':[
  { slug:'a2-l30-1', sort:1, title_pt:'Diálogo: Anna no correio e no banco', title_de:'Dialog: Post und Bank',
    rule:'Linguagem formal (Sie). Imperativo formal: Verbo + Sie. Konjunktiv II para cortesia.',
    content:`CORREIOS:
Anna: Ich möchte ein Paket nach Brasilien schicken. Es wiegt 2 Kilo.
Post: Standard (10-14 Werktage, 25€) oder Express (3-5 Werktage, 45€)?
Anna: Standard, bitte. Füllen Sie das Formular aus: Absender, Empfänger, Inhalt.
Post: 25€. Karte oder bar? — Mit Karte. Bitte unterschreiben. Hier Ihr Sendungscode.
Anna: Kann ich Briefmarken für Postkarten nach Italien kaufen?
Post: Europa-Briefmarke: 1,10€. Zusammen: 36€.

BANCO:
Anna: Ich möchte Geld überweisen. IBAN: DE...
Bank: Verwendungszweck? — Miete Mai 2024.
Bank: Bestätigen Sie mit Ihrer PIN. Fertig! Noch ein Kontoauszug?
Anna: Ja, bitte. Das war's. Danke!`,
    notes:['Imperativo formal: Verbo conj. + Sie (ordem diferente da afirmativa!)','Konjunktiv II: Ich hätte gern | Könnten Sie...?'],
    vocab:[{de:'versenden',pt:'enviar'},{de:'der Werktag',pt:'o dia útil'},{de:'das Formular',pt:'o formulário'},{de:'der Absender',pt:'o remetente'},{de:'der Empfänger',pt:'o destinatário'},{de:'der Sendungscode',pt:'código de rastreamento'},{de:'die Briefmarke',pt:'o selo'},{de:'überweisen',pt:'transferir'},{de:'die IBAN',pt:'o IBAN'},{de:'der Kontoauszug',pt:'o extrato bancário'},{de:'bar',pt:'em dinheiro'}],
    examples:[{de:'Füllen Sie bitte das Formular aus.',pt:'Preencha o formulário.'},{de:'Ich möchte Geld überweisen.',pt:'Gostaria de fazer uma transferência.'},{de:'Vielen Dank für Ihre Hilfe!',pt:'Muito obrigado pela ajuda!'}]
  },
  { slug:'a2-l30-2', sort:2, title_pt:'Imperativo Formal e Verbos de Serviço', title_de:'Formeller Imperativ',
    rule:'Imperativo formal: Verbo conjugado + Sie. Kommen Sie! Füllen Sie aus! Unterschreiben Sie!',
    content:`IMPERATIVO FORMAL (Sie):
Kommen Sie bitte! | Füllen Sie das Formular aus. | Unterschreiben Sie hier. | Bestätigen Sie mit PIN.

VERBOS DE SERVIÇO:
ausfüllen | unterschreiben | bestätigen | verfolgen
überweisen | abheben | einzahlen | beantragen

FRASES ÚTEIS:
Ich hätte gern... | Könnten Sie mir...? | Was kostet das?
Gibt es eine Gebühr? | Ist das möglich? | Wie lange dauert das?`,
    notes:['Imperativo formal: Sie vem DEPOIS do verbo. Sie kommen → Kommen Sie!'],
    vocab:[],
    examples:[{de:'Nehmen Sie bitte Platz.',pt:'Por favor sente-se.'},{de:'Bitte geben Sie mir den Ausweis.',pt:'Por favor me dê o documento.'}]
  },
  { slug:'a2-l30-3', sort:3, title_pt:'Cultura: Banco & Correios na Alemanha', title_de:'Kultur: Bank & Post',
    rule:'Sparkasse = banco municipal popular. Packstation = armário 24h para encomendas.',
    content:`• Sparkasse: banco municipal. Volksbank: cooperativa. N26/DKB: digitais.
• Girokonto: essencial! Sem ele, difícil alugar apartamento.
• SEPA: transferências em até 1 dia útil em toda a UE.
• Deutsche Post / DHL: sistema de entrega nacional.
• Packstation: armários 24h para receber encomendas. App obrigatório.
• Lastschrift = débito automático. Muito usado para aluguéis.`,
    notes:['Girokonto = conta corrente. Necessário para receber salário na Alemanha.'],
    vocab:[{de:'das Girokonto',pt:'conta corrente'},{de:'die Sparkasse',pt:'banco de poupança'},{de:'die Packstation',pt:'armário de encomendas 24h'}],
    examples:[]
  }
],
'a2-cap31':[
  { slug:'a2-l31-1', sort:1, title_pt:'Diálogo: Ajudando vizinhos', title_de:'Dialog: Nachbarn helfen',
    rule:'Verbos que regem dativo: helfen, danken, gefallen, gehören, gratulieren, fehlen, schmecken.',
    content:`DIÁLOGO:
Sophie: Kann ich dir helfen? Du siehst gestresst aus.
Klaus: Meine Tochter ist krank. Kannst du ihr diese Tabletten geben?
Sophie: Natürlich! Was fehlt ihr? Fieber und Halsschmerzen.
Sophie: Danke dir sehr! Ich gratuliere dir noch zum Geburtstag von letzter Woche.
Klaus: Oh, danke! Die Party hat mir gut gefallen.`,
    notes:['helfen + dat: Ich helfe dir','gefallen + dat: Das gefällt mir (sujeito = coisa que agrada!)','fehlen + dat: Was fehlt dir? = O que você tem?','gratulieren + dat + zu: Ich gratuliere dir zum Geburtstag'],
    vocab:[{de:'fehlen',pt:'faltar, sentir falta'},{de:'gegenseitig',pt:'mutuamente'},{de:'gehören',pt:'pertencer'},{de:'gratulieren',pt:'parabenizar'},{de:'stehen',pt:'ficar bem (roupa)'}],
    examples:[{de:'Das Kleid steht dir gut!',pt:'O vestido fica bem em você!'},{de:'Das Essen schmeckt mir.',pt:'A comida está gostosa.'},{de:'Das Buch gehört mir.',pt:'O livro é meu.'}]
  },
  { slug:'a2-l31-2', sort:2, title_pt:'Verbos com Dativo — Lista A2', title_de:'Verben mit Dativ',
    rule:'Pergunta prática: "a/para quem?" → dativo. Esses verbos sempre pedem dativo.',
    content:`VERBOS + DATIVO:
helfen (ajudar) | danken (agradecer) | gefallen (agradar) | gehören (pertencer)
fehlen (faltar) | antworten (responder) | gratulieren (parabenizar)
passen (caber/servir) | schmecken (ser gostoso) | stehen (ficar bem)

ATENÇÃO — esses pedem ACUSATIVO:
fragen (perguntar) + akk: Ich frage dich.
bitten (pedir) + akk: Ich bitte dich.`,
    notes:['Teste: substitua por "a mim/a você". Se funcionar → dativo.'],
    vocab:[],
    examples:[{de:'Wie schmeckt dir das Essen?',pt:'O que você acha da comida?'},{de:'Das Kleid passt mir nicht.',pt:'O vestido não me serve.'}]
  },
  { slug:'a2-l31-3', sort:3, title_pt:'Cultura: Solidariedade & Comunidade', title_de:'Kultur: Solidarität',
    rule:'Ehrenamt (voluntariado) muito valorizado. Mais de 25 milhões de voluntários na Alemanha.',
    content:`• Ehrenamt: 25+ milhões de voluntários. Valorizado no Lebenslauf.
• Nachbarschaftshilfe: receber encomendas, ajudar com neve.
• Schnee schippen: remover neve da calçada = obrigação legal em muitas cidades!
• Verein-Kultur: 600+ mil clubes. Pertencer a um = senso de comunidade.
• Gegenseitigkeit: "Ich helfe dir, du hilfst mir" = mentalidade comum.`,
    notes:['Schnee schippen = obrigação legal! Calçada sem neve = responsabilidade do morador.'],
    vocab:[{de:'das Ehrenamt',pt:'o voluntariado'},{de:'die Nachbarschaftshilfe',pt:'ajuda de vizinhança'},{de:'gegenseitig',pt:'mútuo, recíproco'}],
    examples:[]
  }
],
'a2-cap32':[
  { slug:'a2-l32-1', sort:1, title_pt:'Diálogo: Conversando sobre posse', title_de:'Dialog: Besitz',
    rule:'Genitivo: posse formal. von + dativo: alternativa oral. Wessen? = de quem?',
    content:`DIÁLOGO:
Lisa: Das ist das neue Auto meines Vaters.
Max: Wessen Rucksack ist das auf dem Stuhl?
Lisa: Der Rucksack von meinem Bruder. Er hat ihn vergessen.
Max: Die Tasche des Lehrers liegt auch noch da.
Lisa: Weißt du, wessen Bücher das auf dem Tisch sind?
Max: Das sind die Bücher der neuen Studentin.`,
    notes:['Masc/Neut: des + subst + -(e)s → des Vaters, des Kindes','Fem/Plural: der (sem -s) → der Mutter, der Kinder','von + dativo = informal. Formal = genitivo'],
    vocab:[{de:'wessen?',pt:'de quem? (genitivo)'},{de:'der Rucksack',pt:'a mochila'},{de:'vergessen',pt:'esquecer'},{de:'die Autorin',pt:'a autora'},{de:'benutzen',pt:'usar'}],
    examples:[{de:'Das ist das Buch meiner Freundin.',pt:'É o livro da minha namorada.'},{de:'Das Auto meines Nachbarn ist neu.',pt:'O carro do vizinho é novo.'},{de:'Das ist das Handy von meinem Bruder.',pt:'É o celular do meu irmão.'}]
  },
  { slug:'a2-l32-2', sort:2, title_pt:'Genitivo vs. von + Dativo', title_de:'Genitiv & von + Dativ',
    rule:'Genitivo: formal/escrito. von + dativo: informal/oral. Wessen? = pergunta do genitivo.',
    content:`GENITIVO — FORMAÇÃO:
Masc: des + -(e)s → das Auto des Mannes | das Buch meines Vaters
Fem:  der (sem -s) → das Kleid der Frau | die Tasche meiner Mutter
Neut: des + -(e)s → das Spielzeug des Kindes
Pl:   der (sem -s) → die Meinungen der Studenten

ADJETIVOS NO GENITIVO: sempre -en
des alten Mannes | meiner besten Freundin

VON + DATIVO (oral): das Auto von meinem Nachbarn
GENITIVO (escrito): das Auto des Nachbarn

Wessen? = De quem? → Wessen Buch ist das?`,
    notes:['Genitivo ainda comum em títulos: wegen des Wetters, trotz des Regens, während der Pause'],
    vocab:[],
    examples:[{de:'Die Sprache der Autorin ist klar.',pt:'A linguagem da autora é clara.'},{de:'Wessen Jacke liegt da?',pt:'De quem é aquela jaqueta?'}]
  },
  { slug:'a2-l32-3', sort:3, title_pt:'Cultura: Posse & Privacidade', title_de:'Kultur: Besitz & Privatsphäre',
    rule:'"Eigentum ist Eigentum" — propriedade alheia é respeitada com rigor.',
    content:`• Eigentum: propriedade alheia é respeitada. Sem tocar sem permissão.
• Mieten vs. Kaufen: ~50% alugam (uma das maiores taxas da UE).
• Mieterrechte: direitos do locatário muito fortes. Despejo é difícil.
• Datenschutz: dados = "propriedade" pessoal. Salário e patrimônio = muito privado.
• Erbschaft: herança. Testamento comum.`,
    notes:['Mieterrechte muito fortes: locatário pode ficar anos mesmo com processo de despejo.'],
    vocab:[{de:'das Eigentum',pt:'a propriedade'},{de:'mieten',pt:'alugar'},{de:'die Erbschaft',pt:'a herança'}],
    examples:[]
  }
],
'a2-cap33':[
  { slug:'a2-l33-1', sort:1, title_pt:'Diálogo: Justificativas com weil e dass', title_de:'Dialog: weil und dass',
    rule:'weil (porque) e dass (que) = verbo SEMPRE no final da oração subordinada.',
    content:`DIÁLOGO:
Tom: Warum lernst du Deutsch?
Nina: Weil ich in Deutschland studieren möchte. Ich glaube, dass es wichtig ist.
Tom: Ich denke, dass Deutsch auch für die Arbeit hilfreich ist.
Nina: Ich hoffe, dass ich bald fließend sprechen kann.
Nina: Weißt du, dass über 100 Millionen Menschen Deutsch sprechen?
Tom: Das finde ich schön, dass so viele Deutsch lernen.
Nina: Ich komme nicht zur Party, weil ich krank bin. Tut mir leid!
Tom: Ich verstehe, dass du dich erholen musst.`,
    notes:['weil = causa | dass = conteúdo/fato','Verbo conjugado SEMPRE no final em ambas','Modal em subordinada: Infinitiv + Modal (ex: kommen muss)'],
    vocab:[{de:'glauben',pt:'acreditar, achar'},{de:'denken',pt:'pensar'},{de:'hoffen',pt:'esperar'},{de:'finden',pt:'achar'},{de:'verstehen',pt:'entender'},{de:'fließend',pt:'fluentemente'},{de:'sich erholen',pt:'se recuperar'}],
    examples:[{de:'Ich lerne Deutsch, weil ich in Berlin arbeiten möchte.',pt:'Aprendo alemão porque quero trabalhar em Berlim.'},{de:'Ich glaube, dass du recht hast.',pt:'Acredito que você tem razão.'}]
  },
  { slug:'a2-l33-2', sort:2, title_pt:'Orações com dass e weil', title_de:'Nebensätze mit dass und weil',
    rule:'Conjunção + sujeito + ... + VERBO CONJUGADO (final). Vírgula sempre antes.',
    content:`ESTRUTURA: Principal , Conjunção + Subj + ... + VERBO (final)

COM WEIL: Ich bleibe, WEIL es regnet. | Weil es regnet, bleibe ich. ← pode iniciar!
COM DASS: Ich denke, DASS er recht hat. | Es ist schön, DASS du da bist.
COM MODAL: Ich weiß, dass er kommen MUSS. (infinitivo + modal ao final)

VERBOS COMUNS COM DASS:
glauben, denken, wissen, hoffen, finden, sagen, meinen, verstehen, hören, sehen.

DICA: Vírgula SEMPRE antes da conjunção subordinativa.`,
    notes:['Modal em subordinada: ...kommen kann | ...arbeiten muss | ...lernen soll'],
    vocab:[],
    examples:[{de:'Er sagt, dass er morgen kommt.',pt:'Ele diz que vem amanhã.'},{de:'Ich höre, dass du krank bist.',pt:'Ouço que você está doente.'}]
  },
  { slug:'a2-l33-3', sort:3, title_pt:'Cultura: Educação & Volkshochschule', title_de:'Kultur: Bildung & VHS',
    rule:'VHS = Volkshochschule. Integrationskurs: A1-B1 + orientação cívica. Bildungsurlaub = direito legal.',
    content:`• Volkshochschule (VHS): escola popular para adultos em todas as cidades.
• Cursos: idiomas, culinária, computação, cultura, saúde. Preços acessíveis.
• Integrationskurs: 700h alemão + 100h orientação cívica. Subsidiado pelo governo.
• Zertifikat Deutsch B1 ao final do Integrationskurs.
• Bildungsurlaub: até 5 dias/ano de licença paga para educação.
• Konversationskurs: curso de conversação = excelente para fluência.`,
    notes:['Integrationskurs = gratuito ou subsidiado para imigrantes. Inscrev-se no BAMF.'],
    vocab:[{de:'die Volkshochschule',pt:'escola popular para adultos'},{de:'das Bildungsurlaub',pt:'licença para educação'},{de:'der Integrationskurs',pt:'curso de integração'}],
    examples:[]
  }
],
'a2-cap34':[
  { slug:'a2-l34-1', sort:1, title_pt:'Diálogo: Mark planeja férias — wenn e ob', title_de:'Dialog: wenn und ob',
    rule:'wenn = se/quando (condição/tempo). ob = se (dúvida/pergunta indireta). Verbo no FINAL.',
    content:`DIÁLOGO:
Mark: Ich überlege, ob ich eine Reise machen soll.
Lisa: Wohin? Ich würde nach Skandinavien fahren, wenn ich genug Geld spare.
Lisa: Wenn du früh buchst, sind die Flüge günstiger.
Mark: Ich bin nicht sicher, ob ich mir die Reise leisten kann.
Lisa: Wenn du möchtest, kann ich dir helfen, ein Budget zu planen.
Mark: Weißt du, ob es in Norwegen im Sommer regnet?
Lisa: Wenn du an die Küste fährst, ist das Wetter oft schön.
Mark: Ich frage mich, ob ich einen Mietwagen brauche.
Mark: Wenn ich alles geplant habe, lade ich dich auf einen Kaffee ein.`,
    notes:['wenn = condição/tempo (se/quando)','ob = dúvida/pergunta indireta (se = whether em inglês)','falls = caso (mais formal que wenn)','Verbo SEMPRE no final nas subordinadas'],
    vocab:[{de:'überlegen',pt:'pensar, considerar'},{de:'ob',pt:'se (dúvida)'},{de:'wenn',pt:'se/quando (condição)'},{de:'sparen',pt:'economizar'},{de:'sich leisten',pt:'poder pagar'},{de:'das Budget',pt:'o orçamento'},{de:'der Mietwagen',pt:'carro alugado'},{de:'ausreichen',pt:'ser suficiente'},{de:'falls',pt:'caso'}],
    examples:[{de:'Wenn ich Zeit habe, lerne ich.',pt:'Se eu tiver tempo, estudo.'},{de:'Ich weiß nicht, ob er kommt.',pt:'Não sei se ele vem.'},{de:'Falls du Fragen hast, melde dich.',pt:'Caso tenha dúvidas, entre em contato.'}]
  },
  { slug:'a2-l34-2', sort:2, title_pt:'"wenn" vs "ob" — Condição e Dúvida', title_de:'Wenn vs. Ob',
    rule:'Teste: posso usar "whether" em inglês? Sim → ob. Se/quando (condição) → wenn.',
    content:`1. WENN (Se/Quando — condição ou tempo habitual):
Wenn ich Geld habe, kaufe ich das Auto. (condição)
Wenn ich müde bin, gehe ich schlafen. (hábito)
Inversão: Wenn es kalt ist, TRAGE ich eine Jacke. (verbo da principal em 1ª posição)

2. OB (Se — dúvida/pergunta indireta):
Após: wissen, fragen, nicht sicher sein, überlegen, zweifeln.
Ich weiß nicht, OB er kommt. | Weißt du, OB der Kurs voll ist?

3. FALLS (Caso — mais formal que wenn):
Falls du Fragen hast, schreib mir.

EM TODOS: verbo conjugado vai para o FINAL.`,
    notes:['Teste rápido: "whether" em inglês → ob. "if/when" → wenn.'],
    vocab:[],
    examples:[{de:'Wenn es kalt ist, ziehe ich eine Jacke an.',pt:'Se estiver frio, visto uma jaqueta.'},{de:'Ich frage mich, ob das stimmt.',pt:'Pergunto-me se isso é verdade.'}]
  },
  { slug:'a2-l34-3', sort:3, title_pt:'Cultura: Planejamento & Comunicação', title_de:'Kultur: Planung',
    rule:'"Falls Sie Fragen haben..." = frase de ouro em e-mails profissionais alemães.',
    content:`• Planejamento com antecedência: compromissos marcados com semanas/meses de antecedência.
• Dúvida educada com ob: "Weißt du, ob...?" soa mais educado que pergunta direta.
• Falls no ambiente profissional: "Falls Sie Fragen haben, stehe ich gern zur Verfügung."
• Wenn no cotidiano: "Wenn du Zeit hast, können wir..." = convite educado.
• Expressar condições e incertezas = soa maduro e preciso.`,
    notes:['"Wenn alles klappt..." = realismo positivo. Expressão muito usada.'],
    vocab:[{de:'Ich überlege, ob...',pt:'Estou pensando se...'},{de:'Weißt du, ob...?',pt:'Sabe se...?'},{de:'Falls du Fragen hast...',pt:'Caso tenha dúvidas...'}],
    examples:[]
  }
],
'a2-cap35':[
  { slug:'a2-l35-1', sort:1, title_pt:'Diálogo: Ben conta sobre o fim de semana', title_de:'Dialog: Präteritum erzählen',
    rule:'Präteritum irregular: fuhr, ging, traf, aß, trank, sah, schrieb, las. Conectivos: dann, danach, später.',
    content:`DIÁLOGO:
Anna: Wie war dein Wochenende?
Ben: Super! Ich fuhr mit dem Zug nach Hamburg. Ich traf dort einen alten Freund.
Ben: Wir gingen ins Museum und danach aßen wir in einem Fischrestaurant.
Ben: Ich trank frischen Fischsud und aß gebratenen Lachs. Dann gingen wir ins Kino.
Anna: Was saht ihr? Einen deutschen Film. Er war sehr gut! Ich verstand fast alles!
Ben: Am Sonntag schlief ich lange, schrieb E-Mails und las ein Buch. Abends rief ich meine Eltern an.`,
    notes:['Präteritum irregular: fuhr(fahren) | ging(gehen) | traf(treffen) | aß(essen) | trank(trinken)','sah(sehen) | schrieb(schreiben) | las(lesen) | sprach(sprechen)','Conectivos: dann | danach | später | am nächsten Tag | zuerst'],
    vocab:[{de:'treffen (traf)',pt:'encontrar'},{de:'essen (aß)',pt:'comer'},{de:'sehen (sah)',pt:'ver'},{de:'schreiben (schrieb)',pt:'escrever'},{de:'lesen (las)',pt:'ler'},{de:'trinken (trank)',pt:'beber'},{de:'fahren (fuhr)',pt:'ir/viajar'},{de:'danach',pt:'depois disso'}],
    examples:[{de:'Er kam gestern an.',pt:'Ele chegou ontem.'},{de:'Sie fand die Lösung schnell.',pt:'Ela encontrou a solução rapidamente.'}]
  },
  { slug:'a2-l35-2', sort:2, title_pt:'Präteritum Irregular — Verbos Essenciais', title_de:'Präteritum starke Verben',
    rule:'Irregulares: mudança de vogal na raiz. Sem -te. 1ª e 3ª pessoa = mesma forma.',
    content:`SEIN: war/warst/war/waren | HABEN: hatte/hattest/hatte/hatten

IRREGULARES MAIS USADOS:
gehen→ging | kommen→kam | fahren→fuhr | sehen→sah
sprechen→sprach | schreiben→schrieb | lesen→las | trinken→trank
essen→aß | treffen→traf | finden→fand | stehen→stand | bleiben→blieb
schlafen→schlief | laufen→lief | geben→gab | nehmen→nahm

DICA: 1ª e 3ª pessoa sing. = MESMA FORMA (como modais!)
Flashcard: Infinitiv ↔ 3ª pessoa Präteritum: gehen→ging, kommen→kam`,
    notes:['Na fala: só sein/haben no Präteritum. Outros verbos = Perfekt.'],
    vocab:[],
    examples:[{de:'Wir sprachen lange miteinander.',pt:'Falamos longamente um com o outro.'},{de:'Er schrieb eine lange E-Mail.',pt:'Ele escreveu um e-mail longo.'}]
  },
  { slug:'a2-l35-3', sort:3, title_pt:'Cultura: Contação de Histórias Alemã', title_de:'Kultur: Erzählen',
    rule:'"Es war einmal..." = Präteritum de sein. Estrutura: Zuerst... dann... danach... am Ende.',
    content:`• Estilo narrativo: objetivo, cronológico, sem exageros.
• Präteritum em narrativas: romances, contos, jornais, Anschreiben.
• Conectivos narrativos: zuerst | dann | danach | schließlich | am Ende.
• Märchen (Contos): "Es war einmal..." = início clássico (Präteritum de sein).
• Jakob e Wilhelm Grimm eram alemães! Märchenstraße = rota turística.
• Zeitzeugen (testemunhas do tempo): muito valorizados na educação.`,
    notes:['"Es war einmal" = Era uma vez. Präteritum = narrativa!'],
    vocab:[{de:'erzählen',pt:'narrar, contar'},{de:'das Märchen',pt:'o conto de fadas'},{de:'Es war einmal...',pt:'Era uma vez...'}],
    examples:[]
  }
],
'a2-cap36':[
  { slug:'a2-l36-1', sort:1, title_pt:'Diálogo: Usando "man" para generalizações', title_de:'Dialog: Das Pronomen man',
    rule:'"man" = pronome impessoal. SEMPRE com verbo na 3ª pessoa singular.',
    content:`DIÁLOGO:
Lisa: Wie lernt man am besten Deutsch?
Tom: Man sollte täglich üben. Man kann mit Muttersprachlern sprechen.
Lisa: Was macht man in Deutschland an Silvester?
Tom: Man zündet Feuerwerk an und trinkt Sekt.
Lisa: Wie bezahlt man in deutschen Restaurants?
Tom: Man kann mit Karte oder bar bezahlen.
Lisa: Was macht man, wenn man krank ist?
Tom: Man geht zum Arzt und ruft vorher an.
Tom: In den Städten versteht man fast überall Englisch. Aber man freut sich, wenn man Deutsch spricht!`,
    notes:['"man" = 3ª pessoa singular SEMPRE','"man" é invariável — sem plural','Acusativo: einen | Dativo: einem'],
    vocab:[{de:'täglich',pt:'diariamente'},{de:'der Muttersprachler',pt:'o falante nativo'},{de:'Silvester',pt:'o Réveillon'},{de:'anzünden',pt:'acender'},{de:'der Sekt',pt:'o espumante'},{de:'freiwillig',pt:'voluntariamente'},{de:'am besten',pt:'da melhor forma'}],
    examples:[{de:'Man lernt Deutsch durch Übung.',pt:'Aprende-se alemão com prática.'},{de:'Man sollte viel Wasser trinken.',pt:'Deve-se beber muita água.'},{de:'Wie sagt man das auf Deutsch?',pt:'Como se diz isso em alemão?'}]
  },
  { slug:'a2-l36-2', sort:2, title_pt:'O Pronome "man" — Regras e Usos', title_de:'Das Pronomen man',
    rule:'"man" + 3ª pessoa sg. Nom: man | Akk: einen | Dat: einem.',
    content:`REGRA: man + verbo na 3ª pessoa singular.
Man lernt = Aprende-se | Man kann = Pode-se | Man sollte = Deve-se

FORMAS:
Nom: man → Man muss schlafen.
Akk: einen → Das macht einen müde.
Dat: einem → Das ist einem peinlich.

USOS:
1. Generalizações: Man sollte mehr schlafen.
2. Regras/costumes: In Deutschland grüßt man die Nachbarn.
3. Instruções: Man nehme zwei Eier...
4. Hábitos coletivos: An Silvester zündet man Feuerwerk an.

ALTERNATIVAS: Passiv (Deutsch wird gesprochen) | wir (Wir lernen täglich).`,
    notes:['"man" = gramaticalmente masculino, mas representa todas as pessoas'],
    vocab:[],
    examples:[{de:'Wie sagt man "obrigado" auf Deutsch?',pt:'Como se diz "obrigado" em alemão?'},{de:'Das macht einen glücklich.',pt:'Isso faz a gente feliz.'}]
  },
  { slug:'a2-l36-3', sort:3, title_pt:'Cultura: Tradições & Feriados Alemães', title_de:'Kultur: Traditionen',
    rule:'Weihnachten: 24 Dez = principal. Silvester: 31 Dez. Ostern: domingo e segunda.',
    content:`• Weihnachten: 24 dez (Heiligabend) = principal. 25-26 dez = visitas/descanso.
• Weihnachtsmarkt: novembro-dezembro. Em todas as cidades.
• Silvester: fogos, Sekt, festas. "Guten Rutsch!" = feliz ano novo.
• Ostern: Ostereier verstecken | Osterfeuer | Karfreitag + Ostermontag (feriados).
• Oktoberfest: setembro-outubro em Munique. 6+ milhões de visitantes.
• Tag der Deutschen Einheit: 3. Oktober. Reunificação (1990).`,
    notes:['Man feiert Weihnachten = usa "man" naturalmente!'],
    vocab:[{de:'Silvester',pt:'o Réveillon'},{de:'Guten Rutsch!',pt:'Feliz Ano Novo!'},{de:'Ostern',pt:'a Páscoa'},{de:'der Feiertag',pt:'o feriado'}],
    examples:[]
  }
],
'a2-cap37':[
  { slug:'a2-l37-1', sort:1, title_pt:'Diálogo: Marco descreve sintomas ao médico', title_de:'Dialog: Symptome beim Arzt',
    rule:'Ich habe + sintoma | Mir ist + adj | tut weh. Intensidade: leicht/stark. Duração: seit + dat.',
    content:`DIÁLOGO:
Ärztin: Was führt Sie zu mir?
Marco: Seit drei Tagen habe ich starke Kopfschmerzen — hauptsächlich an den Schläfen. Manchmal bin ich schwindelig.
Ärztin: Seit wann? Seit Montag. Die Schmerzen sind morgens am stärksten.
Ärztin: Übelkeit oder Fieber? Leichte Übelkeit manchmal. Kein Fieber.
Ärztin: Trinken Sie ausreichend Wasser? Ehrlich gesagt nicht immer.
Ärztin: Das könnte ein Spannungskopfschmerz sein. Viel Wasser, Pausen und weniger Bildschirmzeit.`,
    notes:['Intensidade: leicht | mäßig | stark | sehr | kaum','Frequência: manchmal | oft | ständig | in letzter Zeit','seit + dat: seit drei Tagen, seit Montag'],
    vocab:[{de:'die Beschwerde',pt:'o sintoma, a queixa'},{de:'die Schläfe',pt:'a têmpora'},{de:'schwindelig',pt:'tonto'},{de:'die Übelkeit',pt:'a náusea'},{de:'ausreichend',pt:'suficiente'},{de:'die Bildschirmzeit',pt:'tempo de tela'},{de:'der Spannungskopfschmerz',pt:'cefaleia tensional'},{de:'leicht',pt:'leve'},{de:'stark',pt:'forte'}],
    examples:[{de:'Ich habe starke Kopfschmerzen.',pt:'Estou com forte dor de cabeça.'},{de:'Seit wann haben Sie die Beschwerden?',pt:'Há quanto tempo tem os sintomas?'},{de:'Manchmal ist mir schwindelig.',pt:'Às vezes fico tonto.'}]
  },
  { slug:'a2-l37-2', sort:2, title_pt:'Estruturas para Descrever Dor e Duração', title_de:'Schmerzen beschreiben',
    rule:'Ich habe + sintoma (pl). Mir ist + adj. Es tut + lugar + weh. Seit + dativo para duração.',
    content:`ESTRUTURAS:
• Ich habe + sintoma (plural): Ich habe Kopfschmerzen / Halsschmerzen.
• Mir ist + adjetivo: Mir ist schwindelig / übel / warm / kalt.
• Es/Körperteil tut weh: Mein Kopf tut weh. Es tut mir am Hals weh.

INTENSIDADE: leicht | mäßig | stark | sehr | kaum | ständig | unerträglich

DURAÇÃO: seit + Dativ: Seit zwei Tagen fühle ich mich nicht wohl.
FREQUÊNCIA: manchmal | oft | in letzter Zeit | morgens/abends

PERGUNTAS DO MÉDICO:
Wo genau tut es weh? | Seit wann? | Wie stark (1-10)?
Haben Sie Fieber gemessen? | Husten Sie trocken oder mit Auswurf?`,
    notes:['Körperteile: der Kopf | der Hals | der Bauch | die Brust | der Rücken | das Bein | der Arm'],
    vocab:[],
    examples:[{de:'Es tut mir im Hals weh.',pt:'Dói na minha garganta.'},{de:'Seit drei Tagen bin ich müde.',pt:'Estou cansado há três dias.'}]
  },
  { slug:'a2-l37-3', sort:3, title_pt:'Cultura: Saúde & Consulta Médica', title_de:'Kultur: Arztbesuch',
    rule:'Precisão nos sintomas é valorizada. eAU digital. Plantão: 116117. 112 = emergência.',
    content:`• Descrever sintomas com precisão: localização, intensidade, duração, fatores.
• eAU: atestado digital enviado ao empregador desde 2021.
• Apotheke (Cruz verde): medicamentos + farmacêutico qualificado.
• Notdienst: farmácia de plantão fins de semana.
• 116117 = plantão médico não emergencial | 112 = emergência.
• Vorsorgeuntersuchung: check-ups anuais cobertos pelo seguro.`,
    notes:['Apotheke ≠ Drogerie. Só na Apotheke há farmacêutico e remédios de prescrição.'],
    vocab:[{de:'die Krankschreibung',pt:'atestado médico'},{de:'die Apotheke',pt:'a farmácia'},{de:'116117',pt:'plantão médico não emergencial'}],
    examples:[]
  }
],
'a2-cap38':[
  { slug:'a2-l38-1', sort:1, title_pt:'Diálogo: Julia e Tim planejam férias', title_de:'Dialog: Zukunftspläne',
    rule:'Futur I (werden + Infinitiv): ênfase/promessa. Presente + marcador de tempo: plano concreto (mais comum).',
    content:`DIÁLOGO:
Tim: Ich werde im August nach Portugal fahren. Ich habe ein Apartment gebucht!
Tim: Drei Wochen — relaxen, wandern, lokale Küche probieren.
Tim: Mit meiner Freundin Lisa. Wir werden zusammen surfen lernen!
Tim: Im September fange ich meinen neuen Job an.
Julia: Ich mache einen Deutschkurs im Sommer. Ich möchte mein Niveau verbessern.
Tim: Wo wirst du in Deutschland wohnen?
Julia: Wahrscheinlich in München. Nächste Woche sehe ich mir Wohnungen an.
Julia: Wenn ich in Deutschland bin, laden wir uns auf einen Kaffee ein.`,
    notes:['Futur I: ênfase, promessa, previsão formal','Presente + marcador: uso mais comum para planos concretos na fala','werden conjugado: werde/wirst/wird/werden/werdet/werden'],
    vocab:[{de:'die Sommerferien',pt:'férias de verão'},{de:'relaxen',pt:'relaxar'},{de:'wandern',pt:'fazer trilha'},{de:'surfen',pt:'surfar'},{de:'anfangen',pt:'começar'},{de:'das Niveau',pt:'o nível'},{de:'verbessern',pt:'melhorar'},{de:'wahrscheinlich',pt:'provavelmente'},{de:'sich ansehen',pt:'visitar (imóvel)'}],
    examples:[{de:'Ich werde im August nach Portugal fahren.',pt:'Vou a Portugal em agosto. (Futur I)'},{de:'Im August fahre ich nach Portugal.',pt:'Vou a Portugal em agosto. (Präsens)'},{de:'Ich werde mein Bestes geben!',pt:'Vou dar o meu melhor! (promessa)'}]
  },
  { slug:'a2-l38-2', sort:2, title_pt:'Futur I — werden + Infinitiv', title_de:'Futur I',
    rule:'werden (posição 2) + ... + Infinitiv (final). Usos: ênfase, promessa, previsão.',
    content:`CONJUGAÇÃO DE WERDEN:
ich werde | du wirst | er/sie/es wird | wir werden | ihr werdet | sie/Sie werden

ESTRUTURA: WERDEN (pos.2) + ... + INFINITIV (final)
Ich werde morgen nach Berlin fahren.

USOS:
1. Determinação/ênfase: Ich werde das schaffen!
2. Promessa: Ich werde dich anrufen.
3. Previsão: Es wird morgen regnen.
4. Suposição presente: Er wird jetzt schlafen.

PRESENTE vs. FUTUR I:
Im Sommer fahre ich nach Portugal. (plano concreto, comum na fala)
Ich werde im Sommer fahren. (ênfase/promessa)

ATENÇÃO: werden + Partizip II = Passiv (diferente!)`,
    notes:['werden + Infinitiv = Futur I | werden + Partizip II = Passiv — contexto diferencia!'],
    vocab:[],
    examples:[{de:'Nächstes Jahr werde ich Deutsch lernen.',pt:'No ano que vem vou aprender alemão.'},{de:'Ich habe vor, Deutsch zu lernen.',pt:'Tenho intenção de aprender alemão.'}]
  },
  { slug:'a2-l38-3', sort:3, title_pt:'Cultura: Planejamento & Futuro na Alemanha', title_de:'Kultur: Zukunft & Planung',
    rule:'Vorausplanen = cultural. Férias reservadas em janeiro para julho. Weiterbildung incentivada.',
    content:`• Vorausplanen: compromissos marcados com semanas/meses de antecedência.
• Férias: reservadas com muito antecedência. Sparpreis = antecipação = economia.
• Work-Life-Balance: Urlaub é sagrado. "Urlaub ist Urlaub."
• Weiterbildung: aperfeiçoamento profissional incentivado e subsidiado.
• Rentenplanung: planejamento da aposentadoria começa cedo.
• Zukunftsängste: Klimawandel e Rente = principais preocupações.`,
    notes:['"Nächstes Jahr werde ich..." = determinação. werde = sinal de comprometimento!'],
    vocab:[{de:'vorhaben',pt:'ter intenção de'},{de:'die Weiterbildung',pt:'aperfeiçoamento profissional'},{de:'wahrscheinlich',pt:'provavelmente'}],
    examples:[]
  }
],
'a2-cap39':[
  { slug:'a2-l39-1', sort:1, title_pt:'Diálogo: Mia organiza trabalho e Deutschkurs', title_de:'Dialog: Alltag organisieren',
    rule:'Frequência: zweimal pro Woche, täglich. Finalidade: damit + subord (sujeitos dif.) | um...zu + inf (mesmo subj).',
    content:`DIÁLOGO:
Kai: Wie organisierst du Arbeit und Deutschkurs?
Mia: Mo-Mi im Büro, Do Homeoffice, Fr frei für den Kurs.
Kai: Wie oft Deutschkurs? Zweimal pro Woche, di+fr, je 2 Stunden.
Mia: Täglich mindestens 30 Min. Ich mache Flashcards, damit ich Vokabeln lerne.
Kai: Was hilft dir am meisten?
Mia: Podcasts und mit Kollegen auf Deutsch reden. Jeden Tag einen deutschen Text lesen.
Mia: Mo=Grammatik | Mi=App | Wochenende=Serien auf Deutsch.
Mia: Mein Ziel: in einem Jahr die B1-Prüfung machen!`,
    notes:['damit + subordinada: verbo no final | sujeitos diferentes','um...zu + infinitivo: mesmo sujeito','Frequência: täglich | wöchentlich | zweimal pro Woche | jeden Tag'],
    vocab:[{de:'das Homeoffice',pt:'o home office'},{de:'zweimal pro Woche',pt:'duas vezes por semana'},{de:'täglich',pt:'diariamente'},{de:'mindestens',pt:'pelo menos'},{de:'damit',pt:'para que (sujeitos dif.)'},{de:'um...zu',pt:'para (mesmo sujeito)'},{de:'das Ziel',pt:'o objetivo'},{de:'fließend',pt:'fluentemente'}],
    examples:[{de:'Ich arbeite von 9 bis 17 Uhr.',pt:'Trabalho das 9h às 17h.'},{de:'Zweimal pro Woche mache ich Sport.',pt:'Duas vezes por semana faço esporte.'},{de:'Ich lerne, um besser zu werden.',pt:'Estudo para melhorar.'}]
  },
  { slug:'a2-l39-2', sort:2, title_pt:'Finalidade: damit e um...zu', title_de:'Finalsätze: damit & um...zu',
    rule:'Mesmo sujeito → um...zu. Sujeitos diferentes → damit + verbo no final.',
    content:`UM...ZU (mesmo sujeito):
Ich lerne Deutsch, UM in Berlin ZU ARBEITEN.
Sie macht Sport, UM FIT ZU BLEIBEN.
Separáveis: um aufZUstehen (zu entre prefixo e raiz!)

DAMIT (sujeitos diferentes):
Ich erkläre dir die Grammatik, DAMIT DU SIE VERSTEHST.
Sie schreibt langsam, DAMIT ER ES LESEN KANN.

TESTE: Mesmo sujeito? → um...zu | Sujeitos diferentes? → damit

COMPARAÇÃO:
Ich lerne, UM die Prüfung ZU BESTEHEN. (eu aprendo + eu passo)
Ich helfe dir, DAMIT DU die Prüfung BESTEHST. (eu ajudo + você passa)

FREQUÊNCIAS:
täglich | wöchentlich | monatlich | zweimal pro Woche | jeden Tag | einmal im Monat`,
    notes:['um...zu: zu fica entre prefixo e raiz nos separáveis: um aufzustehen'],
    vocab:[],
    examples:[{de:'Ich mache Pausen, um nicht müde zu werden.',pt:'Faço pausas para não ficar cansado.'},{de:'Ich schreibe langsam, damit du es verstehst.',pt:'Escrevo devagar para que você entenda.'}]
  },
  { slug:'a2-l39-3', sort:3, title_pt:'Cultura: Trabalho & Work-Life-Balance', title_de:'Kultur: Arbeit & Balance',
    rule:'Homeoffice é direito desde 2024. Mittagspause é sagrada. Feedback direto é norma.',
    content:`• Homeoffice: direito legal em muitas empresas desde 2024.
• Mittagspause: sagrada. Trabalhar além do horário sem necessidade = malvisto.
• Feedback: regular, direto e construtivo. Crítica = oportunidade de crescimento.
• Nebenjob: comum entre estudantes para custear os estudos.
• Sonntags planen: planejar a semana no domingo = hábito valorizado.
• Kündigungsschutz: proteção contra demissão muito forte na Alemanha.`,
    notes:['Kündigungsschutz = proteção contra demissão. Demitir na Alemanha é complexo.'],
    vocab:[{de:'das Homeoffice',pt:'o home office'},{de:'das Feedback',pt:'o feedback'},{de:'die Work-Life-Balance',pt:'equilíbrio trabalho-vida'}],
    examples:[]
  }
],
'a2-exam':[
  { slug:'a2-exam-l1-horen', sort:1, title_pt:'Prova A2: Hören', title_de:'A2 Prüfung: Hören',
    rule:'Leia as perguntas ANTES. Foco em: números, horas, preposições, tempos verbais.',
    content:`DICAS: Anote números, horários e nomes. Identifique Perfekt vs. Präsens. Pratique com Deutsche Welle Slow German.`,
    notes:['Leia as opções antes de ouvir. Sublinhe palavras-chave.'],vocab:[],examples:[]
  },
  { slug:'a2-exam-l2-lesen', sort:2, title_pt:'Prova A2: Lesen', title_de:'A2 Prüfung: Lesen',
    rule:'Leia perguntas primeiro. Sublinhe: quem, o quê, quando, quanto.',
    content:`DICAS: Leia primeiro as perguntas. Sublinhe palavras-chave. Cuidado: "bekommen" = receber (não "become"!).`,
    notes:['Falso cognato: bekommen ≠ become. bekommen = receber.'],vocab:[],examples:[]
  },
  { slug:'a2-exam-l3-schreiben', sort:3, title_pt:'Prova A2: Schreiben', title_de:'A2 Prüfung: Schreiben',
    rule:'Estrutura: Saudação → Apresentação → Convite → Combinação → Despedida. 40-50 palavras.',
    content:`ESTRUTURA: 1.Lieber/Liebe [Nome], 2.Apresentação 3.Convite/pedido 4.Combinação 5.Viele Grüße [Nome]
CHECKLIST: ✅ 40-50 palavras | ✅ Verbos presentes | ✅ Preposições de tempo (am/um/im)`,
    notes:['Artigos e preposições contam como palavras!'],vocab:[],examples:[]
  },
  { slug:'a2-exam-l4-sprechen', sort:4, title_pt:'Prova A2: Sprechen', title_de:'A2 Prüfung: Sprechen',
    rule:'Comunicar > perfeição. "Moment, bitte..." se precisar pensar.',
    content:`FRASES DE APOIO: Entschuldigung, können Sie das wiederholen? | Wie bitte? | Können Sie langsamer sprechen?`,
    notes:['Comunicar é mais importante que ser perfeito!'],vocab:[],examples:[]
  },
  { slug:'a2-exam-l5-grammatik', sort:5, title_pt:'Prova A2: Grammatik', title_de:'A2 Prüfung: Grammatik',
    rule:'Revisão: Perfekt, Präteritum, Akkusativ, Dativ, Modais, wenn/ob/weil/dass, man.',
    content:`REVISÃO: Präsens | Perfekt (haben/sein+PartII) | Akkusativ (masc muda) | Dativ (mit/zu/von) | Modais (+inf final) | Präteritum (war/hatte+irreg) | Subord (weil/dass/wenn/ob) | man (3ª sg)`,
    notes:['Dica final: comunicar > perfeição. Erros são parte do aprendizado!'],vocab:[],examples:[]
  }
]
};

// ─────────────────────────────────────────────────
// EXERCÍCIOS A2
// ─────────────────────────────────────────────────
const A2_EXERCISES = {
'a2-l21-1':[
  {type:'choose',q:'Qual auxiliar usamos com "kochen" no Perfekt?',opts:['sein','haben','werden'],a:'haben',exp:'kochen = sem movimento → haben.',xp:10},
  {type:'fill',q:'Gestern ___ ich ein Buch ___ (lesen, Perfekt).',a:'habe / gelesen',exp:'lesen → irregular: gelesen.',xp:10},
  {type:'translate',q:'Traduza: Eu visitei minha avó no domingo.',a:'Ich habe meine Oma am Sonntag besucht.',exp:'besuchen → besucht (inseparável, sem ge-).',xp:12}
],
'a2-l21-2':[
  {type:'choose',q:'Qual Partizip II está correto?',opts:['gekauft','gekaufen','kaufte'],a:'gekauft',exp:'kaufen → regular: ge-+kauf+t.',xp:10},
  {type:'fill',q:'Wir ___ den ganzen Tag ___ (arbeiten, Perfekt).',a:'haben / gearbeitet',exp:'arbeiten → gearbeitet (raiz em -t: +ete).',xp:10},
  {type:'translate',q:'Traduza: Ela ligou para o médico.',a:'Sie hat den Arzt angerufen.',exp:'anrufen → separável: angerufen.',xp:10}
],
'a2-l21-3':[
  {type:'choose',q:'Onde fica o Partizip II na frase principal?',opts:['posição 2','final','início'],a:'final',exp:'Auxiliar na pos.2, Partizip II no final.',xp:10},
  {type:'fill',q:'___ du die E-Mail schon ___ (schreiben, Perfekt)?',a:'Hast / geschrieben',exp:'schreiben → geschrieben.',xp:10},
  {type:'translate',q:'Traduza: Assisti TV à noite.',a:'Ich habe abends ferngesehen.',exp:'fernsehen → separável: ferngesehen.',xp:10}
],
'a2-l22-1':[
  {type:'choose',q:'Qual verbo usa "sein" no Perfekt?',opts:['schlafen','gehen','kochen'],a:'gehen',exp:'gehen = movimento direcional → sein.',xp:10},
  {type:'fill',q:'Ich ___ mit dem Fahrrad zur Arbeit ___ (fahren, Perfekt).',a:'bin / gefahren',exp:'fahren → gefahren + sein.',xp:10},
  {type:'translate',q:'Traduza: Ela ficou em casa ontem.',a:'Sie ist gestern zu Hause geblieben.',exp:'bleiben → geblieben + sein.',xp:12}
],
'a2-l22-2':[
  {type:'choose',q:'Partizip II de "schwimmen":',opts:['geschwimmt','geschwommen','schwimmte'],a:'geschwommen',exp:'schwimmen → irregular: geschwommen.',xp:10},
  {type:'fill',q:'Die Kinder ___ schnell ___ (einschlafen, Perfekt).',a:'sind / eingeschlafen',exp:'einschlafen → mudança de estado → sein.',xp:10},
  {type:'translate',q:'Traduza: Fomos ao museu juntos.',a:'Wir sind zusammen ins Museum gegangen.',exp:'gehen → gegangen + sein.',xp:10}
],
'a2-l22-3':[
  {type:'choose',q:'Qual verbo SEMPRE usa "sein" no Perfekt?',opts:['machen','werden','spielen'],a:'werden',exp:'werden = mudança de estado → sein.',xp:10},
  {type:'fill',q:'Bist du schon einmal nach Österreich ___ (fliegen, Perfekt)?',a:'geflogen',exp:'fliegen → geflogen + sein.',xp:10},
  {type:'translate',q:'Traduza: Ele subiu a montanha.',a:'Er ist auf den Berg gestiegen.',exp:'steigen → gestiegen + sein.',xp:10}
],
'a2-l23-1':[
  {type:'choose',q:'"Du ___ viel Wasser trinken." (conselho médico)',opts:['kannst','musst','sollst'],a:'sollst',exp:'sollen = conselho/recomendação.',xp:10},
  {type:'fill',q:'___ (Können) Sie bitte tief einatmen?',a:'Können',exp:'können = possibilidade/pedido educado.',xp:10},
  {type:'translate',q:'Traduza: Ela precisa tomar o remédio três vezes ao dia.',a:'Sie muss das Medikament dreimal täglich nehmen.',exp:'müssen = obrigação/necessidade.',xp:12}
],
'a2-l23-2':[
  {type:'choose',q:'Conjugação de "müssen" (ich/er):',opts:['muss/muss','muss/musst','müsse/müsse'],a:'muss/muss',exp:'1ª e 3ª pessoa sempre iguais nos modais.',xp:10},
  {type:'fill',q:'Ich ___ (dürfen) keinen Alkohol trinken.',a:'darf',exp:'dürfen = permissão/proibição.',xp:10},
  {type:'translate',q:'Traduza: Posso marcar uma consulta?',a:'Kann ich einen Termin vereinbaren?',exp:'können + infinitivo no final.',xp:10}
],
'a2-l23-3':[
  {type:'choose',q:'Qual modal expressa habilidade/capacidade?',opts:['müssen','sollen','können'],a:'können',exp:'können = poder/saber fazer.',xp:10},
  {type:'translate',q:'Traduza: Você deve descansar dois dias.',a:'Du sollst zwei Tage ruhen.',exp:'sollen = conselho.',xp:10},
  {type:'fill',q:'não precisa ≠ ___ (proibido)',a:'darf nicht',exp:'nicht müssen = não precisa | darf nicht = não pode/é proibido.',xp:10}
],
'a2-l24-1':[
  {type:'choose',q:'Preposição: "Das Sofa steht ___ dem Fenster." (em frente)',opts:['vor','neben','hinter','unter'],a:'vor',exp:'vor + dativo = em frente a.',xp:10},
  {type:'fill',q:'Das Bild hängt ___ ___ Wand. (an + die)',a:'an der',exp:'an + dativo. die Wand → der Wand.',xp:10},
  {type:'translate',q:'Traduza: A geladeira fica ao lado da pia.',a:'Der Kühlschrank steht neben der Spüle.',exp:'neben + dativo feminino → der Spüle.',xp:12}
],
'a2-l24-2':[
  {type:'choose',q:'"Ich wohne ___ meinen Eltern." (na casa de)',opts:['bei','mit','zu','von'],a:'bei',exp:'bei + dativo = na casa de.',xp:10},
  {type:'fill',q:'Ich gehe ___ Ärztin. (zu + der)',a:'zur',exp:'zu + der = zur (contração obrigatória).',xp:10},
  {type:'translate',q:'Traduza: O apartamento me agrada muito.',a:'Die Wohnung gefällt mir sehr.',exp:'gefallen + dativo.',xp:10}
],
'a2-l24-3':[
  {type:'choose',q:'Erdgeschoss significa:',opts:['primeiro andar','térreo','segundo andar','subsolo'],a:'térreo',exp:'Erdgeschoss = nível do chão = térreo.',xp:10},
  {type:'fill',q:'Nachtruhe começa às ___ Uhr.',a:'22',exp:'Silêncio noturno: das 22h às 6h.',xp:10},
  {type:'translate',q:'Traduza: Há um supermercado em frente à minha casa.',a:'Gegenüber von meinem Haus gibt es einen Supermarkt.',exp:'gegenüber von + dativo.',xp:10}
],
'a2-l25-1':[
  {type:'choose',q:'"Das ist ___ Mann." (nett, indef, Nom)',opts:['ein netter','ein nette','ein nettes','ein netten'],a:'ein netter',exp:'Masc Nom com art indef: -er.',xp:10},
  {type:'fill',q:'Sie hat ___ ___ Haare. (lang, blond)',a:'lange, blonde',exp:'Plural Nom sem artigo: -e.',xp:10},
  {type:'translate',q:'Traduza: Isso é uma bicicleta moderna.',a:'Das ist ein modernes Fahrrad.',exp:'Neut Nom indef: -es.',xp:12}
],
'a2-l25-2':[
  {type:'choose',q:'"der alte Mann" no Akkusativ:',opts:['den alten Mann','dem alten Mann','des alten Mannes'],a:'den alten Mann',exp:'Masc akk: den + adj -en.',xp:10},
  {type:'fill',q:'Sie trägt ___ Kleidung. (bunt)',a:'bunte',exp:'Fem Akk sem artigo: -e.',xp:10},
  {type:'translate',q:'Traduza: Ela é uma mulher simpática.',a:'Sie ist eine sympathische Frau.',exp:'Fem Nom indef: -e.',xp:10}
],
'a2-l26-1':[
  {type:'choose',q:'Reflexivo akk de "er": Er wäscht ___ die Hände.',opts:['ihn','ihm','sich','es'],a:'sich',exp:'sich = reflexivo 3ª pessoa.',xp:10},
  {type:'fill',q:'Er ___ (sich interessieren) für Musik.',a:'interessiert sich',exp:'sich interessieren für.',xp:10},
  {type:'translate',q:'Traduza: Ela se irrita com o trânsito.',a:'Sie ärgert sich über den Stau.',exp:'sich ärgern über + akk.',xp:12}
],
'a2-l26-2':[
  {type:'choose',q:'"Ich kaufe ___ ein Buch." (para mim)',opts:['mich','mir','sich','mein'],a:'mir',exp:'Dativo reflexivo quando já há akk na frase.',xp:10},
  {type:'fill',q:'Wir freuen ___ auf das Wochenende.',a:'uns',exp:'sich freuen auf: uns para wir.',xp:10},
  {type:'translate',q:'Traduza: Você já se inscreveu?',a:'Hast du dich schon angemeldet?',exp:'sich anmelden + Perfekt.',xp:10}
],
'a2-l27-1':[
  {type:'choose',q:'Forma mais educada de pedir:',opts:['Ich will einen Kaffee.','Ich möchte einen Kaffee.','Ich hätte gern einen Kaffee.'],a:'Ich hätte gern einen Kaffee.',exp:'hätte gern = Konjunktiv II = mais educado.',xp:10},
  {type:'fill',q:'___ (Können, Konj.II) Sie mir die Rechnung bringen?',a:'Könnten',exp:'könnten = Konjunktiv II de können.',xp:10},
  {type:'translate',q:'Traduza: Isso seria muito gentil.',a:'Das wäre sehr nett.',exp:'wäre = Konjunktiv II de sein.',xp:12}
],
'a2-l27-2':[
  {type:'choose',q:'Konjunktiv II de "haben":',opts:['häbe','hätte','hatte','habe'],a:'hätte',exp:'haben → hätte no Konjunktiv II.',xp:10},
  {type:'fill',q:'Ich ___ gern noch ein Glas Wasser.',a:'hätte',exp:'hätte gern = gostaria de.',xp:10},
  {type:'translate',q:'Traduza: Você deveria dormir mais.',a:'Du solltest mehr schlafen.',exp:'solltest = Konjunktiv II de sollen.',xp:10}
],
'a2-l28-1':[
  {type:'choose',q:'"war" é o Präteritum de:',opts:['werden','haben','sein'],a:'sein',exp:'sein → war.',xp:10},
  {type:'fill',q:'Er ___ (haben, Präteritum) keine Zeit.',a:'hatte',exp:'haben → hatte.',xp:10},
  {type:'translate',q:'Traduza: Ela nasceu em Leipzig.',a:'Sie wurde in Leipzig geboren.',exp:'geboren werden = nascer.',xp:12}
],
'a2-l28-2':[
  {type:'choose',q:'Präteritum de "lernen" (ich):',opts:['lernete','lernte','gelernte'],a:'lernte',exp:'Regular: raiz+-te. lernen→lernte.',xp:10},
  {type:'fill',q:'Sie ___ (arbeiten, Präteritum) viel.',a:'arbeitete',exp:'arbeiten: raiz em -t → +ete.',xp:10},
  {type:'translate',q:'Traduza: Eles foram a Berlim de trem.',a:'Sie fuhren mit dem Zug nach Berlin.',exp:'fahren → fuhr/fuhren.',xp:10}
],
'a2-l29-1':[
  {type:'choose',q:'Ordem: "Ich schenke ___ ___ Buch." (minha mãe / um)',opts:['meiner Mutter / ein','ein / meiner Mutter','meiner Mutter / einen'],a:'meiner Mutter / ein',exp:'Dat (pessoa) + Akk (coisa). Buch = neutro → ein.',xp:10},
  {type:'fill',q:'Ich habe ___ (sie, Dat) eine Karte geschrieben.',a:'ihr',exp:'Dativo de sie = ihr.',xp:10},
  {type:'translate',q:'Traduza: Pode me mostrar a foto?',a:'Kannst du mir das Foto zeigen?',exp:'zeigen + Dat + Akk.',xp:12}
],
'a2-l29-2':[
  {type:'choose',q:'Com dois pronomes: Ich gebe ___ ___ (es / ihm)',opts:['ihm es','es ihm','ihn es'],a:'es ihm',exp:'Pronomes: Akk antes do Dat.',xp:10},
  {type:'fill',q:'Zeig ___ (ich, Dat) das Foto!',a:'mir',exp:'zeigen + dativo: mir.',xp:10},
  {type:'translate',q:'Traduza: Diga a verdade a ela.',a:'Sag ihr die Wahrheit.',exp:'sagen + Dat + Akk.',xp:10}
],
'a2-l30-1':[
  {type:'choose',q:'Imperativo formal de "ausfüllen":',opts:['Füll aus!','Füllen Sie aus!','Ausfüllen Sie!'],a:'Füllen Sie aus!',exp:'Imperativo formal: Verbo conj + Sie.',xp:10},
  {type:'fill',q:'Ich möchte Geld ___ (überweisen).',a:'überweisen',exp:'überweisen = transferir dinheiro.',xp:10},
  {type:'translate',q:'Traduza: Gostaria de enviar um pacote.',a:'Ich möchte ein Paket schicken.',exp:'möchte + infinitivo no final.',xp:12}
],
'a2-l30-2':[
  {type:'choose',q:'"Unterschreiben Sie hier" significa:',opts:['Saia daqui','Assine aqui','Sente-se aqui'],a:'Assine aqui',exp:'unterschreiben = assinar.',xp:10},
  {type:'fill',q:'___ (Bestätigen) Sie bitte mit Ihrer PIN.',a:'Bestätigen',exp:'Imperativo formal: Verbo + Sie.',xp:10},
  {type:'translate',q:'Traduza: Aqui está o código de rastreamento.',a:'Hier ist Ihr Sendungscode.',exp:'Sendungscode = código de rastreamento.',xp:10}
],
'a2-l31-1':[
  {type:'choose',q:'Qual verbo rege dativo?',opts:['fragen','helfen','kaufen'],a:'helfen',exp:'helfen + dativo: Ich helfe dir.',xp:10},
  {type:'fill',q:'Das Fahrrad ___ (gehören) ihm.',a:'gehört',exp:'gehören + dativo. 3ª sg: gehört.',xp:10},
  {type:'translate',q:'Traduza: A festa me agradou muito.',a:'Die Party hat mir sehr gut gefallen.',exp:'gefallen + dativo (mir).',xp:12}
],
'a2-l31-2':[
  {type:'choose',q:'"Das Kleid steht dir gut!" usa:',opts:['acusativo','dativo','nominativo'],a:'dativo',exp:'stehen + dativo = ficar bem.',xp:10},
  {type:'fill',q:'Wie ___ (schmecken) dir das Essen?',a:'schmeckt',exp:'schmecken + dativo. 3ª sg: schmeckt.',xp:10},
  {type:'translate',q:'Traduza: Parabenizo você pelo aniversário!',a:'Ich gratuliere dir zum Geburtstag!',exp:'gratulieren + dativo + zu.',xp:10}
],
'a2-l32-1':[
  {type:'choose',q:'"das Auto des Nachbarn" usa genitivo:',opts:['feminino','masculino','neutro'],a:'masculino',exp:'des + subst + -s: masculino/neutro.',xp:10},
  {type:'fill',q:'Das ist das Buch ___ (mein, fem) Schwester.',a:'meiner',exp:'Genitivo feminino: meiner.',xp:10},
  {type:'translate',q:'Traduza: É o celular do meu irmão. (informal)',a:'Das ist das Handy von meinem Bruder.',exp:'von + dativo = alternativa informal.',xp:10}
],
'a2-l32-2':[
  {type:'choose',q:'"Wessen" é a pergunta do:',opts:['dativo','acusativo','genitivo'],a:'genitivo',exp:'Wessen? = de quem? = genitivo.',xp:10},
  {type:'fill',q:'Die Tasche ___ (die Lehrerin, genitivo) liegt da.',a:'der Lehrerin',exp:'Genitivo feminino: der.',xp:10},
  {type:'translate',q:'Traduza: A linguagem da autora é clara.',a:'Die Sprache der Autorin ist klar.',exp:'Genitivo feminino: der Autorin.',xp:10}
],
'a2-l33-1':[
  {type:'choose',q:'"weil" exige o verbo em qual posição?',opts:['posição 2','posição 1','posição final'],a:'posição final',exp:'Subordinadas com weil: verbo no final.',xp:10},
  {type:'fill',q:'Ich komme nicht, ___ ich müde ___.',a:'weil / bin',exp:'weil + bin (final).',xp:10},
  {type:'translate',q:'Traduza: Não venho porque estou doente.',a:'Ich komme nicht, weil ich krank bin.',exp:'weil + krank bin (final).',xp:12}
],
'a2-l33-2':[
  {type:'choose',q:'"Er sagt, dass er morgen ___." (kommen)',opts:['kommt','komme','kommen'],a:'kommt',exp:'dass + verbo conjugado no final.',xp:10},
  {type:'fill',q:'Ich hoffe, ___ du kommen ___ (können, dass).',a:'dass / kannst',exp:'dass + kannst (final).',xp:10},
  {type:'translate',q:'Traduza: Acredito que você tem razão.',a:'Ich glaube, dass du recht hast.',exp:'dass + hast (final).',xp:10}
],
'a2-l34-1':[
  {type:'choose',q:'Diferença wenn/ob: "Ich weiß nicht, ___ er kommt."',opts:['wenn','ob','weil'],a:'ob',exp:'ob = dúvida/pergunta indireta.',xp:10},
  {type:'fill',q:'___ (Se/condição) es regnet, bleibe ich zu Hause.',a:'Wenn',exp:'wenn = se/quando (condição).',xp:10},
  {type:'translate',q:'Traduza: Não sei se ele tem tempo.',a:'Ich weiß nicht, ob er Zeit hat.',exp:'ob + verbo no final.',xp:12}
],
'a2-l34-2':[
  {type:'choose',q:'"falls" é:',opts:['igual a weil','mais formal que wenn','igual a ob'],a:'mais formal que wenn',exp:'falls = caso (condição mais formal).',xp:10},
  {type:'fill',q:'Ich frage mich, ob das ___ (stimmen).',a:'stimmt',exp:'ob + verbo no final.',xp:10},
  {type:'translate',q:'Traduza: Caso tenha dúvidas, entre em contato.',a:'Falls du Fragen hast, melde dich.',exp:'falls + verbo no final.',xp:10}
],
'a2-l35-1':[
  {type:'choose',q:'Präteritum de "gehen" (er):',opts:['geging','ging','gegangen'],a:'ging',exp:'gehen → ging (irregular).',xp:10},
  {type:'fill',q:'Er ___ (essen, Präteritum) einen Apfel.',a:'aß',exp:'essen → aß.',xp:10},
  {type:'translate',q:'Traduza: Eles viram um filme alemão.',a:'Sie sahen einen deutschen Film.',exp:'sehen → sah/sahen.',xp:12}
],
'a2-l35-2':[
  {type:'choose',q:'Präteritum de "kommen" (wir):',opts:['kamen','kamten','kommen'],a:'kamen',exp:'kommen → kam/kamen.',xp:10},
  {type:'fill',q:'Sie ___ (schreiben, Präteritum) eine E-Mail.',a:'schrieb',exp:'schreiben → schrieb.',xp:10},
  {type:'translate',q:'Traduza: Ele bebeu café e leu o jornal.',a:'Er trank einen Kaffee und las die Zeitung.',exp:'trinken→trank, lesen→las.',xp:10}
],
'a2-l36-1':[
  {type:'choose',q:'"Man" usa verbo na:',opts:['1ª pessoa','2ª pessoa','3ª pessoa singular'],a:'3ª pessoa singular',exp:'man = sempre 3ª pessoa singular.',xp:10},
  {type:'fill',q:'___ (Man) lernt Deutsch durch Übung.',a:'Man',exp:'man = se/a gente.',xp:10},
  {type:'translate',q:'Traduza: Como se diz isso em alemão?',a:'Wie sagt man das auf Deutsch?',exp:'man sagt = diz-se.',xp:12}
],
'a2-l36-2':[
  {type:'choose',q:'"Das macht ___ müde." (akusativo de man)',opts:['man','einen','einem'],a:'einen',exp:'Akusativo de man = einen.',xp:10},
  {type:'fill',q:'In Deutschland grüßt ___ die Nachbarn.',a:'man',exp:'man = se/a gente.',xp:10},
  {type:'translate',q:'Traduza: Pode-se comer bem aqui.',a:'Man kann hier gut essen.',exp:'man kann = pode-se.',xp:10}
],
'a2-l37-1':[
  {type:'choose',q:'"Mir ist schwindelig" expressa:',opts:['raiva','tontura','alegria','fome'],a:'tontura',exp:'schwindelig = tonto, com vertigem.',xp:10},
  {type:'fill',q:'Ich habe ___ (stark) Kopfschmerzen.',a:'starke',exp:'starke = forte (fem pl). Kopfschmerzen é plural.',xp:10},
  {type:'translate',q:'Traduza: Estou com dor de garganta há dois dias.',a:'Ich habe seit zwei Tagen Halsschmerzen.',exp:'seit + Dat para duração.',xp:12}
],
'a2-l37-2':[
  {type:'choose',q:'"Seit wann haben Sie die Beschwerden?" pergunta sobre:',opts:['intensidade','localização','duração','frequência'],a:'duração',exp:'Seit wann = desde quando = duração.',xp:10},
  {type:'fill',q:'Es tut mir ___ ___ weh. (no braço)',a:'am Arm',exp:'am + körperteil.',xp:10},
  {type:'translate',q:'Traduza: Às vezes fico tonto de manhã.',a:'Manchmal bin ich morgens schwindelig.',exp:'manchmal + morgens.',xp:10}
],
'a2-l38-1':[
  {type:'choose',q:'Futur I: "werden" ocupa qual posição?',opts:['posição 1','posição 2','final'],a:'posição 2',exp:'werden na posição 2, infinitivo no final.',xp:10},
  {type:'fill',q:'Ich ___ (werden) nächstes Jahr in Berlin wohnen.',a:'werde',exp:'ich werde.',xp:10},
  {type:'translate',q:'Traduza: Ela vai começar um novo emprego em setembro.',a:'Sie wird im September einen neuen Job anfangen.',exp:'wird + anfangen (final).',xp:12}
],
'a2-l38-2':[
  {type:'choose',q:'"Ich fahre morgen nach Berlin." usa:',opts:['Futur I','Präsens+marcador','Präteritum'],a:'Präsens+marcador',exp:'Presente + marcador de tempo = futuro comum na fala.',xp:10},
  {type:'fill',q:'Er wird wahrscheinlich ___ (kommen).',a:'kommen',exp:'werden + infinitivo no final.',xp:10},
  {type:'translate',q:'Traduza: Vou dar o meu melhor! (promessa/determinação)',a:'Ich werde mein Bestes geben!',exp:'Futur I para promessa.',xp:10}
],
'a2-l39-1':[
  {type:'choose',q:'"Ich lerne, damit ___ ich besser werde." — correto?',opts:['Sim, damit com mesmo sujeito','Não, deveria ser um...zu','Ambos estão corretos'],a:'Não, deveria ser um...zu',exp:'Mesmo sujeito → um...zu. "Ich lerne, um besser zu werden."',xp:10},
  {type:'fill',q:'Ich mache Pausen, ___ nicht müde zu werden.',a:'um',exp:'um...zu = mesmo sujeito.',xp:10},
  {type:'translate',q:'Traduza: Estudo todos os dias para melhorar.',a:'Ich lerne jeden Tag, um besser zu werden.',exp:'um...zu + mesmo sujeito.',xp:12}
],
'a2-l39-2':[
  {type:'choose',q:'"Ich schreibe langsam, ___ du es verstehst." (sujeitos diferentes)',opts:['um...zu','damit','weil'],a:'damit',exp:'damit = sujeitos diferentes.',xp:10},
  {type:'fill',q:'zweimal pro ___ = duas vezes por semana',a:'Woche',exp:'zweimal pro Woche.',xp:10},
  {type:'translate',q:'Traduza: Faço flashcards para que aprenda vocabulário.',a:'Ich mache Flashcards, damit ich Vokabeln lerne.',exp:'damit + sujeitos diferentes.',xp:10}
],
'a2-exam-l1-horen':[
  {type:'choose',q:'Wo ist die Apotheke?',opts:['neben dem Supermarkt','gegenüber der Bank','am Bahnhof'],a:'neben dem Supermarkt',exp:'Preposições de lugar.',xp:10},
  {type:'choose',q:'Wann beginnt der Kurs?',opts:['um 9 Uhr','um 10 Uhr','um 14 Uhr'],a:'um 10 Uhr',exp:'Horários.',xp:10}
],
'a2-exam-l2-lesen':[
  {type:'choose',q:'Qual é a intenção da mensagem?',opts:['Termin absagen','Einladung zum Kaffee','Frage stellen'],a:'Einladung zum Kaffee',exp:'Intenção principal.',xp:10},
  {type:'choose',q:'Qual bebida não tem álcool?',opts:['Bier','Wein','Apfelschorle'],a:'Apfelschorle',exp:'Apfelschorle = suco de maçã com água com gás.',xp:10}
],
'a2-exam-l3-schreiben':[
  {type:'fill',q:'Lieber Thomas, ich ___ (sein) Lukas.',a:'bin',exp:'Apresentação informal.',xp:10},
  {type:'fill',q:'Treffen wir uns ___ Samstag ___ 15 Uhr?',a:'am / um',exp:'am + dia, um + hora.',xp:10},
  {type:'translate',q:'Traduza: Estou animado para nos encontrarmos!',a:'Ich freue mich auf unser Treffen!',exp:'sich freuen auf.',xp:10}
],
'a2-exam-l4-sprechen':[
  {type:'translate',q:'Traduza: No fim de semana fui ao cinema.',a:'Am Wochenende bin ich ins Kino gegangen.',exp:'gehen → gegangen + sein.',xp:10},
  {type:'translate',q:'Traduza: Gostaria de uma salada e água sem gás.',a:'Ich hätte gern einen Salat und ein Wasser ohne Kohlensäure.',exp:'hätte gern + akk.',xp:10}
],
'a2-exam-l5-grammatik':[
  {type:'choose',q:'Ich ___ (sein, Präteritum) gestern im Kino.',opts:['bin','war','wurde'],a:'war',exp:'Präteritum de sein: war.',xp:10},
  {type:'fill',q:'Ich lerne Deutsch, ___ ich in Berlin arbeiten ___ (möchten, weil).',a:'weil / möchte',exp:'weil + möchte (final).',xp:10},
  {type:'fill',q:'Man ___ (sollen) früh schlafen gehen.',a:'soll',exp:'man + 3ª pessoa singular.',xp:10},
  {type:'choose',q:'Futur I: "Sie ___ morgen kommen."',opts:['hat','wird','ist'],a:'wird',exp:'werden = auxiliar do Futur I.',xp:10}
]
};

// ─────────────────────────────────────────────────
// FLASHCARDS A2
// ─────────────────────────────────────────────────
const A2_FLASHCARDS = [
// ── Cap 21: Perfekt haben ──
{slug:'fc-a2-c21-01',level:'A2',chapter:21,theme:'gramática',front:'Perfekt mit haben',back:'Sujeito + haben (pos.2) + ... + Partizip II (final)',ex_de:'Ich habe gestern Pasta gekocht.',ex_pt:'Cozinhei macarrão ontem.'},
{slug:'fc-a2-c21-02',level:'A2',chapter:21,theme:'gramática',front:'Partizip II — regulares: ge-+raiz+-t',back:'machen→gemacht | kaufen→gekauft | spielen→gespielt',ex_de:'Ich habe Musik gehört.',ex_pt:'Ouvi música.'},
{slug:'fc-a2-c21-03',level:'A2',chapter:21,theme:'gramática',front:'Partizip II — irregulares: ge-+raiz(muda)+-en',back:'lesen→gelesen | schreiben→geschrieben | sehen→gesehen',ex_de:'Er hat ein Buch gelesen.',ex_pt:'Ele leu um livro.'},
{slug:'fc-a2-c21-04',level:'A2',chapter:21,theme:'gramática',front:'Partizip II — inseparáveis (be-/ver-/ent-): sem ge-',back:'besuchen→besucht | verstehen→verstanden | erzählen→erzählt',ex_de:'Sie hat ihre Oma besucht.',ex_pt:'Ela visitou a avó.'},
{slug:'fc-a2-c21-05',level:'A2',chapter:21,theme:'gramática',front:'Partizip II — verbos -ieren: sem ge-',back:'telefonieren→telefoniert | studieren→studiert | fotografieren→fotografiert',ex_de:'Ich habe telefoniert.',ex_pt:'Telefonei.'},
{slug:'fc-a2-c21-06',level:'A2',chapter:21,theme:'gramática',front:'Partizip II — separáveis: pref+ge-+raiz',back:'aufräumen→aufgeräumt | fernsehen→ferngesehen | anrufen→angerufen',ex_de:'Ich habe aufgeräumt.',ex_pt:'Arrumei.'},
// ── Cap 22: Perfekt sein ──
{slug:'fc-a2-c22-01',level:'A2',chapter:22,theme:'gramática',front:'Perfekt mit sein — movimento direcional',back:'gehen→gegangen | fahren→gefahren | fliegen→geflogen | laufen→gelaufen',ex_de:'Ich bin nach Berlin gefahren.',ex_pt:'Fui a Berlim.'},
{slug:'fc-a2-c22-02',level:'A2',chapter:22,theme:'gramática',front:'Perfekt mit sein — mudança de estado',back:'werden→geworden | einschlafen→eingeschlafen | aufstehen→aufgestanden',ex_de:'Das Baby ist eingeschlafen.',ex_pt:'O bebê adormeceu.'},
{slug:'fc-a2-c22-03',level:'A2',chapter:22,theme:'gramática',front:'Perfekt mit sein — bleiben',back:'bleiben→geblieben (ficar = permanência)',ex_de:'Sie ist zu Hause geblieben.',ex_pt:'Ela ficou em casa.'},
{slug:'fc-a2-c22-04',level:'A2',chapter:22,theme:'viagem',front:'der Urlaub / die Reise / reisen',back:'as férias / a viagem / viajar',ex_de:'Ich war im Urlaub in München.',ex_pt:'Estive de férias em Munique.'},
// ── Cap 23: Modalverben ──
{slug:'fc-a2-c23-01',level:'A2',chapter:23,theme:'gramática',front:'können / müssen / sollen (diferença)',back:'können=poder/saber | müssen=precisar | sollen=dever(conselho)',ex_de:'Du sollst viel Wasser trinken.',ex_pt:'Você deve beber muita água.'},
{slug:'fc-a2-c23-02',level:'A2',chapter:23,theme:'saúde',front:'die Kopfschmerzen / Halsschmerzen / Bauchschmerzen',back:'dor de cabeça / garganta / barriga (sempre plural!)',ex_de:'Ich habe starke Kopfschmerzen.',ex_pt:'Estou com forte dor de cabeça.'},
{slug:'fc-a2-c23-03',level:'A2',chapter:23,theme:'saúde',front:'Mir ist schwindelig / übel / warm / kalt',back:'Estou tonto / com náusea / com calor / com frio',ex_de:'Mir ist schwindelig und übel.',ex_pt:'Estou tonto e com náusea.'},
{slug:'fc-a2-c23-04',level:'A2',chapter:23,theme:'saúde',front:'nicht müssen ≠ dürfen nicht ⚠️',back:'não precisa ≠ não pode / é proibido',ex_de:'Du musst nicht kommen. Du darfst nicht rauchen.',ex_pt:'Não precisa vir. Não pode fumar.'},
// ── Cap 24: Dativo ──
{slug:'fc-a2-c24-01',level:'A2',chapter:24,theme:'gramática',front:'Wo? + Dativ: vor/hinter/neben/auf/in/an/unter/zwischen',back:'posição estática sempre pede dativo',ex_de:'Das Sofa steht vor dem Fenster.',ex_pt:'O sofá está em frente à janela.'},
{slug:'fc-a2-c24-02',level:'A2',chapter:24,theme:'gramática',front:'Dativ: der→dem | die→der | das→dem | pl→den(+n)',back:'Artigos no dativo — mudanças',ex_de:'Ich gehe zur Ärztin. (zu + der)',ex_pt:'Vou à médica.'},
{slug:'fc-a2-c24-03',level:'A2',chapter:24,theme:'casa',front:'stehen / liegen / hängen (posição)',back:'estar em pé / estar deitado / estar pendurado',ex_de:'Das Bild hängt an der Wand.',ex_pt:'O quadro está na parede.'},
// ── Cap 25: Adjektivdeklination ──
{slug:'fc-a2-c25-01',level:'A2',chapter:25,theme:'gramática',front:'Adj + def. art. (Nom sing): -e',back:'der nette Mann | die nette Frau | das nette Kind',ex_de:'Der alte Mann ist freundlich.',ex_pt:'O homem velho é simpático.'},
{slug:'fc-a2-c25-02',level:'A2',chapter:25,theme:'gramática',front:'Adj + indef. art. (Nom sing): -er/-e/-es',back:'ein netter Mann | eine nette Frau | ein nettes Kind',ex_de:'Das ist ein modernes Fahrrad.',ex_pt:'Isso é uma bicicleta moderna.'},
{slug:'fc-a2-c25-03',level:'A2',chapter:25,theme:'descrição',front:'schlank / kurz / lang / braun / bunt / nachdenklich',back:'magro / curto / longo / castanho / colorido / reflexivo',ex_de:'Er hat kurze, braune Haare.',ex_pt:'Ele tem cabelos curtos e castanhos.'},
// ── Cap 26: Reflexivpronomen ──
{slug:'fc-a2-c26-01',level:'A2',chapter:26,theme:'gramática',front:'Reflexivos akk: mich/dich/sich/uns/euch/sich',back:'Ação direta sobre si mesmo',ex_de:'Ich wasche mich. Er freut sich.',ex_pt:'Eu me lavo. Ele fica feliz.'},
{slug:'fc-a2-c26-02',level:'A2',chapter:26,theme:'gramática',front:'Reflexivos dat: mir/dir/sich/uns/euch/sich',back:'Quando já há objeto akk na frase',ex_de:'Ich kaufe mir ein Buch.',ex_pt:'Compro um livro para mim.'},
{slug:'fc-a2-c26-03',level:'A2',chapter:26,theme:'tecnologia',front:'sich ärgern über / sich freuen auf / sich interessieren für',back:'irritar-se com / estar animado para / interessar-se por',ex_de:'Er interessiert sich für Technologie.',ex_pt:'Ele se interessa por tecnologia.'},
// ── Cap 27: Konjunktiv II ──
{slug:'fc-a2-c27-01',level:'A2',chapter:27,theme:'gramática',front:'Konjunktiv II: hätte / wäre / würde / könnte / sollte',back:'haben→hätte | sein→wäre | werden→würde | können→könnte | sollen→sollte',ex_de:'Das wäre sehr nett.',ex_pt:'Isso seria muito gentil.'},
{slug:'fc-a2-c27-02',level:'A2',chapter:27,theme:'restaurante',front:'Ich hätte gern... / Würden Sie...? / Könnten Sie...?',back:'Pedidos muito educados — Konjunktiv II',ex_de:'Könnten Sie mir die Rechnung bringen?',ex_pt:'Poderia me trazer a conta?'},
{slug:'fc-a2-c27-03',level:'A2',chapter:27,theme:'restaurante',front:'stimmt so / zusammen / getrennt',back:'pode ficar o troco / junto / separado',ex_de:'Zusammen, bitte. — Stimmt so!',ex_pt:'Junto, por favor. — Pode ficar!'},
// ── Cap 28: Präteritum ──
{slug:'fc-a2-c28-01',level:'A2',chapter:28,theme:'gramática',front:'Präteritum sein: war/warst/war/waren',back:'sein = sempre Präteritum na fala!',ex_de:'Wo warst du gestern?',ex_pt:'Onde você estava ontem?'},
{slug:'fc-a2-c28-02',level:'A2',chapter:28,theme:'gramática',front:'Präteritum haben: hatte/hattest/hatte/hatten',back:'haben = sempre Präteritum na fala!',ex_de:'Er hatte keine Zeit.',ex_pt:'Ele não tinha tempo.'},
{slug:'fc-a2-c28-03',level:'A2',chapter:28,theme:'gramática',front:'Präteritum regular: raiz + -te',back:'machen→machte | lernen→lernte | arbeiten→arbeitete',ex_de:'Sie arbeitete viel.',ex_pt:'Ela trabalhou muito.'},
{slug:'fc-a2-c28-04',level:'A2',chapter:28,theme:'gramática',front:'Präteritum irregular: vogal muda, sem -te',back:'gehen→ging | kommen→kam | fahren→fuhr | sehen→sah',ex_de:'Wir fuhren nach Berlin.',ex_pt:'Fomos a Berlim.'},
// ── Cap 29: Dois objetos ──
{slug:'fc-a2-c29-01',level:'A2',chapter:29,theme:'gramática',front:'Dois objetos: Dat (pessoa) + Akk (coisa)',back:'Ich schenke MEINER MUTTER (Dat) EIN BUCH (Akk).',ex_de:'Zeigst du mir das Foto?',ex_pt:'Você me mostra a foto?'},
{slug:'fc-a2-c29-02',level:'A2',chapter:29,theme:'gramática',front:'Dois pronomes: Akk antes do Dat',back:'Ich gebe ES (Akk) IHM (Dat).',ex_de:'Kannst du es ihr geben?',ex_pt:'Pode dar isso a ela?'},
// ── Cap 30: Situações formais ──
{slug:'fc-a2-c30-01',level:'A2',chapter:30,theme:'formal',front:'Imperativo formal: Verbo + Sie',back:'Füllen Sie aus! | Unterschreiben Sie! | Nehmen Sie Platz!',ex_de:'Bestätigen Sie bitte mit Ihrer PIN.',ex_pt:'Confirme com sua senha.'},
{slug:'fc-a2-c30-02',level:'A2',chapter:30,theme:'formal',front:'überweisen / abheben / einzahlen / beantragen',back:'transferir / sacar / depositar / solicitar',ex_de:'Ich möchte Geld überweisen.',ex_pt:'Gostaria de fazer uma transferência.'},
// ── Cap 31: Verbos com dativo ──
{slug:'fc-a2-c31-01',level:'A2',chapter:31,theme:'gramática',front:'gefallen / gehören / fehlen / schmecken / passen / stehen',back:'agradar / pertencer / faltar / ser gostoso / servir / ficar bem — todos + dativo',ex_de:'Das Kleid steht dir gut!',ex_pt:'O vestido fica bem em você!'},
{slug:'fc-a2-c31-02',level:'A2',chapter:31,theme:'gramática',front:'gratulieren + Dat + zu',back:'Ich gratuliere dir zum Geburtstag!',ex_de:'Herzlichen Glückwunsch!',ex_pt:'Parabéns!'},
// ── Cap 32: Genitivo ──
{slug:'fc-a2-c32-01',level:'A2',chapter:32,theme:'gramática',front:'Genitivo Masc/Neut: des + -(e)s | Fem/Pl: der',back:'das Auto des Mannes | die Tasche der Frau | die Bücher der Kinder',ex_de:'Das ist das Buch meines Vaters.',ex_pt:'É o livro do meu pai.'},
{slug:'fc-a2-c32-02',level:'A2',chapter:32,theme:'gramática',front:'Wessen? = De quem? (pergunta do genitivo)',back:'Formal: Genitivo | Informal: von + Dativ',ex_de:'Wessen Jacke ist das? — Das ist die Jacke meines Bruders.',ex_pt:'De quem é essa jaqueta?'},
// ── Cap 33: dass e weil ──
{slug:'fc-a2-c33-01',level:'A2',chapter:33,theme:'gramática',front:'weil + verbo no FINAL (causa)',back:'Ich komme nicht, weil ich krank bin.',ex_de:'Ich lerne, weil es wichtig ist.',ex_pt:'Aprendo porque é importante.'},
{slug:'fc-a2-c33-02',level:'A2',chapter:33,theme:'gramática',front:'dass + verbo no FINAL (conteúdo)',back:'Ich denke, dass er kommt.',ex_de:'Ich hoffe, dass du kommen kannst.',ex_pt:'Espero que você possa vir.'},
// ── Cap 34: wenn e ob ──
{slug:'fc-a2-c34-01',level:'A2',chapter:34,theme:'gramática',front:'wenn (condição/tempo) vs. ob (dúvida)',back:'wenn = if/when | ob = whether (teste em inglês!)',ex_de:'Wenn ich Zeit habe, lerne ich. Ich weiß nicht, ob er kommt.',ex_pt:'Se tiver tempo, estudo. Não sei se ele vem.'},
{slug:'fc-a2-c34-02',level:'A2',chapter:34,theme:'gramática',front:'falls = caso (mais formal que wenn)',back:'Falls du Fragen hast, schreib mir.',ex_de:'Falls Sie Fragen haben, melde ich mich.',ex_pt:'Caso tenha dúvidas, entrarei em contato.'},
// ── Cap 35: Präteritum irregular ──
{slug:'fc-a2-c35-01',level:'A2',chapter:35,theme:'gramática',front:'Präteritum: gehen/kommen/fahren/sehen/sprechen',back:'ging | kam | fuhr | sah | sprach',ex_de:'Er kam gestern an.',ex_pt:'Ele chegou ontem.'},
{slug:'fc-a2-c35-02',level:'A2',chapter:35,theme:'gramática',front:'Präteritum: schreiben/lesen/trinken/essen/treffen',back:'schrieb | las | trank | aß | traf',ex_de:'Sie trank Kaffee und las die Zeitung.',ex_pt:'Ela tomou café e leu o jornal.'},
{slug:'fc-a2-c35-03',level:'A2',chapter:35,theme:'gramática',front:'Es war einmal... (Märchen)',back:'Era uma vez... — Präteritum de sein no início de contos',ex_de:'Es war einmal ein König...',ex_pt:'Era uma vez um rei...'},
// ── Cap 36: Pronome man ──
{slug:'fc-a2-c36-01',level:'A2',chapter:36,theme:'gramática',front:'man + 3ª pessoa singular (sempre!)',back:'Man lernt. Man kann. Man sollte. Man sagt.',ex_de:'Wie sagt man das auf Deutsch?',ex_pt:'Como se diz isso em alemão?'},
{slug:'fc-a2-c36-02',level:'A2',chapter:36,theme:'gramática',front:'man (Nom) / einen (Akk) / einem (Dat)',back:'Das macht einen müde. Das ist einem peinlich.',ex_de:'Man soll pünktlich sein.',ex_pt:'Deve-se ser pontual.'},
// ── Cap 37: Sintomas ──
{slug:'fc-a2-c37-01',level:'A2',chapter:37,theme:'saúde',front:'Intensidade: leicht / mäßig / stark / unerträglich',back:'leve / moderado / forte / insuportável',ex_de:'Ich habe leichte Kopfschmerzen.',ex_pt:'Estou com leve dor de cabeça.'},
{slug:'fc-a2-c37-02',level:'A2',chapter:37,theme:'saúde',front:'seit + Dativ para duração de sintomas',back:'Seit zwei Tagen / seit Montag / seit einer Woche',ex_de:'Seit drei Tagen habe ich Fieber.',ex_pt:'Tenho febre há três dias.'},
// ── Cap 38: Futuro ──
{slug:'fc-a2-c38-01',level:'A2',chapter:38,theme:'gramática',front:'Futur I: werden (pos.2) + Infinitiv (final)',back:'ich werde / du wirst / er wird / wir werden',ex_de:'Ich werde mein Bestes geben!',ex_pt:'Vou dar o meu melhor!'},
{slug:'fc-a2-c38-02',level:'A2',chapter:38,theme:'gramática',front:'Präsens + marcador de tempo = futuro (fala)',back:'Im Sommer fahre ich nach Portugal. (mais comum)',ex_de:'Nächste Woche beginne ich den Kurs.',ex_pt:'Na semana que vem começo o curso.'},
// ── Cap 39: Finalidade ──
{slug:'fc-a2-c39-01',level:'A2',chapter:39,theme:'gramática',front:'um...zu + Infinitiv (mesmo sujeito)',back:'Ich lerne, UM besser ZU WERDEN.',ex_de:'Sie macht Sport, um fit zu bleiben.',ex_pt:'Ela faz esporte para ficar em forma.'},
{slug:'fc-a2-c39-02',level:'A2',chapter:39,theme:'gramática',front:'damit + verbo final (sujeitos diferentes)',back:'Ich erkläre, DAMIT DU VERSTEHST.',ex_de:'Ich schreibe langsam, damit er es lesen kann.',ex_pt:'Escrevo devagar para que ele possa ler.'},
{slug:'fc-a2-c39-03',level:'A2',chapter:39,theme:'dia',front:'zweimal pro Woche / täglich / monatlich',back:'duas vezes por semana / diariamente / mensalmente',ex_de:'Zweimal pro Woche lerne ich Deutsch.',ex_pt:'Duas vezes por semana aprendo alemão.'},
// ── Prova Final A2 ──
{slug:'fc-a2-exam-01',level:'A2',chapter:99,theme:'exame',front:'Perfekt: haben ou sein?',back:'Teste: para onde? → sein | o quê? → haben',ex_de:'Ich bin gefahren. Ich habe gegessen.',ex_pt:'Fui (de carro). Eu comi.'},
{slug:'fc-a2-exam-02',level:'A2',chapter:99,theme:'exame',front:'Konjunktiv II: hätte/wäre/würde/könnte/sollte',back:'Cortesia e hipótese. Mais educado que indicativo.',ex_de:'Könnten Sie mir helfen? Das wäre toll!',ex_pt:'Poderia me ajudar? Isso seria ótimo!'},
{slug:'fc-a2-exam-03',level:'A2',chapter:99,theme:'exame',front:'weil/dass/wenn/ob + verbo no FINAL',back:'Todas as subordinadas: verbo sempre ao final.',ex_de:'Ich weiß, dass er kommt, weil er Zeit hat.',ex_pt:'Sei que ele vem porque tem tempo.'},
];

// ─────────────────────────────────────────────────
// EXPORT — adiciona ao objeto global sem sobrescrever
// ─────────────────────────────────────────────────

export { A2_MODULES, A2_LESSONS, A2_EXERCISES, A2_FLASHCARDS };
