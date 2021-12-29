# Coffee Shop App

Table of Contents

1. About the project
2. Technologies Used
3. Getting Started
4. Usage
5. Why Next.js
6. Roadmap

## About the Project

### Find the best nearby coffee shops.

This app helps folks find nearby coffee shops, check out their ratings, and rate the ones they frequented.

## Technologies Used

- Javascript
- React
- Next.js
- CSS Modules
- Vercel

## Getting Started

1. Clone the repo to your own GitHub environment.
2. Install next, react and react-dom.
3. Open package.json and add the following scripts:  
	"scripts": {
  	  "dev": "next dev",
  	  "build": "next build",
      "start": "next start",
      "lint": "next lint"
	}
4. Ensure Node.js 12.22.0 or later is installed

## Why Use Next.js

- Static Site Generation (SSG)

 This means the page HTML is generated at build time. That means in production, the page HTML is generated when you run next build . This HTML will then be reused on each request. It's cached by a CDN.

- Incremental Static Regeneration (ISR)

Next.js allows you to create or update static pages after you’ve built your site. Incremental Static Regeneration (ISR) enables you to use static-generation on a per-page basis, without needing to rebuild the entire site. With ISR, you can retain the benefits of static while scaling to millions of pages.

- Server Side Rendering (SSR)

The HTML is generated on each request.

6. Upgrade to Next.js Version 12:  https://nextjs.org/docs/upgrading

## Roadmap

The following features are on the product roadmap:

- SSO Login
