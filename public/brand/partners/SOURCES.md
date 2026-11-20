# Partner logo sources

Acquired for **development preview and stakeholder review**. Trademarks remain with their owners. Public production use requires confirmed relationship classification and brand-usage permission.

Raw originals (not web-served): `assets/brand/partners/raw/`  
Published (sanitised): `public/brand/partners/`  
Sanitise script: `assets/brand/partners/scripts/sanitize_logos.py`

| Company | Local filename | Source URL | Source type | Brand usage | Approval | Relationship |
|---|---|---|---|---|---|---|
| Siemens | `siemens.svg` | https://commons.wikimedia.org/wiki/File:Siemens_AG_logo.svg | Third-party (Wikimedia Commons; based on Siemens site SVG) | Trademarked — PD-textlogo on Commons; commercial site use needs rights clearance | **Not approved** | unverified |
| Schneider Electric | `schneider-electric.svg` | https://commons.wikimedia.org/wiki/File:Schneider_Electric_2007.svg | Third-party (Wikimedia Commons; annual report) | Trademarked | **Not approved** | unverified |
| Eaton | `eaton.svg` | https://commons.wikimedia.org/wiki/File:Eaton_Corporation_logo.svg | Third-party (Wikimedia Commons) | Trademarked; Eaton media@eaton.com for official artwork | **Not approved** | unverified |
| Legrand | `legrand.svg` | https://commons.wikimedia.org/wiki/File:Logo_Legrand_SA.svg | Third-party (Wikimedia Commons) | Trademarked | **Not approved** | unverified |
| Philips | `philips.svg` | https://commons.wikimedia.org/wiki/File:Philips_logo_new.svg | Third-party (Wikimedia Commons) | Trademarked; Philips requires written authorisation | **Not approved** | unverified |
| ASSA ABLOY | `assa-abloy.svg` | https://commons.wikimedia.org/wiki/File:Assa_Abloy.svg | Third-party (Wikimedia Commons) | Trademarked; prefer brand.assaabloy.com kits | **Not approved** | unverified |
| Raychem | `raychem.svg` | https://commons.wikimedia.org/wiki/File:Raychem_logo.svg | Third-party (Wikimedia Commons; Raychem site) | Trademarked (TE Connectivity / nVent brand contexts) | **Not approved** | unverified |
| Elsewedy Electric | `elsewedy-electric.svg` | https://en.wikipedia.org/wiki/File:Elsewedy_Electric_Logo.svg | Third-party (Wikipedia; credited elsewedy.com) | Trademarked | **Not approved** | unverified |
| MCT Brattberg | `mct-brattberg.svg`, `mct-brattberg-on-dark.svg` | https://mctbrattberg.com/media/ffkejnuq/mct-logo-white.svg | Official website asset | Trademarked; dark variant derived by recolouring white mark for light surfaces | **Not approved** | unverified |
| CMP Products | `cmp-products.svg` | https://www.cmp-products.com/wp-content/themes/cmp/img/logo.svg | Official website asset | Trademarked | **Not approved** | unverified |
| Eland Cables | `eland-cables.png` | https://www.elandcables.com/media/h0xfy1jj/ec_logo_cmyk.png | Official website asset | Trademarked; written permission noted in site terms | **Not approved** | unverified |
| Innomotics | `innomotics.svg` | https://wwwapi.innomotics.com/medias/innomotics-logo.svg | Official website / media API | Trademarked | **Not approved** | unverified |

## Preview vs production

- Preview: `NEXT_PUBLIC_PARTNER_LOGO_PREVIEW=true`, or local `development`, or Vercel `preview` env.
- Production public logos require `publicationState: "published"` and `logoApproved: true` in `src/content/partners.ts`.
