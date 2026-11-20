# Drais Energy Nigeria Limited — Website Design & Implementation Brief

**Status:** Proposed implementation direction; company approval required for public claims and brand assets.
**Audience:** Cursor, VS Code coding assistants, designers and frontend engineers.
**Project type:** Responsive B2B corporate website and qualified lead-generation platform.
**Existing website:** https://www.draisenergy.com/

## 0. Instructions to the implementation agent

Act as a senior UI/UX designer, creative director, frontend architect, accessibility specialist and full-stack engineer. Create a distinctive, production-quality corporate website for Drais Energy Nigeria Limited. Do not produce a generic template, a SaaS dashboard, or a collection of disconnected cards. Make the site feel like a credible engineering and infrastructure company with a meaningful story, clear navigation and real commercial purpose.

Read this entire brief and, where supplied in the repository, consult the four original company profiles before editing content. Inspect the existing repository, package manager, conventions and assets. If a compatible stack exists, preserve it or explain necessary changes. If starting from scratch, use the stack specified below. Implement in logical phases, verify each phase, and report remaining blockers. Do not stop at a plan or an example screen. Do not make destructive changes to a live website, deploy without authorization, or invent project facts, metrics, relationships, certifications, testimonials or contact details.

Treat this brief as the source of proposed design requirements, not as proof that all public-facing claims have been independently verified. Track unresolved content and assets in `CONTENT_REVIEW.md`. Use explicit placeholders in development, never misleading public claims. Keep the original PDFs private unless Drais approves a redacted public copy.

## 1. Business understanding and positioning

Drais Energy Nigeria Limited was incorporated on 26 November 2010 (RC 923607, as recorded in the company profiles). It is an indigenous Nigerian engineering and procurement company. Its materials describe a strategic transition from industrial procurement toward integrated engineering, procurement, construction, installation, commissioning, operations and maintenance. Its three principal industry pathways for the website are Oil & Gas, Power & Renewable Energy, and Telecommunications. Critical infrastructure, electronic security and data centre solutions cut across these industries. Procurement remains a prominent commercial capability, not a secondary afterthought.

**Proposed positioning:** An indigenous engineering and infrastructure solutions partner, combining local expertise with access to global manufacturers and technical relationships.

**Proposed brand promise:** Engineering the infrastructure that drives progress.

**Proposed supporting copy:** Integrated engineering, procurement and infrastructure solutions across oil & gas, power and telecommunications.

Desired perception: technically competent, trustworthy, established, precise, human, modern and operationally reliable. Never imply that Drais owns an oil field, generates electricity itself, operates a telecommunications network, or built an entire facility merely because it supplied equipment to a project.

### Purpose of the website

- Awareness: help a first-time visitor understand the company quickly.
- Relevance: let each industry visitor locate the services and products relevant to their needs.
- Credibility: substantiate experience, safety, quality and partnerships using approved evidence.
- Conversion: generate qualified procurement enquiries, quotation requests and project discussions.
- Growth: let editors add projects, products, credentials and resources without redesigning pages.

### Audiences and jobs to be done

| Audience | Primary task | Primary route |
|---|---|---|
| Procurement managers | Find equipment, suppliers and request a quotation | Products / Procurement / RFQ |
| Engineers and technical buyers | Evaluate scope, technical specifications and applicable standards | Capabilities / Product detail |
| Project managers | Assess project delivery experience and technical capacity | Projects / Capabilities |
| Executives and institutions | Evaluate company credibility, risk and suitability | Company / HSSEQ / Projects |
| OEMs and international partners | Explore local technical and commercial relationships | Partners / Contact |
| Job seekers | Learn about the company and find approved career opportunities | Company / Careers if available |

## 2. Non-negotiable design principles

