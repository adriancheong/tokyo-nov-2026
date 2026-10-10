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
    "Seven nights, four of us, built around lunch. Two lunches are booked and timed — " +
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

    /* ── WEDNESDAY ──────────────────────────────────────────── */
    {
      dow: "Wednesday",
      date: "11",
      month: "Nov",
      area: "Shinjuku",
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
          slot: "Evening",
          time: "Seated 17:30",
          name: "Yakitori Bird Land",
          place: "ChIJVby9v-WLGGARQv0iDzabeGo",
          jp: "バードランド",
          dish: "Yakitori omakase at a basement counter",
          status: "tbc",
          where: "Ginza 4-2-15, basement",
          walk: "6 minutes from the hotel",
          notes: [
            "Pencilled in, not yet booked — the reservation goes in by Friday 16 October.",
            "Hibiya line runs direct from Akihabara to Higashi-Ginza, six stops, and comes up four minutes from the hotel.",
            "Seated by 17:30. The kitchen closes early and they pace the counter together.",
          ],
          why: "The last proper dinner of the trip, and a six-minute walk home afterwards.",
          fallback: {
            label: "If it doesn't come off",
            text: "Akihabara has plenty for an unplanned evening, or there's always Yurakucho under the railway arches on the way back.",
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
