# Code Health Report

A modern web application for visualizing and analyzing code health metrics for your repositories.

## Tech Stack

- **React 18** — UI library
- **TypeScript** — Type safety
- **Vite** — Build tool & dev server
- **Tailwind CSS** — Utility-first styling
- **shadcn/ui** — Accessible component primitives
- **React Router** — Client-side routing
- **TanStack Query** — Data fetching & caching
- **Recharts** — Data visualization
- **Framer Motion** — Animations
- **Vitest** — Unit testing

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18+ (or use [nvm](https://github.com/nvm-sh/nvm))
- npm, yarn, or bun

### Installation

```sh
# Clone the repository
git clone https://github.com/AshutoshMore142k4/code-health-report.git

# Navigate into the project
cd code-health-report

# Install dependencies
npm install
```

### Development

```sh
npm run dev
```

The app will be available at `http://localhost:8080`.

### Build

```sh
# Production build
npm run build

# Preview production build locally
npm run preview
```

### Testing

```sh
# Run tests once
npm run test

# Run tests in watch mode
npm run test:watch
```

### Lint

```sh
npm run lint
```

## Project Structure

```
src/
├── assets/          # Static assets
├── components/      # Reusable UI components
│   └── ui/          # shadcn/ui primitives
├── hooks/           # Custom React hooks
├── lib/             # Utility functions
├── pages/           # Route-level page components
└── test/            # Test setup and specs
```

## License

MIT