1. Clarity before decoration: communicate who Drais is, what it does, for whom and why it matters in the first viewport.
2. Function and beauty together: every visual element must support understanding, trust, navigation or brand character.
3. Visual hierarchy: one dominant message per section, clear typography, intentional whitespace and obvious primary actions.
4. Progressive disclosure: concise overview first; deeper specifications on dedicated pages. Do not dump brochure text onto the homepage.
5. Gestalt: related elements should share proximity, alignment, visual treatment and logical grouping.
6. Hick's Law: present manageable, meaningful choices instead of dozens of competing menu items.
7. Fitts's Law: make important controls easy to target with comfortable hit areas.
8. Jakob's Law: preserve familiar navigation, link, form and search conventions; creative presentation must not obscure controls.
9. Consistency: reuse typography, spacing, button styles, layout and interaction states.
10. Trust: evidence before superlatives; accurate project attribution; transparent enquiry handling; no deceptive UI.
11. Accessibility: semantic structure, keyboard support, clear focus, contrast, reduced motion and responsive text.
12. Performance: design for mobile and constrained bandwidth; avoid heavy effects that delay content.

## 3. Technology stack and architecture

| Layer | Selected default |
|---|---|
| Language | TypeScript (strict mode), semantic HTML and CSS |
| Framework | Next.js App Router + React, mutually compatible supported stable versions |
| Styling | Tailwind CSS + CSS custom properties for brand tokens |
| Motion | Motion for React (`motion`, imports from `motion/react`), plus CSS for simple transitions |
| Icons | Lucide React (`lucide-react`) |
| Forms | Native accessible controls or React Hook Form where useful; Zod for server-side validation |
| Content | Typed local content modules for initial launch; CMS-ready repository interfaces |
| Testing | ESLint, TypeScript, unit tests where useful, Playwright and axe accessibility checks |
| Deployment | Node-compatible Next.js host with HTTPS and server-side enquiry processing; choose provider after owner approval |

**Why Next.js:** Search-friendly pre-rendered pages, file-based routing, shared layouts, metadata, font/image optimisation and ability to handle a secure server-side contact workflow. Use Server Components by default. Keep animation, form and interactive navigation client boundaries small. Never move the entire site into a single Client Component just to animate it.

**Animation decision:** Motion is the main animation library. GSAP with ScrollTrigger and `@gsap/react` is optional ONLY for a justified advanced animation that Motion cannot deliver cleanly. Do not install GSAP by default. No Three.js/WebGL, smooth-scroll replacement libraries, paid plugins or unnecessary component frameworks for MVP.

Use a lockfile and one package manager (pnpm if greenfield); avoid guessed version numbers. Verify official compatibility before upgrading dependencies.

Suggested bootstrap for a new repository (skip if an existing compatible app exists):

```bash
pnpm create next-app@latest drais-energy --ts --tailwind --eslint --app --src-dir --use-pnpm
cd drais-energy
pnpm add motion lucide-react zod
pnpm add -D @playwright/test @axe-core/playwright
pnpm exec playwright install
pnpm dev
```

Use the actual package scripts and lint command appropriate to the installed framework version. Static export is an alternative only if a separate approved endpoint handles enquiries and image delivery is configured appropriately; static export does not provide server-side form processing.

## 4. Information architecture and navigation

Separate industries (who we serve) from capabilities (what we do) and products (what we supply). Use cross-links instead of duplicating entire content across pages.

### Primary navigation

- Company — About, leadership, HSSEQ & certifications, partners.
- Industries — Oil & Gas, Power & Renewable Energy, Telecommunications.
- Capabilities — Engineering & Design, Procurement & Supply, Construction & Installation, Testing & Commissioning, Operations & Maintenance, Consultancy & Training / technical manpower.
- Products — category catalogue and product details.
- Projects — portfolio and case studies.
- Resources — approved company profiles, relevant news/insights, optionally careers.
- Primary action: Request a Quote (RFQ). Secondary action: Discuss a Project / Contact.

Desktop: accessible disclosure menus with concise link descriptions; avoid overly dense mega menus. Mobile: accessible collapsible navigation, visible close control, keyboard and Escape handling, focus restoration. No hover-only access. Use breadcrumbs on deep pages. Keep navigation labels plain and recognizable.

### Proposed routes

```text
/
/company
/company/leadership
/company/hsseq
/company/partners
/industries
/industries/oil-and-gas
/industries/power-and-renewables
/industries/telecommunications
/capabilities
/capabilities/[slug]
/products
/products/[slug]
/projects
/projects/[slug]
/resources
/contact
/request-a-quote
/privacy
```

Add a careers or insights page only when real content exists. Do not publish empty routes. Critical infrastructure/security should have a dedicated capability entry or landing page if management approves its classification. Cross-link from all relevant industries. A product catalogue is not ecommerce: no cart, checkout, fake prices, stock counts or online payment for MVP.

