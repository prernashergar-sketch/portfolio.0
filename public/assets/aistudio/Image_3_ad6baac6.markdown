---
name: Obsidian Precision
colors:
  surface: '#0d1322'
  surface-dim: '#0d1322'
  surface-bright: '#33394a'
  surface-container-lowest: '#080e1d'
  surface-container-low: '#151b2b'
  surface-container: '#191f2f'
  surface-container-high: '#242a3a'
  surface-container-highest: '#2f3445'
  on-surface: '#dde2f8'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dde2f8'
  inverse-on-surface: '#2a3040'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#7bd0ff'
  on-secondary: '#00354a'
  secondary-container: '#00a6e0'
  on-secondary-container: '#00374d'
  tertiary: '#a4c9ff'
  on-tertiary: '#00315d'
  tertiary-container: '#4c93e7'
  on-tertiary-container: '#002a51'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#c4e7ff'
  secondary-fixed-dim: '#7bd0ff'
  on-secondary-fixed: '#001e2c'
  on-secondary-fixed-variant: '#004c69'
  tertiary-fixed: '#d4e3ff'
  tertiary-fixed-dim: '#a4c9ff'
  on-tertiary-fixed: '#001c39'
  on-tertiary-fixed-variant: '#004883'
  background: '#0d1322'
  on-background: '#dde2f8'
  surface-variant: '#2f3445'
typography:
  display:
    fontFamily: Inter
    fontSize: 3.75rem
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  display-mobile:
    fontFamily: Inter
    fontSize: 2.5rem
    fontWeight: '800'
    lineHeight: '1.15'
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 1.75rem
    fontWeight: '700'
    lineHeight: '1.25'
    letterSpacing: -0.015em
  headline-md:
    fontFamily: Inter
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: '1.35'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.55'
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.005em
  label-md:
    fontFamily: Inter
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  code:
    fontFamily: JetBrains Mono
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: -0.01em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-lg: 2rem
  margin: 1rem
  margin-md: 2rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes an ultra-clean, engineering-grade personal portfolio experience designed for high-caliber technical presentation. The brand persona blends deep technical competence with understated digital elegance—delivering an experience that feels architectural, intentional, and clutter-free. 

The aesthetic marries **Minimalism** with **Modern Developer Precision**:
- Atmospheric depth governed by deep midnight and slate-navy foundations rather than generic pitch blacks.
- High-contrast, optical hierarchy where primary copy gleams like crisp studio illumination against dark stone.
- Vibrancy delivered strictly through purposeful strokes of electric blue and luminous cyan-sky edges, avoiding visual noise.
- Clean structural alignment reminiscent of modern engineering command palettes, developer consoles, and refined portfolio monographs.

## Colors

The palette is engineered around dark luminescence: high signal-to-noise ratio, pure legible contrasts, and kinetic accent colors.

### Surface Hierarchy
- **Canvas Base (`#0B1120`)**: The deepest background tone, anchoring the entire viewport.
- **Surface Elevation (`#0F172A`)**: The primary structural container layer for cards, sidebars, and panels.
- **Surface Elevated Interactive (`#1E293B`)**: States for active rows, hover chips, and nested inner wells.

### Accent & Signal
- **Primary Electric Blue (`#3B82F6`)**: Applied to primary CTAs, active focus indicators, and anchor iconography.
- **Secondary Sky Cyan (`#38BDF8`)**: Key technical metadata, status indicators, and luminous gradient terminal edges.
- **Tertiary Soft Azure (`#60A5FA`)**: Inline links, pill accents, and secondary focus states.

### Contrast Text & Borders
- **Text Primary (`#F8FAFC`)**: 98% bright, crisp white ensuring stark legibility.
- **Text Secondary (`#94A3B8`)**: Mid-tone slate for supporting descriptions and metadata.
- **Text Tertiary (`#64748B`)**: Muted slate for captions, code decorators, and timestamps.
- **Subtle Outline (`rgba(56, 189, 248, 0.12)`)**: Razor-thin sky border structure separating modular cards from the base layer.

## Typography

Typography relies uniformly on **Inter** to project systematic precision, maximum optical legibility at varying scales, and modern European graphic austerity. An auxiliary monospaced token (`JetBrains Mono`) handles terminal outputs, tech stack tokens, and metric readouts.

- Headlines leverage negative letter-spacing (`-0.01em` down to `-0.03em`) and heavy weights (`700` to `800`) to emulate confident tech editorial spreads.
- Body copy balances generous line heights (`1.55` to `1.6`) against mid-slate values for fatigue-free reading across prolonged case study reviews.
- All metadata tags, overlines, and system state labels enforce uppercase rendering when paired with `label-sm` to maintain strict visual rhythm.

