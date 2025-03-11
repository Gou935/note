import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "Gou's Note",
  tagline: "",
  favicon: "img/kirby_run.png",

  // Set the production url of your site here
  url: "https://gou935.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/note/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Gou935", // Usually your GitHub org/user name.
  projectName: "note", // Usually your repo name.
  deploymentBranch: "gh-pages",
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
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.

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
    navbar: {
      title: "Gou's Note",
      logo: {
        alt: "My Site Logo",
        src: "img/kirby_run.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "筆記",
        },
        { to: "/blog", label: "部落格", position: "left" },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "站內連結",
          items: [
            {
              label: "筆記",
              to: "/docs/intro",
            },
            {
              label: "部落格",
              to: "/blog",
            },
          ],
        },

        {
          title: "我的其他網站",
          items: [
            {
              label: "Gou's Blog",
              href: "https://gou935.com",
            },
          ],
        },
        {
          title: "聯絡方式",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/Gou935/",
            },
            {
              label: "Email",
              href: "mailto:goublog@outlook.com",
            },
            {
              label: "X",
              href: "https://x.com/docusaurus",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Gou935`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    algolia: {
      appId: "9FM51H34I9",
      apiKey: "f8d57110c8bfc31a3236209ba9e9ee40",
      indexName: "gou935io",
      contextualSearch: true, // 啟用語境搜尋
      searchParameters: {},
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
