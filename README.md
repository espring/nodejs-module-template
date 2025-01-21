# Node Module Template Project

A starter template for creating Node.js modules with TypeScript support, testing setup, and dual CJS/ESM builds.

## Overview
This project is a Node.js module template providing:
- TypeScript development environment configuration
- Dual output support (CommonJS + ES Module)
- Unit testing setup with Jest
- Preconfigured build scripts
- Code quality checks (ESLint + Prettier)

## Features
- 📦 Dual module system support (CJS + ESM)
- 🔧 Preconfigured TypeScript compilation
- 🧪 Jest test integration
- 🛠️ Automated build scripts
- 🧹 Code formatting & static analysis

## Usage

### Quick Start
1. Clone repository:
```bash
git clone https://github.com/espring/nodejs-module-template.git foo-helper
```

2. Use the AI editor to apply customizations with these instructions:

```
* Change project name to foo-helper
* Set DEBUG_TAG to 'FOO' in bin/utils.ts
* Skip npm install command execution
```

3. Install dependencies:
```bash
npm install
```

4. Start development:
```bash
npm run dev
```


## Scripts
```json
{
  "scripts": {
    "build": "npm run build:cjs && npm run build:esm",
    "build:cjs": "tsc -p tsconfig.cjs.json",
    "build:esm": "tsc -p tsconfig.esm.json",
    "test": "jest",
    "lint": "eslint . --ext .ts",
    "format": "prettier --write .",
    "dev": "npm run build -- --watch"
  }
}
```

## Directory Structure
```
├── src/            # Source code
│   ├── index.ts    # Main entry
│   └── bin/        # CLI utilities
├── __tests__/      # Unit tests
├── dist/           # Build outputs
│   ├── cjs/        # CommonJS format
│   └── esm/        # ES Module format
├── tsconfig.json       # Base config
├── tsconfig.cjs.json   # CJS build config
└── tsconfig.esm.json   # ESM build config
```

## License
MIT License