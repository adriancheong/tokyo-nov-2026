/* ──────────────────────────────────────────────────────────────
   THE ITINERARY.  This is the only file you need to edit.

   To change the site:  edit this file  →  commit  →  push.
   GitHub rebuilds the page in about a minute.

   status can be one of:
     "booked"   — reserved, time is fixed, shows a filled mark
     "walkin"   — no reservation, just turn up
     "free"     — nothing planned, decide on the day
     "tbc"      — still being arranged

   Every field except `name` is optional. Leave anything out and
   the page simply won't render that line.
   ────────────────────────────────────────────────────────────── */

const TRIP = {
  city: "Tokyo",
  dates: "7–14 November 2026",
  standfirst:
    "Seven nights, four of us, built around lunch. Three meals are booked and timed — " +
    "miss those and they're gone. Everything else we decide on the day.",

  flights: [
    {
      dir: "Out",
      code: "SQ634",
      route: "Singapore to Haneda",
      date: "Saturday 7 November",
      depart: "14:05",
      arrive: "21:40",
    },
    {
      dir: "Back",
      code: "SQ633",
      route: "Haneda to Singapore",
      date: "Saturday 14 November",
      depart: "16:40",
      arrive: "23:25",
    },
  ],

  base: {
    name: "Aloft Tokyo Ginza",
    place: "ChIJSQCshp-LGGARKX8-7Kd-Hjs",
    address: "6-14-3 Ginza, Chuo-ku",
    tel: "03-6278-8122",
    note: "Ginza and Higashi-Ginza stations are both a few minutes away. Every walking time below is from here.",
  },

  // The two fixed commitments, surfaced at the top of the page.
  locked: [
    {
      day: "Sunday 8",
      time: "12:00",
      name: "Ginza Rangetsu",
      place: "ChIJt-74JeSLGGARLR-R9cf8H7o",
      note: "Be there by 12:30 at the latest — the table is released after 30 minutes.",
    },
    {
      day: "Monday 9",
      time: "11:30",
      name: "Tempura Kondo",
      place: "ChIJX2Mb_eWLGGARvhx7F4hr3FA",
      note: "Paid in advance. Nothing to settle on the day except drinks and extras.",
    },
    {
      day: "Friday 13",
      time: "18:00",
      name: "Yakitori Bird Land",
      place: "ChIJVby9v-WLGGARQv0iDzabeGo",
      note: "The one booked dinner. A basement counter, paced together, so don't be late.",
    },
  ],

  days: [
    /* ── SATURDAY — ARRIVAL ─────────────────────────────────── */
    {
      dow: "Saturday",
      date: "7",
      month: "Nov",
      area: "Landing, and getting to Ginza",
      meals: [
        {
          slot: "Arrive",
          time: "21:40",
          name: "SQ634 lands at Haneda",
          place: "ChIJEzipOlRhGGAR3-3UwuMqAnI",
          dish: "Terminal 3",
          status: "travel",
          notes: [
            "Clearing immigration and baggage on a Saturday night usually takes half an hour to an hour.",
            "Filling in Visit Japan Web before flying gets you through immigration noticeably faster.",
          ],
        },
        {
          slot: "Then",
          name: "Keikyu Airport Line to Higashi-Ginza",
          place: "ChIJK2bxJueLGGARwHHeH52hGiM",
          dish: "Direct, no changes, 31 minutes",
          status: "travel",
          notes: [
            "The platform is in the basement of Terminal 3, signposted from arrivals.",
            "Board anything showing Higashi-Ginza, Asakusa, Oshiage or Narita as its destination — those run straight through onto the Toei Asakusa Line. Avoid trains terminating at Shinagawa unless you fancy changing.",
            "¥547 each with an IC card. Last train of the night leaves at 23:48, so there's nearly two hours of slack.",
            "Higashi-Ginza is four minutes' walk from the hotel.",
          ],
          why: "A taxi is about ¥8,000–10,000 and barely quicker, plus a 20% surcharge after 22:00.",
        },
        {
          slot: "At check-in",
          name: "Ask the desk about tomorrow's lunch",
          status: "free",
          notes: [
            "The mobile number given to Ginza Rangetsu may not have gone in cleanly, so ask the front desk to ring them in the morning and confirm the 12:00 table for four. Leave the hotel's own number as the contact while you're at it.",
            "Then nothing planned. There's a konbini on every corner if anyone's hungry, and the hotel has a rooftop bar.",
          ],
        },
      ],
    },

    /* ── SUNDAY ─────────────────────────────────────────────── */
    {
      dow: "Sunday",
      date: "8",
      month: "Nov",
      area: "Ginza in the morning, then Asakusa and Skytree",
      meals: [
        {
          slot: "Lunch",
          time: "12:00",
          name: "Ginza Rangetsu",
          place: "ChIJt-74JeSLGGARLR-R9cf8H7o",
          jp: "銀座らん月",
          dish: "Sukiyaki and shabu-shabu",
          status: "booked",
          walk: "7 minutes from the hotel",
          tel: "03-3567-1021",
          notes: [
            "A table is held for four. No course was pre-ordered and nothing has been paid — we choose at the table and settle there.",
            "Be there by 12:30. They release the table if we're more than 30 minutes late.",
            "The restaurant may telephone beforehand to confirm, and if they can't reach anyone they're entitled to cancel.",
            "Ask the hotel front desk to ring them and confirm — Rangetsu answers from about 11:00, so it can be done while we're getting ready. Worth doing even if nothing has gone wrong.",
          ],
          menu: {
            label: "What to order",
            intro: "Prices are per person and already include tax and service.",
            items: [
              { name: "Sukiyaki and shabu-shabu together", price: "¥8,000 / ¥9,000", pick: true,
                note: "Both preparations in one sitting. The one to get." },
              { name: "Shabu-shabu only", price: "¥8,000 / ¥9,000" },
              { name: "A5 wagyu sets — curry, mizore-yaki, kakuni", price: "¥2,200–2,600",
                note: "The light option if nobody's especially hungry." },
            ],
            footnote: "The ¥9,000 Hana course is weekdays only, so it won't be available on a Sunday.",
          },
        },
        {
          slot: "Evening",
          name: "Sometarō",
          place: "ChIJR6VxAL-OGGARDytTRfiKddE",
          jp: "染太郎",
          dish: "Okonomiyaki you cook yourself",
          status: "walkin",
          where: "Asakusa",
          notes: [
            "A rickety old wooden house with griddles set into the tables. There's an instruction sheet in English.",
            "Bring cash — they don't take cards. Around ¥2,000 each.",
            "Open until 20:30.",
          ],
          why: "Sunday is the only evening this works — it shuts on Tuesdays and Wednesdays.",
        },
      ],
    },

    /* ── MONDAY ─────────────────────────────────────────────── */
    {
      dow: "Monday",
      date: "9",
      month: "Nov",
      area: "Ginza and Nihonbashi",
      aside: "Most museums close on Mondays, so this is the shopping day.",
      meals: [
        {
          slot: "Lunch",
          time: "11:30",
          name: "Tempura Kondo",
          place: "ChIJX2Mb_eWLGGARvhx7F4hr3FA",
          jp: "てんぷら近藤",
          dish: "Tempura, two Michelin stars",
          status: "booked",
          stars: 2,
          walk: "5 minutes from the hotel",
          tel: "03-5568-0923",
          notes: [
            "Counter seats for four, booked through My Concierge Japan.",
            "The Sumire course at ¥13,200 each, paid in full in advance. Only drinks and anything extra to settle on the day.",
            "Order the sweet potato separately — it isn't part of the course and it's the thing people remember.",
            "We should be finished by about 13:30.",
          ],
          why: "Dinner here runs ¥20,000–30,000 a head. Same kitchen at lunch for roughly half.",
        },
        {
          slot: "Evening",
          name: "Yurakucho yokocho",
          place: "ChIJM_v5qe-LGGAR68d7A7lCGjg",
          dish: "Izakaya under the railway arches",
          status: "walkin",
          walk: "10 minutes from the hotel",
          notes: [
            "A row of small bars and grills packed under the train tracks. Pick whichever looks busiest.",
            "Most stalls add a cover charge of ¥300–500 a head.",
          ],
        },
      ],
    },

    /* ── TUESDAY ──────────────────────────────────────────────
       Rebuilt around the midday break: out in the morning, back
       to Ginza for lunch and a rest, out again after 16:30.
       Shibuya by day, Akihabara once the neon is on.
       ──────────────────────────────────────────────────────── */
    {
      dow: "Tuesday",
      date: "10",
      month: "Nov",
      area: "Shibuya and Harajuku, then Akihabara after dark",
      aside: "Two trips out with a rest in between. Lunch is back near the hotel on purpose, so nobody has to push through the afternoon.",
      meals: [
        {
          slot: "Morning",
          time: "From 10:00",
          name: "Meiji Jingu",
          place: "ChIJ5SZMmreMGGARcz8QSTiJyo8",
          jp: "明治神宮",
          dish: "A forest shrine, one minute from Harajuku station",
          status: "walkin",
          where: "Ginza line to Omotesando, or the Yamanote to Harajuku",
          notes: [
            "Free to enter. Open 06:10 to 16:10 — it shuts at dusk, so it has to be a morning.",
            "Flat gravel paths, but it is a ten-minute walk through the trees from the gate to the shrine itself, and ten back.",
            "The Inner Garden is ¥500 ≈ S$4 if anyone wants somewhere quiet to sit down.",
          ],
          why: "The calm half of the day before Takeshita-dori, which is the opposite of calm.",
        },
        {
          slot: "Morning",
          name: "Shibuya Scramble Crossing",
          place: "ChIJK9EM68qLGGARacmu4KJj5SA",
          dish: "Takeshita-dori and Omotesando on the way down",
          status: "walkin",
          notes: [
            "Shibuya's indoor side is the wet-weather answer: Scramble Square, Hikarie, Parco, Mark City all connect without going outside.",
            "The crossing itself only needs ten minutes, and it is better after dark anyway — so no loss today.",
          ],
        },
        {
          slot: "Lunch",
          time: "Arrive 13:00",
          name: "Yoshizawa, Meat Corner",
          place: "ChIJSwkySuGLGGAR7d8pgQ6CbrU",
          jp: "銀座吉澤 肉処",
          dish: "A5 wagyu, from the butcher's own counter",
          status: "walkin",
          where: "Second floor, Ginza 1-20-8",
          walk: "8 minutes from the hotel",
          tel: "03-3542-2981",
          notes: [
            "Walk in for the beef set at around ¥2,990 ≈ S$24. Expect roughly fifteen minutes in the queue.",
            "The restaurant is owned by a butcher, which is why the price is what it is.",
            "Booking online is possible but only opens up ¥8,000 courses — four times the price for the same kitchen. Not worth it.",
          ],
          why: "It is back by the hotel, which is the point — eat, then go up and rest.",
        },
        {
          slot: "Rest",
          time: "14:30 – 16:15",
          name: "Back to the hotel",
          status: "free",
          notes: ["Nothing planned. The evening is a single train from the door."],
        },
        {
          slot: "Evening",
          time: "From 16:35",
          name: "Akihabara, lit",
          status: "walkin",
          where: "Hibiya line direct from Higashi-Ginza, about ten minutes",
          notes: [
            "Sunset is around 16:35, so the neon is on by the time we arrive. The cloud breaks after 16:00 and the sky is forecast clear by 19:00.",
            "Yodobashi runs to 22:00, the arcades later, Don Quijote never closes.",
          ],
          why: "Akihabara is worth seeing after dark rather than in flat daylight — which is why it moved to the evening.",
        },
        {
          slot: "Dinner",
          name: "Ponta Honke",
          place: "ChIJTYnOCaCOGGARjM8rCZP-tsA",
          jp: "ぽん多本家",
          dish: "Tonkatsu, serving since 1905",
          status: "walkin",
          where: "Ueno — two stops up the Yamanote from Akihabara, about five minutes",
          tel: "050-5492-8353",
          notes: [
            "Usually about a ten-minute wait. Open until 20:20, so go before the shops.",
            "Skip the fried prawn — it's sold at market price and a single one can come to over ¥4,000 ≈ S$32.",
          ],
          why: "Closed Mondays and Fridays, so tonight is one of only three evenings left that it can happen.",
          fallback: {
            label: "Or stay in Akihabara",
            text: "Kanda Yabu Soba is a ten-minute walk away and open until 20:30 — buckwheat soba since 1880, and no second train.",
          },
        },
      ],
    },

    /* ── WEDNESDAY ────────────────────────────────────────────
       Decided: Kamakura. The fork is resolved, Shinjuku dropped.
       This is the one day that can't have a midday break, so the
       rest is built into the day instead — Green Car both ways,
       a long lunch, and a terrace at Hasedera.
       ──────────────────────────────────────────────────────── */
    {
      dow: "Wednesday",
      date: "11",
      month: "Nov",
      area: "Kamakura — the coast and the temples",
      aside: "15°C and dry. The one day we can't come back to rest at midday, so the sitting-down is built in: a reserved seat on the train both ways, an unhurried lunch, and a terrace at Hasedera. Nothing here is compulsory — if the afternoon runs out of legs, the coast is the bit to drop.",
      meals: [
        {
          slot: "Getting there",
          time: "Leave 08:45",
          name: "Ginza → Kamakura",
          place: "ChIJwX2sK8JFGGARG8fO9m2xiYw",
          status: "travel",
          where: "Marunouchi line one stop to Tokyo Station, then the JR Yokosuka line straight through to Kamakura",
          notes: [
            "About 75 minutes door to door on a good run; allow 95 if we miss the connection at Tokyo.",
            "¥950 ≈ S$7.70 each way, so roughly ¥7,600 ≈ S$61 for the four of us return.",
            "Suica covers all of it — the JR line, the Enoden, everything. No special ticket to buy.",
            "This is a JR line, so it has to be Suica. A contactless credit card will not open the gates.",
          ],
          why: "Later start than a normal Kamakura day. There's no early auction to catch and nothing opens before 09:00, so there's no reason to be up at six.",
          fallback: {
            label: "Worth paying for the Green Car",
            text:
              "Cars 4 and 5 on the Yokosuka line are double-decker Green Cars — reclining 2+2 seats, far more legroom, and quiet. ¥1,000 ≈ S$8 each way per person if the ticket goes onto an IC card, or ¥1,260 ≈ S$10 for a paper one. Suica, PASMO, Kitaca and TOICA all work, so Mum's PASMO is fine. Use a ticket machine showing the IC logo, choose Green Ticket, insert the card — buying a paper ticket, or buying from the attendant on board, costs ¥260 more either way. Then tap the reader in the ceiling above the seat and wait for the light to go red to green. On a day with no afternoon rest, two hours in a proper seat is the best money we will spend.",
          },
        },
        {
          slot: "Morning",
          time: "10:30",
          name: "Tsurugaoka Hachiman-gu",
          place: "ChIJiaqQeLhFGGARtTZQEBCtZ6g",
          jp: "鶴岡八幡宮",
          dish: "The shrine at the head of the town",
          status: "walkin",
          where: "Ten minutes up Komachi-dori from the station",
          notes: [
            "Free, open 06:00 to 20:00.",
            "Walk up through Komachi-dori rather than the main avenue — it's the street of snack stalls and ceramics shops, and much the nicer approach.",
            "There's a long flight of stone steps at the top. The view is worth it, but the lower courtyard is the same shrine without the climb, and there are benches.",
          ],
        },
        {
          slot: "Lunch",
          time: "12:00",
          name: "Wasai Yakura",
          place: "ChIJV6mCIcFFGGARbZC923RqZc8",
          dish: "Shirasu — whitebait, raw or boiled, over rice",
          status: "walkin",
          where: "Komachi-dori, second floor",
          notes: [
            "Open 11:00 to 21:00, including Wednesdays. English menu by QR code.",
            "Around ¥2,000–2,500 ≈ S$16–20 a head.",
            "Raw shirasu depends on whether the boats went out that morning. Boiled is always on, and is the better of the two anyway.",
          ],
          why: "Shirasu is the thing Kamakura is known for eating, and it doesn't travel — it's a coast dish. Take an hour over it; this is the day's real rest stop.",
          fallback: {
            label: "If it's full",
            text: "Komachi-dori is wall-to-wall alternatives and most of them do shirasu. Note that Sometaro's Kamakura branch is closed on Wednesdays, so that one is out.",
          },
        },
        {
          slot: "Afternoon",
          time: "13:30",
          name: "The Enoden to Hase",
          status: "travel",
          notes: [
            "A single-track tram that runs between people's back gardens and then along the sea wall. Two stops, about five minutes.",
            "Fares ¥200–310 a leg and Suica works. The ¥800 day pass only pays if we hop on and off more than three times, which we won't — so just tap.",
          ],
        },
        {
          slot: "Afternoon",
          time: "13:45",
          name: "Kotoku-in",
          place: "ChIJBbxJ3_JFGGARTO9rLbCTwx4",
          jp: "高徳院",
          dish: "The Great Buddha — thirteen metres of bronze, cast in 1252",
          status: "walkin",
          where: "Seven minutes' walk from Hase station",
          notes: [
            "¥300 ≈ S$2.40, open 08:00 to 16:45.",
            "It has sat in the open air since a tsunami carried off the hall around it in 1498.",
            "¥50 more to go inside the statue — a short, hot, steep staircase, and entirely optional.",
          ],
        },
        {
          slot: "Afternoon",
          time: "14:45",
          name: "Hasedera",
          place: "ChIJ1SdxB_RFGGAR0a33ulBh61c",
          jp: "長谷寺",
          dish: "Hillside temple on a terrace over Sagami Bay",
          status: "walkin",
          where: "Five minutes' walk back down from the Great Buddha",
          notes: [
            "¥400 ≈ S$3.20, open 08:00 to 17:00.",
            "The nine-metre eleven-headed Kannon is the draw, but the terrace and the view out over the bay are what people remember.",
            "There's a café on the terrace. This is the second place in the day to sit down properly, and worth using.",
          ],
          why: "The best view in Kamakura, and it comes with somewhere to sit.",
        },
        {
          slot: "Late afternoon",
          time: "From 16:00",
          name: "The coast, by tram",
          status: "travel",
          notes: [
            "Carry on west from Hase to Kamakurakokomae, where the level crossing opens straight onto the sea.",
            "Sunset is at 16:38. On a clear afternoon Fuji sits right across the bay — and tomorrow is forecast dry.",
            "It will be cold by then, around 8°C with wind off the water. Coats on before we get on the tram.",
          ],
          fallback: {
            label: "The bit to drop",
            text:
              "If anyone has had enough by four o'clock, this is the part to skip without regret. Go straight back to Kamakura station from Hase and get an earlier train — the day still holds together.",
          },
        },
        {
          slot: "Getting back",
          time: "From 17:15",
          name: "Kamakura → Ginza",
          status: "travel",
          notes: [
            "Back the way we came: JR Yokosuka line to Tokyo Station, Marunouchi line one stop to Ginza. In the hotel by about 18:45.",
            "Green Car again for the way home — worth it more on the return than the outbound.",
            "Nothing booked for dinner. Ginza, or room service and an early night, depending on how the legs are holding up.",
          ],
        },
      ],
    },

    /* ── THURSDAY ─────────────────────────────────────────────
       Yanaka and Ueno merged — they're one stop apart on the JR,
       not a separate trip. Runs north to south so the day ends
       at the station we leave from.
       ──────────────────────────────────────────────────────── */
    {
      dow: "Thursday",
      date: "12",
      month: "Nov",
      area: "Yanaka and Ueno, then Roppongi",
      aside: "18°C and dry — the best weather of the week, and both of these are outdoor. North to south with no backtracking, then home to rest before the lights.",
      meals: [
        {
          slot: "Getting there",
          time: "Leave 09:45",
          name: "Ginza → Nippori",
          status: "travel",
          where: "Hibiya line to Ueno, then one stop on the JR Yamanote to Nippori",
          notes: [
            "About 25 minutes. Nippori, not Ueno, is the way into Yanaka — the west exit comes out at the top of the Yūyake Dandan steps and the shotengai starts at the bottom.",
          ],
        },
        {
          slot: "Morning",
          time: "10:15",
          name: "Yanaka",
          status: "walkin",
          dish: "Old Tokyo — a shotengai and cemetery lanes",
          notes: [
            "Yanaka Ginza is a street of croquette and menchi-katsu stalls, the one bit of low-rise pre-war Tokyo left in easy reach.",
            "Flat and small. An hour and a half covers it comfortably.",
            "Snacks here are the point — go easy, Izuei is an hour away.",
          ],
        },
        {
          slot: "Lunch",
          time: "12:15",
          name: "Izuei Honten",
          place: "ChIJDz-xgyCMGGARTTlkSDiqvr8",
          jp: "伊豆栄 本店",
          dish: "Unagi — grilled freshwater eel",
          status: "walkin",
          where: "Beside Shinobazu Pond, Ueno. One stop back down the JR from Nippori",
          tel: "03-3831-0954",
          notes: [
            "Three hundred years old, several floors, English menus. Around ¥4,000 ≈ S$32 for lunch.",
            "Go in and take a ticket number at the podium rather than waiting outside — people miss this and queue needlessly.",
            "The wait runs anywhere from 10 to 45 minutes depending purely on when you arrive.",
          ],
          fallback: {
            label: "If the queue looks bad",
            text: "Two more Izuei branches sit within five minutes' walk, both open Thursdays — Shinobazu-tei at around ¥3,240, and Umekawa-tei at around ¥6,000 with park views and tatami seating. Same family, same recipe.",
          },
        },
        {
          slot: "Afternoon",
          time: "13:45",
          name: "Ueno Park",
          place: "ChIJw2qQRZuOGGARWmROEiM2y7E",
          jp: "上野恩賜公園",
          dish: "The pond loop, on the way back to the station",
          status: "walkin",
          notes: [
            "Flat and easy, and it points at Ueno station rather than away from it.",
            "Ueno Zoo is here if anyone wants it — ¥600 ≈ S$4.85, ¥300 ≈ S$2.40 for over-65s, last entry 16:00.",
            "The Tokyo National Museum is also here, but two hours does it justice and we won't have two hours. Leave it.",
          ],
        },
        {
          slot: "Rest",
          time: "14:45 – 16:45",
          name: "Back to the hotel",
          status: "free",
          notes: ["Hibiya line straight home from Ueno. Roppongi is ten minutes from the door later."],
        },
        {
          slot: "Evening",
          time: "From 17:00",
          name: "Keyakizaka Illumination",
          place: "ChIJ7Rjf0y2LGGARVVHPQ5hKaqc",
          jp: "けやき坂イルミネーション",
          dish: "Roppongi Hills Christmas lights",
          status: "walkin",
          where: "Hibiya line direct from Higashi-Ginza to Roppongi, about ten minutes, then eight minutes on foot",
          notes: [
            "Free. Runs 5 November to 25 December, lit from 17:00 until late.",
            "Blue-white lights the length of the slope with Tokyo Tower framed at the bottom — that view is the reason people come.",
            "Weekday evenings are much calmer than weekends, and it is still early in the season.",
          ],
          fallback: {
            label: "Dinner after",
            text: "Nothing booked. Roppongi Hills is full of places, or come back down the Hibiya line and eat in Ginza.",
          },
        },
      ],
    },

    /* ── FRIDAY ───────────────────────────────────────────────
       teamLab is off and Yanaka moved to Thursday, so the
       daytime is genuinely open. Bird Land at 18:00 is the only
       fixed point left in the week.
       ──────────────────────────────────────────────────────── */
    {
      dow: "Friday",
      date: "13",
      month: "Nov",
      area: "Open, then Ginza",
      aside: "The last full day and deliberately empty. One booking at 18:00 and a six-minute walk home from it.",
      meals: [
        {
          slot: "Morning",
          name: "Nothing planned",
          status: "free",
          notes: [
            "Ginza is on the doorstep for anything still unbought — and the tax-free refund now happens at the airport, so Saturday's purchases work the same way.",
            "Toyosu and teamLab were the other candidate for this morning and are no longer happening.",
          ],
        },
        {
          slot: "Lunch",
          name: "Sushi — the one thing missing from the week",
          place: "ChIJVVXlVe-LGGARYiyj90sLc3g",
          dish: "Sushi no Midori, Ginza — if we want the value option",
          status: "tbc",
          where: "Ginza 7-chome, under the expressway",
          tel: "03-5568-1212",
          notes: [
            "Open 11:00 to 14:00. Price level is the lowest of any sushi counter in Ginza and the portions are famously oversized — the whole-anago nigiri is the signature.",
            "The catch is the queue: 60 to 90 minutes if we turn up at noon. Arriving at 11:00 opening is the entire trick, same as Izuei.",
            "Some recent reviews say the cuts have got smaller than they used to be. Still good value, no longer a revelation.",
          ],
          why: "Across the whole week we eat sukiyaki, tempura, tonkatsu, shirasu, unagi and yakitori — and no sushi at a counter. Saturday's Tsukiji is grazing, not the same thing.",
          fallback: {
            label: "Or book rather than queue",
            text:
              "Ginza Sushi Sakura rates 5.0 across 787 reviews and the chefs work in English, but it's a reservation place and a different price bracket. Ginza Sushi Roku, inside the Courtyard Marriott, is reservation-only too and reviewers rate its lunch as the best value in the area. Either needs a phone call today.",
          },
        },
        {
          slot: "Rest",
          time: "Afternoon",
          name: "Back to the hotel",
          status: "free",
          notes: ["Bird Land is paced as a counter, so it is worth arriving unhurried."],
        },
        {
          slot: "Dinner",
          time: "18:00",
          name: "Yakitori Bird Land",
          place: "ChIJVby9v-WLGGARQv0iDzabeGo",
          jp: "バードランド",
          dish: "Yakitori omakase at a basement counter",
          status: "booked",
          where: "Tsukamoto Sozan Building, basement, Ginza 4-2-15",
          walk: "6 minutes from the hotel",
          tel: "03-5250-1081",
          notes: [
            "Table for four, booked through Reserve with Google.",
            "It's genuinely hard to find — a basement under an ordinary office building with little signage. Look for the Tsukamoto Sozan Building and head down.",
            "The counter is paced together, so arriving late means missing courses.",
          ],
          why: "The last proper dinner of the trip, and a six-minute walk home afterwards.",
          fallback: {
            label: "Lights afterwards, if anyone has the legs",
            text: "The Marunouchi illumination runs the length of Naka-dori — about ten minutes' walk from the restaurant, and on the way to nothing, which is rather the charm of it.",
          },
        },
      ],
    },

    /* ── SATURDAY ───────────────────────────────────────────── */
    {
      dow: "Saturday",
      date: "14",
      month: "Nov",
      area: "Flying home",
      meals: [
        {
          slot: "Morning",
          time: "From 09:00",
          name: "Tsukiji Outer Market",
          place: "ChIJW2cLzSGLGGARXAKXv6EkbqI",
          jp: "築地場外市場",
          dish: "Sashimi, grilled scallops, tamagoyaki, knives",
          status: "walkin",
          walk: "10 minutes from the hotel",
          notes: [
            "Bring cash. Many of the stalls don't take cards.",
            "It empties out quickly after nine. We'll be done by noon.",
          ],
        },
        {
          slot: "Then",
          time: "Leave by 13:00",
          name: "Higashi-Ginza to Haneda",
          place: "ChIJEzipOlRhGGAR3-3UwuMqAnI",
          dish: "Same train back, direct, 31 minutes",
          status: "travel",
          notes: [
            "Walk to Higashi-Ginza, take anything bound for Haneda Airport, stay on to Terminal 3. ¥547 each.",
            "Leaving at 13:00 puts us at the terminal around 13:45, just under three hours before the flight. 13:15 is the latest I'd cut it with four people and luggage.",
            "Check out and leave the bags with the front desk in the morning if we want the Tsukiji trip unencumbered.",
          ],
        },
        {
          slot: "Fly",
          time: "16:40",
          name: "SQ633 to Singapore",
          dish: "Lands 23:25",
          status: "travel",
        },
      ],
    },
  ],

  // A card after the week, for anything not yet fixed to a day.
  // Set to null to hide the section entirely.
  floating: null,

  closures: [
    { name: "Sometarō", closed: "Tuesday, Wednesday. No Friday evening service." },
    { name: "Kanda Yabu Soba", closed: "Wednesday" },
    { name: "Kappo Nakajima", closed: "Sunday, Monday" },
    { name: "Konjiki Hototogisu", closed: "Sunday, Monday" },
    { name: "Yakitori Bird Land", closed: "Sunday, Monday" },
    { name: "Yoshizawa", closed: "Sunday" },
    { name: "Ponta Honke", closed: "Monday, Friday" },
    { name: "Tempura Kondo", closed: "Sunday" },
    { name: "Izuei Honten", closed: "Open every day" },
    { name: "Ginza Rangetsu", closed: "Open every day" },
  ],

  phones: [
    { name: "Aloft Tokyo Ginza", tel: "03-6278-8122" },
    { name: "Ginza Rangetsu", tel: "03-3567-1021" },
    { name: "Tempura Kondo", tel: "03-5568-0923" },
    { name: "Izuei Honten", tel: "03-3831-0954" },
    { name: "Ponta Honke", tel: "050-5492-8353" },
    { name: "Kappo Nakajima", tel: "03-3356-4534" },
    { name: "Yoshizawa", tel: "03-3542-2981" },
    { name: "Yakitori Bird Land", tel: "03-5250-1081" },
  ],

  footnotes: [
    "Every journey on this trip is Tokyo Metro, Toei or Keikyu, all of which now take a contactless card tapped straight on the gate. No ticket, no queue. Nothing here needs a JR line, which is the one network that still doesn't accept cards.",
    "Still worth having a Suica, on your phone or as a card — it pays at convenience stores, vending machines and station lockers, which a bank card won't always do.",
    "Carry cash. Sometarō and most of the Tsukiji stalls don't take cards, and plenty of smaller places still don't either.",
    "Prices are per person, in yen. Japanese restaurant prices have moved a good deal lately, so treat them as the right ballpark rather than gospel.",
    "Cancelling late in Japan is expensive — often the full amount on the day, about half the day before.",
    "Lunch is deliberate. The same kitchens charge somewhere between half and a fifth of their dinner prices at midday.",
  ],
};
