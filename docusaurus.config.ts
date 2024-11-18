import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Seno Pamungkas Rahman",
  tagline:
    "I am a Full-Stack Developer passionate about solving meaningful problems.",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "cattyman919", // Usually your GitHub org/user name.
  projectName: "blog", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",

    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      hideOnScroll: true,
      title: "DevSen",
      logo: {
        alt: "My Site Logo",
        src: "img/logo_seno1.svg",
      },
      items: [
        { to: "/blog", label: "Blog", position: "left" },
        { to: "/docs", label: "Docs", position: "left" },
        {
          href: "https://seno-portfolio.s3.ap-southeast-1.amazonaws.com/Seno+Pamungkas+Rahman+-+CV.pdf",
          label: "Resume",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Contacts",
          items: [
            {
              html: `
                  <div style="display: flex; gap: 16px; align-items: center;">
                    <a href="https://github.com/cattyman919" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                      <img src="img/github.svg" alt="Deploys by Netlify" width="24" height="24" />
                    </a>
                    <a href="https://www.linkedin.com/in/seno-pamungkas-rahman-714341192" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                      <img src="img/linkedin.svg" alt="Deploys by Netlify" width="24" height="24" />
                    </a>
                    <a href="https://www.instagram.com/senohebat/" target="_blank" rel="noreferrer noopener" aria-label="Deploys by Netlify">
                      <img src="img/instagram.svg" alt="Deploys by Netlify" width="24" height="24" />
                    </a>
                    
                  </div>
                `,
            },
          ],
        },
        {
          title: "Discover",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Documentation",
              to: "/docs",
            },
            {
              label: "Projects",
              to: "/projects",
            },
            {
              label: "Resume",
              href: "https://seno-portfolio.s3.ap-southeast-1.amazonaws.com/Seno+Pamungkas+Rahman+-+CV.pdf",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Seno`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