## 5. Homepage — narrative and section specification

The homepage should read as an editorial journey, not a repetitive template. Use a mix of full-width imagery, split layouts, clean grids, typography-led sections and evidence. Each section must have a clear business function.

### 01 — Header and hero

- Header: official approved logo, navigation and standout RFQ action. Sticky if useful; ensure it never obscures content or keyboard focus.
- Eyebrow: ENGINEERING · ENERGY · INFRASTRUCTURE.
- Proposed H1: **Engineering the infrastructure that drives progress.**
- Supporting text: Integrated engineering, procurement and infrastructure solutions across oil & gas, power and telecommunications.
- Primary CTA: Request a quote. Secondary CTA: Explore our capabilities.
- Visual: a strong industrial wide-angle photograph with restrained dark treatment, or an editorial split layout. Reflect all three industries through the text and immediate industry links; do not make the company look like it only serves oil and gas.
- Use a single static hero composition by default. No auto-rotating slides. If optional video is approved, use a lightweight poster first, muted playback, pause control and reduced-motion/data-saving fallback. Do not let decorative media delay the main message.
- Evidence strip: Established 2010, three principal industry pathways, integrated engineering/procurement capability. Do not invent employee counts, project totals or uptime metrics. Verify any additional number before using it.

### 02 — Project and client credibility

- Heading: Experience built through industry relationships.
- Show approved names/logos for direct clients or documented project relationships, appropriately labeled.
- Source examples in project references include NLNG, TotalEnergies, Saipem, Daewoo E&C, Julius Berger and Alcon. The presence of an organisation in a project name or vendor registration list is not proof of a direct contract or endorsement.
- Prefer a stable responsive logo grid to an endless marquee. Include a portfolio link.

### 03 — About Drais Energy

- Heading: Local expertise. Global standards.
- Explain its origin in procurement, industrial equipment supply experience and evolution toward integrated infrastructure services.
- Use real approved team photography if available, not generic people presented as employees.
- CTA: Discover our story.

### 04 — Industries we serve

- Heading: Connecting expertise across critical industries.
- Three visually equal entry points: Oil & Gas; Power & Renewable Energy; Telecommunications.
- Each contains distinctive photography, one clear paragraph, key examples and a link to a dedicated page.
- Provide direct navigation without requiring hover, carousel swipes or scroll animations.

### 05 — Integrated capabilities

- Heading: From concept to commissioning and beyond.
- Present the lifecycle: Discover & design → procure → construct & install → test & commission → operate & maintain.
- Include technical consultancy, training and manpower support as cross-cutting capabilities.
- Use a responsive process diagram or numbered editorial list. On mobile, stack it naturally; avoid horizontal scroll traps.
- Maintain a visible Procurement & Supply CTA because procurement is an established business strength.

### 06 — Featured projects

- Heading: Experience that speaks for itself.
- Feature approved real examples, labeled with precise scope, location, year, client/contractor relationship and status as applicable.
- Candidate examples (verify for publication): NLNG Train 7, instrumentation valve supply via Saipem E&C, Bonny, 2025, recorded as concluded; Alausa Power Plant, heavy-duty battery supply via Elektron Energy, Lagos, 2024, recorded as completed; selected MTN infrastructure support listed as ongoing in the July 2026 presentation, status to be refreshed before publishing.
- Always distinguish Drais's own work from partner/OEM references, bids and target project capabilities. Do not imply Drais delivered complete plants.
- CTA: Explore our project portfolio.

### 07 — Why Drais Energy

- Explain client value: coordinated project delivery, sourcing experience, local technical knowledge, quality and safety processes, equipment and partner access, maintenance support.
- Each claim should link to a relevant capability or approved evidence where possible. Avoid unsupported claims like “number one”, “zero incidents”, or “guaranteed delivery”.
- Use typography-led layout, real industrial detail shots and restrained accent rules.

### 08 — OEM relationships and HSSEQ

