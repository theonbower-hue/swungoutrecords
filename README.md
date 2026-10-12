# swungoutrecords.com

Static site for Swung Out Records, built with Jekyll and hosted on GitHub Pages (no build step needed, Pages builds it).

## Editing
- Releases: `_data/releases.yml` (newest first; the first one is the homepage "Latest release")
- Tees: `_data/products.yml` (paste a Stripe Payment Link into `buy_url` to switch the button from "Order by email" to "Buy now")
- Playlists: `_data/playlists.yml`
- Pages: `index.html`, `about.html`, `records.html`, `mix-series.html`, `playlists.html`, `contact.html`, `shop/`
- Images: `assets/img/`

## Preview locally
`gem install jekyll && jekyll serve` then open http://localhost:4000

## Contact form
Uses FormSubmit (free, no account). The first submission sends a confirmation email to swungoutrecords@gmail.com that must be clicked once.

## Old Wix URLs
`redirects/` keeps old links (/about-2, /contact-8, /product-page/...) working.
