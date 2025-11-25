# Green Schools Foundation Website

## Project Overview

This is the official website for the **Green Schools Foundation**, a nonprofit organization that has been supporting students in the Green Local School District since 1992. The website was migrated from a Wix-based platform to a modern, high-performance static site built with Astro and hosted on Cloudflare Pages.

## Mission

The Green Schools Foundation promotes academic excellence and success for all students in the Green Local School District through:
- Scholarship programs
- Academic classroom grants for teachers
- The Laws of Life essay competition
- The Academy of Scholars program
- The annual Celebration of Education event

## Technical Stack

- **Framework**: Astro 5.x (static site generation)
- **Styling**: Tailwind CSS 3.x
- **Deployment**: Cloudflare Pages with `@astrojs/cloudflare` adapter
- **TypeScript**: Full TypeScript support enabled
- **Node**: Package management via npm

## Architecture

### Project Structure

```
gsf/
├── src/
│   ├── components/          # Reusable Astro components
│   │   ├── Header.astro    # Main navigation with dropdown menus
│   │   ├── Footer.astro    # Site footer with contact info & links
│   │   ├── Hero.astro      # Homepage hero section
│   │   ├── HeroContent.astro
│   │   ├── ImageGallery.astro  # Homepage image gallery
│   │   ├── Memberships.astro   # Membership options display
│   │   ├── Donate.astro    # Donation call-to-action
│   │   └── Board.astro     # Board member information
│   ├── layouts/
│   │   ├── Layout.astro         # Base HTML layout (head, meta tags)
│   │   ├── ContentLayout.astro  # Standard content pages with breadcrumbs
│   │   └── BlogPostLayout.astro # Blog post pages
│   ├── pages/              # File-based routing
│   │   ├── index.astro     # Homepage
│   │   ├── about-gsf.astro
│   │   ├── scholarships.astro
│   │   ├── foundation-initiatives.astro
│   │   ├── academic-class-grants.astro
│   │   ├── laws-of-life.astro
│   │   ├── celebration-of-education.astro
│   │   ├── membership.astro
│   │   ├── blog.astro
│   │   └── post/           # Individual blog posts
│   └── assets/             # Static assets processed by Astro
├── public/                 # Static files served as-is
│   ├── images/            # Image assets
│   ├── _files/            # Legacy files from old site (preserved for compatibility)
│   ├── favicon.png
│   ├── favicon.svg
│   └── gsf-logo.png/webp
├── _archive/              # OLD WEBSITE BACKUP
│   └── www.greenschoolsfoundation.org/  # Original Wix site snapshot
├── astro.config.mjs       # Astro configuration
├── tailwind.config.js     # Tailwind customization
├── wrangler.jsonc         # Cloudflare Pages deployment config
├── COLOR_SCHEME.md        # Color palette reference
└── MIGRATION.md           # Migration notes and strategy
```

## Design System

### Color Scheme
The website uses **orange and black** to match Green Local Schools' brand identity:

- **Primary (Orange)**: `#ea580c` (primary-600) for headings, buttons, brand elements
- **Secondary (Black/Gray)**: `#27272a` (secondary-800) for footer and dark sections
- **Accent (Golden Orange)**: `#d97706` (accent-500) for gradients and accents
- **Text**: White on dark backgrounds, `#18181b` on light backgrounds

See `COLOR_SCHEME.md` for complete palette and usage guidelines.

### Typography & Spacing
- System font stack for optimal performance
- Consistent spacing using Tailwind's spacing scale
- Responsive typography that scales appropriately on mobile

## Key Features

### Navigation
- Desktop: Full navigation bar with dropdown menus
- Mobile: Responsive hamburger menu
- Foundation Initiatives submenu (Scholarships, Grants, Academy of Scholars, Laws of Life)

### Homepage Sections
1. **Hero/Gallery**: Image carousel showcasing school activities
2. **Memberships**: Individual, Family, and Corporate membership options
3. **Donate**: Call-to-action for donations
4. **Board**: Information about the foundation's board of trustees

