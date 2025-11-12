# Day 1

## commands used:

### 1. create Next app

```bash
npx create-next-app@latest
```

or (for same directory) 

```bash
npx create-next-app@latest ./
```

### Theory

- Project Structure details -> commented in each required file
- Next.js has two types of components:
    1. Server Components: component that runs on the server and sends data to the browser after performing actions on server.
    2. Client components: performed direnctly on the browser, mainly useful for user interactivity.
- Server side pre-rendering: client components are pre-rendered on the server side in a static shell and then rehydrated in the client side, this way only the part of the client components that rely on user interactivity are rendered on client side.
- New imp next.js (optimization) feature: React Compiler Support (stable): Built-in integration for automatic memoization (useMemo & useCallback DEPRECATED) -> install plugin:

```bash
npm install babel-plugin-react-compiler@latest
```
then

Append `reactCompiler: true,` in next.config.ts

### Tasks performed

- created a NextJS project