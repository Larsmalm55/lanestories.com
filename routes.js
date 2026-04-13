// ─────────────────────────────────────────────
//  LaneStories · Route data
//  To add a new route: copy an existing object,
//  give it a new id, and fill in the content.
// ─────────────────────────────────────────────

const ROUTES = {

  // ── BERGEN: THE DARK LANES ──────────────────
  'dark-lanes': {
    title:    'The Dark Lanes',
    kicker:   'Bergen · Evening · 2–3 hours',
    subtitle: 'From Viking kings to Nazi resistance — ending with dinner in a Hanseatic banquet hall unchanged since 1708.',
    meta: [
      ['4 stops',     'incl. dinner'],
      ['Starts at',   'Bergenhus'],
      ['GPS + Audio', 'guide'],
      ['⭐ 4.9',      '· 94 have walked this']
    ],
    completion: 'You have walked The Dark Lanes. 4 stops. About 800 years of Bergen history.',
    stops: [
      {
        name:      'Bergenhus Fortress',
        address:   'Håkonshallen, Bergenhus festning, Bergen',
        coords:    [60.400427, 5.318511],
        tag:       'Stop 1 of 4 · You are here',
        drink:     null,
        audioMin:  'approx. 4 min',
        nextLabel: 'Next stop →',
        mapNext:   'Enhjørningsgården · 4 min',
        mapLabel:  'Next stop',
        body: `
<p>You are standing at the very heart of Bergen's entire history. This place — once called Holmen — has been continuously inhabited since before the year 1000. For over a thousand years, power has never really left this place.</p>

<div class="pullquote"><p>"This was not just a fortress. This was the seat of power. For a time, this was Norway."</p></div>

<p>Viking kings held court here. Bergen was Norway's first true capital, and under King Håkon Håkonsson it became the centre of a kingdom that reached from Iceland to the Russian border. The great stone hall to your left — Håkonshallen — was built between 1247 and 1261. It was not built simply to house a king. It was built to impress Europe. And it did.</p>

<p>On 11 September 1261, Håkon's son Magnus Lagabøte was crowned here. You can almost see the torchlight against the stone wall, hear the Latin from the bishop's mouth arching up under the vault. Hundreds of guests. Silver goblets. The full weight of a medieval kingdom gathered in one room.</p>

<div class="pullquote"><p>"Right beneath your feet once stood Christ Church — the most important church in medieval Norway. Kings were crowned here. Kings were buried here. In 1531, it was torn down — and the stone was shipped to Denmark, to build fortresses for a foreign king."</p></div>

<p>That is perhaps the most powerful detail of this place — and the least told. Kristkirken, Christ Church, stood for centuries as Norway's spiritual and political heart. When Norway fell under Danish rule, the church was dismantled stone by stone. The material was loaded onto ships and sailed south to build Kronborg Castle in Denmark. The church that had witnessed the birth of a nation was exported. What you are standing on now is silence where something irreplaceable once stood.</p>

<div class="history-box"><p class="hb-label">💥 The explosion of 1944</p><p class="hb-text">The German occupation brought violence to this place twice. First in 1940 — and again in April 1944, when a Dutch ammunition ship exploded in the harbour. The blast shattered windows across the city, cracked walls that had survived seven centuries, and killed over 160 people. Even here, on ground that had endured so much, history cracked again.</p></div>

<p>When the Nazis landed in Bergen at dawn on 9 April 1940, the fortress was held by a small garrison for hours. The commandant refused to surrender. Shots were fired. And in that tangle of confusion and fear and heroism, a resistance movement began that would eventually help win the war — largely from a secret apartment a few hundred metres away.</p>

<p>You will see that place in twelve minutes. But first: look back at the tower. The brick is from the 1200s. The mortar is original. What looks like restoration is actually the real thing.</p>`
      },
      {
        name:      'Enhjørningsgården',
        address:   'Bryggen 29, 5003 Bergen',
        coords:    [60.397218796350714, 5.323395882537313],
        tag:       'Stop 2 of 4 · Walk 4 min',
        drink:     null,
        audioMin:  'approx. 5 min',
        nextLabel: 'Next stop →',
        mapNext:   'The Theta Room · 6 min',
        mapLabel:  'Next stop',
        body: `
<p>Step into this alley. The timber walls lean toward each other overhead. It smells of old wood and salt. Very little has changed here since the 1300s.</p>

<div class="pullquote"><p>"Enhjørningsgården was not just a building. It was part of a closed system. Norwegian law did not apply here. Low German was spoken. The accounts were kept for Lübeck. And the rules belonged to a city far away."</p></div>

<p>Enhjørningsgården — the Unicorn Courtyard — got its name from the carved unicorn above the gate. It is still there. Look up. But what surrounded that gate was something harder to see: a world within a world. The Hanseatic League did not simply trade with Bergen — it occupied it. Inside these walls, German merchants lived for six months at a time, completely cut off from the Norwegian society around them. They were not allowed to marry. They were not allowed to have Norwegian friends. They were not allowed to leave the wharves without permission.</p>

<p>The League controlled not just the trade — it controlled the people. Boys as young as twelve arrived as apprentices and lived under near-total authority for years. Some adapted. Some broke. And the ones who broke left no record.</p>

<div class="history-box"><p class="hb-label">🔥 Fire and continuity</p><p class="hb-text">Bryggen burned — again and again. The fires of 1170, 1198, 1248, 1413, 1476, 1527, 1702. Each time, the buildings were raised again on the same narrow plots, with the same passages, the same proportions, the same logic. What you are standing in now is not a reconstruction. It is a continuation. The city refused to redesign itself. It simply rebuilt what it already knew.</p></div>

<p>The stories that were never written down are the most disturbing. Men disappeared. Apprentices were broken by years of confinement and cold. And the sea took what no one asked questions about.</p>

<p>The German merchant who lived in the room above you — we know his name: Heinrich Schröder, 1392. He never returned to Lübeck. The archives say: drowning. But the water was shallow that night, and no one else was a witness.</p>`
      },
      {
        name:      'The Theta Room',
        address:   'Nedre Korskirkeallmenning 4, Bergen',
        coords:    [60.39786407091539, 5.324067782332288],
        tag:       'Stop 3 of 4 · Walk 6 min',
        drink:     null,
        audioMin:  'approx. 6 min',
        nextLabel: 'Final stop: Dinner →',
        mapNext:   'Dinner, 1708 · 3 min',
        mapLabel:  'Next stop',
        body: `
<p>This is the place that will give you chills. Look at the facade. Nothing suggests what happened here between 1942 and 1944. And that, of course, was exactly the point.</p>

<div class="pullquote"><p>"The room is hidden inside Enhjørningsgården — the same Hanseatic courtyard you just walked through. The Germans were searching every building in Bergen. They never found it. Not for two years."</p></div>

<p>The young members of the Theta group were engineers. They built a concealed electrical locking system to hide the door — invisible to anyone who didn't know where to press. By that time, most doors in the Bryggen buildings had been sealed and closed off. One more locked door meant nothing. It meant everything.</p>

<p>Every night at 10 p.m. they broadcast encrypted messages to London. Coordinates for German submarine movements. Crew lists. Shipping routes. The information they sent saved hundreds of Allied lives and helped turn the war at sea.</p>

<div class="history-box"><p class="hb-label">🪖 The raid — 17 October 1942</p><p class="hb-text">German forces carried out a raid at Bryggen. A soldier stepped on a rotten floorboard in the room above — and it gave way. The hidden room was accidentally discovered. But none of the Theta members were there. They had prepared for exactly this moment: a large batch of TNT was hidden in a cupboard, rigged to explode if the door was opened. The charge did not go off. Had it done so, it is said the entire Bryggen wharf would have been destroyed — centuries of history, gone in seconds.</p></div>

<p>After the raid, the room was stripped bare. Everything was removed. What you see inside today — the Hallicrafter receiver, the homemade HF transmitter, the copies of intelligence reports — are assembled objects donated from across Norway to approximate what was once there. Only a few original pieces remain: a coffee table, the receiver, the transmitter. At 16 square metres, it is the smallest museum in Norway.</p>

<p>The Gestapo searched for two years. They knew the signals came from central Bergen. They knew someone lived among them. They just didn't know who. The group continued operating until 1944 — long after the raid, from a new location. Some members were eventually caught. Others escaped to Sweden under cover of night. The room they left behind opened to the public in 1982. The walls have not forgotten.</p>`
      },
      {
        name:      'Dinner, Bryggen Tracteursted',
        address:   'Bryggen Tracteursted, Bergen',
        coords:    [60.39766719656354, 5.3245291773633046],
        tag:       'Stop 4 of 4 · Final stop',
        drink:     null,
        audioMin:  'approx. 3 min',
        nextLabel: null,
        mapNext:   'Route complete 🎉',
        mapLabel:  'Status',
        body: `
<p>You are back where you began — but now you know what these walls are made of. Enter the restaurant in Enhjørningsgården. The room you eat in has not changed since 1708.</p>
<div class="pullquote"><p>"The merchants who ate here paid in silver coins. They drank Rhine wine. The candles were tallow — exactly like the ones you see in front of you now."</p></div>
<p>Ask for the table at the far back right. That is the chair which — according to the restaurant's own archives — belonged to the merchant Claus Meyenberg for over fifty years. He sat there every Friday evening from 1712 to 1763. He always ordered the same thing: salted cod, beer, a pipe.</p>
<p>No one knows what he thought about. But the city outside was the same city you have just walked through. The fortress. The alleyways. The sea. The stories that were never told to anyone — but which are now yours.</p>
<p style="font-style:italic;color:var(--muted);">Enjoy your meal. You have earned it.</p>`
      }
    ]
  },

  // ── BERGEN: DYVEKE'S EVENING ────────────────
  'dyveke': {
    title:    "Dyveke's Evening",
    kicker:   'Bergen · Wine, cider & food · Evening · 3–4 hours',
    subtitle: 'From a Dutch street to a royal love story. Four stops. Three drinks. Eight hundred years of Bergen stories that never made the guidebooks.',
    meta: [
      ['4 stops',     'incl. dinner'],
      ['Starts at',   'Hollendergaten'],
      ['Theme',       'Wine · Cider · Food'],
      ['GPS + Audio', 'guide']
    ],
    completion: "You have walked Dyveke's Evening. 4 stops. From Hollendergaten to Pergola. Dutch merchants, a royal heart and seven hundred years of cider.",
    stops: [
      {
        name:      'Hollendergaten',
        address:   'Hollendergaten, Bergen sentrum',
        tag:       'Stop 1 of 4 · Start here',
        drink:     '🚶 Starting point · No drink yet · Walk slowly',
        audioMin:  'approx. 4 min',
        nextLabel: 'Next: Dyveke →',
        mapNext:   'Dyveke · 5 min',
        mapLabel:  'Next stop',
        body: `
<p>Look around you. The street is called Hollendergaten — the street of the Dutch. That is no accident. For a hundred years, from the mid-1500s, this was one of the most international streets in Norway.</p>
<div class="pullquote"><p>"As the Hanseatic iron grip on Bergen began to loosen, Dutch merchants flooded in. They brought wine from the Rhine, silk from France — and stories no one has heard since."</p></div>
<p>The Dutch — «hollenderne» as the Norwegians called them — were not welcomed by all. The Hanseatic League at Bryggen had held a monopoly on foreign trade for over two hundred years. But from the 1550s cracks appeared, and Dutch merchants quickly filled the gap.</p>
<div class="history-box"><p class="hb-label">📜 Historical background</p><p class="hb-text">In the 1500s Bergen was the most international city in northern Europe. Germans, Dutch, Scots, English and Danes lived side by side in their own quarters. Hollendergaten is the only street in Bergen that still carries a nationality name — a living reminder of the multiethnic trading city.</p></div>
<p>But the most important trace the Dutch left here was not cloth or spices. It was a young girl named Sigbrit — daughter of a Dutch merchant family — who kept a small shop in this area. Her daughter would become the most talked-about woman in sixteenth-century Scandinavia.</p>
<p>You will meet her in twelve minutes.</p>
<p>But before you go: notice the street width. It is exactly the same as in the 1500s. The buildings are new. The street is old. You are treading the same stone as Dutch merchants trod five hundred years ago.</p>`
      },
      {
        name:      'Dyveke',
        address:   'Dyveke Wine Bar, Bergen sentrum',
        tag:       'Stop 2 of 4 · 5 min walk',
        drink:     '🍷 Your drink here: Ask for something from the Rhine — it is historically correct',
        audioMin:  'approx. 6 min',
        nextLabel: 'Next: Siderbar →',
        mapNext:   'Siderbar · 6 min',
        mapLabel:  'Next stop',
        body: `
<p>The bar is named after her. Most people ordering wine here do not know who she was. You do.</p>
<p>Her name was Dyveke Sigritsdatter. "Dyveke" means "little dove" in Dutch. She was born around 1490 — either in Bergen or Amsterdam, historians are not entirely agreed. What they do agree on is this: she was beautiful, she was clever, and she turned a dull Danish prince into a lovesick fool.</p>
<div class="pullquote"><p>"When the young king Christian II rode through Bergen in 1507 and caught sight of Dyveke, he stopped. He never quite moved on."</p></div>
<div class="history-box"><p class="hb-label">👑 Dyveke and King Christian II</p><p class="hb-text">Christian II later became one of Scandinavia's most controversial kings — known for the Stockholm Bloodbath of 1520 in which he executed 80–90 Swedish noblemen. But before he became a tyrant, he was in love with a Dutch-Norwegian girl from Bergen. He brought her to Denmark, let her live near the castle, and refused to marry her despite pressure from the church and nobility for years.</p></div>
<p>Dyveke's mother, Sigbrit Villoms, was anything but a passive parent. She followed her daughter to Copenhagen and became one of the most influential advisers in the entire realm. Dutch and Norwegian commercial knowledge in one person — and the king listened to her more than to his own ministers.</p>
<p>In 1517 Dyveke was about 27 years old. One day she ate cherries — a gift, it is said, from a nobleman named Torben Oxe who was known to dislike her. The next day she was ill. A week later she was dead.</p>
<p>Poison, thought the king. Murder, thought the court. Unfortunate digestion, said the church. Torben Oxe was executed — whether he was guilty has never been proven. Christian II wept publicly. He paid for a beautiful grave. And he became, according to all contemporary sources, never the same again.</p>
<div class="drink-tip"><div class="dt-icon">🍷</div><div><p class="dt-label">Drink tip for this stop</p><p class="dt-text"><strong>Ask for something from the Rhine or Mosel.</strong> In the 1500s Rhine wine was the prestige choice in Bergen — it arrived on Dutch trading ships. A dry Riesling from the Mosel or a Spätburgunder from the Rhine is as close as you can get to Dyveke's world in a glass.</p></div></div>
<p>Now you know who the bar is named after. That girl in the profile above the bar counter — that is her. Little dove from Bergen. The king's great love. A mystery that was never solved.</p>`
      },
      {
        name:      'Siderbar',
        address:   'Siderbar Bergen, sentrum',
        tag:       'Stop 3 of 4 · 6 min walk',
        drink:     '🍎 Your drink here: A dry Norwegian cider — Hardanger if they have it',
        audioMin:  'approx. 5 min',
        nextLabel: 'Final stop: Dinner →',
        mapNext:   'Pergola · 4 min',
        mapLabel:  'Next stop',
        body: `
<p>Before wine came to Bergen by ship. Before Dutch merchants rolled their Rhine barrels onto the wharf. Long before that — there was cider.</p>
<div class="pullquote"><p>"The monks at Munkeliv Monastery, which stood a few hundred metres from where you stand now, cultivated apples and pressed their own cider. The monastery burned in 1455. The tradition survived."</p></div>
<div class="history-box"><p class="hb-label">🍎 Norwegian cider — 700 years of tradition</p><p class="hb-text">Munkeliv Monastery (founded c. 1110) was one of Bergen's two great Benedictine monasteries. The monks were self-sufficient — they grew herbs, vegetables and fruit. Apple orchards are documented. Cider was the everyday drink, used both with food and as medicine. When the Reformation in 1537 dissolved the monasteries, farmers in Hardanger continued a tradition unbroken to this day.</p></div>
<p>Hardanger — the valley behind the mountains to the east of Bergen — is Norway's apple country. Not because the climate is especially favourable, but because people here never stopped growing. Today Hardanger produces about 40% of all Norwegian fruit. Producers like <a href="https://www.storenaasiderkompani.com" target="_blank" style="color:var(--amber);text-decoration:none;border-bottom:1px solid rgba(176,120,48,.3);">Store Naa Siderkompani</a> keep alive traditions that are seven hundred years old.</p>
<p>Cider was also democratic. Wine was for merchants and kings. Beer was for everyday life. But cider — fresh, fruity, slightly tart — was what farmers, servant girls and travellers drank. It was Bergen's own alternative to what came from outside.</p>
<div class="drink-tip"><div class="dt-icon">🍎</div><div><p class="dt-label">Drink tip for this stop</p><p class="dt-text"><strong>Ask for "Brudeferd" from <a href="https://www.storenaasiderkompani.com" target="_blank" style="color:var(--amber);text-decoration:none;">Store Naa Siderkompani</a>.</strong> A dry, elegant cider from Hardanger — almost wine-like, with clean acidity and a long finish. Exactly as the monks at Munkeliv would have liked it. If you see it on the menu, it is the right choice for this stop.</p></div></div>
<p>Bergen had cider long before it had wine. Next time someone tells you Norwegian drinking culture is new — remind them of the monks of Munkeliv and the seven hundred years they have forgotten.</p>`
      },
      {
        name:      'Pergola',
        address:   'Pergola Mat og Vinbar, Bergen sentrum',
        tag:       'Stop 4 of 4 · Final stop',
        drink:     '🍽️ Your drink here: Choose whatever you feel like — you have earned it',
        audioMin:  'approx. 4 min',
        nextLabel: null,
        mapNext:   'Route complete 🎉',
        mapLabel:  'Status',
        body: `
<p>You have arrived. Sit down. Breathe.</p>
<p>"Pergola" comes from the Latin word for a projecting roof — a place of shade, shelter from the wind, and the unhurried evening meal. The Romans had them. Mediterranean culture built everything around them. Bergen has always had its own version — not in stone and marble, but in warm rooms and windows toward the wharves.</p>
<div class="pullquote"><p>"To eat well, drink well and tell stories is Bergen's oldest tradition. It is what the Dutch merchants came here for. It is what you are here for."</p></div>
<div class="history-box"><p class="hb-label">🍽️ Food as trade</p><p class="hb-text">In the Middle Ages Bergen was known for stockfish — dried cod exported across Europe. But the wealthy merchants ate something quite different: imported spices, Rhine wine, Dutch cheeses, French sauces. What today appears on restaurant menus as "Norwegian food" was in 1500s Bergen an exclusive luxury, bought and sold on the same quaysides outside this window.</p></div>
<p>For over five hundred years people have come to Bergen to trade, eat and drink. The Hanseatics came from Lübeck. The Dutch came from Amsterdam. The Scots came from Edinburgh. They sat in inns along the wharves, drank wine they had brought from home, and talked for hours about prices, routes and grand politics.</p>
<p>This evening is not so different.</p>
<p>You are sitting in a city that has celebrated the good table for eight hundred years. You have walked through the Dutch street. You have drunk Dyveke's wine. You have tasted the monks' cider. Now you eat.</p>
<p style="font-style:italic;color:var(--muted);font-family:'Libre Baskerville',serif;">Enjoy your meal. Bergen is glad you came.</p>`
      }
    ]
  },

  // ── OSLO: NORA'S QUARTER ────────────────────
  'noras-quarter': {
    title:    "Nora's Quarter",
    kicker:   'Oslo · Evening · 2–3 hours · Youngstorget to Grünerløkka',
    subtitle: 'A route about the people who built Oslo — the factory girls along the Akerselva, the playwright who told the world what they were not allowed to do, and the neighbourhood they left behind.',
    meta: [
      ['3 stops',     'incl. dinner'],
      ['Starts at',   'Youngstorget'],
      ['Theme',       'Beer · Wine · Food'],
      ['GPS + Audio', 'guide']
    ],
    completion: "You have walked Nora's Quarter. 3 stops. From Youngstorget to Grünerløkka. The labour movement, Ibsen's women and the neighbourhood they built with their hands.",
    stops: [
      {
        name:      'Internasjonalen',
        address:   'Møllergata 10, Oslo',
        tag:       'Stop 1 of 3 · Start here',
        drink:     '🍺 Your drink here: A Ringnes on tap — it is historically correct',
        audioMin:  'approx. 5 min',
        nextLabel: 'Next: Blå by the Akerselva →',
        mapNext:   'Blå · 12 min north along the river',
        mapLabel:  'Next stop',
        body: `
<p>The square outside is called Youngstorget. Not named after anything young and promising — but after a merchant named Jørgen Young who owned the lots here in the 1800s. A more unpretentious name for a more precise place is hard to imagine.</p>
<p>Because what happened here was not the merchants' work. It was the workers'.</p>
<div class="pullquote"><p>"Every 1st of May, from the 1890s onward, thousands of Oslo workers streamed onto this square. They sang the Internationale. They demanded an eight-hour working day. Many of them had just come off twelve-hour shifts."</p></div>
<div class="history-box"><p class="hb-label">✊ Folkets Hus and the labour movement</p><p class="hb-text">The building you are sitting in — Folkets Hus, the People's House — was built by the trade union movement itself, brick by brick, krone by krone, collected among Oslo workers. LO (the Norwegian Confederation of Trade Unions) was founded in 1899. The Norwegian Labour Party had its headquarters here for decades. The bar you are sitting in is not named after a slogan. It is named after the song they sang on this square while police looked on: "L'Internationale" — written in Paris in 1871, translated into Norwegian by workers who had never been to France.</p></div>
<p>Norway today — six weeks' holiday, state-funded healthcare, the world's highest rate of trade union membership — is not an accident. It is the result of what happened on this square. Of strikes beaten down by police. Of women who refused to return to the factories without better pay. Of men who were fired for organising their colleagues.</p>
<p>Most tourist guides take you to the Palace. Akershus. Vigeland Park. But this square — this unpretentious, slightly worn square — is where it was actually decided what kind of country Norway would become.</p>
<div class="drink-tip"><div class="dt-icon">🍺</div><div><p class="dt-label">Drink tip for this stop</p><p class="dt-text"><strong>A Ringnes on tap.</strong> Ringnes was founded in 1877 — in the middle of the labour movement's formative years. It is Oslo's own brewery, and it is what workers drank when they finally got time off. No pretension. Just beer.</p></div></div>
<p>The street outside is called Møllergata. And ten minutes' walk north along it you will understand why.</p>`
      },
      {
        name:      'Blå',
        address:   'Brenneriveien 9C, Oslo',
        tag:       'Stop 2 of 3 · 12 min walk north',
        drink:     '🍷 Your drink here: A glass of Norwegian natural wine or local craft — whatever they recommend',
        audioMin:  'approx. 6 min',
        nextLabel: 'Final stop: Dinner →',
        mapNext:   'Villa Paradiso · 5 min',
        mapLabel:  'Next stop',
        body: `
<p>The building you are in was a factory. The brickwork is original. The ceiling is high because the machinery required it. The windows are large because they needed daylight to work by — there was no electric lighting for a long time.</p>
<p>The river outside is called Akerselva. It is 8 kilometres long and falls from Maridalsvannet down to Bjørvika. In 1880 there were 43 registered factories along those 8 kilometres. Today none of them exist as factories. But many still exist as walls and ceilings and atmosphere.</p>
<div class="pullquote"><p>"The majority of those who worked here were women. Many were teenagers. Some were younger. They stood at looms for twelve hours a day, six days a week, breathing air that tasted of textile fibres."</p></div>
<div class="history-box"><p class="hb-label">🏭 Akerselva — the river that built Oslo</p><p class="hb-text">Akerselva powered sawmills from the Middle Ages and textile factories from the 1840s. Nydalen Company, founded 1845, was Scandinavia's largest textile factory in its time, employing over 1,200 workers — most of them women. Conditions were brutal: lung disease was widespread, child labour was common until 1892, and there was no safety net if you were injured. The river became so polluted with textile dyes and chemicals that the fish disappeared. It was not cleaned up until the 1990s.</p></div>
<p>In 1879 — while these factory girls stood at their machines — a Norwegian author was sitting in Rome writing a play about a different kind of trapped woman.</p>
<p>Henrik Ibsen had left Norway in 1864, bitter and unpaid. He never quite returned in spirit. But in Rome and Dresden and Munich he observed something he recognised from Christiania: women who did not own themselves. Not poor factory workers, but prosperous bourgeois women — married off, barred from signing contracts, not permitted to make their own decisions.</p>
<p>He called her Nora. And the last thing she does in "A Doll's House" is walk out through a door and slam it shut.</p>
<div class="history-box"><p class="hb-label">🎭 Ibsen and the scandal of 1880</p><p class="hb-text">When "A Doll's House" premiered in 1879, a German actress demanded that Ibsen write an alternative ending — she refused to abandon her children on stage. Ibsen called it "a barbaric act of violence against the play", but wrote the ending anyway. The original — in which Nora slams the door — stood as the only true version. The play was translated into 14 languages within four years. In Japan, Egypt, China and Brazil it was performed as political theatre. And it all began because Ibsen recognised captivity in the same Christiania streets you walked through this evening.</p></div>
<p>The factory girls along Akerselva and Nora in the doll's house — two entirely different kinds of captivity. But not as different as one might think.</p>
<div class="drink-tip"><div class="dt-icon">🍷</div><div><p class="dt-label">Drink tip for this stop</p><p class="dt-text"><strong>Ask what they recommend.</strong> Blå is known for having people who know how to drink. Let them choose. That is what Ibsen would have done — he was good at letting others take the initiative, then observing.</p></div></div>`
      },
      {
        name:      'Villa Paradiso',
        address:   'Olaf Ryes plass 8, Oslo',
        tag:       'Stop 3 of 3 · 5 min walk · Final stop',
        drink:     '🍽️ Your drink here: Choose a natural wine with your food — you are in paradise',
        audioMin:  'approx. 4 min',
        nextLabel: null,
        mapNext:   'Route complete 🎉',
        mapLabel:  'Status',
        body: `
<p>The square outside the window is Olaf Ryes plass. It is named after a general who was killed in Denmark in 1849 — in a war between the Danes and the duchies to the south. His name was Olaf Rye, he was a Danish-Norwegian officer, and he became a hero because he held his position long enough for others to escape.</p>
<p>He never set foot in Grünerløkka. But the square bears his name, because someone in 1850 decided that generals should be honoured with street and square names, and there were not many squares left without names.</p>
<div class="pullquote"><p>"In the 1890s this was one of the most densely populated squares in all of northern Europe. Five families in apartments designed for one. Tuberculosis. Cold-water taps in the back yard. And nothing resembling paradise."</p></div>
<div class="history-box"><p class="hb-label">🌿 From slum to Grünerløkka</p><p class="hb-text">Grünerløkka in the 1980s was one of Oslo's most neglected neighbourhoods. Cheap rents, dilapidated buildings, high unemployment after the factories along Akerselva had closed. Artists and students moved in because it was all they could afford. Cafés opened. Galleries. Second-hand shops. Then came those who could afford to pay more. Today an apartment in Grünerløkka is among the most expensive square metres in Oslo. The very people who saved the neighbourhood could no longer afford to live there.</p></div>
<p>"Villa Paradiso" — the Paradise Villa. It is a bold name for a pizza restaurant in a neighbourhood where some of Oslo's poorest families lived a hundred years ago. But that may be the point: paradise is not a place you are. It is a place you call what you have, after everything it was.</p>
<p>The factory girls who lived in the streets around this square probably did not dream of San Marzano tomatoes and fior di latte. They dreamed of hot food and a little time to themselves.</p>
<p>That is what you are sitting with now.</p>
<div class="drink-tip"><div class="dt-icon">🍕</div><div><p class="dt-label">Food and drink tip for this stop</p><p class="dt-text"><strong>Margherita made with San Marzano tomatoes and fior di latte.</strong> Ask for a glass of natural wine — it fits the food and the evening. Eat slowly. You are not queuing. You are not heading to a shift. That is something not many generations in this neighbourhood have been able to say.</p></div></div>
<p style="font-style:italic;color:var(--muted);font-family:'Libre Baskerville',serif;">Enjoy your meal. Nora left the house. You found yours.</p>`
      }
    ]
  },

  // ── OSLO: THE OTHER OSLO ────────────────────
  'other-oslo': {
    title:    'The Other Oslo',
    kicker:   'Oslo · Evening · 2–3 hours · Grønland',
    subtitle: 'The Oslo the tourist guides do not take you to. A neighbourhood that has been Norwegian, Irish, Pakistani and everything in between — and a pub that has not changed in 130 years.',
    meta: [
      ['3 stops',       'incl. dinner'],
      ['Starts at',     'Grønland torg'],
      ['Theme',         'Hidden places'],
      ['GPS + Audio',   'guide']
    ],
    completion: 'You have walked The Other Oslo. 3 stops. Grønland — layer upon layer of people, stories and food that never became a tourist attraction.',
    stops: [
      {
        name:      'Dattera til Hagen',
        address:   'Grønland 10, Oslo · Grønland torg',
        tag:       'Stop 1 of 3 · Start here · Grønland torg',
        drink:     '🍺 Your drink here: Whatever is on tap — this is not a place for positions',
        audioMin:  'approx. 5 min',
        nextLabel: 'Next: Olympen →',
        mapNext:   'Olympen · 4 min walk',
        mapLabel:  'Next stop',
        body: `
<p>You are in Grønland. Not the green land with icebergs — this grønland was once literally green. Fields and meadows south of the old city boundary. In the 1700s this was outside Oslo, and people who could not afford to live in the city lived here.</p>
<p>The name means nothing mysterious: "green land" — open farmland. That is all it was. But it revealed something important: this was always the place where those who did not fit elsewhere ended up.</p>
<div class="pullquote"><p>"Grønland has been Norwegian working class, Irish immigrant quarter, Eastern European exile and Pakistani home — often in the same decade, sometimes in the same building."</p></div>
<div class="history-box"><p class="hb-label">🌍 Grønland — Oslo's oldest immigrant quarter</p><p class="hb-text">In the 1840s and 50s Irish families fled to Oslo (then Christiania) from the famine at home. Many settled in Grønland, which was cheap and without too much oversight. Later came Swedes, Danes and Eastern Europeans. From the 1970s Pakistani families began settling here — and today Grønland is one of Oslo's most vibrant multicultural neighbourhoods. Grønland torg, where you are sitting now, has been a marketplace, a justice square and a meeting place for all these waves — layer upon layer, without any of the layers disappearing.</p></div>
<p>"Dattera til Hagen" — the daughter of the garden. It is a name that does not explain itself, and that is the point. This is a place for people who already know. Not a sign in the window shouting at passers-by. Not a tourist attraction. A local for the kind of Oslo that does not post photos on Instagram.</p>
<p>The bar has housed musicians, writers and night workers from Grønland for years. The concert stage at the back is small enough that you can see the sweat on the headband of whoever is playing. That is how music should be heard.</p>
<div class="drink-tip"><div class="dt-icon">🍺</div><div><p class="dt-label">Drink tip for this stop</p><p class="dt-text"><strong>Whatever is on tap this evening.</strong> Grønland is not a place for pretension. Asking for the "correct" beer here is to miss the point. Take whatever. Talk to the person next to you instead.</p></div></div>`
      },
      {
        name:      'Olympen',
        address:   'Grønland 15, Oslo',
        tag:       'Stop 2 of 3 · 4 min walk',
        drink:     '🥃 Your drink here: An aquavit — the only correct choice in this room',
        audioMin:  'approx. 6 min',
        nextLabel: 'Final stop: Dinner →',
        mapNext:   'Dinner in Grønland · 2 min',
        mapLabel:  'Next stop',
        body: `
<p>Stop in the doorway. Look around before you sit down.</p>
<p>The ceiling is the original. The walls are the original. The bar counter has been replaced a few times, but the style is the same. The paintings hanging there — large, romantic Norwegian landscape motifs with fjords and mountains and dramatic skies — they hang where they have always hung.</p>
<p>Olympen opened in 1892. It is not a reconstruction. It is not an "inspired by" version. It is the original place, and it has served Oslo since Grønland was one of the city's poorest addresses.</p>
<div class="pullquote"><p>"In 1892 Olympen was a workers' place. Men came here after shifts. They drank aquavit and beer. They did not talk about art. The paintings on the wall showed a Norway none of them could afford to visit."</p></div>
<div class="history-box"><p class="hb-label">🏛️ Olympen — 130 years in the same room</p><p class="hb-text">Olympen is one of Oslo's oldest restaurants and pubs in continuous operation. It has survived two world wars, an occupation, Grønland's decline and Grønland's rise. During the Second World War there were Norwegian guests and German soldiers in the same rooms — something no one spoke loudly about. After the war came socialists, artists and people who did not fit into the more "respectable" districts. Today it is tourists, locals and every category in between. The room treats everyone equally.</p></div>
<p>There is something honestly right about a place that does not try to tell you what it is. Olympen has no concept. It has no "vibe" in the marketed sense. It is simply a room that has seen more than most rooms will ever see — and still believes it is sufficient to set a glass down and let people sit.</p>
<p>The paintings on the wall show fjords and mountains and dramatic Norwegian skies. They were painted to give workers in 1892 a sense of a country they did not have time to experience. Now they hang as a kind of archaeology — painted for one Oslo, looking down on an entirely different one.</p>
<div class="drink-tip"><div class="dt-icon">🥃</div><div><p class="dt-label">Drink tip for this stop</p><p class="dt-text"><strong>A Linie Aquavit.</strong> Linie is distilled in Lyngseidet, sent across the equator and back in oak casks on board a ship — the tradition started in 1805. It is the only thing that has travelled more than the room you are sitting in. Drink it slowly. It deserves it.</p></div></div>`
      },
      {
        name:      'Dinner in Grønland',
        address:   'Grønland — eat where the smell takes you',
        tag:       'Stop 3 of 3 · 2 min walk · Final stop',
        drink:     '🍽️ Your drink here: Tea, lassi, mineral water — you have drunk enough. Now it is all about the food.',
        audioMin:  'approx. 3 min',
        nextLabel: null,
        mapNext:   'Route complete 🎉',
        mapLabel:  'Status',
        body: `
<p>Grønland is one of the few places in Oslo where you do not need a restaurant guide. You only need a nose.</p>
<p>Walk along Grønlandsleiret. What you smell — cardamom, coriander, fried onion, freshly baked bread — that is what you should eat. That is how food was always chosen, and it is still the best method.</p>
<div class="pullquote"><p>"The Pakistani families who came to Oslo in the 1970s brought something no one at the time knew they needed: the food. Today it is inseparably part of what Oslo tastes like."</p></div>
<div class="history-box"><p class="hb-label">🍛 Grønland's food — Oslo's best-kept secret</p><p class="hb-text">While the rest of Oslo pays 400 kroner for a pastry with beetroot, the restaurants in Grønland serve genuine home-cooked food at prices that have not kept pace with the city's inflation. Not because the food is inferior — but because the owners have not speculated in location. They are here because they have always been here. Ask what is fresh today. There is always something.</p></div>
<p>This is the Oslo the tourist guides do not take you to. Not because it is hidden — it is right here, in the middle of the city, fifteen minutes' walk from the Palace. But because it does not fit the story of what Oslo "is".</p>
<p>Oslo is not just Aker Brygge and Vigeland Park and the Munch Museum. It is also this: a neighbourhood that has made room for everyone who needed space, and fed everyone who needed food, without making a point of it.</p>
<p style="font-style:italic;color:var(--muted);font-family:'Libre Baskerville',serif;">Eat well. You found the other Oslo. Most people never do.</p>`
      }
    ]
  },


  // ── ANTWERP: THE MERCHANT'S EVENING ─────────
  'antwerp': {
    title:    "The Merchant's Evening",
    kicker:   'Antwerp · Evening · 3–4 hours · Grote Markt to Eilandje',
    subtitle: 'About a city that was once richer than Rome. About the genever that became gin. And about a river that was closed for two hundred years — and what happened when it was opened again.',
    meta: [
      ['4 stops',     'incl. dinner'],
      ['Starts at',   'Grote Markt'],
      ['Theme',       'Beer · Jenever · Food'],
      ['GPS + Audio', 'guide']
    ],
    completion: "You have walked The Merchant's Evening. 4 stops. From Grote Markt to Eilandje. A city that fell from the top of the world and found itself again — and the genever that became gin.",
    stops: [
      {
        name:      'Café Den Engel',
        address:   'Grote Markt 3, Antwerpen',
        tag:       'Stop 1 of 4 · Start here · Grote Markt',
        drink:     '🍺 Your drink here: A Duvel or Westmalle Tripel — choose something Belgian and proud',
        audioMin:  'approx. 5 min',
        nextLabel: 'Next: De Vagant →',
        mapNext:   'De Vagant · 8 min walk',
        mapLabel:  'Next stop',
        body: `
<p>Look around. The guild buildings around the square — with gilded facades and lavish sculptures — were erected by the city's most powerful merchants. They wanted everyone arriving in Antwerp to understand one thing immediately: this is a wealthy city. Actually, it was more than that.</p>
<div class="pullquote"><p>"In 1540 Antwerp was the richest city in Europe. Perhaps in the world. Three quarters of all trade between England and the continent passed through this square."</p></div>
<div class="history-box"><p class="hb-label">💰 The world's first stock exchange</p><p class="hb-text">In 1531 Antwerp became home to the world's first formal stock exchange — the Beurzen. Merchants from Portugal, England, Spain and the German Empire gathered here to trade not just goods, but future deliveries, bills of exchange and credit. The idea of trading in paper rather than grain and cloth was revolutionary — and became the very foundation of modern capitalism. London, Amsterdam and New York copied the model. The original was here.</p></div>
<p>A contemporary described it thus: "In Antwerp all languages are spoken, the customs of all nations are on display." That was no exaggeration. In 1550s Antwerp there lived Portuguese, Spanish Jews, English, Germans and Flemings side by side. The city's harbour received spices from the New World, silk from the Orient and wool from England. Everything was traded. Everything had a price.</p>
<p>But the fountain before you tells another story. The legend of Brabo: a Roman soldier who killed the giant Druon Antigoon, who demanded a toll from everyone passing the river, and threw his hand into the Scheldt. "Hand werpen" — to throw a hand. Hence: Antwerp.</p>
<p>It is of course only a legend. But it is the city's legend about itself: we paid the price, we threw the oppressor's hand into the river, and we became free. The truth is more brutal and more fascinating. You are about to understand it.</p>
<div class="drink-tip"><div class="dt-icon">🍺</div><div><p class="dt-label">Drink tip for this stop</p><p class="dt-text"><strong>A Duvel or Westmalle Tripel.</strong> Duvel is Belgian for devil — a blond strong beer with more behind the facade than it appears to have. Much like this city. Westmalle Tripel is a Trappist beer from the abbey at Malle, 25 km from here, brewed by monks since 1836. Belgian beer culture is not a trend. It is a civilisation.</p></div></div>`
      },
      {
        name:      'De Vagant',
        address:   'Reyndersstraat 25, Antwerpen',
        tag:       'Stop 2 of 4 · 8 min walk',
        drink:     '🥃 Your drink here: An oude jenever — take it neat, at room temperature',
        audioMin:  'approx. 5 min',
        nextLabel: 'Next: Café Beveren →',
        mapNext:   'Café Beveren · 5 min walk',
        mapLabel:  'Next stop',
        body: `
<p>You are now in one of Europe's finest jenever bars. De Vagant has over 200 varieties. Do not start reading the menu yet — it will take the rest of the evening. Hear the story first.</p>
<p>Jenever is not gin. Gin is jenever that was simplified, anglicised and rebranded. The original was created here in the Low Countries in the 1500s — distilled grain with juniper berries, used as medicine for kidney stones and rheumatism.</p>
<div class="pullquote"><p>"During the Thirty Years' War, 1618–1648, English soldiers fighting alongside Dutch allies were given something they had never tasted. They called it 'Dutch courage'. They took it home."</p></div>
<div class="history-box"><p class="hb-label">🥃 From medicine to gin — jenever's journey</p><p class="hb-text">Jenever was originally sold in pharmacies as a cure for stomach ailments, fever and kidney stones — it was called "genever" after the Dutch word for juniper. When English soldiers began drinking it in the field, they returned home with a new taste. By 1720–30 London had a gin crisis: 11 million gallons of gin were produced per year for a population of 600,000. William Hogarth's famous engraving "Gin Lane" from 1751 is the legacy of that. And it all started with a medicinal distillate from the Low Countries.</p></div>
<p>Antwerp was not just a trading centre. It was a point of dispersal. Ideas, goods, drinks, diseases and discoveries went out into the world from here like ripples on water. London got gin from Dutch soldiers. New York was originally called New Amsterdam. Wall Street is a direct descendant of Antwerp's stock exchange.</p>
<p>And you are now sitting drinking the very original. Not a tribute. Not a reconstruction. Oude jenever, aged in oak casks, is exactly what English soldiers drank in the trenches in Flanders while waiting for something terrible to happen.</p>
<div class="drink-tip"><div class="dt-icon">🥃</div><div><p class="dt-label">Drink tip for this stop</p><p class="dt-text"><strong>Ask for an oude jenever</strong> — the aged variety. Not the young, clear one. Old jenever is dark, smooth and almost whisky-like. Drink it neat, in a small glass, at room temperature. Do not add ice. Not tonic. Just the drink, as it has always been drunk here.</p></div></div>`
      },
      {
        name:      'Café Beveren',
        address:   'Vlasmarkt 2, Antwerpen',
        tag:       'Stop 3 of 4 · 5 min walk',
        drink:     "🍺 Your drink here: A Bolleke De Koninck — Antwerp's own brewery since 1827",
        audioMin:  'approx. 6 min',
        nextLabel: 'Final stop: Dinner →',
        mapNext:   'Het Pomphuis · 15 min walk (or taxi)',
        mapLabel:  'Next stop',
        body: `
<p>Stop. Look inside. The ceiling is the original Art Deco ceiling. The lamps are original. And the organ — the large mechanical organ hanging on the wall there — is real. It still plays. Some evenings it simply starts by itself.</p>
<p>Café Beveren is from the early 1900s and is one of Antwerp's most authentic brown cafés. But its real function this evening is to help you understand what happened to the richest city in the world — after it fell.</p>
<div class="pullquote"><p>"In 1585 the Spanish general Alexander Farnese took Antwerp after a 14-month siege. What happened in the next ten years changed Europe for ever."</p></div>
<div class="history-box"><p class="hb-label">⚓ The closed river — 210 years of isolation</p><p class="hb-text">When Antwerp fell to Spain in 1585, roughly half the city's population fled north to the new, Protestant Netherlands. Merchants, bankers, artists and craftsmen took their capital with them. Amsterdam became the new world financial capital — not because Amsterdam was better, but because Antwerp was closed. The Dutch provinces, now at war with Spain, closed the Scheldt river to shipping. No ships in. No ships out. For 210 years. From 1585 to 1795, when Napoleon finally opened the river again.</p></div>
<p>Think about it: 210 years. Antwerp, the world's trading capital, was not permitted to use its own river. While Amsterdam, London and Rotterdam flourished, Antwerp was stuck. The city's population fell from 100,000 to 40,000 in a decade.</p>
<p>But something survived. Portuguese and Spanish Jews — driven out of Iberia by the Inquisitors — had already found their way to Antwerp. They brought the diamond trade with them. And it stayed. Even when everything else left the city, the diamond merchants sat and cut and polished and traded. Today roughly 80% of the world's uncut diamonds still pass through Antwerp. A direct legacy from the refugees who came here and never left.</p>
<div class="drink-tip"><div class="dt-icon">🍺</div><div><p class="dt-label">Drink tip for this stop</p><p class="dt-text"><strong>A Bolleke De Koninck.</strong> "Bolleke" means "little dome" in Antwerp dialect — a reference to the round, dome-shaped glass the beer is served in. De Koninck was founded in 1827 and still brews in central Antwerp. Ordering a Bolleke here is not choosing a beer. It is saying you know where you are.</p></div></div>`
      },
      {
        name:      'Het Pomphuis',
        address:   'Hanzestedenplaats 1, Eilandje, Antwerpen',
        tag:       'Stop 4 of 4 · Final stop · Eilandje',
        drink:     '🍽️ Your drink here: Whatever you want — you have arrived',
        audioMin:  'approx. 4 min',
        nextLabel: null,
        mapNext:   'Route complete 🎉',
        mapLabel:  'Status',
        body: `
<div class="info-box" style="background:#fff8e1;border-left:3px solid #f59e0b;padding:14px 18px;margin-bottom:22px;font-size:.9rem;line-height:1.6;">
  <strong>⚠️ Temporary closure</strong><br>
  Het Pomphuis is currently temporarily closed. The Eilandje quarter has several good restaurants and bars along the docks — walk the quayside and pick what looks right.
</div>
<p>You are standing in front of a pumping machine. Not metaphorically — the building in front of you is a genuine industrial pumping station from 1920. The machinery is still there, visible through the windows, surrounding the dining room with engineering and evening lighting. It is called "het pomphuis" — the pump house.</p>
<p>And the pump house is there because Napoleon Bonaparte one day in 1795 ordered the Scheldt river to be opened again.</p>
<div class="pullquote"><p>"Napoleon visited Antwerp in 1803 and declared: 'I have decided to make Antwerp a pistol aimed at the heart of England.' He meant the harbour. He meant the river. He meant the freedom to sail out and back in again."</p></div>
<div class="history-box"><p class="hb-label">⚓ Napoleon's harbour and Antwerp's resurrection</p><p class="hb-text">Napoleon ordered the construction of two large docks in Antwerp — exactly the complex you can see out of the window right now: Willemdok and Bonapartedok. They were built between 1803 and 1811 by soldiers and forced labourers. It was not philanthropy — Napoleon wanted to use Antwerp as a naval base against the British. But the effect was permanent: the river was open, the harbour was new, and Antwerp began slowly to breathe again. Today Antwerp is Europe's second largest port measured in tonnage. Only Rotterdam is larger.</p></div>
<p>Eilandje — "the little island" — is the quarter around these docks. Until twenty years ago it was an abandoned industrial area. The Entrepotdok warehouse buildings stood empty. The quaysides were rusting. Then what always happens with such places began: artists came. Then cafés. Then restaurants. Then property developers. Today Eilandje is one of Antwerp's finest neighbourhoods. But the old fabric is not gone — it has become floors and ceilings and atmosphere.</p>
<p>A room built to move water, which was going to fill you with food and drink. That is not so far from what this city has always done: take what flows through it, and make something useful of it.</p>
<p style="font-style:italic;color:var(--muted);font-family:'Libre Baskerville',serif;">Walk the quayside and find your table. Antwerp is glad you found your way here.</p>`
      }
    ]
  },

  // ── BERGEN: GRIEG AND THE STAVE CHURCH ──────
  'bergen-kolstien': {
    title:    'Grieg and the Stave Church',
    kicker:   'Bergen · Day walk · 1–2 hours · From Kolstien, Landås',
    subtitle: "An hour's walk from Kolstien on Landås, through two of Bergen's most unlikely places: a stave church that burned down and was raised again — and a composer's home by a still lake.",
    meta: [
      ['3 stops',       'no bars'],
      ['Starts at',     'Kolstien, Landås'],
      ['Theme',         'Nature · Music · History'],
      ['GPS + Audio',   'guide']
    ],
    completion: 'You have walked Grieg and the Stave Church. From Kolstien on Landås, via Fantoft to Troldhaugen. One hour covering 900 years of Bergen history.',
    stops: [
      {
        name:      'Fantoft Stave Church',
        address:   'Fantoftvegen 38, Bergen — approx. 20 min from Kolstien',
        tag:       'Stop 1 of 3 · 20 min walk from Kolstien',
        drink:     null,
        audioMin:  'approx. 6 min',
        nextLabel: 'Next stop →',
        mapNext:   'Nordåsvannet · 15 min walk',
        mapLabel:  'Next stop',
        body: `
<p>What you see in front of you is not the original. But the story of why — and what happened on the night it burned — is perhaps more important than if it had stood untouched since the Middle Ages.</p>
<p>Fantoft Stave Church was built around the year 1150 in Fortun in the Sognefjord. It was one of thousands. In the Middle Ages Norway had between 1,300 and 2,000 stave churches — a completely unique building tradition in which the walls are made of vertical staves, not horizontal log timbers. They are technically daring, beautiful and partly mysterious. Of all those churches, only 28 remain today.</p>
<div class="pullquote"><p>"In 1883 the congregation in Fortun wanted to demolish the stave church and build something larger. Bergen consul Fredrik Gade heard about it, travelled there and bought the church. He transported it, plank by plank, to his property in Fantoft outside Bergen."</p></div>
<div class="history-box"><p class="hb-label">🔥 The night the church burned — 6 June 1992</p><p class="hb-text">At 2 a.m. on the night of 6 June 1992, Fantoft Stave Church burned down in under an hour. The fire was arson. Some months later, Varg Vikernes — known under the stage name Count Grishnackh from the black metal band Burzum — was arrested and eventually convicted of the murder of guitarist Euronymous and of a series of church arsons in Norway. Fantoft was one of them. The church was completely destroyed. Only the stone steps and the foundations remained. Five years later, reconstruction began, based on old drawings and photographs. In 1997 it stood there again.</p></div>
<p>Walk around the church. It is dark with tar — as all stave churches originally were. The tar protected against rot and rain, and gave the church the black, slightly menacing silhouette that became an icon of Norwegian medieval history. The dragon heads protruding from the roof are not mere decoration. They are a direct descendant of the Viking shipbuilding tradition — the same craft, the same hands, simply used for a house of God instead of a longship.</p>
<p>Stand for a moment. Look up toward the top. Think about the fact that this church rose twice: once in Fortun in 1150, once in Bergen in 1997. Some things refuse to disappear.</p>`
      },
      {
        name:      'Nordåsvannet',
        address:   'Nordåsvannet, Hop — along the shore path',
        tag:       'Stop 2 of 3 · 15 min walk from Fantoft',
        drink:     null,
        audioMin:  'approx. 4 min',
        nextLabel: 'Final stop: Troldhaugen →',
        mapNext:   'Troldhaugen · 10 min walk',
        mapLabel:  'Next stop',
        body: `
<p>You are now at Nordåsvannet. It looks like a lake. It is actually a fjord arm — the sea reaches in here, and the tides still govern the water level. High water in the morning, low water in the evening. The water is still regardless. It has always been still here.</p>
<p>The neighbourhood around it is partly called "Paradis" — Paradise. That is not a tourist name. It is what people have actually called it since the 1800s — probably because it is unusually sheltered and green, with water on all sides and mountains in the background. Bergensers who could afford to live outside the city centre came here. It was the closest one could get to rural peace without leaving Bergen.</p>
<div class="pullquote"><p>"Edvard Grieg discovered Nordåsvannet in 1884. He was 41 years old, had spent most of his life abroad, and was tired of renting rooms. He wanted a place of his own. The water, the forest and the silence helped him decide."</p></div>
<div class="history-box"><p class="hb-label">🎵 The lake that inspired the music</p><p class="hb-text">Nordåsvannet and the nature around Troldhaugen are not merely a backdrop for Grieg's life — they are directly present in the music. The "Lyric Pieces", which he wrote over more than 30 years, are full of Norwegian nature translated into notes: morning stillness, the movement of waves, the rustling of forest. Grieg himself said he did not compose music about nature — he translated nature into music. The difference is important. And this was the nature he had around him.</p></div>
<p>Find a place to stand by the water for one minute. Not to look at anything in particular — just to listen. It is quiet in a different way than elsewhere. The kind of stillness where sounds exist but do not disturb.</p>
<p>Grieg walked here. Every summer for over twenty years. You have ten minutes' walk left to the house where he lived, composed and was buried. The water you see now is the same water he saw from his living room window.</p>`
      },
      {
        name:      'Troldhaugen',
        address:   'Troldhaugveien 65, Bergen · Edvard Grieg\'s home',
        tag:       'Stop 3 of 3 · 10 min walk · Final stop',
        drink:     null,
        audioMin:  'approx. 6 min',
        nextLabel: null,
        mapNext:   'Route complete 🎉',
        mapLabel:  'Status',
        body: `
<p>Troldhaugen — Troll Hill. Grieg thought it a somewhat strange name, and he did not know who had called the place that. But he liked it. It suited something he had always had in his music: the slightly inexplicable, the thing that cannot quite be put into words.</p>
<p>He built the villa in 1885 and lived here every summer until his death in 1907. In winter he went on concert tours around Europe — he was an international star, performed for emperors and kings — and in summer he came back here, to the stillness and the water and the cabin.</p>
<div class="pullquote"><p>"Down by the water, a few metres from the villa, Grieg built himself a small composing hut. It is barely six square metres. This is where he really worked. This is where the music was made."</p></div>
<div class="history-box"><p class="hb-label">🪨 The grave in the rock</p><p class="hb-text">Edvard Grieg died on 4 September 1907 at Hotel Norge in Bergen, on his way to a concert tour in England. His last words are said to have been: "Well, if it must be." He and his wife Nina — who survived him by 28 years — are buried in a niche carved directly into the rock face beside Nordåsvannet, on the Troldhaugen estate. Not in a churchyard. Not beneath a cross. In the rock itself, with a view over the lake he loved. It is hard to see it without falling silent.</p></div>
<p>Walk down toward the water after you have seen the house and the hut. Find the grave in the rock. Look down at Nordåsvannet from there. You have now walked the same route Grieg walked — from the neighbourhood and the forest, to the water, to this point.</p>
<p>There is a café at Troldhaugen with a terrace overlooking the water. Sit down there. Order something. Stay a little longer than you planned.</p>
<div class="drink-tip"><div class="dt-icon">☕</div><div><p class="dt-label">End here</p><p class="dt-text"><strong>The café at Troldhaugen has a terrace overlooking Nordåsvannet.</strong> A coffee, a glass — whatever you like. You have walked 1 hour and 900 years of Bergen history. That deserves a pause where you are not about to move on.</p></div></div>
<p style="font-style:italic;color:var(--muted);font-family:'Libre Baskerville',serif;">Well walked. Grieg would have liked that someone took the time for this.</p>`
      }
    ]
  },


  // ── BERGEN: KOLSTIEN & LYSTGÅRDEN ──────────
  'kolstien-landaas': {
    title:    'Kolstien & Lystgården',
    kicker:   'Bergen · Landås · Historic day walk · 1 hour',
    subtitle: 'From an old mill valley to a bourgeois summer retreat and a church building on Kanonhaugen — one hour with the quiet history of Bergen.',
    meta: [
      ['4 stops',      'no bars'],
      ['Starts at',    'Kolstien, Landås'],
      ['Duration',     '1 hour · 3.5 km'],
      ['Level',        'Easy']
    ],
    completion: 'You have walked Kolstien & Lystgården. 4 stops. Møllendal, the bourgeois summer escape and Kanonhaugen — one hour and three hundred years.',
    stops: [
      {
        name:      'Kolstien',
        address:   'Kolstien, Landås, Bergen',
        tag:       'Starting point · Stop 1 of 4',
        drink:     null,
        audioMin:  'approx. 3 min',
        nextLabel: 'Next: Christie Mill →',
        mapNext:   'Christie Mill · 10 min south along Gimlevegen',
        mapLabel:  'Next stop',
        body: `
<p>The name Landås stretches back to the Middle Ages. "Landås" simply means "ridge by the road", and the area served as a natural passage between Bergen's inner valleys and the open terrain to the south. The farms here were in use well into the 1800s, and the quiet layout of private gardens and spacious plots is an echo of the old agricultural landscape.</p>
<div class="pullquote"><p>"Kolstien is a quiet cul-de-sac with an atmosphere that feels remote from central Bergen — even though you are only 15 minutes away."</p></div>
<p>You start here, walk down toward Gimlevegen and orient yourself toward the valley where the Møllendal stream runs. Notice the garden gates, the letter boxes with local names and the understated pride in the buildings.</p>
<p style="font-style:italic;color:var(--muted);">Walk slowly from here. The walk is not about the distance — it is about noticing.</p>`
      },
      {
        name:      'Christie Mill',
        address:   'Gimleveien 97, Bergen',
        tag:       'Stop 2 of 4 · 10 min walk',
        drink:     null,
        audioMin:  'approx. 5 min',
        nextLabel: 'Next: The Summer Estate →',
        mapNext:   'Kanonhaugen · 20 min up from the mill park',
        mapLabel:  'Next stop',
        body: `
<p>The mill bears the name of the Bergen family Christie — one of the city's most influential families in the seventeenth and eighteenth centuries. Prime Minister Wilhelm Frimann Koren Christie (1778–1849), known as one of the fathers of the Norwegian constitution and initiator of the University of Bergen, belonged to this family.</p>
<div class="pullquote"><p>"The original grain mill used the water power of the Møllendal stream to grind corn for Bergen's inhabitants — an everyday piece of infrastructure that is today almost forgotten."</p></div>
<div class="history-box"><p class="hb-label">📜 Møllendalen</p><p class="hb-text">The valley itself — Møllendal — is named after these very mills. In the 1800s people often walked here from central Bergen, and the valley became a popular excursion destination for the bourgeoisie, who sought peace away from the city's harbour and the dense medieval quarters.</p></div>
<p>The restored mill and the small park around it are among Bergen's most discreet hidden treasures. The stream still runs, and the sound of flowing water dominates completely — it is almost incredible that you are in the middle of a large city.</p>
<p>Notice the stone building, the waterwheel and the small waterfall. Imagine that this sound — water over stone — is the same sound people heard here 200 years ago, while they waited for their grain to be ground.</p>`
      },
      {
        name:      'Lystgården & the Rectory',
        address:   'Kanonhaugen 39, Bergen',
        tag:       'Stop 3 of 4 · Historic centrepiece',
        drink:     null,
        audioMin:  'approx. 6 min',
        nextLabel: 'Back to Kolstien →',
        mapNext:   'Bench at Kolstien · 20 min via Gimlevegen',
        mapLabel:  'Next stop',
        body: `
<p>The Lystgård on Kanonhaugen is one of the oldest preserved buildings in Landås and contains the entire social history of the district. These "lystgårder" — summer residences for the city's wealthy citizens — became common outside Bergen from the 1700s onward.</p>
<div class="pullquote"><p>"Citizens who could afford it fled from the city's crowding, smells and disease risk to the airier surroundings on the hillsides. Landås, with its south-facing slope and view over the valley, was a favoured spot."</p></div>
<p>The property changed hands many times through the 1800s and into the twentieth century. In recent times Lystgården has become an active cultural venue with urban farming, gardening courses, concerts and food events.</p>
<div class="history-box"><p class="hb-label">🏔 The name Kanonhaugen</p><p class="hb-text">The name Kanonhaugen is older than the church. It most likely refers to cannon positions or military activity on the hill, from a time when Bergen needed defence — perhaps from the 1700s when seafaring was full of pirates and war threats along the coast.</p></div>
<p>Right next to Lystgården stands Landås Church and the associated rectory — a red-painted timber building in the traditional Bergen style. The church served as a local centre of gravity, not just religiously but socially, for generations of Landås residents. The rectory's timber panelling is maintained with a quiet pride.</p>
<p>The garden at Lystgården is beautiful and well kept. From the property there is a view that reminds you that you are higher up than you might think.</p>`
      },
      {
        name:      'The Bench at Kolstien',
        address:   'Kolstien, Landås, Bergen',
        tag:       'Stop 4 of 4 · Final stop',
        drink:     null,
        audioMin:  'approx. 2 min',
        nextLabel: null,
        mapNext:   'Route complete 🎉',
        mapLabel:  'Status',
        body: `
<p>You are back where you started, but you are not the same person who left here an hour ago. You have walked through a mill valley that has ground corn for two hundred years. You have stood in the garden of a summer estate where the city's citizens sought respite from a city that never stood still. You have seen the rectory that has stood firm through generations of Landås's great and small events.</p>
<div class="pullquote"><p>"Bergen is not just seven mountains. It is all the valleys in between."</p></div>
<p>And you have walked all of it in one hour — without hurrying.</p>
<p>Find a bench. Say nothing. Look at the leaves or the sky. Let what has moved inside you settle.</p>
<p style="font-style:italic;color:var(--muted);">There is nothing more to do. Landås is one of the neighbourhoods Bergen forgets to show off — but those who walk through it slowly know what they have.</p>`
      }
    ]
  }

};
