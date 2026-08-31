# Souvenir en boîte

Site vitrine de Sarah, photographe mariage, grossesse et naissance.

## Démarrer

```bash
npm install
npm run dev        # développement, sur http://localhost:5173
npm run build      # génère le site dans dist/
npm run preview    # sert dist/ pour vérifier le résultat du build
```

## Comment ça marche

Le site est **généré statiquement** : `npm run build` produit un vrai fichier
HTML par page, contenu compris. Ce n'est pas un détail — c'est ce qui permet
aux moteurs de recherche et aux aperçus de partage (Facebook, WhatsApp,
LinkedIn, qui n'exécutent pas JavaScript) de lire chaque page.

| | |
|---|---|
| Build | [Vite](https://vite.dev) + [vite-react-ssg](https://github.com/Daydreamer-riri/vite-react-ssg) |
| Interface | React 18, react-router 6 |
| Styles | Tailwind CSS 4 (configuré dans `src/styles/index.css`) |
| Polices | Cormorant Garamond + Montserrat, **auto-hébergées** via Fontsource |

Les polices sont servies depuis le site lui-même : aucune requête vers Google
Fonts, donc aucun transfert d'adresse IP vers un tiers (RGPD) et aucun domaine
externe à attendre au chargement.

## Où modifier quoi

| Pour changer… | Fichier |
|---|---|
| Téléphone, zone d'intervention, réseaux sociaux, menu | `src/data/site.js` |
| Formules et prix | `src/data/prestations.js` |
| Photos des galeries | `src/data/galeries.js` |
| Avis clients | `src/data/avis.js` |
| Couleurs et typographies | `src/styles/index.css` (bloc `@theme`) |

### Ajouter des photos à une galerie

`src/data/galeries.js` attend pour chaque photo ses dimensions réelles en
pixels. Elles servent à réserver la place de l'image avant son chargement
(pas de saut de mise en page) et à décider de son format d'affichage : une
photo **horizontale** occupe deux colonnes de la mosaïque, une verticale une
seule.

Pour retrouver les dimensions d'un fichier sur macOS :

```bash
sips -g pixelWidth -g pixelHeight public/assets/picture/portfolio-mariage/ma-photo.avif
```

### Activer les avis clients

Ajouter des entrées dans `src/data/avis.js` (le format est décrit en
commentaire). La section apparaît alors automatiquement sur l'accueil ;
tant que le tableau est vide, elle reste masquée.

## Vérifications automatiques

```bash
npm run build && node scripts/verifier-html.mjs
```

Contrôle sur le HTML réellement généré : un `<h1>` unique par page, `alt` et
dimensions sur chaque image, hiérarchie de titres sans niveau sauté, données
structurées valides, aucun lien sans intitulé.

## Mise en ligne

Le site est déployé sur **Vercel** (`souvenir-en-boite.vercel.app`). La
configuration est dans `vercel.json` : elle impose `dist` comme dossier de
sortie et désactive la détection automatique, qui identifiait l'ancien projet
comme Create React App et cherchait un dossier `build`.

Les redirections des anciennes adresses y sont déclarées aussi : Vercel ne lit
pas le fichier `_redirects`, qui est un format Netlify / Cloudflare Pages.

Le build produit également :

- `sitemap.xml` et `robots.txt` ;
- `_redirects` — redirections 301 des anciennes adresses (`/tarifs/*` vers
  `/prestations/*`), comprises par Netlify et Cloudflare Pages ;
- des pages de redirection HTML pour les hébergeurs sans fichier de
  configuration ;
- `404.html`.

> **Avant la première mise en ligne**, renseigner l'adresse réelle du site dans
> `site.url` (`src/data/site.js`) : elle sert aux liens canoniques, aux aperçus
> de partage et au plan du site.
