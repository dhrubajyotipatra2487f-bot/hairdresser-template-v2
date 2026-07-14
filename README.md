# hairdresser-landing (v2 — dark luxe)

Template de landing page mono-page pour **salon de coiffure** (mixte : coupe, coloration, balayage, coiffure de mariée, soins, barbier), version **2**. Univers sombre et doré, très animé, conçu pour un secteur qui mise sur le visuel et la confiance (EEAT), avec une **prise de rendez-vous directe** (modale, pas de scroll) et une carte Google Maps en bas.

- Origine : conçu pour Puraran Studio (pas un template tiers). Les effets d'animation proviennent de **motion-anything** (Apache-2.0) — voir `EFFECTS.md`.
- Look v2 : fond near-black (`#0B0B0F`), or/champagne (`#E7C894`/`#D4AF6A`), glassmorphism, Playfair Display + Inter. Une seule couleur de marque à changer (`--accent` / `--accent-2` en tête de `css/style.css`).
- Expérience repensée vs #1 (handyman, clair/industriel) : hero avec **tab-switcher Coupe/Couleur/Soin**, **matrices de tarifs** côte à côte, **quiz diagnostic** de prestation, **carrousel d'avis**, et bien plus d'effets (aurora, blob-cursor, tilt-3d, image-trail, gooey-nav, magnet-lines…).
- Performance : zéro framework, zéro build, JS en `defer`, animations gateées par `IntersectionObserver` / `prefers-reduced-motion`, aucun traceur tiers. Aucune image binaire requise (icônes SVG inline, photos en emplacements CSS) → chargement quasi instantané.
- Mobile : parfait Android/iOS — `viewport-fit=cover`, barre de réservation fixe avec `env(safe-area-inset-bottom)`, `tel:` qui ouvre le composeur, hero statique < 760px.
- **Prise de RDV directe** : tous les boutons « Prendre RDV » ouvrent une modale (téléphone `tel:` + formulaire e-mail). Le quiz propose aussi une réservation directe. La section contact en bas garde le formulaire, l'itinéraire et la carte.
- SEO / EEAT : `JSON-LD` `HairSalon` + `FAQPage` + `AggregateRating`, Open Graph, titres sémantiques, coordonnées locales et carte Maps.

## Structure
- `index.html` — page unique, contenu générique à personnaliser (tokens `Salon Élan`, `+41 21 123 45 67`, etc.).
- `css/style.css` — design system sombre + mise en page + modale + quiz + barre de conversion.
- `css/motion.css` — effets motion-anything (voir `EFFECTS.md`).
- `js/main.js` — nav, reveal, tab-switcher, quiz, barre de conversion, modales de réservation.
- `js/motion/*.js` — recettes motion-anything.
- `img/README.md` — photos recommandées.
- `EFFECTS.md` — effets utilisés + attribution.

## Utilisation pour un nouveau client
Suivre le workflow complet (« Ajouter un nouveau site pour un client ») du `README.md` à la racine du dépôt :
1. `git pull` (vérifier qu'un collègue n'a pas déjà commencé ce client).
2. Copier ce dossier dans `sites/<nom-du-client>/test/template_hairdresser-landing_v2/` — **pas** directement dans `sites/<nom-du-client>/`.
3. Remplacer les tokens dans `index.html` (nom, téléphone, e-mail, adresse, commune, avis).
4. Ajuster `--accent` / `--accent-2` dans `css/style.css`.
5. Déposer les vraies photos dans `img/` (hero, créations, équipe) et remplacer les emplacements CSS.
6. Relier les formulaires (modale + contact) à un outil (Formspree, e-mail…).
7. Partager un aperçu pour validation, puis sortir la version définitive de `test/` une fois approuvée.
