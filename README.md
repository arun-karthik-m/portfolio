# Arun Karthik - Modern Portfolio

![Portfolio Screenshot]('/Users/arunkarthikm/Documents/portfolio/src/images/Portfolio Screenshot.png') 

A stunning, modern, and performant portfolio website built with React, TypeScript, and Framer Motion. This portfolio showcases my skills, projects, and experience with smooth animations and a sleek, dark-themed UI.

## Features

- **Modern UI/UX** - Sleek dark theme with smooth animations and transitions
- **Responsive Design** - Fully responsive layout that works on all devices
- **Performance Optimized** - Built with performance in mind using code splitting and lazy loading
- **Interactive Elements** - Custom cursor, particle background, and smooth scrolling
- **Project Showcase** - Beautiful project cards with hover effects and links to live demos
- **3D Elements** - Integrated Three.js for immersive 3D visualizations
- **Form Handling** - Contact form with validation and submission handling
- **Dark Mode** - Built with dark mode in mind for better readability

## Technologies Used

- **Frontend**: 
  - React 18
  - TypeScript
  - Tailwind CSS
  - Framer Motion (for animations)
  - Three.js (for 3D elements)
  - React Query (for data fetching)
  - Radix UI (for accessible components)
  - React Hook Form (for forms)
  - Vite (for fast development and building)

## Design System

The portfolio uses a consistent design system with:

- **Colors**: Dark theme with vibrant accents
- **Typography**: Modern, clean fonts with proper hierarchy
- **Spacing**: Consistent spacing scale using Tailwind's spacing system
- **Animations**: Smooth, performant animations using Framer Motion
- **Icons**: Heroicons for consistent, scalable icons

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/arun-karthik-m/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Structure

```
src/
├── components/
│   └── portfolio/
│       ├── AboutSection.tsx      # About me section
│       ├── ContactSection.tsx    # Contact form section
│       ├── CustomCursor.tsx      # Custom animated cursor
│       ├── Footer.tsx           # Site footer
│       ├── HeroSection.tsx       # Hero section with animated background
│       ├── Navigation.tsx        # Responsive navigation bar
│       ├── ParticleBackground.tsx # Interactive particle background
│       ├── Preloader.tsx         # Loading animation
│       ├── ProjectsSection.tsx   # Project showcase
│       └── ResumeSection.tsx     # Work experience and skills
├── lib/
│   ├── animations.ts           # Animation configurations
│   └── utils.ts                # Utility functions
├── pages/
│   ├── Index.tsx              # Main page
│   └── NotFound.tsx           # 404 page
└── styles/                     # Global styles
```

## Demo

[Live Demo](https://arunkarthik.vercel.app/)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by modern web design trends
- Built with amazing open-source libraries
- Special thanks to the React and Framer Motion communities

---

Made with ❤️ by Arun Karthik
