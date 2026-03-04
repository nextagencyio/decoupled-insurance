# Decoupled Insurance

An insurance agency website starter template for Decoupled Drupal + Next.js. Built for independent insurance agencies, brokers, and insurance companies.

![Decoupled Insurance Screenshot](docs/screenshot.png)

## Features

- **Products** - Insurance coverage options including homeowners, auto, life, and business insurance with premium ranges
- **Team Members** - Agent and staff profiles with positions, contact info, and professional photos
- **Resources** - Educational articles and guides on home inventory, claims processes, and coverage planning
- **Modern Design** - Clean, accessible UI optimized for insurance and financial services content

## Quick Start

### 1. Clone the template

```bash
npx degit nextagencyio/decoupled-insurance my-insurance
cd my-insurance
npm install
```

### 2. Run interactive setup

```bash
npm run setup
```

This interactive script will:
- Authenticate with Decoupled.io (opens browser)
- Create a new Drupal space
- Wait for provisioning (~90 seconds)
- Configure your `.env.local` file
- Import sample content

### 3. Start development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

---

## Manual Setup

If you prefer to run each step manually:

<details>
<summary>Click to expand manual setup steps</summary>

### Authenticate with Decoupled.io

```bash
npx decoupled-cli@latest auth login
```

### Create a Drupal space

```bash
npx decoupled-cli@latest spaces create "My Insurance"
```

Note the space ID returned. Wait ~90 seconds for provisioning.

### Configure environment

```bash
npx decoupled-cli@latest spaces env 1234 --write .env.local
```

### Import content

```bash
npm run setup-content
```

This imports:
- Homepage with hero, stats (50,000+ policyholders, 97% claims satisfaction, 24/7 claims support, 30+ years), and free quote CTA
- 4 products: Homeowners Insurance, Auto Insurance, Life Insurance, Business Insurance
- 3 team members: David Hartwell (President & Founder), Lisa Park (Claims Director), Marcus Johnson (Senior Commercial Agent)
- 3 resources: How to Create a Home Inventory, What to Do After a Car Accident, How Much Life Insurance Do You Need?
- 2 static pages: About Ironclad Insurance Group, Contact Ironclad Insurance Group

</details>

## Content Types

### Product
- **coverage_type**: Type of insurance coverage (Property, Auto, Life, Commercial)
- **premium_range**: Monthly premium price range (e.g., "$75 - $250/month")
- **image**: Product featured image

### Team Member
- **position**: Job title or role
- **email**: Professional email address
- **phone**: Contact phone number
- **photo**: Professional headshot

### Resource
- **resource_category**: Category (Home Insurance, Auto Insurance, Life Insurance)
- **image**: Featured image

### Homepage
- **hero_title**: Main headline (e.g., "Coverage You Can Trust")
- **hero_subtitle**: Tagline (e.g., "Ironclad Insurance Group")
- **hero_description**: Introductory paragraph
- **stats_items**: Key statistics (policyholders, satisfaction, support, years)
- **featured_items_title**: Section heading for coverage options
- **cta_title / cta_description**: Free quote call-to-action

### Basic Page
- General-purpose static content pages (About, Contact, etc.)

## Customization

### Colors & Branding
Edit `tailwind.config.js` to customize colors, fonts, and spacing.

### Content Structure
Modify `data/insurance-content.json` to add or change content types and sample content.

### Components
React components are in `app/components/`. Update them to match your design needs.

## Demo Mode

Demo mode allows you to showcase the application without connecting to a Drupal backend.

### Enable Demo Mode

```bash
NEXT_PUBLIC_DEMO_MODE=true
```

### Removing Demo Mode

1. Delete `lib/demo-mode.ts`
2. Delete `data/mock/` directory
3. Delete `app/components/DemoModeBanner.tsx`
4. Remove `DemoModeBanner` from `app/layout.tsx`
5. Remove demo mode checks from `app/api/graphql/route.ts`

## Deployment

### Vercel (Recommended)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nextagencyio/decoupled-insurance)

### Other Platforms
Works with any Node.js hosting platform that supports Next.js.

## Documentation

- [Decoupled.io Docs](https://www.decoupled.io/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Drupal GraphQL](https://www.decoupled.io/docs/graphql)

## License

MIT
