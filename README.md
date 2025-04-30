# React Todo App

This project is a simple Todo application built with React, TypeScript, and Vite. It allows users to manage tasks by adding, editing, and marking them as completed.

Homepage => https://react-state-checkpoint-2.onrender.com/

## Features

- Add new tasks with a title and description.
- Mark tasks as completed or incomplete.
- Edit existing tasks.
- Responsive design using Tailwind CSS.

## Tech Stack

- **React**: Frontend library for building user interfaces.
- **TypeScript**: Strongly typed JavaScript for better code quality.
- **Vite**: Fast build tool for modern web projects.
- **Tailwind CSS**: Utility-first CSS framework for styling.

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Yarn (or npm)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ken-gomycode/react-state-checkpoint-2
   cd react-todo-app
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

### Development

To start the development server:

```bash
yarn dev
```

The app will be available at `http://localhost:5173`.

### Build

To build the app for production:

```bash
yarn build
```

The production-ready files will be in the `dist` folder.

### Preview

To preview the production build:

```bash
yarn preview
```

## Deployment

This project is configured to deploy to GitHub Pages. The deployment workflow is defined in `.github/workflows/deploy.yml`.

To deploy:

1. Push changes to the `main` branch.
2. The GitHub Actions workflow will automatically build and deploy the app.

## Scripts

- `yarn dev`: Start the development server.
- `yarn build`: Build the app for production.
- `yarn preview`: Preview the production build.
- `yarn lint`: Run ESLint to check for code issues.

## Project Structure

```
├── src
│   ├── components    # Reusable React components
│   ├── styles        # Global styles
│   ├── main.tsx      # Entry point of the app
│   └── App.tsx       # Main app component
├── public            # Static assets
├── .github           # GitHub Actions workflows
├── package.json      # Project configuration
├── tsconfig.json     # TypeScript configuration
└── index.html        # HTML template
```

## License

This project is licensed under the MIT License.