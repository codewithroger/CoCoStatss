# Design Guidelines: Coefficient & Correlation Educational Platform

## Design Approach
**Selected System**: Material Design principles adapted for educational content, drawing inspiration from Khan Academy and Brilliant.org's clean, focused learning interfaces. This approach prioritizes readability, clear information hierarchy, and purposeful interactions.

## Typography System
- **Headings**: Inter font family (600-700 weight)
  - Page titles: text-4xl to text-5xl
  - Section headers: text-2xl to text-3xl
  - Card titles: text-xl
- **Body**: Inter (400-500 weight)
  - Primary text: text-base to text-lg
  - Supporting text: text-sm
- **Mathematical notation**: Use KaTeX library via CDN for formulas

## Layout & Spacing
**Spacing primitives**: Tailwind units of 4, 6, and 8 (p-4, gap-6, mb-8, etc.)
- Page container: max-w-7xl mx-auto px-4
- Section spacing: py-8 to py-12
- Card padding: p-6
- Grid gaps: gap-6

## Component Library

### Navigation
- Sticky header with logo, main nav links (Flashcards, Quiz, Learn), progress indicator
- Mobile: Hamburger menu with slide-in drawer

### Hero Section
- Centered layout, no image needed
- Large heading with mathematical symbol background pattern (subtle, decorative)
- Brief description and primary CTA buttons ("Start Learning" and "Take Quiz")
- Height: Compact, approximately 50vh

### Flashcard System
- Grid layout: grid-cols-1 md:grid-cols-2 lg:grid-cols-3
- Card dimensions: aspect-ratio-[3/2] with rounded-lg borders
- Front: Term/concept with small icon (use Heroicons)
- Back: Definition, formula (KaTeX), example
- Card flip: CSS 3D transform rotation on click
- Progress tracker: Linear progress bar showing cards completed
- Navigation: Previous/Next buttons, card counter (e.g., "3 / 12")

### Quiz Interface
- Single-column layout: max-w-3xl mx-auto
- Question card: Large card with question text, formula if needed
- Answer options: Stacked radio buttons with hover states, clear selection indicator
- Feedback panel: Slides in after answer submission with explanation
- Score display: Circular progress indicator showing percentage
- Results screen: Summary card with score breakdown, "Retake Quiz" CTA

### Educational Content Sections
- Two-column layout on desktop (text + visualization)
- Single column on mobile
- Scatter plot visualizations: Use Chart.js library
  - Three examples: Positive correlation, Negative correlation, No correlation
  - Interactive: Hover to see data points
- Formula cards: KaTeX rendered equations with step-by-step breakdowns
- Concept cards: Icon + title + description in grid (grid-cols-1 md:grid-cols-2)

### Interactive Elements
- Buttons: Rounded corners (rounded-lg), consistent padding (px-6 py-3)
- Form inputs: Clear borders, focus states with ring effect
- Cards: Subtle shadow (shadow-md), hover lift effect (translate-y transform)

## Animation Strategy
**Minimal, purposeful animations only:**
- Flashcard flip: 0.6s ease-in-out 3D rotation
- Quiz feedback: Slide-in from bottom (0.3s ease-out)
- Page transitions: Fade-in content (0.2s)
- Score counter: Animated count-up on results screen
- Scatter plots: Fade-in on scroll into viewport

## Page Structure
1. **Header** (sticky)
2. **Hero Section** (compact, centered)
3. **Quick Stats Section** (3-column grid: Total Concepts, Quiz Questions, Completion Rate)
4. **Flashcards Section** (grid of flip cards)
5. **Interactive Visualizations** (scatter plot examples)
6. **Quiz Section** (single card interface)
7. **Key Concepts Reference** (accordion or expandable cards)
8. **Footer** (resources, credits, minimal)

## Icons
Use **Heroicons** (outline style) via CDN for all UI icons:
- Academic cap for learning
- Chart bar for statistics
- Light bulb for concepts
- Check circle for correct answers
- X circle for incorrect answers

## Accessibility
- Keyboard navigation for flashcards (arrow keys to navigate)
- ARIA labels on all interactive elements
- Focus indicators on all clickable items
- Screen reader announcements for quiz feedback
- High contrast ratios for all text

## Responsive Breakpoints
- Mobile: Single column, stacked layout
- Tablet (md:): Two-column where appropriate
- Desktop (lg:): Full multi-column layouts, sidebar navigation

This design creates a focused, distraction-free learning environment with purposeful interactions that enhance comprehension without overwhelming the user.