/* FUTURO Finder: quiz logic
   ------------------------------------------------------------------
   Questions live in QUESTIONS below; products live in products.js.
   Flow: start screen -> 5 questions -> result (+ two alternatives).
*/
(function () {
  "use strict";

  var PRODUCTS = window.FUTURO_PRODUCTS || [];

  /* ---------------- Questions ---------------- */
  var PART_LABELS = {
    knee: "knee", ankle: "ankle", wrist: "wrist, hand or thumb", elbow: "elbow", back: "lower back"
  };

  var SPECIFIC = {
    knee: {
      title: "Where do you feel it most?",
      options: [
        { value: "kneecap", label: "Around the kneecap" },
        { value: "below", label: "Just below the kneecap when I run or jump" },
        { value: "unstable", label: "It feels wobbly or gives way to the side" },
        { value: "womens", label: "I'd like a fit contoured for women" },
        { value: "general", label: "A general ache or soreness" }
      ]
    },
    ankle: {
      title: "Which sounds most like your ankle?",
      options: [
        { value: "rolled", label: "I tend to roll or twist it" },
        { value: "weak", label: "It feels weak or tired after activity" },
        { value: "postcast", label: "Recovering from a bad sprain or a cast, on a doctor's advice" },
        { value: "general", label: "General soreness" }
      ]
    },
    wrist: {
      title: "When does it bother you?",
      options: [
        { value: "typing", label: "Typing, using a mouse or driving" },
        { value: "night", label: "At night, or when I wake up" },
        { value: "thumb", label: "At the base of my thumb, from texting or gripping" },
        { value: "hands", label: "My hands feel stiff or achy" },
        { value: "sport", label: "During sport or at the gym" }
      ]
    },
    elbow: {
      title: "Which sounds most like your elbow?",
      options: [
        { value: "tennis", label: "Pain along the forearm (tennis or golfer's elbow)" },
        { value: "sport", label: "It aches during sport or at the gym" },
        { value: "general", label: "General soreness or stiffness" }
      ]
    },
    back: {
      title: "What sets your back off?",
      options: [
        { value: "sitting", label: "Long hours sitting at a desk" },
        { value: "lifting", label: "Lifting, exercise or physical work" },
        { value: "general", label: "General aches through the day" }
      ]
    }
  };

  var QUESTIONS = [
    {
      id: "part",
      title: "Where do you need support?",
      options: [
        { value: "knee", label: "Knee" },
        { value: "ankle", label: "Ankle" },
        { value: "wrist", label: "Wrist, hand or thumb" },
        { value: "elbow", label: "Elbow" },
        { value: "back", label: "Lower back" }
      ]
    },
    {
      id: "use",
      title: "What do you need it for?",
      options: [
        { value: "sport", label: "Sport and exercise" },
        { value: "injury", label: "Recovering from a strain or sprain" },
        { value: "everyday", label: "Everyday tasks, work or walking" },
        { value: "stiffness", label: "Ongoing stiffness or soreness" }
      ]
    },
    {
      id: "level",
      title: "How much support do you want?",
      hint: "FUTURO rates its supports from mild to firm.",
      options: [
        { value: "1", label: "Light: a little compression" },
        { value: "2", label: "Moderate: support with full movement" },
        { value: "3", label: "Firm: hold it steady" },
        { value: "0", label: "I'm not sure" }
      ]
    },
    {
      id: "feature",
      title: "What matters most to you?",
      options: [
        { value: "breathable", label: "Staying cool in the heat" },
        { value: "cushion", label: "Cushioning and comfort" },
        { value: "adjustable", label: "A fit I can adjust" },
        { value: "lowprofile", label: "Slim enough to wear under clothes" }
      ]
    },
    {
      id: "specific",
      dynamic: true   // title and options depend on the "part" answer
    }
  ];

  var USE_LABELS = { sport: "sport and exercise", injury: "recovery", everyday: "everyday use", stiffness: "stiffness or soreness" };
  var LEVEL_LABELS = { "1": "light support", "2": "moderate support", "3": "firm support", "0": "any support level" };

  /* ---------------- State ---------------- */
  var state = { step: -1, answers: {}, skipPart: false, resultId: null, ranked: [] };

  var panel = document.getElementById("panel");
  var inner = document.getElementById("panel-inner");

  /* ---------------- Helpers ---------------- */
  function esc(str) {
    return String(str).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function questionFor(index) {
    var q = QUESTIONS[index];
    if (!q.dynamic) return q;
    var spec = SPECIFIC[state.answers.part] || SPECIFIC.knee;
    return { id: q.id, title: spec.title, options: spec.options };
  }

  function firstStep() { return state.skipPart ? 1 : 0; }

  function setScreen(name, html, noFocus) {
    panel.setAttribute("data-screen", name);
    inner.innerHTML = '<div class="screen">' + html + "</div>";
    var heading = inner.querySelector("h2, h3");
    if (heading && !noFocus) {
      heading.setAttribute("tabindex", "-1");
      heading.focus({ preventScroll: true });
    }
  }

  var ICON_BACK = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  /* ---------------- Scoring ---------------- */
  function score(p, a) {
    var s = 0;
    if (p.uses.indexOf(a.use) !== -1) s += 3;
    var lvl = parseInt(a.level, 10);
    if (lvl > 0) s += 3 - 1.5 * Math.abs(p.level - lvl);
    if (p.features.indexOf(a.feature) !== -1) s += 2;
    if (p.tags.indexOf(a.specific) !== -1) s += 4;
    if (p.medical && a.specific !== "postcast") s -= 20;   // only suggest rigid braces when asked for
    return s;
  }

  function rank(a) {
    return PRODUCTS
      .filter(function (p) { return p.part === a.part; })
      .map(function (p, i) { return { p: p, s: score(p, a), i: i }; })
      .sort(function (x, y) { return y.s - x.s || x.i - y.i; })
      .map(function (r) { return r.p; });
  }

  /* ---------------- Screens ---------------- */
  function renderStart(initial) {
    state.step = -1;
    setScreen("start",
      '<h2 class="display"><span>Your</span><span>FUTURO</span><span>Match</span></h2>' +
      '<p class="start-copy">Five quick questions. One support matched to how you move.</p>' +
      '<div class="start-actions">' +
        '<button class="btn btn-primary" type="button" data-action="start">Start the quiz</button>' +
      "</div>",
      initial === true
    );
  }

  function renderQuestion() {
    var q = questionFor(state.step);
    var first = firstStep();
    var total = QUESTIONS.length - first;
    var number = state.step - first + 1;
    var chosen = state.answers[q.id];

    var opts = q.options.map(function (o) {
      var on = chosen === o.value;
      return '<li><button class="option" type="button" data-value="' + esc(o.value) + '" aria-pressed="' + on + '">' +
        '<span class="option-dot" aria-hidden="true"></span><span>' + esc(o.label) + "</span></button></li>";
    }).join("");

    setScreen("question",
      '<div class="q-top">' +
        '<button class="q-back" type="button" data-action="back">' + ICON_BACK + "Back</button>" +
        "<span>Question " + number + " of " + total + "</span>" +
      "</div>" +
      '<div class="progress" role="progressbar" aria-label="Quiz progress" aria-valuemin="0" aria-valuemax="' + total + '" aria-valuenow="' + (number - 1) + '">' +
        '<div class="progress-fill" style="width:' + ((number - 1) / total * 100) + '%"></div>' +
      "</div>" +
      '<h2 class="q-title">' + esc(q.title) + "</h2>" +
      (q.hint ? '<p class="q-hint">' + esc(q.hint) + "</p>" : '<p class="q-hint">Pick one.</p>') +
      '<ul class="options">' + opts + "</ul>"
    );
  }

  function meterWord(v) { return v >= 67 ? "high" : v >= 34 ? "medium" : "low"; }

  function meter(label, value) {
    return '<div class="meter" role="img" aria-label="' + esc(label) + ": " + meterWord(value) + '">' +
      '<span class="meter-label" aria-hidden="true">' + esc(label) + "</span>" +
      '<div class="meter-track" aria-hidden="true"><span class="meter-mark" data-v="' + value + '"></span></div>' +
      '<div class="meter-scale" aria-hidden="true"><span>Low</span><span>High</span></div>' +
    "</div>";
  }

  function shopUrl(p) {
    if (p.shop) return p.shop;
    var q = p.name.replace("™", "");
    return "https://www.watsons.com.sg/search?text=" + encodeURIComponent(q);
  }

  function renderResult(productId) {
    var a = state.answers;
    if (!productId) {
      state.ranked = rank(a);
      productId = state.ranked.length ? state.ranked[0].id : null;
    }
    var p = PRODUCTS.filter(function (x) { return x.id === productId; })[0];
    if (!p) { renderStart(); return; }
    state.resultId = p.id;
    state.step = QUESTIONS.length;

    var cushionLabel = p.part === "knee" ? "Kneecap cushioning" : "Cushioning";

    var alts = state.ranked.filter(function (x) { return x.id !== p.id; }).slice(0, 2);
    var altHtml = alts.length ? (
      '<div class="alts"><h3>Also worth a look</h3><ul class="alt-list">' +
        alts.map(function (x) {
          return '<li><button class="alt" type="button" data-alt="' + esc(x.id) + '">' +
            "<span>" + esc(x.name.replace("FUTURO™ ", "")) + '</span><span class="alt-view">View</span></button></li>';
        }).join("") +
      "</ul></div>") : "";

    var basis = "Based on: " + PART_LABELS[a.part] + ", " + (USE_LABELS[a.use] || "") + ", " + (LEVEL_LABELS[a.level] || "") + ".";

    var medNote = p.medical
      ? '<p class="note">Rigid braces like this one are usually worn on a doctor\'s or physiotherapist\'s advice. Check with them before using it.</p>'
      : '<p class="note">General guidance, not medical advice. See a doctor if pain is severe, swollen or not improving.</p>';

    setScreen("result",
      '<h2 class="result-kicker"><span>Your</span><span>FUTURO</span><span>Match</span></h2>' +
      '<p class="result-name">' + esc(p.name) + "</p>" +
      '<p class="result-code">' + esc(p.code) + "</p>" +
      '<p class="result-blurb">' + esc(p.blurb) + "</p>" +
      '<div class="meters">' +
        meter("Breathability", p.meters.breath) +
        meter(cushionLabel, p.meters.cushion) +
        meter("Support level", p.meters.support) +
      "</div>" +
      '<p class="tag">' + esc(p.tagline) + "</p>" +
      medNote +
      '<div class="result-actions">' +
        '<a class="btn btn-gold" href="' + esc(p.url) + '" target="_blank" rel="noopener">Learn more</a>' +
        '<a class="btn btn-ghost" href="' + esc(shopUrl(p)) + '" target="_blank" rel="noopener">Find in store</a>' +
      "</div>" +
      altHtml +
      '<div class="result-foot">' +
        '<p class="result-basis">' + esc(basis) + "</p>" +
        '<button class="btn btn-text" type="button" data-action="restart">Retake quiz</button>' +
      "</div>"
    );

    // One orchestrated moment: the markers slide to their values.
    var marks = inner.querySelectorAll(".meter-mark");
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        Array.prototype.forEach.call(marks, function (m) {
          m.style.left = m.getAttribute("data-v") + "%";
        });
      });
    });
  }

  /* ---------------- Flow ---------------- */
  function start(presetPart) {
    state.answers = {};
    state.ranked = [];
    state.resultId = null;
    state.skipPart = !!presetPart;
    if (presetPart) state.answers.part = presetPart;
    state.step = firstStep();
    renderQuestion();
  }

  function choose(value) {
    var q = questionFor(state.step);
    var previous = state.answers[q.id];
    state.answers[q.id] = value;
    // Changing the body part makes the last question's answer meaningless.
    if (q.id === "part" && previous && previous !== value) delete state.answers.specific;

    // Show the selection briefly, then move on.
    var btns = inner.querySelectorAll(".option");
    Array.prototype.forEach.call(btns, function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-value") === value));
    });
    var reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setTimeout(next, reduce ? 0 : 180);
  }

  function next() {
    if (state.step < QUESTIONS.length - 1) {
      state.step += 1;
      renderQuestion();
    } else {
      renderResult();
    }
  }

  function back() {
    if (state.step <= firstStep()) { renderStart(); return; }
    state.step -= 1;
    renderQuestion();
  }

  /* ---------------- Events ---------------- */
  inner.addEventListener("click", function (e) {
    var t = e.target.closest("button");
    if (!t) return;
    var action = t.getAttribute("data-action");
    if (action === "start") return start();
    if (action === "back") return back();
    if (action === "restart") return start();
    if (t.classList.contains("option")) return choose(t.getAttribute("data-value"));
    if (t.hasAttribute("data-alt")) return renderResult(t.getAttribute("data-alt"));
  });

  /* ---------------- Articles ---------------- */
  var reader = document.getElementById("reader");
  var readerContent = document.getElementById("reader-content");
  var lastOpener = null;

  function openArticle(key, opener) {
    var tpl = document.getElementById("article-" + key);
    if (!tpl) return;
    lastOpener = opener || null;
    var part = tpl.getAttribute("data-part");
    var partName = part ? PART_LABELS[part] : "";
    readerContent.innerHTML =
      '<img class="reader-hero" src="' + esc(tpl.getAttribute("data-img")) + '" alt="' + esc(tpl.getAttribute("data-alt")) + '" width="1000" height="480">' +
      '<div class="reader-body">' + tpl.innerHTML +
        '<div class="reader-cta"><p>' + (part ? "Find the right " + esc(partName) + " support" : "Find the right support for you") + "</p>" +
        '<button class="btn" type="button" data-quiz="' + esc(part) + '">Take the quiz</button></div>' +
      "</div>";
    readerContent.scrollTop = 0;
    if (typeof reader.showModal === "function") reader.showModal();
    else reader.setAttribute("open", "");
    reader.scrollTop = 0;
  }

  function closeArticle() {
    if (typeof reader.close === "function") reader.close();
    else reader.removeAttribute("open");
  }

  reader.addEventListener("close", function () {
    if (lastOpener) lastOpener.focus();
  });

  document.getElementById("reader-close").addEventListener("click", closeArticle);

  // Click on the dark backdrop closes the reader.
  reader.addEventListener("click", function (e) {
    if (e.target === reader) closeArticle();
  });

  readerContent.addEventListener("click", function (e) {
    var t = e.target.closest("[data-quiz]");
    if (!t) return;
    var part = t.getAttribute("data-quiz");
    lastOpener = null;
    closeArticle();
    start(part || undefined);
    document.getElementById("finder").scrollIntoView({ block: "start" });
  });

  Array.prototype.forEach.call(document.querySelectorAll("[data-article]"), function (card) {
    card.addEventListener("click", function () { openArticle(card.getAttribute("data-article"), card); });
  });

  /* ---------------- Go ---------------- */
  renderStart(true);

  // Exposed for testing in the console: FUTUROFinder.rank({...})
  window.FUTUROFinder = { rank: rank, score: score, questions: QUESTIONS, specific: SPECIFIC };
})();
