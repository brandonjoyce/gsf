# Green Schools Foundation Website Migration

## Overview

This document outlines the migration of the Green Schools Foundation website from a Wix-based platform to a modern Astro-based static website hosted on Cloudflare Pages.

## Migration Strategy

### URL Preservation
All existing URLs have been preserved to maintain SEO value and prevent broken links:

- `/about-gsf` → About GSF page
- `/scholarships` → Scholarships page
- `/foundation-initiatives` → Foundation Initiatives overview
- `/academic-class-grants` → Academic Classroom Grants
- `/academy-of-scholars` → Academy of Scholars
- `/laws-of-life` → Laws of Life essay competition
- `/celebration-of-education` → Annual event page
- `/membership` → Membership information
- `/blog` → Blog/news section
- `/post/[slug]` → Individual blog posts

### Content Migration

#### Pages Migrated
1. **Homepage** - Completely redesigned with modern components
2. **About GSF** - Full board information and president's message
3. **Scholarships** - Application information and past recipients
4. **Foundation Initiatives** - Program overview and navigation hub
5. **Academic Class Grants** - Teacher grant application details
6. **Laws of Life** - Essay competition guidelines and tips
7. **Celebration of Education** - Annual event information
8. **Membership** - Individual, family, and corporate membership options
9. **Blog** - News and updates section

#### Assets Migrated
- Trustee application PDF
- Logo and branding assets
- Key images (placeholders created for missing assets)

### Technical Architecture

#### Framework: Astro
- Static site generation for optimal performance
- Component-based architecture
- TypeScript support
- Tailwind CSS for styling

#### Hosting: Cloudflare Pages
- Global CDN distribution
- Automatic deployments from Git
- Built-in analytics and performance monitoring
- SSL certificates

#### Design System
- Orange and black color scheme matching Green Local Schools
- Responsive design for all devices
- Accessible navigation and content structure
- Professional typography and spacing

### New Features Added

1. **Enhanced Navigation**
   - Dropdown menus for better organization
   - Mobile-responsive hamburger menu
   - Breadcrumb navigation on content pages

2. **Improved Content Structure**
   - Consistent page layouts
   - Better information hierarchy
   - Enhanced readability with proper typography

3. **Blog System**
   - Category organization
   - Social sharing buttons
   - Related content suggestions
   - SEO-optimized structure

4. **Enhanced Forms and CTAs**
   - Clear contact information
   - Multiple engagement pathways
   - Professional application processes

### Content Updates

#### Maintained Content
- All board member information
- Scholarship details and deadlines
- Program descriptions and benefits
- Contact information and mailing address
- Social media links

#### Enhanced Content
- More detailed program descriptions
- Better organized navigation structure
- Improved calls-to-action
- Professional photography placeholders
- Structured data for better SEO

### SEO Improvements

1. **Meta Data**
   - Proper page titles and descriptions
   - Open Graph tags for social sharing
   - Structured data markup

2. **Performance**
   - Optimized images with proper sizing
   - Minified CSS and JavaScript
   - Fast loading times with static generation

3. **Accessibility**
   - Proper heading hierarchy
   - Alt text for images
   - Keyboard navigation support
   - Color contrast compliance

### File Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.astro    # Main navigation
│   ├── Footer.astro    # Site footer
│   ├── Hero.astro      # Homepage hero section
│   └── ...
├── layouts/            # Page layout templates
│   ├── Layout.astro    # Base HTML structure
│   ├── ContentLayout.astro  # Content pages
│   └── BlogPostLayout.astro # Blog posts
├── pages/              # Website pages
│   ├── index.astro     # Homepage
│   ├── about-gsf.astro
│   ├── scholarships.astro
│   ├── blog.astro
│   └── post/           # Blog posts
└── assets/             # Images and static files

public/
├── images/             # Image assets
├── documents/          # PDFs and downloads
├── _files/             # Legacy file structure (preserved)
└── favicon.png
```

### Development Workflow

1. **Local Development**
   ```bash
   npm run dev
   ```

2. **Build Production**
   ```bash
   npm run build
   ```

3. **Deploy to Cloudflare**
   ```bash
   npm run deploy
   ```

### Content Management

#### Blog Posts
- Create new posts in `src/pages/post/[slug].astro`
- Use BlogPostLayout for consistent formatting
- Update blog index with new post metadata

#### Page Updates
- Edit existing pages directly in `src/pages/`
- Use ContentLayout for standard pages
- Maintain breadcrumb structure for navigation

#### Asset Management
- Add images to `public/images/`
- Add documents to `public/documents/`
- Optimize images before upload

### Future Enhancements

1. **Content Management System**
   - Consider headless CMS integration
   - Automated content updates
   - Non-technical content editing

2. **Enhanced Features**
   - Online application forms
   - Event registration system
   - Member portal
   - Donation processing

3. **Analytics Integration**
   - Google Analytics setup
   - Performance monitoring
   - User behavior tracking

### Contact Information

For technical questions about this migration or website maintenance:
- Email: greenschoolsfoundation@gmail.com
- Website: https://greenschoolsfoundation.org

### Maintenance Notes

- Regular content updates should be made directly to the appropriate page files
- New blog posts require updating both the post file and the blog index
- Asset optimization is important for performance
- Test all forms and links after any significant changes
- Monitor Core Web Vitals and performance metrics