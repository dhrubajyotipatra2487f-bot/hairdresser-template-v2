# Effects — motion-anything (v2, dark luxe)

This template uses animation effects ported from **[nexu-io/motion-anything](https://github.com/nexu-io/motion-anything)** (Apache-2.0 license). Each effect is dependency-free (vanilla JS/CSS, no build step) and **honors `prefers-reduced-motion: reduce`** with a static fallback. The v2 redesign is a dark, champagne-gold, effect-rich experience — deliberately much more animated than the handyman (#1) and the v1 hairdresser templates.

Original recipe files live in `recipes/web/<name>/` of that repo; the ported code is in `js/motion/*.js` and `css/motion.css` of this template.

| Effect (recipe) | Where it's used here | File |
| --- | --- | --- |
| `aurora` (WebGL2) | Soft gold aurora behind the hero (desktop only) | `js/motion/aurora.js` |
| `iridescent` (inspired by `iridescence`) | Slow conic gold/plum glow over the hero (CSS) | `css/style.css` |
| `tilt-3d` | 3D tilt + gold glare on hero showcase, matrices, team cards | `js/motion/tilt-3d.js` + `css/motion.css` |
| `star-border` → `.glow` | Rotating light orbiting the "Prendre RDV" CTAs | `css/motion.css` |
| `shine-border` → `.btn.shine` | Light traveling the modal submit buttons | `css/motion.css` |
| `border-beam` → `.beam` | Comet traveling the EEAT + matrix card borders | `css/motion.css` |
| `glare-hover` → `.glare` | Cursor glare on service cards | `css/motion.css` + `js/motion/glare-hover.js` |
| `spotlight-card` → `.spotlight` | Cursor spotlight on creations + team cards | `css/motion.css` + `js/motion/spotlight-card.js` |
| `true-focus` | Tagline words blur except the focused one | `css/motion.css` + `js/motion/true-focus.js` |
| `kinetic-headline` | Services heading staggers in word-by-word | `css/motion.css` + `js/motion/kinetic-headline.js` |
| `gradient-text` | Drifting gradient on "sublimée" / accents | `css/motion.css` |
| `shiny-text` → `.shiny` | Highlight sweep on "Réservez en un tap" | `css/motion.css` |
| `rotating-text` | "coiffure / couleur / soin" cycles in the hero headline | `js/motion/rotating-text.js` + `css/motion.css` |
| `count-up` | Stats strip animates up on view | `js/motion/count-up.js` + `css/motion.css` |
| `bounce-cards` | Service cards spring in with stagger | `js/motion/bounce-cards.js` + `css/motion.css` |
| `magnetic-button` | CTAs pulled toward pointer on hover (desktop) | `js/motion/magnetic-button.js` + `css/motion.css` |
| `scroll-reveal` | Generic section/card reveal on scroll | `js/motion/scroll-reveal.js` + `css/motion.css` |
| `image-trail` | Gold thumbnails follow the pointer over the gallery (desktop) | `js/motion/image-trail.js` |
| `gooey-nav` | Sliding gold pill under the hero tab switcher | `js/motion/gooey-nav.js` + `css/motion.css` |
| `magnet-lines` | Grid of lines that rotate toward the pointer (EEAT section) | `js/motion/magnet-lines.js` + `css/motion.css` |
| `decrypted-text` | Hero eyebrow + preloader word decode | `js/motion/decrypted-text.js` |
| `click-spark` | Gold sparks burst from every primary/ghost CTA on click | `js/motion/click-spark.js` |
| preloader *(original)* | Full-screen loader with decoding word + progress bar, then fades | `css/style.css` (`.preloader`) |
| circular-text / spin badge *(original)* | Rotating gold text ring on the hero showcase corner | `css/style.css` (`.spin-badge`) |
| marquee *(original)* | Infinite gold strip of services between hero and prestations | `css/style.css` (`.marquee`) |
| attention-pulse → `.pulse` | Soft pulsing halo on the nav / conv-bar "Prendre RDV" | `css/style.css` |
| gradient-blinds → `.blinds` | Vertical blinds wipe off the gallery photos on reveal | `css/style.css` |
| dark-veil → `.veil` | Dark gradient veil fades in over gallery photos on hover | `css/style.css` |

## Notes on the ports
- `aurora.js` was given a small-screen guard: the WebGL field is **skipped below 760px** (static hero on phones) to protect battery.
- `image-trail` is **hidden on touch / reduced-motion** devices.
- `tilt-3d`, `glare-hover`, `spotlight-card` are **flat under reduced-motion / touch**.
- Colors were rethemed from the repo's purple to this template's champagne gold (`--accent` / `--accent-2`) on a near-black surface.

## Attribution
motion-anything is Apache-2.0 — © nexu-io / Open Design family. This template is a downstream use of the recipes; the Apache-2.0 notice above is sufficient, no extra public attribution required.
