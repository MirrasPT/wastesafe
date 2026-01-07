# WasteSafe Frontend - Setup Guide

This document explains how to set up and run the WasteSafe frontend application locally.

## Prerequisites

Ensure you have **Node.js** installed on your machine.
- Recommended version: **v20 or higher** (The project is using v22.16.0)

## Installation

1. Open your terminal.
2. Navigate to the project directory:
   ```bash
   cd /path/to/WasteSafe/2025_Website/_desenvolvimento
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

   *Note: If you encounter specific architecture errors (e.g., related to `@rollup/rollup-darwin-arm64` on Mac), try removing `node_modules` and `package-lock.json` before installing properly:*
   ```bash
   rm -rf node_modules package-lock.json && npm install
   ```

## Running the Application

To start the development server:

```bash
npm run dev
```

Once the server starts, you will see output similar to this:

```
  VITE vX.X.X  ready in 221 ms
      
  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

Open your browser and navigate to **[http://localhost:5173/](http://localhost:5173/)** to view the website.

## Building for Production

To create an optimized production build:

```bash
npm run build
```

This will generate a `dist` folder with the static files ready for deployment.

## Troubleshooting

- **Permission Denied:** If you see `sh: .../vite: Permission denied`, run:
  ```bash
  chmod +x node_modules/.bin/vite
  ```
- **Module Not Found:** Re-run `npm install` to ensure all packages are correctly downloaded.