### Content Pages
- All pages use consistent `ContentLayout` with breadcrumb navigation
- SEO-optimized meta tags and descriptions
- Responsive design for all screen sizes

### Blog System
- Located in `src/pages/blog.astro` (index) and `src/pages/post/` (individual posts)
- Uses `BlogPostLayout` for consistent formatting
- Each post is a separate `.astro` file

## Development Workflow

### Commands

```bash
# Install dependencies
npm install

# Start development server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to Cloudflare Pages
npm run deploy

# Generate Cloudflare types
npm run cf-typegen
```

### Making Changes

#### Adding a New Page
1. Create `src/pages/page-name.astro`
2. Import and use `ContentLayout` or `Layout`
3. Add navigation link to `Header.astro` if needed
4. Ensure breadcrumbs are configured correctly

#### Adding a Blog Post
1. Create `src/pages/post/post-slug.astro`
2. Use `BlogPostLayout` for consistent structure
3. Update `src/pages/blog.astro` to include the new post in the listing

#### Updating Components
- Components are in `src/components/`
- Make changes to `.astro` files
- Components are automatically reactive

#### Adding Images
- Place images in `public/images/` for direct access
- Or use `src/assets/` for Astro's image optimization
- Reference with `/images/filename.ext` in HTML

## Important Context

### Migration from Wix
- The old Wix website is preserved in `_archive/www.greenschoolsfoundation.org/`
- All URLs were preserved to maintain SEO and prevent broken links
- Legacy file structure in `public/_files/` is maintained for compatibility

### URL Structure (Preserved)
All existing URLs continue to work:
- `/about-gsf`
- `/scholarships`
- `/foundation-initiatives`
- `/academic-class-grants`
- `/laws-of-life`
- `/celebration-of-education`
- `/membership`
- `/blog`
- `/post/[slug]`

### Content Management
- **No CMS**: Content is managed directly in `.astro` files
- Updates require editing source files and redeploying
- Consider future CMS integration for non-technical content editors

### Performance
- Static site generation means excellent performance
- Cloudflare CDN provides global distribution
- Optimized images and minimal JavaScript
- All pages pre-rendered at build time

## Contact Information

- **Organization**: Green Schools Foundation
- **Email**: greenschoolsfoundation@gmail.com
- **Website**: https://greenschoolsfoundation.org
- **Mailing Address**: PO Box 406, Green, OH 44232
- **Phone**: 330-896-7790

## Common Tasks

### Update Board Members
Edit `src/components/Board.astro`

### Update Membership Pricing
Edit `src/components/Memberships.astro`

### Update Navigation
Edit `src/components/Header.astro`

### Update Footer Links
Edit `src/components/Footer.astro`

### Change Color Scheme
Edit `tailwind.config.js` and update color variables

## Deployment

The site is configured to deploy to Cloudflare Pages:
1. Build occurs via `npm run build` (outputs to `dist/`)
2. Cloudflare adapter optimizes for Pages platform
3. Deploy with `npm run deploy` or via Git integration
4. Custom domain and SSL are configured through Cloudflare dashboard

## Technical Notes

- **Cloudflare Image Service**: Enabled in `astro.config.mjs` for image optimization
- **Platform Proxy**: Enabled for local development that mimics Cloudflare environment
- **TypeScript**: Configured in `tsconfig.json`
- **Worker Types**: Generated via `wrangler types` for Cloudflare Workers API

## Future Enhancements

Potential improvements documented in `MIGRATION.md`:
- Online application forms (scholarships, grants, trustee)
- Event registration system
- Member portal
- Online donation processing
- Headless CMS integration
- Analytics integration (Google Analytics)

## References

- Full migration documentation: `MIGRATION.md`
- Color palette details: `COLOR_SCHEME.md`
- Astro documentation: https://docs.astro.build
- Tailwind CSS documentation: https://tailwindcss.com
- Cloudflare Pages documentation: https://developers.cloudflare.com/pages