- Heading: Global relationships. Local delivery.
- Candidate brands from supplied profiles: Elsewedy Electric, Schneider Electric, Eaton, Siemens, Legrand, Raychem, Philips, Innomotics, ASSA ABLOY, Eland Cables, MCT Brattberg and CMP Products. Verify each relationship type, status and logo rights; manufacturer supplied does not imply authorised distributor.
- Candidate credentials in the materials: ISO 9001:2015, ISO 45001:2018, COREN and Nigerian Content credentials. Verify validity, issuing organisation, scope and public permissions. Distinguish staff training certificates from company certifications.
- Link to dedicated Partners and HSSEQ pages. Never expose personal details, private commercial documents, signatures or sensitive QR data.

### 09 — Enquiry and footer

- Heading: Your next project starts with a conversation.
- Primary CTA: Request a quote. Secondary CTA: Discuss your project.
- Footer: approved logo, company identity, industries, capabilities, products/projects, resources, approved contact information, privacy page and copyright year. Social profiles only if verified.
- Do not put unresolved contact addresses or nonfunctional social links in production.

## 6. Interior pages and content requirements

### Industry page template

Industry-specific hero, client challenges, relevant capabilities, product categories, project references, related credentials/partners and a context-aware enquiry CTA. Use a shared template with tailored imagery and meaningful content, not identical boilerplate.

| Industry | Coverage to organise and verify |
|---|---|
| Oil & Gas | Electrical/instrumentation/mechanical supply, civil/structural engineering, pipeline/corrosion services, process and technical safety, onshore/offshore support, maintenance and EPC scope |
| Power & Renewable Energy | Distribution, transformers, switchboards, motors/control systems, UPS and backup power, earthing and lightning protection, renewables, high voltage infrastructure, SCADA and grid automation |
| Telecommunications | Outside/inside plant fibre, wireless/towers, critical power, data centre infrastructure, security, renewable/hybrid systems, managed maintenance and smart infrastructure |

The listed items represent documented service scopes or target capabilities, not proof of completed projects. Verify which are actively marketed at launch.

### Product catalogue

Create useful categories: electrical equipment, instrumentation & control, mechanical equipment, cable management and accessories, safety/protection, power systems, electronic security. Examples: UPS, cable glands/trays, lighting, cable transits, motors, fire and gas instruments, earthing and lightning protection equipment. Use search/filter by category/manufacturer where inventory justifies it. Product detail: approved name, summary, technical characteristics (only verified), application, manufacturer/relationship, approved datasheet and RFQ link. Show an honest empty state. Never fabricate technical specs or SKUs.

### Projects

Filter by sector, relevant capability and verified status (only where meaningful). Project detail fields: title, scope, Drais role, direct client/contractor, end project owner if different, award year, location, status as of date, approved media, optional measured outcome with evidence. Don't publish internal bid IDs, purchase orders or tender-sensitive material. Deduplicate records. Partner-only references should be separately labeled, not mixed with Drais experience.

### Company, HSSEQ, partners and resources

Company history, mission/vision, integrity/excellence/innovation/client success values, leadership biographies and portraits where approved. HSSEQ page describes documented policies and certifications; avoid unsupported safety statistics. Partners page differentiates manufacturer, supplier, distributor, technical partner and project collaborator. Resources area shows only approved current public documents with file type/size and a readable HTML summary.

## 7. Art direction and design system

**Creative concept:** Premium industrial editorial. Visually confident but not aggressive. Spacious composition, restrained red, contrasting black/white, engineering precision and documentary imagery. Create rhythm through alternating light/dark sections, grid alignment and purposeful full-bleed visuals. Avoid excessive gradients, neon, glassmorphism, rounded cards everywhere, decorative blobs, heavy shadows and generic SaaS illustration styles.

### Proposed design tokens (not official brand guidelines)

| Token | Value / use |
|---|---|
| Brand red | `#B50912` — primary CTA, accent rules, emphasis |
| Red hover | `#920710` — deeper interactive state |
| Charcoal | `#191B1E` — headings, dark sections |
| Steel grey | `#50565E` — secondary text on light backgrounds |
| Light grey | `#F4F5F6` — alternate section surface |
| White | `#FFFFFF` — primary background |
| Border | `#D9DCE0` — subtle separation |
| Focus | `#005FCC` or suitable high-contrast adaptive token |

