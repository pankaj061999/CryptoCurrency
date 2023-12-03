## Cryptocurrency Tracking App

This project is a mobile-first responsive web app built to track cryptocurrency values and perform currency conversions using data fetched from the CoinMarketCap API.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://github.com/pankaj061999/CryptoCurrency) to automatically optimize and load Inter, a custom Google Font.

## Architecture

```
The app is built using [SPA framework name] due to its [reasoning behind the choice, like efficiency, reactivity, etc.]. It follows a structured file hierarchy and utilizes [specific architecture details if applicable, like Redux for state management, Material-UI for UI components, etc.].
```

## Pages and Attributes

## Homepage

Scrip: Name of the cryptocurrency
Current Traded Value per Coin: Current market value of the coin
Net Rise/Fall in Last 24 Hours: Change in value in the last 24 hours, with appropriate color coding (green/red)
Net Rise/Fall in Last 7 Days: Change in value in the last 7 days, with appropriate color coding (green/red)
Logo of Coin: Visual representation of the cryptocurrency

### CryptoConverter

Convert from one crypto currency to another: Functionality to convert values from one cryptocurrency to another.
Features
Data Source: Utilizes the CoinMarketCap API to fetch cryptocurrency data.
Mobile-First: Designed with a mobile-first approach for responsive UI.
CSS Animation: Incorporates at least one CSS-based animation for a better user experience.
Setup and Usage

## Deployment

To deploy and use the application:

Clone the repository [`git clone`](https://github.com/pankaj061999/CryptoCurrency).
Install dependencies: `npm install `/ `yarn install`.
Start the development server: npm run dev / yarn dev.
Access the app on http://localhost:3000.
For detailed instructions, refer to the setup.md file.

Structure and Organization
File Structure
The project follows a well-organized file structure, keeping related components, styles, and functionalities grouped together.
