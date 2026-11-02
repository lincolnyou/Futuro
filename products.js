/*
  FUTURO Finder: product data
  ---------------------------------------------------------------
  Edit this file to add, remove or change products. No other file
  needs to change.

  Fields
    id        unique short name
    part      knee | ankle | wrist | elbow | back
    name      product name as shown on futuro.3m.com.sg
    code      3M product code(s)
    level     1 = mild, 2 = moderate, 3 = firm  (from the product page)
    uses      which "What's it for?" answers it suits:
              sport | injury | everyday | stiffness
    features  which "What matters most?" answers it suits:
              breathable | cushion | adjustable | lowprofile
    tags      part-specific answers it suits (see QUESTIONS in script.js)
    medical   true = only recommended for the "after a cast / acute
              injury" answer, and shown with a see-a-professional note
    meters    0-100 values for the three result sliders. These are the
              team's reading of the product descriptions, not 3M data.
    tagline   red tag shown on the result
    blurb     one-line description written from the product page
    url       official FUTURO Singapore product page
    shop      Watsons Singapore product page, where one was found.
              Leave "" to fall back to a Watsons search link.
*/

window.FUTURO_PRODUCTS = [
  /* ---------------- KNEE ---------------- */
  {
    id: "comfort-knee", part: "knee",
    name: "FUTURO™ Comfort Knee Support", code: "76586–76589ENR (S–XL)",
    level: 1, uses: ["everyday", "stiffness"], features: ["breathable", "lowprofile"], tags: ["general"],
    meters: { breath: 80, cushion: 20, support: 25 },
    tagline: "Made for everyday wear",
    blurb: "Mild support in a stretchy, breathable knit sleeve that fits discreetly under clothing.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100549002/",
    shop: "https://www.watsons.com.sg/futuro%E2%84%A2-knee-comfort-support-size-l-1s/p/BP_13485"
  },
  {
    id: "perf-comfort-knee", part: "knee",
    name: "FUTURO™ Performance Comfort Knee Support", code: "01039ENR, adjustable",
    level: 2, uses: ["sport", "injury"], features: ["cushion", "breathable", "adjustable", "lowprofile"], tags: ["kneecap"],
    meters: { breath: 75, cushion: 85, support: 60 },
    tagline: "Suitable for active movement",
    blurb: "Moderate, low-profile support with a gel pad around the kneecap and adjustable straps.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100507100/",
    shop: "https://www.watsons.com.sg/futuro%E2%84%A2-precision-fit-knee-support-adjustable/p/BP_29806"
  },
  {
    id: "sport-knee", part: "knee",
    name: "FUTURO™ Sport Knee Support", code: "09039ENR, adjustable",
    level: 2, uses: ["sport"], features: ["adjustable"], tags: ["kneecap", "general"],
    meters: { breath: 45, cushion: 40, support: 60 },
    tagline: "Suitable for active movement",
    blurb: "Adjustable wraparound support with an open kneecap design for training and games.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100507095/",
    shop: "https://www.watsons.com.sg/futuro%E2%84%A2-adjustable-knee-sport-support-1s/p/BP_11364"
  },
  {
    id: "perf-knee", part: "knee",
    name: "FUTURO™ Knee Performance Support", code: "45694–45697ENR (S–L)",
    level: 2, uses: ["sport", "stiffness", "injury"], features: ["breathable", "adjustable"], tags: ["general", "kneecap"],
    meters: { breath: 60, cushion: 45, support: 65 },
    tagline: "Suitable for active movement",
    blurb: "Neoprene-blend sleeve that keeps the knee warm, with a breathable back panel and two straps.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100534051/",
    shop: "https://www.watsons.com.sg/futuro%E2%84%A2-knee-performance-support-moderate-45696enr-size-m-1s/p/BP_12449"
  },
  {
    id: "knee-stabilizer", part: "knee",
    name: "FUTURO™ Knee Performance Stabilizer", code: "47550ENR, adjustable",
    level: 2, uses: ["sport", "injury"], features: ["adjustable", "breathable"], tags: ["unstable"],
    meters: { breath: 65, cushion: 40, support: 80 },
    tagline: "Extra side-to-side stability",
    blurb: "Side stabilisers limit sideways movement; vented wraparound design keeps you cool.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100558150/",
    shop: ""
  },
  {
    id: "for-her-knee", part: "knee",
    name: "FUTURO™ For Her Knee Support", code: "95341ENR, adjustable",
    level: 2, uses: ["everyday", "injury"], features: ["cushion", "adjustable"], tags: ["womens"],
    meters: { breath: 60, cushion: 75, support: 65 },
    tagline: "Contoured for a woman's leg",
    blurb: "Moderate support with spiral stabilisers and gel cushioning, shaped for a woman's leg.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100558190/",
    shop: "https://www.watsons.com.sg/futuro%E2%84%A2-for-her-adjustable-knee-support-1s/p/BP_62766"
  },
  {
    id: "knee-strap", part: "knee",
    name: "FUTURO™ Knee Strap", code: "09189EN, adjustable",
    level: 2, uses: ["sport"], features: ["breathable", "lowprofile", "adjustable"], tags: ["below"],
    meters: { breath: 85, cushion: 50, support: 50 },
    tagline: "Targets runner's and jumper's knee",
    blurb: "A slim strap whose centre pad presses on the tendon just below the kneecap.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100549038/",
    shop: ""
  },

  /* ---------------- ANKLE ---------------- */
  {
    id: "comfort-ankle", part: "ankle",
    name: "FUTURO™ Comfort Ankle Support", code: "76581–76583ENR (S–L)",
    level: 1, uses: ["everyday", "stiffness"], features: ["lowprofile", "breathable"], tags: ["general"],
    meters: { breath: 75, cushion: 20, support: 25 },
    tagline: "Made for everyday wear",
    blurb: "Mild support in a simple pull-on knit sleeve that fits inside most shoes.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100549003/",
    shop: ""
  },
  {
    id: "comfort-fit-ankle", part: "ankle",
    name: "FUTURO™ Comfort Fit Ankle Support", code: "04037ENR, adjustable",
    level: 2, uses: ["everyday", "injury"], features: ["breathable", "adjustable", "cushion"], tags: ["general", "weak"],
    meters: { breath: 90, cushion: 40, support: 55 },
    tagline: "Made for all-day wear",
    blurb: "Moderate support in FUTURO's most breathable material, with a soft lining and three straps.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v101355407/",
    shop: ""
  },
  {
    id: "perf-comfort-ankle", part: "ankle",
    name: "FUTURO™ Performance Comfort Ankle Support", code: "01037ENR, adjustable",
    level: 2, uses: ["sport"], features: ["breathable", "lowprofile", "adjustable"], tags: ["weak", "general"],
    meters: { breath: 80, cushion: 30, support: 55 },
    tagline: "Suitable for active movement",
    blurb: "Slim wraparound support that fits inside sports shoes, with a heel strap and breathable fabric.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100507101/",
    shop: ""
  },
  {
    id: "sport-ankle", part: "ankle",
    name: "FUTURO™ Sport Ankle Support", code: "09037ENR, adjustable",
    level: 2, uses: ["sport", "stiffness"], features: ["adjustable"], tags: ["weak"],
    meters: { breath: 40, cushion: 35, support: 60 },
    tagline: "Suitable for active movement",
    blurb: "Neoprene-blend wrap that retains warmth, with a heel loop for easy on and off.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100507097/",
    shop: ""
  },
  {
    id: "ankle-stabilizer", part: "ankle",
    name: "FUTURO™ Ankle Performance Stabilizer", code: "46645ENR, adjustable",
    level: 3, uses: ["sport", "injury"], features: ["adjustable", "breathable"], tags: ["rolled"],
    meters: { breath: 60, cushion: 35, support: 85 },
    tagline: "Extra side-to-side stability",
    blurb: "Firm side stabilisers restrict rolling, with adjustable straps that lift around the arch.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100558151/",
    shop: ""
  },
  {
    id: "stirrup-ankle", part: "ankle",
    name: "FUTURO™ Stirrup Ankle Brace", code: "48442EN, adjustable",
    level: 3, uses: ["injury"], features: ["adjustable", "cushion"], tags: ["postcast"], medical: true,
    meters: { breath: 40, cushion: 70, support: 95 },
    tagline: "Rigid support after an acute injury",
    blurb: "Rigid shells with air cells limit sideways motion after an acute injury or a cast.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100507074/",
    shop: ""
  },

  /* ---------------- WRIST, HAND & THUMB ---------------- */
  {
    id: "compression-glove", part: "wrist",
    name: "FUTURO™ Compression Glove", code: "09183ENR (S/M), 09187ENR (L/XL)",
    level: 1, uses: ["stiffness", "everyday"], features: ["lowprofile"], tags: ["hands"],
    meters: { breath: 60, cushion: 15, support: 25 },
    tagline: "Gentle compression for stiff hands",
    blurb: "Mild, all-over compression for sore or stiff hands and wrists.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100507094/",
    shop: ""
  },
  {
    id: "comfort-fit-wrist", part: "wrist",
    name: "FUTURO™ Comfort Fit Wrist Support", code: "04036ENR, adjustable",
    level: 2, uses: ["everyday", "stiffness"], features: ["breathable", "cushion", "adjustable"], tags: ["typing", "general"],
    meters: { breath: 90, cushion: 40, support: 50 },
    tagline: "Made for all-day wear",
    blurb: "Moderate support in an ultra-breathable wrap, good for typing and daily tasks.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v101335267/",
    shop: ""
  },
  {
    id: "perf-comfort-wrist", part: "wrist",
    name: "FUTURO™ Performance Comfort Wrist Support", code: "01036ENR, adjustable",
    level: 2, uses: ["sport"], features: ["breathable", "lowprofile", "adjustable"], tags: ["sport", "general"],
    meters: { breath: 80, cushion: 25, support: 55 },
    tagline: "Suitable for active movement",
    blurb: "Low-profile wraparound with a thumb loop; leaves the palm and fingers free.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100579267/",
    shop: ""
  },
  {
    id: "sport-wrist", part: "wrist",
    name: "FUTURO™ Sport Wrist Support", code: "09033ENR, adjustable",
    level: 2, uses: ["sport", "stiffness"], features: ["adjustable"], tags: ["sport"],
    meters: { breath: 40, cushion: 30, support: 60 },
    tagline: "Suitable for active movement",
    blurb: "Neoprene-blend wrap with a compression strap and thumb loop for training and games.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100507098/",
    shop: ""
  },
  {
    id: "comfort-stab-wrist", part: "wrist",
    name: "FUTURO™ Comfort Stabilizing Wrist Brace", code: "10770ENR, adjustable",
    level: 2, uses: ["injury", "everyday"], features: ["breathable", "adjustable"], tags: ["typing"],
    meters: { breath: 70, cushion: 35, support: 70 },
    tagline: "Steadies the wrist for typing and driving",
    blurb: "Palm splint and three straps steady a sore wrist while your fingers move freely.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100518028/",
    shop: ""
  },
  {
    id: "deluxe-wrist", part: "wrist",
    name: "FUTURO™ Deluxe Wrist Stabilizer", code: "09013ENR (right), 09014ENR (left)",
    level: 3, uses: ["injury"], features: ["cushion", "adjustable"], tags: ["typing"],
    meters: { breath: 55, cushion: 60, support: 90 },
    tagline: "Firm support for injured wrists",
    blurb: "Firm support with three stabilisers and a foam palm pad; comes in left and right versions.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100549036/",
    shop: ""
  },
  {
    id: "night-wrist", part: "wrist",
    name: "FUTURO™ Night Wrist Support", code: "48462ENR, adjustable",
    level: 2, uses: ["injury", "stiffness"], features: ["cushion"], tags: ["night"],
    meters: { breath: 50, cushion: 85, support: 55 },
    tagline: "Designed for night-time rest",
    blurb: "Soft sleeve with cushioning beads that keep the hand in a neutral position while you sleep.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100558185/",
    shop: ""
  },
  {
    id: "thumb-stab", part: "wrist",
    name: "FUTURO™ Deluxe Thumb Stabilizer", code: "45843ENR (S/M), 45844ENR (L/XL)",
    level: 2, uses: ["everyday", "stiffness", "injury"], features: ["breathable", "adjustable"], tags: ["thumb"],
    meters: { breath: 70, cushion: 30, support: 70 },
    tagline: "Steadies the base of the thumb",
    blurb: "Stabilises the lower thumb joints for texting, gaming and gripping; fingers stay free.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100534054/",
    shop: ""
  },

  /* ---------------- ELBOW ---------------- */
  {
    id: "comfort-fit-elbow", part: "elbow",
    name: "FUTURO™ Comfort Fit Elbow Support", code: "04038ENR, adjustable",
    level: 2, uses: ["everyday", "stiffness", "injury"], features: ["breathable", "cushion", "adjustable"], tags: ["general"],
    meters: { breath: 90, cushion: 40, support: 50 },
    tagline: "Made for all-day wear",
    blurb: "Moderate support in an ultra-breathable slip-on sleeve with two adjustable straps.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v101355408/",
    shop: ""
  },
  {
    id: "perf-comfort-elbow", part: "elbow",
    name: "FUTURO™ Performance Comfort Elbow Support", code: "01038ENR, adjustable",
    level: 2, uses: ["sport"], features: ["breathable", "lowprofile", "adjustable"], tags: ["general", "sport"],
    meters: { breath: 80, cushion: 30, support: 55 },
    tagline: "Suitable for active movement",
    blurb: "Low-profile, flexible pull-on sleeve with comfort straps that fits under clothing.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100507091/",
    shop: ""
  },
  {
    id: "sport-elbow", part: "elbow",
    name: "FUTURO™ Sport Elbow Support", code: "09038ENR, adjustable",
    level: 2, uses: ["sport", "stiffness"], features: ["adjustable"], tags: ["sport"],
    meters: { breath: 40, cushion: 35, support: 60 },
    tagline: "Suitable for active movement",
    blurb: "Neoprene-blend sleeve that retains warmth, with straps for tennis, golf and gym work.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100507096/",
    shop: ""
  },
  {
    id: "tennis-strap", part: "elbow",
    name: "FUTURO™ Tennis Elbow Strap", code: "45975ENR, adjustable",
    level: 2, uses: ["sport", "everyday"], features: ["breathable", "lowprofile", "adjustable"], tags: ["tennis"],
    meters: { breath: 85, cushion: 50, support: 55 },
    tagline: "Targets tennis and golfer's elbow",
    blurb: "A forearm strap whose tendon pad applies targeted pressure for tennis or golfer's elbow.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100534049/",
    shop: ""
  },

  /* ---------------- BACK ---------------- */
  {
    id: "easy-back", part: "back",
    name: "FUTURO™ Easy Adjustable Back Support", code: "46820ENR, adjustable",
    level: 2, uses: ["everyday", "stiffness", "sport"], features: ["adjustable", "cushion", "breathable"], tags: ["sitting", "general"],
    meters: { breath: 60, cushion: 65, support: 60 },
    tagline: "Made for long days at a desk",
    blurb: "Dual pull-cords and removable lumbar pads for lower-back support at work and at home.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100558159/",
    shop: ""
  },
  {
    id: "stab-back", part: "back",
    name: "FUTURO™ Comfort Stabilizing Back Support", code: "46815ENR (S/M), 46816ENR (L/XL)",
    level: 3, uses: ["sport", "injury", "everyday"], features: ["adjustable", "breathable"], tags: ["lifting"],
    meters: { breath: 60, cushion: 40, support: 85 },
    tagline: "Firm support for active days",
    blurb: "Firm support with a back panel that spreads pressure evenly, for workouts and daily activity.",
    url: "https://www.futuro.3m.com.sg/3M/en_SG/p/d/v100545075/",
    shop: ""
  }
];
