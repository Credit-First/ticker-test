<div align="center">
  <h1>ticker test</h1>
  <p>Made by <a href="">Black</a></p>
  
  [[Bitstamp](https://www.bitstamp.net/api/v2/ticker/btcusd)]
  [[Bitfinex](https://api-pub.bitfinex.com/v2/tickers?symbols=tBTCUSD)]
  [[CoinBase](https://api.coinbase.com/v2/exchange-rates?currency=BTC)]
</div>

## Features

This repository is packed with:

-  Next.js 12
-  React 18
-  TypeScript
-  Tailwind CSS 3 — Configured with CSS Variables to extend the **primary** color
-  Pre-built Components — Components that will **automatically adapt** with your brand color, [check here for the demo](https://tsnext-tw.thcl.dev/components)
-  Jest — Configured for unit testing
-  Absolute Import and Path Alias — Import components using `@/` prefix
-  ESLint — Find and fix problems in your code, also will **auto sort** your imports
-  Prettier — Format your code consistently
-  Conventional Commit Lint — Make sure you & your teammates follow conventional commit
-  Standard Version Changelog — Generate your changelog using `yarn release`
-  Github Actions — Lint your code on PR
-  Automatic Branch and Issue Autolink — Branch will be automatically created on issue **assign**, and auto linked on PR
-  Snippets — A collection of useful snippets
- 🗺 Site Map — Automatically generate sitemap.xml
-  Expansion Pack — Easily install common libraries, additional components, and configs

See the 👉 [feature details and changelog](https://github.com/Credit-First/ticker-test/blob/main/CHANGELOG.md) 👈 for more.

You can also check all of the **details and demos** on my blog post:


## Getting Started

### 1. Clone this template using one of the three ways:

1. Use this repository as template

2. Using `create-next-app`

   ```bash
   npx create-next-app -e https://github.com/Credit-First/ticker-test project-name
   ```

3. Deploy to Vercel

   [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2FCredit-First%2Fticker-test)

### 2. Install dependencies

It is encouraged to use **yarn** so the husky hooks can work properly.

```bash
yarn install
```

### 3. Run the development server

You can start the server using this command:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `src/pages/index.tsx`.

### 4. Change defaults

There are some things you need to change including title, urls, favicons, etc.

Find all comments with !STARTERCONF, then follow the guide.

Don't forget to change the package name in package.json

### 5. Commit Message Convention

This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.

## Expansion Pack 📦

This starter is now equipped with an [expansion pack](https://github.com/Credit-First/expansion-pack).

You can easily add expansion such as React Hook Form + Components, Storybook, and more just using a single command line.

https://user-images.githubusercontent.com/55318172/146631994-e1cac137-1664-4cfe-950b-a96decc1eaa6.mp4

Check out the [expansion pack repository](https://github.com/Credit-First/expansion-pack) for the commands