Approximate colour weight: 50% white, 20% light grey, 20% charcoal, 10% red. Treat it as art direction, not a mathematical requirement. Validate actual combinations for contrast; never use colour alone for states. Implement tokens in CSS variables, mapped to Tailwind. Use consistent 4px/8px spacing increments.

### Typography and layout

- Manrope for strong editorial headings; Inter for body text; use optimised local/Next fonts with suitable fallback. Confirm brand fonts if supplied.
- H1 desktop 64–80px, mobile 36–44px; H2 desktop 40–48px, mobile 28–36px; H3 22–28px; body 16–18px, line height roughly 1.5–1.7. Use fluid `clamp()` sizing with readable limits.
- Desktop 12-column grid, max content width around 1280–1440px, responsive page gutters 20–64px. Hero media may extend beyond the content grid. Breakpoints driven by content, not device assumptions.
- Desktop vertical section padding 80–120px, mobile 48–72px. Body text line length around 55–75 characters where appropriate.
- Buttons: firm rectangular industrial style with 4–8px radius, clear text labels, comfortable minimum 44px target where feasible. Consistent hover, focus, active, disabled and loading states.
- Use real design hierarchy through size, weight, alignment, proximity and contrast. Avoid overusing all-caps for long headings.

### Imagery

Prefer approved actual Drais staff, equipment and sites, respecting consent, safety and contractual restrictions. Editorial hero imagery should establish industrial scale; detail imagery should communicate technical precision; human imagery should communicate expertise. Use licensed generic imagery only as illustrative, not to represent specific project work or staff. Never substitute fabricated AI project imagery for real evidence. Optimise image sizes, provide alt text and aspect ratios. Keep the chosen logo consistent; supplied profiles show different logo variants, so obtain official files (SVG preferred).

## 8. Animation and interaction choreography

Motion must direct attention, communicate feedback and strengthen storytelling. It must never be required for accessing information or operating the site.

| Interaction | Proposed motion | Timing guideline |
|---|---|---|
| Hero heading/description/CTA | Subtle staggered opacity/translate reveal, immediately readable | 350–550ms per group; total sequence under about 900ms |
| Hero media | Optional bounded reveal or subtle scale settling | 600–850ms, once |
| Section entry | Opacity + translate 12–20px, once in viewport | 350–500ms |
| Industry cards | Image scale 1.00→1.03 and arrow movement 3–5px | 200–300ms |
| Navigation disclosure | Opacity transition and small position shift | 150–220ms |
| Buttons and links | CSS colour/underline/transform feedback | 120–200ms |
| Project entries | Small stagger only where helpful | 50–90ms stagger, short overall sequence |
| Lifecycle diagram | Optional simple line/progress reveal; content always visible | 400–650ms |
| Enquiry submission | Clear progress/success/error feedback; no artificial delay | Actual request lifecycle |

Use transform and opacity whenever possible. Avoid animating expensive layout properties on scroll. Do not animate every element. Use native scrolling, no scroll hijacking, no pinned content that makes users wait, no intrusive cursor followers, no mandatory video or parallax. Avoid looping marquees by default. If a moving element lasts more than five seconds alongside other content, provide pause/stop/hide as applicable. Disable decorative scroll-linked effects for reduced motion. Maintain native focus and hit targets.

Implementation baseline:

```tsx
'use client';
import { MotionConfig } from 'motion/react';
import type { ReactNode } from 'react';

export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
```

Use `useReducedMotion()` for bespoke effects and CSS `prefers-reduced-motion` overrides. Keep initial server-rendered content visible; never set all sections to opacity 0 until JavaScript loads. Use entry animations as progressive enhancement, with a visible fallback when scripts fail. Avoid repeating animations every time users scroll. Use `LazyMotion` when compatible and beneficial. If GSAP is justified, isolate it to a client component, use `useGSAP`/scoped cleanup and responsive/reduced-motion safeguards; test navigation and unmounting.

## 9. Enquiry experience and secure functionality

A procurement manager must be able to reach a relevant form directly from a product, project or industry page. Maintain the context in a safe, validated prefilled field.

### Request a quote

Required fields: name, work email, organisation, relevant industry/service or product, requirements. Optional phone, delivery/project location, desired schedule and quantity if applicable. A technical document attachment is optional future scope; enable only if secure storage, restricted types/size, malware scanning and retention rules are approved.

