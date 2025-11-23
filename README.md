# Links Hub

A simple, elegant, and customizable link-in-bio page built with Next.js, TypeScript, and Tailwind CSS. This project serves as a personal landing page to showcase all your important links in one place, with a strong focus on dynamic metadata generation for excellent SEO.

<p align="center">
  <a href="https://links.yoan-gilliand.ch" target="_blank" style="
      display: inline-block;
      background: linear-gradient(135deg, #7f00ff, #e100ff);
      color: white;
      padding: 0.65rem 1.4rem;
      border-radius: 0.75rem;
      font-weight: bold;
      text-decoration: none;
      font-family: 'Segoe UI', sans-serif;
      transition: transform 0.2s, box-shadow 0.2s;
      cursor: pointer;
  " onmouseover="this.style.transform='translateY(-3px)'; this.style.boxShadow='0 8px 20px rgba(0,0,0,0.25)';" onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='none';">
    🌐 Live Demo
  </a>
</p>

<p align="center">
  <a href="https://i.postimg.cc/DyghJb42/links-hub-preview.png" target="_blank">
    <img src="https://i.postimg.cc/DyghJb42/links-hub-preview.png" alt="Project Preview" width="450" style="
        border-radius: 0.75rem;
        box-shadow: 0 12px 25px rgba(0,0,0,0.2);
        transition: transform 0.3s;
    " onmouseover="this.style.transform='scale(1.03)';" onmouseout="this.style.transform='scale(1)';"/>
  </a>
</p>

## Features

-   **Dynamic Metadata**: SEO and social media tags are generated automatically from a single data file.
-   **Centralized Data**: Easily update your links, socials, and personal info in one place (`app/data.ts`).
-   **Modern Tech Stack**: Built with Next.js 16 and TypeScript.
-   **Styling**: Styled with Tailwind CSS and pre-configured with `shadcn/ui` and `Geist` font.
-   **SEO Ready**: Comes with `robots.txt` and `sitemap.xml` files.

## Technology Stack

-   **Framework**: Next.js 16
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS, shadcn/ui
-   **UI Components**: Radix UI
-   **Fonts**: Geist Sans & Mono

## Getting Started

### Prerequisites

-   Node.js (v18.x or later)
-   npm, yarn, or pnpm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yoan-gilliand/links-hub.git
    cd links-hub
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) to see your site.

## Configuration Guide

This project is designed for easy configuration by editing a small number of files.

### 1. Update Your Personal Data (`app/data.ts`)

This is the most important step. Open **`app/data.ts`** and edit the `DATA` object. All site content, metadata, and icons are derived from this file.

-   `name`: Your full name.
-   `title`: Your professional title or a short headline.
-   `bio`: A short biography used for the page and for SEO descriptions.
-   `avatarUrl`: **Crucial.** A direct URL to your avatar image. This URL is used for:
    -   The profile picture on the page.
    -   The site's **favicon**.
    -   The preview image for social media (Open Graph & Twitter cards).
-   `links`: An array of your main links (e.g., portfolio, blog).
-   `socials`: An array of your social media profile links.

### 2. Manually Edit SEO Files (`public/`)

The `robots.txt` and `sitemap.xml` files are **not** automatically generated. You must edit them manually.

1.  **`public/sitemap.xml`**:
    -   Open the file and change the `<loc>` URL to your final domain name.
    -   Update the `<lastmod>` date to reflect when you last made significant changes.

    ```xml
    <url>
      <loc>https://your-domain.com</loc>
      <lastmod>YYYY-MM-DD</lastmod>
    </url>
    ```

2.  **`public/robots.txt`**:
    -   Open the file and update the `Sitemap` URL to point to your production sitemap.

    ```
    Sitemap: https://your-domain.com/sitemap.xml
    ```

### 3. Advanced Metadata (`app/layout.tsx`)

While most of metadata comes from `data.ts`, you can fine-tune SEO keywords in **`app/layout.tsx`**. The `keywords` array in the `metadata` object can be expanded with terms relevant to your niche.

## Deployment to Vercel

1.  **Push to Git:** Push your customized code to a GitHub, GitLab, or Bitbucket repository.
2.  **Import to Vercel:** On your Vercel dashboard, import the Git repository.
3.  **Deploy:** Vercel will auto-detect the Next.js 16 configuration and deploy the project. No special environment variables are needed.

Your site is now live. Subsequent pushes to the main branch will trigger automatic redeployments.
