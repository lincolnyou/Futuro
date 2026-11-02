# Find Your FUTURO

A finder quiz that matches people to a FUTURO™ brace or support in five questions, plus three short injury-care articles. Built as a **student concept project**. It is not affiliated with or endorsed by 3M.

It is a plain static site (HTML, CSS and JavaScript, no build step), so it runs on GitHub Pages as-is.

## Files

| File | What it holds |
|---|---|
| `index.html` | Page layout and the text of the three articles (inside the `<template>` tags near the bottom) |
| `style.css` | All styling: colours, fonts, layout |
| `script.js` | Quiz questions, scoring and screen logic |
| `products.js` | The 27 FUTURO products the quiz can recommend |

## Put it on GitHub and get a live link

1. Sign in at [github.com](https://github.com) and click **New repository** (the **+** at the top right).
2. Name it, for example `futuro-finder`. Set it to **Public** (GitHub Pages is free for public repositories). Leave the other boxes unticked, then click **Create repository**.
3. On the new repository page, click **uploading an existing file**.
4. Drag in all five files: `index.html`, `style.css`, `script.js`, `products.js` and `README.md`. Put them in the top level of the repository, not inside a folder. Click **Commit changes**.
5. Go to **Settings → Pages**. Under **Build and deployment**, set **Source** to *Deploy from a branch*, choose branch **main** and folder **/ (root)**, then click **Save**.
6. Wait a minute or two and refresh the page. Your link appears at the top, in the form `https://<your-username>.github.io/futuro-finder/`.

To update the site later, open a file on GitHub, click the pencil icon, edit it and commit. The live site refreshes within a minute or two.

## Editing the content

- **Products:** edit `products.js`. Each product has a support level, the uses and features it suits, and three slider values from 0 to 100 (breathability, cushioning, support). The slider values are the team's reading of each product description, not 3M data.
- **Questions:** edit `QUESTIONS` and `SPECIFIC` near the top of `script.js`. If you add an answer, tag the matching products with it in `products.js`.
- **Articles:** edit the `<template>` blocks at the bottom of `index.html`.

## How the matching works

The quiz filters products by body part, then scores each one:

| Match | Points |
|---|---|
| Suits what it's for (sport, injury, everyday, stiffness) | +3 |
| Support level close to what was asked | up to +3 |
| Has the feature that matters most | +2 |
| Fits the part-specific answer (for example "below the kneecap") | +4 |

The top scorer is the match, and the next two are shown as "Also worth a look". The rigid Stirrup Ankle Brace is only suggested when someone says they're recovering from a bad sprain or cast on a doctor's advice.

## Links and sources

- **Learn more** opens the product's page on [futuro.3m.com.sg](https://www.futuro.3m.com.sg/3M/en_SG/p/).
- **Find in store** opens the Watsons Singapore product page where one was found (five knee products). For the rest it opens a Watsons search for the product name. Check that search link works before presenting.
- Photos are loaded directly from Unsplash (free licence) and credited in the footer: Jorge Alberto Vega Barrera, Omar Ramadan, Bill Ringer and Alex Dekker.

## Disclaimer

The quiz and articles are general information, not medical advice.