### Contact / discuss a project

Name, email, organisation (optional for general enquiry), subject/category, message. Include a privacy notice for processing the enquiry, not a mandatory marketing opt-in. Do not collect information unnecessary for the request.

### Server workflow

Use server-side Zod validation, input length limits, rate limiting, bot mitigation (e.g. honeypot), origin checks as appropriate and safe escaping. No hardcoded credentials or secrets in client bundles. Use an approved email or CRM integration; configure secrets via environment variables, document `.env.example` with no real values. Confirm successful acceptance only after server/provider confirmation; don't pretend an enquiry was sent if no provider exists. Provide accessible validation, pending, error/retry and success states; preserve non-sensitive field values after transient failures. Do not log full enquiry contents unnecessarily. Define data retention with the business. Do not expose a publicly writable endpoint without abuse protections.

## 10. Suggested repository organization

```text
src/
  app/                     # Routes, layouts, metadata, handlers
  components/
    layout/                # Header, navigation, footer, breadcrumbs
    ui/                    # Button, field, badge, dialog, accessible primitives
    sections/              # Homepage sections and shared content blocks
    motion/                # Motion provider and reusable effects
    forms/                 # Contact and RFQ forms
  features/
    industries/
    capabilities/
    products/
    projects/
  content/                 # Typed verified text, catalogue, project data
  lib/                     # Validation, service interfaces, SEO, helpers
  styles/                  # Global styles and design tokens
public/
  brand/                   # Approved brand assets
  images/                  # Optimized approved or labeled illustrative imagery
  documents/               # Only approved public downloads
 tests/                    # E2E, accessibility and functional tests
CONTENT_REVIEW.md
README.md
.env.example
```

Organize components by responsibility. Use content types with stable IDs/slugs, relationships, publication state and review date. Keep drafts/private documents outside public folders. No repeated inline data blocks across pages. Design for future CMS integration without building an admin dashboard at launch. Prefer typed files until an editing workflow is actually requested.

## 11. Accessibility, performance and SEO

- Target WCAG 2.2 AA. Verify actual text contrast (4.5:1 normal, 3:1 large) and applicable non-text contrast. Use semantic landmarks, a skip link, one descriptive primary page heading, sensible heading order, keyboard-operable controls, visible focus, proper labels and announced form states. Test reduced motion, zoom/reflow and mobile screen readers manually where possible.
- Support widths of 320, 375, 768, 1024, 1440 and 1920 CSS px without overflow or lost functionality. Ensure all menu links, industry CTAs, filters and form controls work without hover.
- Aim for production Core Web Vitals at p75: LCP ≤2.5s, INP ≤200ms, CLS ≤0.1. These are goals, not guaranteed outcomes; use lab testing before launch and field monitoring after. Use optimized image sizes, modern formats, reserved dimensions, eager loading only for critical imagery, lazy loading below fold, optimized fonts and minimal client JS. Do not autoplay heavy video on mobile.
- Provide distinct page titles/descriptions, canonical URLs, sitemap, robots directives, Open Graph media, useful internal links, descriptive URLs and accurate structured data (Organization/BreadcrumbList where appropriate). No fake ratings or unverified schema claims.
- Inventory existing indexed URLs before migration and preserve or redirect legitimate old routes using 301s where appropriate. Inspect the current website and hosting for possible injected spam or other compromise; this has not been independently diagnosed in this brief. Do not migrate suspicious links/plugins/content. Verify clean deployment, HTTPS and appropriate security headers.

## 12. Execution sequence and acceptance criteria

### Phase A — Discovery and foundation

Audit repository/current site and assets; record missing approvals; scaffold or adapt framework; implement content types, design tokens, typography and layout. Produce responsive homepage wireframe/structure and high-fidelity implementation. No fake facts.

### Phase B — Homepage and navigation

Implement all nine sections, mobile and desktop navigation, shared footer and first-pass motion. Verify clarity, typography, visual rhythm and CTA prominence before adding elaborate effects. Test keyboard navigation and mobile layout.

### Phase C — Interior pages

Implement industry, capability, product, project, company, partners/HSSEQ and resource templates with source-grounded content. Wire internal links, breadcrumbs and catalogue filters. Hide unpublished content; do not leave fake links or “coming soon” placeholders in final public pages.

