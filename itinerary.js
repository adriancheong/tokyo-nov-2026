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

    /* ── TUESDAY ────────────────────────────────────────────── */
    {
      dow: "Tuesday",
      date: "10",
      month: "Nov",
      area: "Ueno Park and Yanaka",
      meals: [
        {
          slot: "Lunch",
          time: "Arrive 11:00",
          name: "Izuei Honten",
          place: "ChIJDz-xgyCMGGARTTlkSDiqvr8",
          jp: "伊豆栄 本店",
          dish: "Unagi — grilled freshwater eel",
          status: "walkin",
          where: "Beside Shinobazu Pond, Ueno",
          tel: "03-3831-0954",
          notes: [
            "Three hundred years old, several floors, English menus. Around ¥4,000 for lunch.",
            "Go in and take a ticket number at the podium rather than waiting outside — people miss this and queue needlessly.",
            "Getting there at opening matters. The wait runs anywhere from 10 to 45 minutes depending purely on when you arrive.",
            "They take bookings by telephone only, no online form.",
          ],
          fallback: {
            label: "If the queue looks bad",
            text: "Two more Izuei branches sit within five minutes' walk, both open on Tuesdays — Shinobazu-tei at around ¥3,240, and Umekawa-tei at around ¥6,000 with park views and tatami seating. Same family, same recipe.",
          },
        },
        {
          slot: "Evening",
          name: "Ponta Honke",
          place: "ChIJTYnOCaCOGGARjM8rCZP-tsA",
          jp: "ぽん多本家",
          dish: "Tonkatsu, serving since 1905",
          status: "walkin",
          where: "Ueno",
          tel: "050-5492-8353",
          notes: [
            "Usually about a ten-minute wait. Open until 20:20.",
            "Skip the fried prawn — it's sold at market price and a single one can come to over ¥4,000.",
          ],
        },
      ],
    },

    /* ── WEDNESDAY ──────────────────────────────────────────────
       The only day of the week with nothing booked, so it is the
       only day we can swap wholesale. Both versions below are
       complete; `fork` replaces `meals` for this day.
       ────────────────────────────────────────────────────────── */
    {
      dow: "Wednesday",
      date: "11",
      month: "Nov",
      area: "Shinjuku — or the coast at Kamakura",
      fork: {
        note:
          "Nothing on Wednesday is reserved, which makes it the one day we can change our minds without losing a table. " +
          "The two come to roughly the same money, so it isn't a question of cost — it's a question of whether we want " +
          "a day out of Tokyo. Kamakura wants an 08:00 start and eats the whole day. Shinjuku starts whenever we wake up. " +
          "Decide the night before.",
        options: [
          /* ── either: the original plan ─────────────────────── */
          {
            lead: "Either",
            title: "Shinjuku",
            sub: "As first planned",
            gist:
              "A one-star lunch for about the price of a sandwich, then neon and grill smoke after dark. Fifteen minutes " +
              "from the hotel on the Marunouchi line and no early start. The gap in the afternoon fills itself: the " +
              "observatory on the 45th floor of the Metropolitan Government Building is free and takes walk-ins, and " +
              "Shinjuku Gyoen is a ten-minute walk the other way if anyone wants somewhere to sit down.",
            meals: [
              {
                slot: "Lunch",
                time: "Arrive 11:30",
                name: "Kappo Nakajima",
                place: "ChIJi5oUHduMGGARtCDZOFfeJas",
                jp: "新宿割烹 中嶋",
                dish: "Sardines, a Michelin star",
                status: "walkin",
                stars: 1,
                where: "Basement of the Nichihara Building, one minute from exit E9 at Shinjuku-sanchome",
                tel: "03-3356-4534",
                notes: [
                  "Ask for the sardine sets rather than the course — the sets need no booking and they're what the place is famous for.",
                  "English menus, and you can order while still in the queue, so it moves faster than it looks.",
                  "Last orders for the sets at 13:45.",
                  "Marunouchi line runs direct from Ginza.",
                ],
                why: "One of the cheapest starred meals in Tokyo.",
              },
              {
                slot: "Evening",
                name: "Omoide Yokocho",
                place: "ChIJP9eKBdeMGGAR0zzBXJNVj5A",
                dish: "Yakitori alley, or ramen nearby",
                status: "walkin",
                notes: [
                  "Narrow lanes of tiny grills by Shinjuku station.",
                  "Alternatively Konjiki Hototogisu for clam and truffle ramen, around ¥1,500. Get there by 18:15 and take a ticket — evening service runs only from 18:30 to 21:00.",
                ],
              },
            ],
            cautionLabel: "The trade",
            caution:
              "Nothing is lost by staying — every booking this week survives either way. But Wednesday is the only " +
              "clear day we have, so this is also the one chance to see something that isn't Tokyo, and we'd be " +
              "spending it fifteen minutes from the hotel.",
            tally: [
              { label: "Trains, return", value: "¥400 ≈ S$3" },
              { label: "Lunch, sardine sets", value: "¥2,500 ≈ S$20" },
              { label: "Supper, yakitori or ramen", value: "¥1,500–3,000 ≈ S$12–24" },
              { label: "A head", value: "¥4,400–5,900 ≈ S$36–48", sum: true },
            ],
          },

          /* ── or: the day out ───────────────────────────────── */
          {
            lead: "Or",
            title: "Kamakura",
            sub: "An hour down the coast",
            gist:
              "The old capital, eight hundred years of it, on a bay facing Mount Fuji. Temples in the morning, whitebait " +
              "for lunch, then a single-track tram along the sea wall as the light goes. A Wednesday in November means " +
              "no weekend crowds and no queues — the leaves don't really turn until the end of the month, so we'd be " +
              "going for the coast and the temples rather than the colour.",
            meals: [
              {
                slot: "Getting there",
                time: "08:00",
                name: "Ginza → Kamakura",
                status: "travel",
                where: "Marunouchi line one stop to Tokyo Station, then the JR Yokosuka line straight through",
                notes: [
                  "About 75 minutes door to door on a good run; allow 95 if we miss the connection at Tokyo.",
                  "¥950 ≈ S$7.70 each way, so ¥7,600 ≈ S$61 for the four of us return.",
                  "This is a JR line, so it needs Suica — a contactless credit card will not open the gates.",
                  "Leaving at 08:00 puts us at the shrine before the coach parties.",
                ],
              },
              {
                slot: "Morning",
                time: "09:30",
                name: "Tsurugaoka Hachiman-gu",
                place: "ChIJiaqQeLhFGGARtTZQEBCtZ6g",
                jp: "鶴岡八幡宮",
                dish: "The shrine at the head of the town",
                status: "walkin",
                where: "Ten minutes up Komachi-dori from the station",
                notes: [
                  "Free, and open from 06:00 to 20:00.",
                  "Walk up through Komachi-dori rather than the main avenue — it's the street of snack stalls and ceramics shops, and it is the nicer approach.",
                  "There is a long flight of stone steps at the top. The view is worth it, but the lower courtyard is the same shrine without the climb.",
                ],
              },
              {
                slot: "Lunch",
                time: "11:00",
                name: "Wasai Yakura",
                place: "ChIJV6mCIcFFGGARbZC923RqZc8",
                dish: "Shirasu — whitebait, raw or boiled, over rice",
                status: "walkin",
                where: "Komachi-dori, second floor",
                notes: [
                  "Opens at 11:00 and the queue builds from noon, so arriving at opening is the whole trick.",
                  "English menu by QR code. Around ¥2,000–2,500 a head ≈ S$16–20.",
                  "Raw shirasu depends on whether the boats went out that morning. Boiled is always on, and is the better of the two anyway.",
                ],
                why: "Shirasu is the thing Kamakura is actually known for eating, and it doesn't travel — it's a coast dish.",
                fallback: {
                  label: "If it's full",
                  text:
                    "Komachi-dori is wall-to-wall alternatives and most of them do shirasu. Note that Sometaro has a Kamakura branch, " +
                    "but it is closed on Wednesdays, so that one is out.",
                },
              },
              {
                slot: "Getting about",
                time: "12:30",
                name: "The Enoden to Hase",
                status: "travel",
                notes: [
                  "A single-track tram that runs between people's back gardens and then along the sea wall. Two stops, about five minutes.",
                  "Fares run ¥200–310 a leg and Suica works. The ¥800 day pass only pays if we hop on and off more than three times, which we won't — so just tap.",
                ],
              },
              {
                slot: "Afternoon",
                time: "12:45",
                name: "Kotoku-in",
                place: "ChIJBbxJ3_JFGGARTO9rLbCTwx4",
                jp: "高徳院",
                dish: "The Great Buddha — thirteen metres of bronze, cast in 1252",
                status: "walkin",
                where: "Seven minutes' walk from Hase station",
                notes: [
                  "¥300 ≈ S$2.40, open 08:00 to 16:45.",
                  "It has sat in the open air since a tsunami carried off the hall around it in 1498.",
                  "¥50 more to go inside the statue, which is a short, hot, steep staircase and entirely optional.",
                ],
              },
              {
                slot: "Afternoon",
                time: "13:45",
                name: "Hasedera",
                place: "ChIJ1SdxB_RFGGAR0a33ulBh61c",
                jp: "長谷寺",
                dish: "Hillside temple on a terrace over Sagami Bay",
                status: "walkin",
                where: "Five minutes' walk back down from the Great Buddha",
                notes: [
                  "¥400 ≈ S$3.20, open 08:00 to 17:00.",
                  "The nine-metre eleven-headed Kannon is the draw, but the terrace and the view out over the bay are what people remember.",
                  "There is a cave at the bottom of the garden you have to stoop to get through — worth doing, skippable for anyone who'd rather not.",
                ],
              },
              {
                slot: "Late afternoon",
                time: "15:00",
                name: "The coast, by tram",
                status: "travel",
                notes: [
                  "Carry on west from Hase to Kamakurakokomae, where the level crossing opens straight onto the sea, and on to Enoshima if we're enjoying it.",
                  "Sunset is at 16:38. On a clear afternoon Fuji sits right across the bay.",
                  "Home from Enoshima via Fujisawa and the JR Tokaido line, or back the way we came. Either way, in Tokyo by about 18:30.",
                ],
                fallback: {
                  label: "If bamboo beats the sea",
                  text:
                    "Hokokuji's bamboo grove is the other option for the afternoon — ¥400, with matcha served in the grove for ¥600. " +
                    "But it is on the far side of town from Hase and it shuts at 16:00, so it is one or the other, not both.",
                },
              },
              {
                slot: "Evening",
                name: "Supper, back in Tokyo",
                status: "free",
                notes: [
                  "Nothing booked, same as every other evening. Ginza, or wherever we get off the train.",
                  "Or eat in Kamakura before heading back and accept a later night.",
                ],
              },
            ],
            tally: [
              { label: "JR, Tokyo–Kamakura return", value: "¥1,900 ≈ S$15" },
              { label: "Enoden, two or three legs", value: "¥460–720 ≈ S$4–6" },
              { label: "Great Buddha and Hasedera", value: "¥700 ≈ S$6" },
              { label: "Lunch, shirasu", value: "¥2,000–2,500 ≈ S$16–20" },
              { label: "A head, before supper", value: "¥5,100–5,800 ≈ S$41–47", sum: true },
            ],
            caution:
              "Worth knowing before we choose: Shinjuku isn't anywhere else in the week, so going to Kamakura drops it " +
              "from the trip altogether — and with it Kappo Nakajima, which is the cheapest Michelin star we'd eat all week. " +
              "Omoide Yokocho could move to Thursday evening, since Shinjuku is one stop from Shibuya. The starred lunch can't.",
          },
        ],
      },
    },

    /* ── THURSDAY ───────────────────────────────────────────── */
    {
      dow: "Thursday",
      date: "12",
      month: "Nov",
      area: "Shibuya and Harajuku",
      meals: [
        {
          slot: "Lunch",
          time: "Arrive 11:30",
          name: "Yoshizawa, Meat Corner",
          place: "ChIJSwkySuGLGGAR7d8pgQ6CbrU",
          jp: "銀座吉澤 肉処",
          dish: "A5 wagyu, from the butcher's own counter",
          status: "walkin",
          where: "Second floor, Ginza 1-20-8",
          walk: "8 minutes from the hotel",
          tel: "03-3542-2981",
          notes: [
            "Walk in for the beef set at around ¥2,990. Expect roughly fifteen minutes in the queue.",
            "The restaurant is owned by a butcher, which is why the price is what it is.",
            "Booking online is possible but only opens up ¥8,000 courses — four times the price for the same kitchen. Not worth it.",
            "Closed on Sundays.",
          ],
        },
        {
          slot: "Evening",
          name: "Shibuya, wherever appeals",
          status: "free",
          notes: ["Nothing planned. Shibuya has more places to eat than anyone could work through."],
        },
      ],
    },

    /* ── FRIDAY ─────────────────────────────────────────────── */
    {
      dow: "Friday",
      date: "13",
      month: "Nov",
      area: "Akihabara",
      meals: [
        {
          slot: "Lunch",
          name: "Kanda Yabu Soba",
          place: "ChIJX-yVohyMGGARUTdpnpXyQNQ",
          jp: "かんだやぶそば",
          dish: "Buckwheat soba, since 1880",
          status: "walkin",
          where: "Ten minutes' walk from Akihabara",
          notes: [
            "Go at 11:30 or after 13:30 — the hour in between belongs to the local office crowd.",
            "Open until 20:30.",
          ],
          why: "Closed on Wednesdays, so Friday is the day for it.",
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
            "Hibiya line runs direct from Akihabara to Higashi-Ginza, six stops. Leave Akihabara by about 17:30.",
            "The counter is paced together, so arriving late means missing courses.",
          ],
          why: "The last proper dinner of the trip, and a six-minute walk home afterwards.",
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
