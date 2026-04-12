# Cat Pinterest

## Project overview

Cat Pinterest is a production-oriented React application for browsing cat images from TheCatAPI and saving favorites.

## Tech stack

- React 19
- TypeScript 6
- Vite 8
- React Router DOM 7
- TanStack Query 5
- Zustand 5
- Axios
- Vitest + Testing Library
- Storybook 10
- ESLint + Prettier

## Setup instructions

### 1. Prerequisites

- Node.js 20+
- npm 10+

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create `.env` from `.env.example` and set values:

```bash
VITE_API_URL=https://api.thecatapi.com/v1
VITE_API_KEY=your-real-thecatapi-key
VITE_BASE_PATH=your/base/path
```

### 4. Run development server

```bash
npm run dev
```

### 5. Run quality checks

```bash
npm run type-check
npm run lint
npm run test:unit:run
npm run test:storybook:run
```

### 6. Build for production

```bash
npm run build
npm run preview
```

## Demo link

- Production demo: https://a6ad0n.github.io/frontend-challenge/
