// ─────────────────────────────────────────────
//  LaneStories · Rutedata
//  For å legge til en ny rute: kopier et eksisterende
//  objekt, gi det en ny id, og fyll inn innholdet.
// ─────────────────────────────────────────────

const ROUTES = {

  // ── BERGEN: THE DARK LANES ──────────────────
  'dark-lanes': {
    title:    'The Dark Lanes',
    kicker:   'Bergen · Kveld · 2–3 timer',
    subtitle: 'Fra vikingekonger til nazistisk motstand — og avslutter med middag i en hanseatisk festsal uendret siden 1708.',
    meta: [
      ['4 stopp',      'inkl. middag'],
      ['Starter',      'Bergenhus'],
      ['GPS + Audio',  'guide'],
      ['⭐ 4.9',       '· 94 har gått denne']
    ],
    completion: 'Du har gått The Dark Lanes. 4 stopp. Omtrent 800 år med Bergen-historie.',
    stops: [
      {
        name:      'Bergenhus Festning',
        address:   'Bergenhus, 5003 Bergen',
        tag:       'Stopp 1 av 4 · Du er her nå',
        drink:     null,
        audioMin:  'ca. 4 min',
        nextLabel: 'Neste stopp →',
        mapNext:   'Enhjørningsgården · 4 min',
        mapLabel:  'Neste stopp',
        body: `
<p>Du står ved hjertet av Bergens hele historie. Dette stedet — en gang kalt Holmen — har vært kontinuerlig bebodd siden før år 1000. Vikingekonger holdt hoff her. Norges første hovedstad var her. Og om morgenen 9. april 1940 falt det i mørket.</p>
<div class="pullquote"><p>"Før alt dette var dette et sted for ekstraordinær seremoni. Kong Håkon Håkonsson bygde den store steinhallen til venstre for deg mellom 1247 og 1261."</p></div>
<p>Det var her, 11. september 1261, at hans sønn Magnus Lagabøte ble kronet. Du kan nesten se fakkellyset mot steinveggen, høre latinen fra biskopens munn bue seg opp under hvelvet.</p>
<p>Da nazistene landet i Bergen ved daggry den 9. april, ble festningen holdt av en liten garnison i timer. Kommandanten nektet å overgi seg. Skuddene fyrte. Og i det rotet av forvirring og frykt og heroisme begynte en motstandsbevegelse som til slutt hjalp med å vinne krigen — i stor del fra en hemmelig leilighet noen hundre meter unna.</p>
<p>Du vil se det stedet om tolv minutter. Men først: se tilbake mot tornet. Murstein er fra 1200-tallet. Mørtel er original. Det som ser ut som restaurering er faktisk det ekte.</p>`
      },
      {
        name:      'Enhjørningsgården',
        address:   'Bryggen 29, 5003 Bergen',
        tag:       'Stopp 2 av 4 · Gå 4 min',
        drink:     null,
        audioMin:  'ca. 5 min',
        nextLabel: 'Neste stopp →',
        mapNext:   'The Theta Room · 6 min',
        mapLabel:  'Neste stopp',
        body: `
<p>Gå inn i denne smalen. De trebygde veggene heller mot hverandre ovenfor. Det lukter gammelt treverk og salt. Svært lite har endret seg her siden 1300-tallet.</p>
<div class="pullquote"><p>"Under den hanseatiske okkupasjonen ankom gutter på tolv som lærlinger og levde under nær total kontroll i årevis — uten å få lov til å forlate bryggene."</p></div>
<p>Enhjørningsgården — Enhørningens gård — fikk navnet sitt fra den utskårne enhørningen over porten. Den er fremdeles der. Se opp.</p>
<p>Inne i disse veggene bodde tyske kjøpmenn i seks måneder av gangen, isolert fra det norske samfunnet rundt dem. De fikk ikke gifte seg. De fikk ikke ha norske venner. Hansaforbundet kontrollerte ikke bare handelen — det kontrollerte menneskene.</p>
<p>Den tyske kjøpmannen som bodde i rommet over deg — vi kjenner navnet hans: Heinrich Schröder, 1392. Han kom aldri hjem til Lübeck. Arkivene sier: drukning. Men vannet var lavt den natten, og ingen andre var vitner til det.</p>`
      },
      {
        name:      'The Theta Room',
        address:   'Nedre Korskirkeallmenning 4, Bergen',
        tag:       'Stopp 3 av 4 · Gå 6 min',
        drink:     null,
        audioMin:  'ca. 6 min',
        nextLabel: 'Siste stopp: Middag →',
        mapNext:   'Dinner, 1708 · 3 min',
        mapLabel:  'Neste stopp',
        body: `
<p>Dette er det stedet som vil gi deg frysninger. Se på fasaden. Ingenting antyder det som skjedde her mellom 1942 og 1944.</p>
<div class="pullquote"><p>"I en liten leilighet i fjerde etasje opererte Bergens mest dristige motstandsgruppe sin hemmelige radiosendar. De kalte seg Theta."</p></div>
<p>Hver natt klokken 22.00 sendte de krypterte meldinger til London. Koordinater for tyske ubåtbevegelser. Besetningslister. Forsendelsesruter. Informasjonen de sendte reddet hundrevis av allierte liv og hjalp med å vende krigen til sjøs.</p>
<p>Gestapo lette i to år. De visste at signalene kom fra Bergen sentrum. De visste det var noen som bodde blant dem. De visste bare ikke hvem.</p>
<p>I oktober 1944 fant de dem. Noen av gruppemedlemmene ble henrettet. Andre klarte å flykte til Sverige om natten. Theta-rommet er nå et lite museum — det eneste rommet i Bergen der veggene bokstavelig talt har hørt historien om krigen lyde.</p>`
      },
      {
        name:      'Dinner, 1708',
        address:   'Enhjørningsgården · Bryggen, Bergen',
        tag:       'Stopp 4 av 4 · Avslutning',
        drink:     null,
        audioMin:  'ca. 3 min',
        nextLabel: null,
        mapNext:   'Ruten er fullført 🎉',
        mapLabel:  'Status',
        body: `
<p>Du er tilbake der du begynte — men nå vet du hva disse veggene er laget av. Gå inn i Enhjørningsgårdens restaurant. Rommet du spiser i har ikke endret seg siden 1708.</p>
<div class="pullquote"><p>"Kjøpmennene som spiste her betalte i sølvmynter. De drakk rhinsk vin. Lysene var stearin — nøyaktig som de du ser foran deg nå."</p></div>
<p>Be om bordet lengst inne til høyre. Der er stolen som — ifølge restaurantens egne arkiver — tilhørte kjøpmannen Claus Meyenberg i over femti år. Han satt der hver fredag kveld fra 1712 til 1763. Han bestilte alltid det samme: saltet torsk, øl, en pipe.</p>
<p>Ingen vet hva han tenkte på. Men byen utenfor var den samme byen du nettopp har gått gjennom. Festningen. Smalene. Havet. Historiene som aldri ble fortalt til noen — men som nå er dine.</p>
<p style="font-style:italic;color:var(--muted);">God appetitt. Du har fortjent det.</p>`
      }
    ]
  },

  // ── BERGEN: DYVEKE'S EVENING ────────────────
  'dyveke': {
    title:    "Dyveke's Evening",
    kicker:   'Bergen · Vin, sider & mat · Kveld · 3–4 timer',
    subtitle: 'Fra en nederlandsk gate til et kongelig kjærlighetshistorie. Fire stopp. Tre drinker. Åtte hundre år med Bergen-historier som aldri kom med i guidebøkene.',
    meta: [
      ['4 stopp',     'inkl. middag'],
      ['Starter',     'Hollendergaten'],
      ['Tema',        'Vin · Sider · Mat'],
      ['GPS + Audio', 'guide']
    ],
    completion: "Du har gått Dyveke's Evening. 4 stopp. Fra Hollendergaten til Pergola. Nederlandske kjøpmenn, et kongelig hjerte og syv hundre år med sider.",
    stops: [
      {
        name:      'Hollendergaten',
        address:   'Hollendergaten, Bergen sentrum',
        tag:       'Stopp 1 av 4 · Start her',
        drink:     '🚶 Startpunkt · Ingen drink ennå · Gå sakte',
        audioMin:  'ca. 4 min',
        nextLabel: 'Neste: Dyveke →',
        mapNext:   'Dyveke · 5 min',
        mapLabel:  'Neste stopp',
        body: `
<p>Se deg rundt. Gaten heter Hollendergaten — nederlandernes gate. Det er ikke tilfeldig. I hundre år, fra midten av 1500-tallet, var dette en av de mest internasjonale gatene i Norge.</p>
<div class="pullquote"><p>"Da hanseatenes jerngrep om Bergen begynte å løsne, strømmet nederlandske kjøpmenn inn. De tok med seg vin fra Rhinen, silke fra Frankrike — og historier ingen har hørt siden."</p></div>
<p>Nederlanderne — «hollenderne» som nordmennene kalte dem — var ikke velkomne av alle. Hansaforbundet i Bryggen hadde hatt monopol på utenlandsk handel i over to hundre år. Men fra 1550-tallet begynte det å slå sprekker, og de nederlandske kjøpmennene fylte gapet raskt.</p>
<div class="history-box"><p class="hb-label">📜 Historisk bakgrunn</p><p class="hb-text">Bergen var på 1500-tallet Nordens mest internasjonale by. Her bodde tyskere, nederlandere, skotter, engelskmenn og dansker side om side i egne kvartal. Hollendergaten er det eneste stedet i Bergen som fremdeles bærer et nasjonalitetsnavn — et levende minne om den multietniske handelsbyen.</p></div>
<p>Men det viktigste sporet nederlanderne etterlot seg her var ikke tøy eller krydder. Det var en ung jente ved navn Sigbrit — datter av en nederlandsk kjøpmannsfamilie — som holdt en liten butikk i dette området. Hennes datter skulle bli den mest omtalte kvinnen i 1500-tallets Norden.</p>
<p>Du møter henne om tolv minutter.</p>
<p>Men før du går: legg merke til gatebredden. Den er nøyaktig den samme som på 1500-tallet. Husene er nye. Gaten er gammel. Du tråkker på den samme steinen som nederlandske kjøpmenn tråkket på for fem hundre år siden.</p>`
      },
      {
        name:      'Dyveke',
        address:   'Dyveke Wine Bar, Bergen sentrum',
        tag:       'Stopp 2 av 4 · 5 min gange',
        drink:     '🍷 Din drink her: Spør etter noe fra Rhinen — det er historisk riktig',
        audioMin:  'ca. 6 min',
        nextLabel: 'Neste: Siderbar →',
        mapNext:   'Siderbar · 6 min',
        mapLabel:  'Neste stopp',
        body: `
<p>Baren er oppkalt etter henne. De fleste som bestiller vin her vet ikke hvem hun var. Du gjør det.</p>
<p>Hennes navn var Dyveke Sigritsdatter. «Dyveke» betyr «lille due» på nederlandsk. Hun ble født rundt 1490 — enten i Bergen eller Amsterdam, historikerne er ikke helt enige. Det de er enige om er dette: hun var vakker, hun var klok, og hun omgjorde en kjedelig dansk prins til en forelsket narr.</p>
<div class="pullquote"><p>"Da den unge kongen Christian II red gjennom Bergen i 1507 og fikk øye på Dyveke, stoppet han opp. Han kom aldri ordentlig videre."</p></div>
<div class="history-box"><p class="hb-label">👑 Dyveke og Kong Christian II</p><p class="hb-text">Christian II ble senere en av Skandinavias mest kontroversielle konger — kjent for Stockholms blodbad i 1520 der han henrettet 80–90 svenske adelsmenn. Men før han ble en dronning, var han forelsket i en nederlandsk-norsk pike fra Bergen. Han tok henne med til Danmark, lot henne bo i nærheten av slottet, og nektet å gifte seg med henne til tross for press fra kirken og adelen i årevis.</p></div>
<p>Dyvekes mor, Sigbrit Villoms, var alt annet enn en passiv mor. Hun fulgte datteren til København og ble en av de mest innflytelsesrike rådgiverne i hele riket. Nederlandsk og norsk handelskunnskap i én person — og kongen lyttet til henne mer enn til sine egne ministre.</p>
<p>I 1517 var Dyveke omtrent 27 år gammel. En dag spiste hun kirsebær — en gave, sies det, fra en adelsmann ved navn Torben Oxe som var kjent for å mislike henne. Neste dag var hun syk. Uken etter var hun død.</p>
<p>Forgiftning, mente kongen. Drapet, mente hoffet. Uheldig fordøyelse, mente kirken. Torben Oxe ble henrettet — om han var skyldig er aldri bevist. Christian II gråt offentlig. Han betalte for en vakker grav. Og han ble, ifølge alle samtidige kilder, aldri den samme igjen.</p>
<div class="drink-tip"><div class="dt-icon">🍷</div><div><p class="dt-label">Drink-tips til dette stoppet</p><p class="dt-text"><strong>Spør etter noe fra Rhinen eller Mosel.</strong> På 1500-tallet var Rhine-vin det prestisjefulle valget i Bergen — den kom med nederlandske handelsskip. En tørr Riesling fra Mosel eller en Spätburgunder fra Rhinen er det nærmeste du kommer Dyvekes verden i et glass.</p></div></div>
<p>Nå vet du hvem baren er oppkalt etter. Den piken i profilen over bardisken — det er henne. Lille due fra Bergen. Kongens store kjærlighet. Et mysterium som aldri ble løst.</p>`
      },
      {
        name:      'Siderbar',
        address:   'Siderbar Bergen, sentrum',
        tag:       'Stopp 3 av 4 · 6 min gange',
        drink:     '🍎 Din drink her: En tørr norsk sider — Hardanger hvis de har det',
        audioMin:  'ca. 5 min',
        nextLabel: 'Siste stopp: Middag →',
        mapNext:   'Pergola · 4 min',
        mapLabel:  'Neste stopp',
        body: `
<p>Før vinen kom til Bergen per skip. Før de nederlandske kjøpmennene rullet sine Rhinfat inn på bryggen. Lenge før det — var det sider.</p>
<div class="pullquote"><p>"Munkene på Munkeliv kloster, som lå noen hundre meter fra der du står nå, dyrket epler og presset sin egen sider. Klosteret brant i 1455. Tradisjonen overlevde."</p></div>
<div class="history-box"><p class="hb-label">🍎 Norsk sider — 700 år med tradisjon</p><p class="hb-text">Munkeliv kloster (grunnlagt ca. 1110) var ett av Bergens to store benediktinerkloster. Munkene var selvforsynte — de dyrket urter, grønnsaker og frukt. Eplehager er dokumentert. Sider var hverdagsdrikken, brukt både til mat og som medisin. Da reformasjonen i 1537 nedla klostrene, fortsatte bøndene i Hardanger tradisjonen som ikke er brutt den dag i dag.</p></div>
<p>Hardanger — dalen bak fjellene til øst for Bergen — er Norges eplebygd. Ikke fordi klimaet er særlig fordelaktig, men fordi folk her aldri sluttet å dyrke. I dag produserer Hardanger omtrent 40 % av all norsk frukt. Produsenter som <a href="https://www.storenaasiderkompani.com" target="_blank" style="color:var(--amber);text-decoration:none;border-bottom:1px solid rgba(176,120,48,.3);">Store Naa Siderkompani</a> holder tradisjoner i live som er syv hundre år gamle.</p>
<p>Sider var dessuten demokratisk. Vin var for kjøpmenn og konger. Øl var for hverdagen. Men sider — fersk, fruktig, litt sur — var det bøndene, tjenestepikene og de reisende drakk. Det var Bergens eget alternativ til det som kom utenfra.</p>
<div class="drink-tip"><div class="dt-icon">🍎</div><div><p class="dt-label">Drink-tips til dette stoppet</p><p class="dt-text"><strong>Spør etter «Brudeferd» fra <a href="https://www.storenaasiderkompani.com" target="_blank" style="color:var(--amber);text-decoration:none;">Store Naa Siderkompani</a>.</strong> En tørr, elegant sider fra Hardanger — nesten vinaktig, med fin syre og lang ettersmak. Akkurat slik munkene på Munkeliv ville ha likt det. Ser du den på menyen, er det det rette valget for dette stoppet.</p></div></div>
<p>Bergen hadde sider lenge før den hadde vin. Neste gang noen forteller deg at norsk drikkekultur er ny — minn dem på munkene fra Munkeliv og de syv hundre år de har glemte.</p>`
      },
      {
        name:      'Pergola',
        address:   'Pergola Mat og Vinbar, Bergen sentrum',
        tag:       'Stopp 4 av 4 · Avslutning',
        drink:     '🍽️ Din drink her: Velg det du har lyst på — du har fortjent det',
        audioMin:  'ca. 4 min',
        nextLabel: null,
        mapNext:   'Ruten er fullført 🎉',
        mapLabel:  'Status',
        body: `
<p>Du er fremme. Sett deg ned. Pust ut.</p>
<p>«Pergola» kommer fra det latinske ordet for et fremskytende tak — et sted med skygge, le for vinden, og det langsomme kveldsmåltidet. Romerne hadde dem. Middelhavskulturen bygde alt rundt dem. Bergen har alltid hatt sin egen versjon — ikke i stein og marmor, men i varme rom og vinduer mot bryggene.</p>
<div class="pullquote"><p>"Det å spise godt, drikke godt og fortelle historier er Bergens eldste tradisjon. Det var det de nederlandske kjøpmennene kom hit for. Det er det du er her for."</p></div>
<div class="history-box"><p class="hb-label">🍽️ Mat som handelsvare</p><p class="hb-text">Bergen var i middelalderen kjent for tørrfisk — klippfisk eksportert til hele Europa. Men de velstående kjøpmennene spiste noe helt annet: importerte krydder, Rhinvin, nederlandske oster, franske sauser. Det som i dag er «norsk mat» på restaurantmenyer var i 1500-tallets Bergen eksklusiv luksusvare, kjøpt og solgt på de samme kai-sidene utenfor dette vinduet.</p></div>
<p>I over fem hundre år har folk kommet til Bergen for å handle, spise og drikke. Hanseatene kom fra Lübeck. Nederlanderne kom fra Amsterdam. Skottene kom fra Edinburgh. De satt i gjestgiveri langs bryggene, drakk vin de hadde med seg fra hjemlandet, og snakket i timevis om priser, ruter og storpolitikk.</p>
<p>Det er ikke så annerledes i kveld.</p>
<p>Du sitter i en by som har feiret det gode bordet i åtte hundre år. Du har gått gjennom den nederlandske gaten. Du har drukket Dyvekes vin. Du har smakt munkenes sider. Nå spiser du.</p>
<p style="font-style:italic;color:var(--muted);font-family:'Libre Baskerville',serif;">God appetitt. Bergen er glad for at du kom.</p>`
      }
    ]
  },

  // ── OSLO: NORA'S QUARTER ────────────────────
  'noras-quarter': {
    title:    "Nora's Quarter",
    kicker:   'Oslo · Kveld · 2–3 timer · Youngstorget til Grünerløkka',
    subtitle: 'En rute om menneskene som bygde Oslo — fabrikkjentene langs Akerselva, dikteren som fortalte verden hva de ikke fikk lov til, og nabolaget de etterlot seg.',
    meta: [
      ['3 stopp',     'inkl. middag'],
      ['Starter',     'Youngstorget'],
      ['Tema',        'Øl · Vin · Mat'],
      ['GPS + Audio', 'guide']
    ],
    completion: "Du har gått Nora's Quarter. 3 stopp. Fra Youngstorget til Grünerløkka. Arbeiderbevegelsen, Ibsens kvinner og nabolaget de bygde med hendene.",
    stops: [
      {
        name:      'Internasjonalen',
        address:   'Møllergata 10, Oslo',
        tag:       'Stopp 1 av 3 · Start her',
        drink:     '🍺 Din drink her: En Ringnes på fat — det er historisk riktig',
        audioMin:  'ca. 5 min',
        nextLabel: 'Neste: Blå ved Akerselva →',
        mapNext:   'Blå · 12 min nordover langs elven',
        mapLabel:  'Neste stopp',
        body: `
<p>Torget utenfor heter Youngstorget. Ikke etter noe ungt og lovende — men etter en kjøpmann ved navn Jørgen Young som eide tomtene her på 1800-tallet. Et mer upretensiøst navn på et mer presist sted er vanskelig å tenke seg.</p>
<p>For det som skjedde her var ikke kjøpmannenes verk. Det var arbeidernes.</p>
<div class="pullquote"><p>"Hver 1. mai, fra 1890-tallet og fremover, strømmet tusenvis av Oslo-arbeidere inn på dette torget. De sang Internasjonalen. De krevde åtte timers arbeidsdag. Mange av dem hadde nettopp gått tolvtimers skift."</p></div>
<div class="history-box"><p class="hb-label">✊ Folkets Hus og arbeiderbevegelsen</p><p class="hb-text">Bygningen du sitter i — Folkets Hus — ble reist av fagbevegelsen selv, stein for stein, krone for krone, innsamlet blant Oslo-arbeidere. LO (Landsorganisasjonen) ble stiftet i 1899. Det Norske Arbeiderparti hadde sitt hovedkvarter her i tiår. Baren du sitter i er ikke oppkalt etter et slagord. Den er oppkalt etter sangen de sang på dette torget mens politiet så på: «L'Internationale» — skrevet i Paris i 1871, oversatt til norsk av arbeidere som aldri hadde vært i Frankrike.</p></div>
<p>Norge i dag — seks ukers ferie, statsfinansiert helsevesen, verdens høyeste fagforeningsandel — er ikke en tilfeldighet. Det er resultatet av hva som skjedde på dette torget. Av streiker som ble slått ned med politiet. Av kvinner som nektet å gå tilbake til fabrikkene uten bedre lønn. Av menn som ble sparket for å ha organisert kollegene sine.</p>
<p>De fleste turistguidene tar deg til Slottet. Akershus. Vigelandsparken. Men dette torget — dette upretentiøse, litt slitte torget — er der det faktisk ble avgjort hva slags land Norge skulle bli.</p>
<div class="drink-tip"><div class="dt-icon">🍺</div><div><p class="dt-label">Drink-tips til dette stoppet</p><p class="dt-text"><strong>En Ringnes på fat.</strong> Ringnes ble grunnlagt i 1877 — midt i arbeiderbevegelsens formative år. Det er Oslos eget bryggeri, og det er det arbeiderne drakk når de endelig fikk fri. Ingen pretensjon. Bare øl.</p></div></div>
<p>Gaten utenfor heter Møllergata. Og om ti minutters gange nordover langs den vil du forstå hvorfor.</p>`
      },
      {
        name:      'Blå',
        address:   'Brenneriveien 9C, Oslo',
        tag:       'Stopp 2 av 3 · 12 min gange nordover',
        drink:     '🍷 Din drink her: En glass norsk naturvin eller lokal craft — hva enn de anbefaler',
        audioMin:  'ca. 6 min',
        nextLabel: 'Siste stopp: Middag →',
        mapNext:   'Villa Paradiso · 5 min',
        mapLabel:  'Neste stopp',
        body: `
<p>Bygningen du er i nå var en fabrikk. Mursteinen er original. Taket er høyt fordi maskineriet krevde det. Vinduene er store fordi de trengte dagslys til å arbeide i — det var lenge ingen elektrisk belysning.</p>
<p>Elven utenfor heter Akerselva. Den er 8 kilometer lang og faller fra Maridalsvannet ned til Bjørvika. I 1880 lå det 43 registrerte fabrikker langs disse 8 kilometerne. I dag finnes ingen av dem som fabrikker. Men mange av dem finnes fremdeles som vegger og tak og stemning.</p>
<div class="pullquote"><p>"Flertallet av dem som arbeidet her var kvinner. Mange var tenåringer. Noen var yngre. De sto ved vevstoler i tolv timer om dagen, seks dager i uken, i luften som smakte av tekstilfibre."</p></div>
<div class="history-box"><p class="hb-label">🏭 Akerselva — elven som bygde Oslo</p><p class="hb-text">Akerselva drev sagbruk fra middelalderen og tekstilfabrikker fra 1840-tallet. Nydalens Compagnie, grunnlagt 1845, var Skandinavias største tekstilfabrikk i sin tid og sysselsatte over 1.200 arbeidere — de fleste kvinner. Arbeidsforholdene var brutale: lungesykdom var utbredt, barnearbeid var vanlig frem til 1892, og det var ingen sikkerhetsnett om du ble skadet. Elven ble så forurenset av tekstilfarger og kjemikalier at fisken forsvant. Ikke før 1990-tallet ble den ryddet opp.</p></div>
<p>I 1879 — mens disse fabrikkjentene sto ved sine maskiner — satt en norsk forfatter i Roma og skrev et skuespill om en annen slags fanget kvinne.</p>
<p>Henrik Ibsen hadde forlatt Norge i 1864, bitter og ubetalt. Han kom aldri ordentlig hjem igjen i sinnet. Men i Roma og Dresden og München observerte han noe han gjenkjente fra Christiania: kvinner som ikke eide seg selv. Ikke fattige fabrikarbeiderinner, men velstående borgerskapskvinner — gift bort, avskåret fra å signere kontrakter, uten lov til å ta egne avgjørelser.</p>
<p>Han kalte henne Nora. Og det siste hun gjør i «Et Dukkehjem» er å gå ut gjennom en dør og smelle den igjen.</p>
<div class="history-box"><p class="hb-label">🎭 Ibsen og skandalen i 1880</p><p class="hb-text">Da «Et Dukkehjem» ble uroppført i 1879, krevde en tysk skuespillerinne at Ibsen skrev en alternativ slutt — hun nektet å forlate barna sine på scenen. Ibsen kalte det «en barbarisk vold mot stykket», men skrev slutten likevel. Den originale — der Nora smeller igjen døren — ble stående som den eneste sanne. Stykket ble oversatt til 14 språk på fire år. I Japan, Egypt, Kina og Brasil ble det spilt som politisk teater. Og alt startet fordi Ibsen kjente igjen fangenskap fra de samme Christiania-gatene du gikk gjennom i aften.</p></div>
<p>Fabrikkjentene langs Akerselva og Nora i dukkehjem — to helt ulike fangenskap. Men ikke like ulike som man skulle tro.</p>
<div class="drink-tip"><div class="dt-icon">🍷</div><div><p class="dt-label">Drink-tips til dette stoppet</p><p class="dt-text"><strong>Spør hva de anbefaler.</strong> Blå er kjent for å ha folk som kan drikke. La dem velge. Det er det Ibsen ville ha gjort — han var god på å la andre ta initiativet, og så observere.</p></div></div>`
      },
      {
        name:      'Villa Paradiso',
        address:   'Olaf Ryes plass 8, Oslo',
        tag:       'Stopp 3 av 3 · 5 min gange · Avslutning',
        drink:     '🍽️ Din drink her: Velg en naturvin til maten — du er i paradis',
        audioMin:  'ca. 4 min',
        nextLabel: null,
        mapNext:   'Ruten er fullført 🎉',
        mapLabel:  'Status',
        body: `
<p>Plassen utenfor vinduet er Olaf Ryes plass. Den er oppkalt etter en general som ble drept i Danmark i 1849 — i en krig mellom danskene og hertugdømmene i sør. Han het Olaf Rye, var dansk-norsk offiser, og ble en helt fordi han holdt stillingen lenge nok til at andre kunne rømme.</p>
<p>Han satte aldri sin fot i Grünerløkka. Men plassen bærer hans navn, fordi noen i 1850 bestemte at generaler burde hedres med gate- og plassnamn, og det var ikke mange plasser igjen uten navn.</p>
<div class="pullquote"><p>"I 1890-årene var dette en av de tettest befolkede plassene i hele Nord-Europa. Fem familier i leiligheter beregnet for én. Tuberkulose. Kald-vannskraner i bakgården. Og ingenting som lignet paradis."</p></div>
<div class="history-box"><p class="hb-label">🌿 Fra slum til Grünerløkka</p><p class="hb-text">Grünerløkka var på 1980-tallet et av Oslos mest forsømte nabolag. Billig husleie, forfalne gårder, høy arbeidsledighet etter at fabrikkene langs Akerselva hadde stengt. Kunstnere og studenter flyttet inn fordi det var det eneste de hadde råd til. Kafeer åpnet. Gallerier. Bruktbutikker. Så kom de som hadde råd til å betale mer. I dag er en leilighet på Grünerløkka blant de dyreste kvadratmeterne i Oslo. De samme menneskene som reddet nabolaget hadde ikke lenger råd til å bo der.</p></div>
<p>«Villa Paradiso» — Paradisvillaen. Det er et dristig navn for en pizzarestaurant i et nabolag der noen av Oslos fattigste familier bodde for hundre år siden. Men det er kanskje poenget: paradis er ikke et sted du er. Det er et sted du kaller det du har, etter alt det var.</p>
<p>Fabrikkjentene som bodde i gatene rundt denne plassen drømte nok ikke om San Marzano-tomater og fior di latte. De drømte om varm mat og litt tid til seg selv.</p>
<p>Det er det du sitter med nå.</p>
<div class="drink-tip"><div class="dt-icon">🍕</div><div><p class="dt-label">Mat- og drink-tips til dette stoppet</p><p class="dt-text"><strong>Margherita laget med San Marzano-tomater og fior di latte.</strong> Be om et glass naturvin — det er det som passer til maten og til kvelden. Spis sakte. Du er ikke i kø. Du er ikke på vei til et skift. Det er noe ikke mange generasjoner i dette nabolaget har kunnet si.</p></div></div>
<p style="font-style:italic;color:var(--muted);font-family:'Libre Baskerville',serif;">God appetitt. Nora forlot huset. Du fant ditt.</p>`
      }
    ]
  },

  // ── OSLO: THE OTHER OSLO ────────────────────
  'other-oslo': {
    title:    'The Other Oslo',
    kicker:   'Oslo · Kveld · 2–3 timer · Grønland',
    subtitle: 'Det Oslo turistguidene ikke tar deg til. Et nabolag som har vært norsk, irsk, pakistansk og alt imellom — og en pub som ikke har endret seg på 130 år.',
    meta: [
      ['3 stopp',       'inkl. middag'],
      ['Starter',       'Grønland torg'],
      ['Tema',          'Skjulte steder'],
      ['GPS + Audio',   'guide']
    ],
    completion: 'Du har gått The Other Oslo. 3 stopp. Grønland — lag på lag med mennesker, historier og mat som aldri ble turistattraksjon.',
    stops: [
      {
        name:      'Dattera til Hagen',
        address:   'Grønland 10, Oslo · Grønland torg',
        tag:       'Stopp 1 av 3 · Start her · Grønland torg',
        drink:     '🍺 Din drink her: Hva enn som er på tap — dette er ikke et sted for posisjoner',
        audioMin:  'ca. 5 min',
        nextLabel: 'Neste: Olympen →',
        mapNext:   'Olympen · 4 min å gå',
        mapLabel:  'Neste stopp',
        body: `
<p>Du er i Grønland. Ikke det grønne landet med isfjell — dette grønland var en gang bokstavelig talt grønt. Marker og enger sør for den gamle bygrensen. På 1700-tallet var dette utenfor Oslo, og folk som ikke hadde råd til å bo i byen bodde her.</p>
<p>Navnet betyr ingenting mystisk: «grønn land» — åpent landbruksareal. Det er alt det var. Men det avsløret noe viktig: dette var alltid stedet der de som ikke passet inn andre steder, endte opp.</p>
<div class="pullquote"><p>"Grønland har vært norsk arbeiderklasse, irsk innvandrerkvarter, østeuropeisk eksil og pakistansk hjemsted — ofte på samme tiår, noen ganger i samme gård."</p></div>
<div class="history-box"><p class="hb-label">🌍 Grønland — Oslos eldste innvandrerkvarter</p><p class="hb-text">På 1840- og 50-tallet flyktet irske familier til Oslo (da Christiania) fra hungersnøden hjemme. Mange slo seg ned i Grønland, som var billig og uten for mye oppsyn. Senere kom svensker, dansker og østeuropeere. Fra 1970-tallet begynte pakistanske familier å slå seg ned her — og i dag er Grønland et av Oslos mest levende flerkulturelle nabolag. Grønland torg, der du sitter nå, har vært markedsplass, rettferdighetsplass og møtested for alle disse bølgene — lag på lag, uten at noen av lagene er borte.</p></div>
<p>«Dattera til Hagen» — datterens til hagen. Det er et navn som ikke forklarer seg selv, og det er poenget. Dette er et sted for folk som allerede vet. Ikke et skilt i vinduet som roper på forbipasserende. Ikke en turistattraksjon. Et stamsted for den typen Oslo som ikke legger ut bilder på Instagram.</p>
<p>Baren har huset musikere, skribenter og nattarbeidere fra Grønland i årevis. Konsertscenen bak er liten nok til at du kan se svettperlene på pannebandet til den som spiller. Det er slik musikk skal høres.</p>
<div class="drink-tip"><div class="dt-icon">🍺</div><div><p class="dt-label">Drink-tips til dette stoppet</p><p class="dt-text"><strong>Hva enn som er på tap i kveld.</strong> Grønland er ikke et sted for pretensjon. Å spørre etter den «riktige» ølen her er å misse poenget. Ta hva som helst. Snakk med personen ved siden av deg i stedet.</p></div></div>`
      },
      {
        name:      'Olympen',
        address:   'Grønland 15, Oslo',
        tag:       'Stopp 2 av 3 · 4 min gange',
        drink:     '🥃 Din drink her: En akevitt — det eneste riktige valget i dette rommet',
        audioMin:  'ca. 6 min',
        nextLabel: 'Siste stopp: Middag →',
        mapNext:   'Middag i Grønland · 2 min',
        mapLabel:  'Neste stopp',
        body: `
<p>Stopp opp i døren. Se deg rundt før du setter deg.</p>
<p>Taket er det originale. Veggene er de originale. Bardisken er skiftet ut noen ganger, men stilen er den samme. Maleriene som henger der — store, romantiske norske landskapsmotiver med fjorder og fjell og dramatiske skyer — de henger der de alltid har hengt.</p>
<p>Olympen åpnet i 1892. Det er ikke en rekonstruksjon. Det er ikke en «inspirert av»-versjon. Det er det opprinnelige stedet, og det har servert Oslo siden Grønland var en av byens fattigste adresser.</p>
<div class="pullquote"><p>"I 1892 var Olympen et arbeidersted. Menn kom hit etter skift. De drakk akevitt og øl. De snakket ikke om kunst. Maleriene på veggen viste et Norge ingen av dem hadde råd til å besøke."</p></div>
<div class="history-box"><p class="hb-label">🏛️ Olympen — 130 år i samme rom</p><p class="hb-text">Olympen er en av Oslos eldste restauranter og puber i sammenhengende drift. Den har overlevd to verdenskriger, en okkupasjon, Grønlands nedgang og Grønlands oppgang. Under andre verdenskrig var det norske gjester og tyske soldater i de samme rommene — noe ingen snakket høyt om. Etter krigen kom sosialister, kunstnere og folk som ikke passet inn i de mer «respektable» bydelene. I dag er det turister, lokale og alle kategorier imellom. Rommet behandler alle likt.</p></div>
<p>Det er noe uredelig riktig med et sted som ikke prøver å fortelle deg hva det er. Olympen har ikke konsept. Det har ikke «vibe» i den markedsführte forstand. Det er bare et rom som har sett mer enn de fleste rom noensinne vil se — og som fremdeles mener det er tilstrekkelig å sette frem et glass og la folk sitte.</p>
<p>Maleriene på veggen viser fjorder og fjell og dramatiske norske himler. De ble malt for å gi arbeidere i 1892 en følelse av et land de ikke hadde tid til å oppleve. Nå henger de som en slags arkeologi — malt for én Oslo, seende ned på et helt annet.</p>
<div class="drink-tip"><div class="dt-icon">🥃</div><div><p class="dt-label">Drink-tips til dette stoppet</p><p class="dt-text"><strong>En Linie Aquavit.</strong> Linie er destillert i Lyngseidet, sendt over ekvator og tilbake i eikefat om bord på skip — tradisjonen startet i 1805. Det er det eneste som har reist mer enn rommet du sitter i. Drikk det sakte. Det fortjener det.</p></div></div>`
      },
      {
        name:      'Middag i Grønland',
        address:   'Grønland — spis der lukten tar deg',
        tag:       'Stopp 3 av 3 · 2 min gange · Avslutning',
        drink:     '🍽️ Din drink her: Te, lassi, mineralvann — du har drukket nok. Nå er det mat som gjelder.',
        audioMin:  'ca. 3 min',
        nextLabel: null,
        mapNext:   'Ruten er fullført 🎉',
        mapLabel:  'Status',
        body: `
<p>Grønland er en av de få stedene i Oslo der du ikke trenger en restaurantguide. Du trenger bare en nese.</p>
<p>Gå langs Grønland-gaten. Det du lukter — kardemomme, koriander, stekt løk, nybakt brød — det er det du skal spise. Det er slik mat alltid ble valgt, og det er fortsatt den beste metoden.</p>
<div class="pullquote"><p>"De pakistanske familiene som kom til Oslo på 1970-tallet brakte med seg noe ingen på den tiden visste at de trengte: maten. I dag er den uløselig knyttet til hva Oslo smaker."</p></div>
<div class="history-box"><p class="hb-label">🍛 Grønlands mat — Oslos best bevarte hemmelighet</p><p class="hb-text">Mens resten av Oslo betaler 400 kroner for en deigbar med rødbeter, serverer restaurantene i Grønland ekte hjemmelaget mat til priser som ikke har fulgt med byens inflasjon. Det er ikke fordi maten er dårligere — det er fordi eierne ikke har spekulert i beliggenhet. De er her fordi de alltid har vært her. Spør etter hva som er fersk i dag. Det er alltid noe.</p></div>
<p>Dette er det Oslo turistguidene ikke tar deg til. Ikke fordi det er skjult — det er rett her, midt i byen, femten minutters gange fra Slottet. Men fordi det ikke passer inn i fortellingen om hva Oslo «er».</p>
<p>Oslo er ikke bare Aker Brygge og Vigelandsparken og Munchmuseet. Det er også dette: et nabolag som har rommet alle som trengte plass, og matet alle som trengte mat, uten å gjøre et poeng av det.</p>
<p style="font-style:italic;color:var(--muted);font-family:'Libre Baskerville',serif;">Spis godt. Du fant det andre Oslo. Det fleste gjør aldri det.</p>`
      }
    ]
  },


  // ── ANTWERPEN: THE MERCHANT'S EVENING ───────
  'antwerp': {
    title:    "The Merchant's Evening",
    kicker:   'Antwerpen · Kveld · 3–4 timer · Grote Markt til Eilandje',
    subtitle: 'Om en by som en gang var rikere enn Roma. Om geneveren som ble til gin. Og om en elv som ble stengt i to hundre år — og hva som skjedde da den ble åpnet igjen.',
    meta: [
      ['4 stopp',     'inkl. middag'],
      ['Starter',     'Grote Markt'],
      ['Tema',        'Øl · Jenever · Mat'],
      ['GPS + Audio', 'guide']
    ],
    completion: "Du har gått The Merchant's Evening. 4 stopp. Fra Grote Markt til Eilandje. En by som falt fra verdens topp og fant seg selv på nytt — og geneveren som ble til gin.",
    stops: [
      {
        name:      'Café Den Engel',
        address:   'Grote Markt 3, Antwerpen',
        tag:       'Stopp 1 av 4 · Start her · Grote Markt',
        drink:     '🍺 Din drink her: En Duvel eller Westmalle Tripel — velg noe belgisk og stolt',
        audioMin:  'ca. 5 min',
        nextLabel: 'Neste: De Vagant →',
        mapNext:   'De Vagant · 8 min å gå',
        mapLabel:  'Neste stopp',
        body: `
<p>Se deg rundt. Gildebyggningene rundt plassen — med forgylte fasader og overdådige skulpturer — ble oppført av byens mektigste kjøpmenn. De ville at alle som ankom Antwerpen skulle forstå én ting med en gang: dette er en rik by. Faktisk var det mer enn det.</p>
<div class="pullquote"><p>"I 1540 var Antwerpen den rikeste byen i Europa. Kanskje i verden. Tre fjerdedeler av all handel mellom England og kontinentet gikk gjennom denne plassen."</p></div>
<div class="history-box"><p class="hb-label">💰 Verdens første børs</p><p class="hb-text">I 1531 ble Antwerpen hjemsted for verdens første formelle børs — Beurzen. Kjøpmenn fra Portugal, England, Spania og det tyske riket møttes her for å handle ikke bare varer, men fremtidige leveranser, vekslerbrev og kreditt. Ideen om å handle i papir i stedet for korn og klede var revolusjonerende — og ble selve grunnlaget for moderne kapitalisme. London, Amsterdam og New York kopierte modellen. Originalen var her.</p></div>
<p>En samtid beskrev det slik: «I Antwerpen tales alle språk, alle nasjoners skikker er å se.» Det var ikke overdrivelse. I 1550-tallets Antwerpen bodde det portugisere, jøder fra Spania, engelskmenn, tyskere og flamlendere side om side. Byens havn tok imot krydder fra den nye verden, silke fra Orienten og ull fra England. Alt ble omsatt. Alt hadde en pris.</p>
<p>Men fontenen foran deg forteller en annen historie. Legenden om Brabo: en romersk soldat som drepte kjempen Druon Antigoon, som krevde toll av alle som passerte elven, og kastet hånden hans i Scheldt. «Hand werpen» — å kaste en hånd. Derav: Antwerpen.</p>
<p>Det er selvfølgelig bare en legende. Men det er byens legende om seg selv: vi betalte prisen, vi kastet hånden til undertrykkeren i elven, og vi ble frie. Sannheten er mer brutal og mer fascinerende. Det kommer du til å forstå.</p>
<div class="drink-tip"><div class="dt-icon">🍺</div><div><p class="dt-label">Drink-tips til dette stoppet</p><p class="dt-text"><strong>En Duvel eller Westmalle Tripel.</strong> Duvel er belgisk for djevel — en blond sterk øl med mer bak fasaden enn den ser ut til å ha. Akkurat som denne byen. Westmalle Tripel er et trappistøl fra abbediet i Malle, 25 km herfra, brygget av munker siden 1836. Belgisk ølkultur er ikke en trend. Det er en sivilisasjon.</p></div></div>`
      },
      {
        name:      'De Vagant',
        address:   'Reyndersstraat 25, Antwerpen',
        tag:       'Stopp 2 av 4 · 8 min gange',
        drink:     '🥃 Din drink her: En oude jenever — ta den ren, i romtemperatur',
        audioMin:  'ca. 5 min',
        nextLabel: 'Neste: Café Beveren →',
        mapNext:   'Café Beveren · 5 min å gå',
        mapLabel:  'Neste stopp',
        body: `
<p>Du er nå i et av Europas beste jenever-barer. De Vagant har over 200 varianter. Ikke begynn å lese menyen ennå — det tar resten av kvelden. Hør historien først.</p>
<p>Jenever er ikke gin. Gin er jenever som ble forenklet, anglisert og rebrandlet. Originalen ble til her i de lave land på 1500-tallet — destillert korn med einebær, brukt som medisin mot nyresten og reumatisme.</p>
<div class="pullquote"><p>"Under trettiårskrigen, i 1618–1648, gav engelske soldater som kjempet side om side med nederlandske allierte noe de aldri hadde smakt. De kalte det «Dutch courage» — nederlandsk mot. De tok det med hjem."</p></div>
<div class="history-box"><p class="hb-label">🥃 Fra medisin til gin — jenevers reise</p><p class="hb-text">Jenever ble opprinnelig solgt på apotek som kur mot magesykdom, febersykdom og nyrestein — det ble kalt «genever» etter det nederlandske ordet for einebær. Da engelske soldater begynte å drikke det i felt, returnerte de hjem med en ny smak. Innen 1720-30 hadde London en ginkrise: 11 millioner gallons gin ble produsert per år til en befolkning på 600.000. William Hogarths berømte stikk «Gin Lane» fra 1751 er arven etter det. Og det startet med en medisinsk destillat fra de lave land.</p></div>
<p>Antwerpen var ikke bare et handelssentrum. Det var et spredningspunkt. Ideer, varer, drinker, sykdommer og oppdagelser gikk ut i verden herfra som ringer i vann. London fikk gin fra nederlandske soldater. New York het opprinnelig New Amsterdam. Wall Street er en direkte etterfølger av Antwerpens børs.</p>
<p>Og du sitter nå og drikker selve originalen. Ikke en hyllest. Ikke en rekonstruksjon. Oude jenever, lagret på eikefat, er nøyaktig det engelske soldatene drakk i skyttergravene i Flandern mens de ventet på at noe forferdelig skulle skje.</p>
<div class="drink-tip"><div class="dt-icon">🥃</div><div><p class="dt-label">Drink-tips til dette stoppet</p><p class="dt-text"><strong>Be om en oude jenever</strong> — den lagrede varianten. Ikke den unge, gjennomsiktige. Gammel jenever er mørk, myk og nesten whisky-aktig. Drikk den ren, i et lite glass, i romtemperatur. Tilsett ikke is. Ikke tonic. Bare drikken, slik den alltid har vært drukket her.</p></div></div>`
      },
      {
        name:      'Café Beveren',
        address:   'Vlasmarkt 2, Antwerpen',
        tag:       'Stopp 3 av 4 · 5 min gange',
        drink:     '🍺 Din drink her: En Bolleke De Koninck — Antwerpens eget bryggeri siden 1827',
        audioMin:  'ca. 6 min',
        nextLabel: 'Siste stopp: Middag →',
        mapNext:   'Het Pomphuis · 15 min å gå (eller taxi)',
        mapLabel:  'Neste stopp',
        body: `
<p>Stopp opp. Se innover. Taket er det originale Art Deco-taket. Lampene er originale. Og orgelet — det store mekaniske orgelet som henger der på veggen — er ekte. Det spiller fremdeles. Noen kvelder starter det bare av seg selv.</p>
<p>Café Beveren er fra tidlig 1900-tall og er et av Antwerpens mest autentiske brune kafeer. Men dens virkelige funksjon i kveld er å hjelpe deg forstå hva som skjedde med den rikeste byen i verden — etter at den falt.</p>
<div class="pullquote"><p>"I 1585 tok den spanske feltherren Alexander Farnese Antwerpen etter en 14 måneder lang beleiring. Det som skjedde de neste ti årene endret Europa for alltid."</p></div>
<div class="history-box"><p class="hb-label">⚓ Den lukkede elven — 210 år i isolasjon</p><p class="hb-text">Da Antwerpen falt til Spania i 1585, flyktet omtrent halvparten av byens befolkning nordover til det nye, protestantiske Nederland. Kjøpmenn, bankierer, kunstnere og håndverkere tok med seg kapitalen sin. Amsterdam ble den nye verdensfinanshovedstaden — ikke fordi Amsterdam var bedre, men fordi Antwerpen ble stengt. De nederlandske provinsene, som nå var i krig med Spania, stengte Scheldt-elven for skipstrafikk. Ingen skip inn. Ingen skip ut. I 210 år. Fra 1585 til 1795, da Napoleon endelig åpnet elven igjen.</p></div>
<p>Tenk på det: 210 år. Antwerpen, verdens handelshovedstad, fikk ikke lov til å bruke sin egen elv. Mens Amsterdam, London og Rotterdam blomstret, satt Antwerpen fast. Byens befolkning falt fra 100.000 til 40.000 på et tiår.</p>
<p>Men noe overlevde. Portugisiske og spanske jøder — drevet ut av Iberia av inkvisitorene — hadde allerede funnet veien til Antwerpen. De brakte med seg diamanthandelen. Og den ble igjen. Selv da alt annet forlot byen, satt diamanthandlerne og slepte og polerte og handlet. I dag passerer fremdeles omtrent 80 % av verdens uslipte diamanter gjennom Antwerpen. En direkte arv fra flyktningene som kom hit og aldri dro.</p>
<div class="drink-tip"><div class="dt-icon">🍺</div><div><p class="dt-label">Drink-tips til dette stoppet</p><p class="dt-text"><strong>En Bolleke De Koninck.</strong> «Bolleke» betyr «lite kuppel» på antwerpsk dialekt — en referanse til den runde, kuppelformede glasset ølen serveres i. De Koninck ble grunnlagt i 1827 og brygger fremdeles i Antwerpen sentrum. Å bestille en Bolleke her er ikke å velge en øl. Det er å si at du vet hvor du er.</p></div></div>`
      },
      {
        name:      'Het Pomphuis',
        address:   'Hanzestedenplaats 1, Eilandje, Antwerpen',
        tag:       'Stopp 4 av 4 · Avslutning · Eilandje',
        drink:     '🍽️ Din drink her: Hva du vil — du er fremme',
        audioMin:  'ca. 4 min',
        nextLabel: null,
        mapNext:   'Ruten er fullført 🎉',
        mapLabel:  'Status',
        body: `
<p>Du sitter inne i en pumpemaskin. Ikke metaforisk — bygningen rundt deg er en ekte industriell pumpemaskin fra 1920. Maskineriet er fremdeles der, omgitt av gjester og kvelds-belysning. Det heter «het pomphuis» — pumpehuset.</p>
<p>Og pumpehuset er der fordi Napoleon Bonaparte en dag i 1795 beordret at Scheldt-elven skulle åpnes igjen.</p>
<div class="pullquote"><p>"Napoleon besøkte Antwerpen i 1803 og erklærte: «Jeg har tenkt å gjøre Antwerpen til en pistol rettet mot hjertet av England.» Han mente havnen. Han mente elven. Han mente frihet til å seile ut og inn igjen."</p></div>
<div class="history-box"><p class="hb-label">⚓ Napoleons havn og Antwerpens gjenoppstandelse</p><p class="hb-text">Napoleon beordret bygging av to store dokker i Antwerpen — nøyaktig det komplekset du ser utenfor vinduet akkurat nå: Willemdok og Bonapartedok. De ble bygd mellom 1803 og 1811 av soldater og tvangsarbeidere. Det var ikke filantropi — Napoleon ville bruke Antwerpen som marinebasis mot britene. Men effekten var permanent: elven var åpen, havnen var ny, og Antwerpen begynte langsomt å puste igjen. I dag er Antwerpen Europas nest største havn målt i tonnasje. Bare Rotterdam er større.</p></div>
<p>Eilandje — «den lille øya» — er kvarteret rundt disse dokkene. Inntil for tjue år siden var det et forlatt industriområde. Entrepotdok-lagerbygningene sto tomme. Kaiene var rusten. Så begynte det som alltid skjer med slike steder: kunstnere kom. Deretter kafeer. Deretter restauranter. Deretter eiendomsutviklere. I dag er Eilandje et av Antwerpens fineste nabolag. Men gammelt gods er ikke borte — det er blitt til gulv og tak og stemning.</p>
<p>Du sitter i et rom som ble bygd for å flytte vann, og som nå fyller deg med mat og drikke. Det er ikke så langt fra hva denne byen alltid har gjort: ta det som strømmer gjennom den, og gjøre noe nyttig av det.</p>
<p style="font-style:italic;color:var(--muted);font-family:'Libre Baskerville',serif;">God appetitt. Antwerpen er glad for at du fant veien hit.</p>`
      }
    ]
  },

  // ── BERGEN: GRIEG OG STAVKIRKEN (KOLSTIEN, LANDÅS) ──
  'bergen-kolstien': {
    title:    'Grieg og stavkirken',
    kicker:   'Bergen · Dagstur · 1–2 timer · Fra Kolstien, Landås',
    subtitle: 'En times gange fra Kolstien på Landås, gjennom to av Bergens mest usannsynlige steder: en stavkirke som brant ned og ble reist på nytt — og et komponisthjem ved et stille vann.',
    meta: [
      ['3 stopp',       'ingen barer'],
      ['Starter',       'Kolstien, Landås'],
      ['Tema',          'Natur · Musikk · Historie'],
      ['GPS + Audio',   'guide']
    ],
    completion: 'Du har gått Grieg og stavkirken. Fra Kolstien på Landås, via Fantoft til Troldhaugen. En time som dekker 900 år med Bergen-historie.',
    stops: [
      {
        name:      'Fantoft stavkirke',
        address:   'Fantoftvegen 38, Bergen — ca. 20 min fra Kolstien',
        tag:       'Stopp 1 av 3 · 20 min gange fra Kolstien',
        drink:     null,
        audioMin:  'ca. 6 min',
        nextLabel: 'Neste stopp →',
        mapNext:   'Nordåsvannet · 15 min gange',
        mapLabel:  'Neste stopp',
        body: `
<p>Det du ser foran deg er ikke originalen. Men historien om hvorfor — og om hva som skjedde natten den brant — er kanskje viktigere enn om det hadde stått urørt siden middelalderen.</p>
<p>Fantoft stavkirke ble bygd rundt år 1150 i Fortun i Sognefjord. Den var én av tusenvis. I middelalderen hadde Norge mellom 1.300 og 2.000 stavkirker — en helt særegen byggetradisjon der veggene er laget av vertikale staver, ikke horisontale laftede stokker. De er teknisk dristige, vakre og til dels mystiske. Av alle disse kirkene finnes i dag bare 28 igjen.</p>
<div class="pullquote"><p>"I 1883 ville sognefolket i Fortun rive stavkirken og bygge noe større. Bergenskonsul Fredrik Gade hørte om det, reiste dit og kjøpte kirken. Han fraktet den, planke for planke, til sin tomt i Fantoft utenfor Bergen."</p></div>
<div class="history-box"><p class="hb-label">🔥 Natten kirken brant — 6. juni 1992</p><p class="hb-text">Klokken 02.00 natt til 6. juni 1992 brant Fantoft stavkirke ned på under en time. Brannen var påsatt. Noen måneder senere ble Varg Vikernes — kjent under artistnavnet Count Grishnackh fra black metal-bandet Burzum — pågrepet og til slutt dømt for drapet på gitaristen Euronymous og for en rekke andre kirkebranner i Norge. Fantoft var en av dem. Kirken var totalødelagt. Bare steintrappen og grunnmuren sto igjen. Fem år etter startet gjenoppbyggingen, basert på gamle tegninger og fotografier. I 1997 sto den der igjen.</p></div>
<p>Gå rundt kirken. Den er mørk av tjære — slik alle stavkirker opprinnelig var. Tjæren beskyttet mot råte og regn, og ga kirken den svarte, litt truende silhuetten som ble et ikon for norsk middelalder. De dragehodene som stikker ut fra taket er ikke bare dekorasjon. De er en direkte arvtager fra vikingtidens skipsbygging — det samme håndverket, de samme hendene, bare brukt til et gudshus i stedet for et langskip.</p>
<p>Stå litt. Se opp mot toppen. Tenk på at kirken reiste seg to ganger: én gang i Fortun i 1150, én gang i Bergen i 1997. Noen ting nekter å forsvinne.</p>`
      },
      {
        name:      'Nordåsvannet',
        address:   'Nordåsvannet, Hop — langs strandveien',
        tag:       'Stopp 2 av 3 · 15 min gange fra Fantoft',
        drink:     null,
        audioMin:  'ca. 4 min',
        nextLabel: 'Siste stopp: Troldhaugen →',
        mapNext:   'Troldhaugen · 10 min gange',
        mapLabel:  'Neste stopp',
        body: `
<p>Du er nå ved Nordåsvannet. Det ser ut som en innsjø. Det er faktisk en fjordarm — havet trenger seg inn her, og tidevann bestemmer fortsatt vannstanden. Om morgenen høyvann, om kvelden lavvann. Vannet er stille uansett. Det har alltid vært stille her.</p>
<p>Nabolaget rundt heter delvis «Paradis». Det er ikke et turistnavn. Det er det folk faktisk har kalt det siden 1800-tallet — trolig fordi det er uvanlig skjermet og grønt, med vann på alle kanter og fjell i bakgrunnen. Bergensere som hadde råd til å bo utenfor bykjernen kom hit. Det var det nærmeste man kom landlig ro uten å forlate Bergen.</p>
<div class="pullquote"><p>"Edvard Grieg fant Nordåsvannet i 1884. Han var 41 år gammel, hadde bodd det meste av livet i utlandet, og var lei av å leie rom. Han ville ha et eget sted. Vannet, skogen og stillheten hjalp ham bestemme seg."</p></div>
<div class="history-box"><p class="hb-label">🎵 Vannet som inspirerte musikken</p><p class="hb-text">Nordåsvannet og naturen rundt Troldhaugen er ikke bare bakgrunn for Griegs liv — det er direkte til stede i musikken. «Lyriske stykker», som han skrev i over 30 år, er fulle av norsk natur omsatt til toner: morgenstillhet, bølgenes bevegelse, skogens sus. Grieg sa selv at han ikke komponerte musikk om naturen — han omsatte naturen til musikk. Forskjellen er viktig. Og det var denne naturen han hadde rundt seg.</p></div>
<p>Finn et sted å stå ved vannet i ett minutt. Ikke for å se på noe spesielt — bare for å lytte. Det er stille på en annen måte enn ellers. Den typen stillhet der lydene finnes, men ikke forstyrrer.</p>
<p>Grieg gikk her. Hver sommer i over tjue år. Du har igjen ti minutters gange til huset der han bodde, komponerte og ble begravet. Vannet du ser nå er det samme vannet han så fra stuevinduet.</p>`
      },
      {
        name:      'Troldhaugen',
        address:   'Troldhaugveien 65, Bergen · Edvard Griegs hjem',
        tag:       'Stopp 3 av 3 · 10 min gange · Avslutning',
        drink:     null,
        audioMin:  'ca. 6 min',
        nextLabel: null,
        mapNext:   'Ruten er fullført 🎉',
        mapLabel:  'Status',
        body: `
<p>Troldhaugen — Trollhøyden. Grieg mente det var et noe merkelig navn, og han visste ikke hvem som hadde kalt stedet det. Men han likte det. Det passet til noe han alltid hadde hatt i musikken: det litt uforklarlige, det som ikke helt lar seg sette ord på.</p>
<p>Han bygde villaen i 1885 og bodde her hver sommer frem til sin død i 1907. Om vinteren reiste han på konsertturneer rundt i Europa — han var en internasjonal stjerne, spilte for keisere og konger — og om sommeren kom han tilbake hit, til stillheten og vannet og hytten.</p>
<div class="pullquote"><p>"Nede ved vannet, noen meter fra villaen, bygde Grieg seg en liten komposisjonshytte. Den er på knappe seks kvadratmeter. Det er her han egentlig jobbet. Det er der musikken ble til."</p></div>
<div class="history-box"><p class="hb-label">🪨 Graven i fjellet</p><p class="hb-text">Edvard Grieg døde 4. september 1907 på Hotel Norge i Bergen, på vei til en konsertturné til England. Hans siste ord skal ha vært: «Vel, hvis det må være.» Han og konen Nina — som overlevde ham med 28 år — er begravet i en nisje hugget direkte inn i fjellveggen ved Nordåsvannet, på Troldhaugen-eiendommen. Ikke på en kirkegård. Ikke under et kors. I selve fjellet, med utsikt over vannet han elsket. Det er vanskelig å se det uten å bli stille.</p></div>
<p>Gå ned mot vannet etter at du har sett huset og hytten. Finn graven i fjellet. Se ned på Nordåsvannet derfra. Du har nå gått den samme turen Grieg gikk — fra nabolaget og skogen, til vannet, til dette punktet.</p>
<p>Det finnes en kafé på Troldhaugen med terrasse mot vannet. Sett deg der. Bestill noe. Bli sittende litt lenger enn du planla.</p>
<div class="drink-tip"><div class="dt-icon">☕</div><div><p class="dt-label">Avslutt her</p><p class="dt-text"><strong>Kaféen på Troldhaugen har terrasse mot Nordåsvannet.</strong> En kaffe, et glass — hva du vil. Du har gått 1 time og 900 år med Bergen-historie. Det fortjener en pause der du ikke er i ferd med å gå videre.</p></div></div>
<p style="font-style:italic;color:var(--muted);font-family:'Libre Baskerville',serif;">Vel gått. Grieg ville ha likt at noen tok seg tid til dette.</p>`
      }
    ]
  },


  // ── BERGEN: KOLSTIEN & LYSTGÅRDEN ──────────
  'kolstien-landaas': {
    title:    'Kolstien & Lystgården',
    kicker:   'Bergen · Landås · Historisk dagstur · 1 time',
    subtitle: 'Fra gammel mølledal til borgerskapets lystgård og kirkebygg på Kanonhaugen — ein time med Bergens stille historia.',
    meta: [
      ['4 stopp',      'ingen barer'],
      ['Starter',      'Kolstien, Landås'],
      ['Varighet',     '1 time · 3,5 km'],
      ['Nivå',         'Lett']
    ],
    completion: 'Du har gått Kolstien & Lystgården. 4 stopp. Møllendalen, borgerskapets sommerflukt og Kanonhaugen — ein time og tre hundre år.',
    stops: [
      {
        name:      'Kolstien',
        address:   'Kolstien, Landås, Bergen',
        tag:       'Startpunkt · Stopp 1 av 4',
        drink:     null,
        audioMin:  'ca. 3 min',
        nextLabel: 'Neste: Christie Mølle →',
        mapNext:   'Christie Mølle · 10 min sørover langs Gimlevegen',
        mapLabel:  'Neste stopp',
        body: `
<p>Landås-navnet strekker seg tilbake til middelalderen. «Landås» betyr simpelthen «ås ved landeveien», og området fungerte som en naturlig passasje mellom Bergens indre daldrag og det åpne terrenget mot sør. Gårdene her var i bruk langt inn på 1800-tallet, og den rolige strukturen med private hager og brede tomter er et ekko av det gamle jordbrukslandskapet.</p>
<div class="pullquote"><p>"Kolstien er en stille blindvei med en atmosfære som føles fjern fra Bergen sentrum — selv om du er bare 15 minutter unna."</p></div>
<p>Du starter herfra, går ned mot Gimlevegen og orienterer deg mot daldraget der Møllendal-elven renner. Legg merke til hageporene, brevkassene med lokale navn og den lavmælte stoltheten i bebyggelsen.</p>
<p style="font-style:italic;color:var(--muted);">Gå langsomt herfra. Turen er ikke om distansen — det er om å legge merke til det.</p>`
      },
      {
        name:      'Christie Mølle',
        address:   'Gimleveien 97, Bergen',
        tag:       'Stopp 2 av 4 · 10 min gange',
        drink:     null,
        audioMin:  'ca. 5 min',
        nextLabel: 'Neste: Lystgården →',
        mapNext:   'Kanonhaugen · 20 min opp fra mølleparken',
        mapLabel:  'Neste stopp',
        body: `
<p>Mølla bærer navnet etter den bergenske slekten Christie — en av byens mest innflytelsesrike familier på 17- og 1800-tallet. Statsminister Wilhelm Frimann Koren Christie (1778–1849), kjent som en av grunnlovsfedre og initiativtaker til Universitetet i Bergen, tilhørte denne slekten.</p>
<div class="pullquote"><p>"Den opprinnelige kvernmølla brukte vannkraften fra Møllendalsbekken til å male korn for bergenserne — en hverdagsinfrastruktur som i dag nesten er glemt."</p></div>
<div class="history-box"><p class="hb-label">📜 Møllendalen</p><p class="hb-text">Selve dalen — Møllendal — har navn etter nettopp disse møllene. På 1800-tallet var det flere vandringer hit fra Bergen sentrum, og dalen ble et populært utfartssted for borgerskapet, som søkte fred bort fra byens havn og de tette middelalderkvartaler.</p></div>
<p>Den restaurerte mølla og den lille parken rundt henne er blant Bergens mest diskrete skjulte skatter. Bekken renner fortsatt, og lyden av rennende vann dominerer fullstendig — det er nesten utrolig at du er midt i en stor by.</p>
<p>Legg merke til steinhuset, vannhjulet og det lille fossefallet. Tenk deg at denne lyden — vann over stein — er den samme som folk hørte her for 200 år siden, mens de ventet på malt korn.</p>`
      },
      {
        name:      'Lystgården & Presteboligen',
        address:   'Kanonhaugen 39, Bergen',
        tag:       'Stopp 3 av 4 · Historisk kjernestopp',
        drink:     null,
        audioMin:  'ca. 6 min',
        nextLabel: 'Tilbake til Kolstien →',
        mapNext:   'Benk ved Kolstien · 20 min via Gimlevegen',
        mapLabel:  'Neste stopp',
        body: `
<p>Lystgården på Kanonhaugen er en av de eldste bevarte bygningene i Landås og bærer i seg hele bydelens sosialhistorie. Slike «lystgårder» — sommerboliger for byens velstående borgere — ble vanlige utenfor Bergen fra 1700-tallet av.</p>
<div class="pullquote"><p>"Borgere med råd til det flyktet fra byens trangboddhet, lukt og sykdomsfare til luftigere omgivelser i åssidene. Landås, med sin sørvendte helling og utsikt over dalen, var et yndet sted."</p></div>
<p>Eiendommen skiftet hender mange ganger gjennom 1800-tallet og inn i det 20. århundre. I nyere tid er Lystgården blitt et aktivt kultursted med urbant landbruk, hagebrukskurs, konserter og matarrangementer.</p>
<div class="history-box"><p class="hb-label">🏔 Kanonhaugen-navnet</p><p class="hb-text">Kanonhaugen-navnet er eldre enn kirken. Det sikter trolig til kanonstillinger eller militær aktivitet på høyden, fra en tid da Bergen trengte forsvar — kanskje fra 1700-tallets fryktsomme år da sjøfarten var full av pirater og krigstrusler langs kysten.</p></div>
<p>Rett ved siden av Lystgården ligger Landås kirke og den tilhørende presteboligen — en rødmalt trehusbebyggelse i tradisjonell bergensk stil. Kirken fungerte som lokalt gravitasjonspunkt, ikke bare religiøst men sosialt, for generasjoner av Landås-beboere. Presteboligens trepanel er vedlikeholdt med en stille stolthet.</p>
<p>Hagen ved Lystgården er vakker og velstelt. Fra tomten er det utsikt som minner deg på at du befinner deg høyere enn du kanskje tror.</p>`
      },
      {
        name:      'Benken ved Kolstien',
        address:   'Kolstien, Landås, Bergen',
        tag:       'Stopp 4 av 4 · Avslutning',
        drink:     null,
        audioMin:  'ca. 2 min',
        nextLabel: null,
        mapNext:   'Ruten er fullført 🎉',
        mapLabel:  'Status',
        body: `
<p>Du er tilbake der du startet, men du er ikke den samme som gikk herfra for en time siden. Du har gått gjennom en mølledal som har malt korn i to hundre år. Du har stått i hagen til en lystgård der byens borgere søkte ro fra en by som aldri sto stille. Du har sett presteboligen som har holdt stand gjennom generasjoner av Landås sine store og små hendelser.</p>
<div class="pullquote"><p>"Bergen er ikke bare syv fjell. Det er alle dalene imellom."</p></div>
<p>Og du har gått det hele på én time — uten å skynde deg.</p>
<p>Finn en benk. Si ingenting. Se på bladene eller himmelen. La det som har beveget seg inni deg, sette seg.</p>
<p style="font-style:italic;color:var(--muted);">Det er ikke noe mer å gjøre. Landås er ett av de nabolagene Bergen glemmer å vise frem — men de som går rolig gjennom det, vet hva de har.</p>`
      }
    ]
  }

};