## Layout & Spacing

The layout is built on a responsive 12-column grid constrained to a maximum content width of `1200px` to maintain optimal line lengths and structural density.

### Breakpoint Matrix
- **Mobile (< 768px)**: 4-column layout, outer margin `1rem`, gutter `1rem`. Stack modular grid items sequentially.
- **Tablet (768px – 1024px)**: 8-column layout, outer margin `2rem`, gutter `1.5rem`. Two-column card distributions.
- **Desktop (> 1024px)**: 12-column layout, outer margin centered with `4rem` horizontal padding, gutter `2rem`. Multi-span asymmetric arrangements (e.g., 7-column primary feature, 5-column architectural metadata).

### Rhythmic Rules
Inner component spaces prioritize increments of `8px` (`0.5rem`). Micro-interactions utilize `0.25rem` (`space-xs`), standard component padding settles at `1rem` to `1.5rem` (`space-md` to `space-lg`), and section separating blocks enforce `2.5rem` to `5rem` intervals.

## Elevation & Depth

This system avoids muddy drop-shadows and artificial skeuomorphism in favor of **Tonal Layering** accompanied by **Subtle Cyan/Sky Vector Outlines**:

- **Level 0 (Base Canvas)**: Pure deep navy (`#0B1120`). Static backdrop.
- **Level 1 (Card & Module Layer)**: Slate navy surface (`#0F172A`) bordered by 1px solid hairline outlines in `rgba(56, 189, 248, 0.12)`.
- **Level 2 (Interactive Floating & Modals)**: Surface elevated to `#1E293B`, reinforced by an electric-blue ambient bloom:
  - `box-shadow: 0 0 0 1px rgba(56, 189, 248, 0.25), 0 8px 24px -4px rgba(11, 17, 32, 0.75)`
- **Hover Micro-glow**: On card or button hover, elevation is indicated not by dramatic vertical displacement, but by shifting the border opacity to `rgba(56, 189, 248, 0.4)` and emitting an inward/outward cyan edge radiance of `0 0 16px -2px rgba(59, 130, 246, 0.2)`.

## Shapes

The geometry strikes a refined balance between modern software interfaces and structural solidity:
- Primary container cards, modal dialogs, and code viewer panels use `rounded-lg` (`1rem / 16px`).
- Form elements, interactive buttons, tabs, and technical badges inherit standard `rounded` (`0.5rem / 8px`).
- Micro tags, status indicators, and notification pips retain a subtle `rounded-sm` or true pill geometry (`9999px`) only when indicating continuous status states (e.g., "Available for Hire").

## Components

### Buttons
- **Primary**: Solid Electric Blue (`#3B82F6`) background, text `#F8FAFC` (`label-md`), `rounded` (`8px`). Zero border. On hover: background shifts to `#2563EB` with subtle cyan glow (`0 0 14px rgba(56, 189, 248, 0.4)`).
- **Secondary / Outline**: Transparent background, 1px border in `rgba(56, 189, 248, 0.25)`, text `#F8FAFC`. On hover: surface fills with `#1E293B` and border lightens to `#38BDF8`.
- **Ghost / Minimal**: No border or background. Crisp `#94A3B8` text shifting to `#38BDF8` with a forward icon slide on hover.

### Cards & Case Study Containers
- Constructed with `#0F172A` background, 16px border-radius (`rounded-lg`), and 1px border of `rgba(56, 189, 248, 0.12)`.
- Internal padding is set to `space-lg` (`1.5rem`).
- Cards host an optional top subtle gradient hairline (`1px` height spanning from transparent to `#38BDF8` to transparent) to create specular lighting across the upper edge.

### Tech Chips & Tags
- Compact tags (`label-sm`, uppercase) with `#0B1120` fill, 1px border in `rgba(96, 165, 250, 0.2)`, and text `#60A5FA`.
- Tech stack chips in project cards feature a tiny leading 6px glowing dot (`#38BDF8`) for live dependencies.

### Form Inputs & Terminal Controls
- Inputs feature `#0B1120` well fill, `0.5rem` radius, with border `rgba(148, 163, 184, 0.2)`. Text is `#F8FAFC`.
- Focus state eliminates standard browser rings and triggers a sharp `1px solid #38BDF8` perimeter with an ambient electric ring blur (`0 0 0 3px rgba(59, 130, 246, 0.15)`).

### Metric & Status Counters
- Oversized statistical figures set in `headline-lg` (`#F8FAFC`) anchored by small uppercase subtext in `label-sm` (`#94A3B8`).
- Live system status badge utilizes a pulsating green-to-cyan radial node indicating developer availability.