### Phase D — Enquiries and integration

Implement secure contact/RFQ workflow, provider integration (if credentials supplied), success/error/pending states, contextual prefill and privacy notices. If credentials or approval are missing, explicitly mark deployment blocked for functional enquiries; local mock behavior must be clearly labeled and disabled in production.

### Phase E — QA and release readiness

- Type checking, lint and production build pass.
- Playwright covers desktop/mobile menus, primary navigation, industry-to-service journey, filters, product-to-RFQ flow, validation errors, delivery success and delivery failure using controlled test integration.
- Manual visual review at key viewport sizes; keyboard and reduced-motion checks; axe automated scans plus manual accessibility review. Automated tests alone do not prove WCAG conformance.
- Check performance on representative mobile/network conditions; record measurements and environment, not invented results.
- Validate all links, metadata, assets, form handling, approved copy and credential expiry.
- Provide README with run/build/test/deploy instructions, configuration requirements and actual verification results. List remaining blockers and approval decisions; do not claim production-ready until all required items pass.

## 13. Content review — required business approvals

| Item | Decision needed |
|---|---|
| Logo | Select official version; supplied profiles contain different marks |
| Company descriptor | Agree consistent EPC, EPCIC, EPICC and O&M terminology |
| Industry taxonomy | Approve Oil & Gas, Power & Renewables, Telecommunications as three primary paths; Procurement as a cross-industry capability |
| Leadership | Confirm names/roles/bios and approved portraits; general profile has a blank COO entry and placeholder imagery |
| Projects | Deduplicate entries, update status/date, confirm Drais role, redact sensitive references, obtain media rights |
| OEMs | Confirm exact relationship category, active status and permission for marks |
| Certifications | Verify currency, scope and issuer; separate individual training from company credentials |
| Contact | Confirm official email, phones, addresses, enquiry owner and SLA if any; documents show different email addresses |
| Documents | Approve safe public brochure versions; never publish raw presentations with confidential purchase orders, bids or personal information |
| Enquiry processing | Select email/CRM provider, recipients, privacy and retention policy |
| Hosting | Confirm supported hosting, domain ownership, migration strategy and security audit |

## 14. Source material and reference documentation

Business source documents provided by the user (copy into a private project reference folder if permitted):

1. `Drais Energy Nig. Ltd. Profile_.pdf` — 2026 corporate overview; pp. 2–6 mission, sectors, services and values; p. 7 leadership; pp. 9–12 partners/credentials.
2. `Drais Energy Nig. Ltd. Oil & Gas Presentation_.pdf` — 1 July 2026; pp. 2–4 company history/scope/partners; pp. 5–10 procurement project references; p. 25 EPC transition; p. 44 MTN infrastructure engagements and bids. Historical records are not automatically current.
3. `Drais Energy Nig. Ltd. Telecoms_.pdf` — pp. 2, 6–16 telecommunications scope and delivery approach; pp. 17–26 security systems; pp. 28–29 maintenance capabilities.
4. `Drais Power Profile_.pdf` — pp. 10–25 power infrastructure scope; p. 26 manufacturer relationship letter; p. 27 SCADA; p. 28 partner project references (not Drais's own work).

Technical references:
- Next.js installation: https://nextjs.org/docs/app/getting-started/installation
- Next.js font/image optimization: https://nextjs.org/learn/dashboard-app/optimizing-fonts-images
- Next.js static export constraints: https://nextjs.org/docs/app/guides/static-exports
- Motion React: https://motion.dev/docs/react
- Motion accessibility: https://motion.dev/docs/react-accessibility
- Motion scroll animation: https://motion.dev/docs/react-scroll-animations
- Optional GSAP ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- WCAG 2.2: https://www.w3.org/TR/WCAG22/
- Web Vitals: https://web.dev/articles/vitals

## 15. Final design standard

The website should make a technical buyer think: “I understand what Drais Energy does, I can find what I need, I see credible evidence and I know how to engage them.”

The website should not trade beauty for functionality, functionality for visual expression, or marketing for truthful evidence. Deliver all three with deliberate hierarchy, useful content and restrained motion. This brief does not constitute a completed website, verified brand guide, live security audit or independently authenticated project portfolio.
