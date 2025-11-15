# Green Schools Foundation - Color Scheme Reference

## Overview
The Green Schools Foundation website uses an orange and black color scheme that matches the Green Local School's brand colors.

## Primary Colors (Orange)
- **primary-50**: `#fff7ed` - Very light orange background
- **primary-100**: `#ffedd5` - Light orange background
- **primary-200**: `#fed7aa` - Light orange
- **primary-300**: `#fdba74` - Medium light orange
- **primary-400**: `#fb923c` - Medium orange
- **primary-500**: `#f97316` - Main orange (primary brand color)
- **primary-600**: `#ea580c` - Dark orange (most used for text/buttons)
- **primary-700**: `#c2410c` - Darker orange
- **primary-800**: `#9a3412` - Very dark orange
- **primary-900**: `#7c2d12` - Darkest orange

## Secondary Colors (Grayscale/Black)
- **secondary-50**: `#fafafa` - Almost white
- **secondary-100**: `#f4f4f5` - Light gray
- **secondary-200**: `#e4e4e7` - Light gray
- **secondary-300**: `#d4d4d8` - Medium light gray
- **secondary-400**: `#a1a1aa` - Medium gray
- **secondary-500**: `#71717a` - Gray
- **secondary-600**: `#52525b` - Dark gray
- **secondary-700**: `#3f3f46` - Darker gray
- **secondary-800**: `#27272a` - Very dark gray (main black)
- **secondary-900**: `#18181b` - Darkest black

## Accent Colors (Golden Orange)
- **accent-50**: `#fef3c7` - Very light golden
- **accent-100**: `#fde68a` - Light golden
- **accent-200**: `#fcd34d` - Light golden orange
- **accent-300**: `#fbbf24` - Medium golden orange
- **accent-400**: `#f59e0b` - Golden orange
- **accent-500**: `#d97706` - Dark golden orange
- **accent-600**: `#b45309` - Darker golden orange
- **accent-700**: `#92400e` - Very dark golden orange
- **accent-800**: `#78350f` - Darkest golden orange
- **accent-900**: `#451a03` - Almost brown

## Usage Guidelines

### Primary Usage
- **primary-600** (`#ea580c`): Main headings, primary buttons, brand elements
- **secondary-800** (`#27272a`): Footer background, dark sections
- **accent-500** (`#d97706`): Accent elements, gradients

### Text Colors
- **White**: Main text on dark backgrounds
- **secondary-900** (`#18181b`): Main text on light backgrounds
- **secondary-600** (`#52525b`): Secondary text, descriptions

### Backgrounds
- **White**: Main content areas
- **secondary-50** (`#fafafa`): Light section backgrounds
- **secondary-800** (`#27272a`): Dark sections (footer)
- **Gradient**: `from-primary-500 to-secondary-800` for hero section

### Interactive Elements
- **Hover states**: Generally use darker shades of the same color
- **Links**: `primary-400` with `hover:text-white` on dark backgrounds
- **Buttons**: Various combinations of primary and secondary colors

## Component Color Mapping

### Hero Section
- Background: `bg-gradient-to-br from-primary-500 to-secondary-800`
- Text: `text-white`
- Primary Button: `bg-white text-primary-600 hover:bg-gray-50`
- Secondary Button: `bg-transparent text-white border-white hover:bg-white hover:text-primary-600`

### Memberships Section
- Background: `bg-gray-50`
- Heading: `text-primary-600`
- Cards: `bg-white` with `border-gray-200`
- Card accent: `bg-gradient-to-r from-primary-500 to-accent-500`
- Buttons: `bg-primary-600 hover:bg-primary-700`

### Donate Section
- Background: `bg-white`
- Heading: `text-primary-600`
- Button: `bg-primary-600 hover:bg-primary-700`

### Board Section
- Background: `bg-gray-50`
- Heading: `text-primary-600`
- Button: `bg-secondary-700 hover:bg-secondary-800`

### Footer
- Background: `bg-secondary-800`
- Text: `text-white`
- Links: `text-primary-400 hover:text-white`

## Alternative Green Colors (Preserved)
The original green color palette has been preserved as `green-*` classes for potential future use or alternative branding needs.