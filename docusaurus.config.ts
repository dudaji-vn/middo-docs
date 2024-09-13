import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Middo Docs',
  tagline: 'User Manual',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Dudaji', // Usually your GitHub org/user name.
  projectName: 'Middo Docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en'],
  // },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    localeConfigs: {
      en: {
        label: 'English'
      },
    }
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',

          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          routeBasePath: '/', // Đặt Docs làm trang chủ
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   // onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {


    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,

      },
    },
    // Replace with your project's social card
    // image: 'img/docusaurus-social-card.jpg',
    navbar: {
      // title: '',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo-dark.svg',
      },


      items: [
        // {
        //   type: 'html',
        //   position: 'left',
        //   value: '<span > | </span>',
        // },
        // {
        //   to: 'docs/intro', // Thay đổi trang chính của bạn ở đây
        //   activeBasePath: 'docs',
        //   label: 'Docs',
        //   position: 'left',
        // },


        {
          href: 'https://middo.app/',
          label: 'Home',
          position: 'left',
        },

        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Docs',
        },

        // { to: '/blog', label: 'Blog', position: 'left' },


        {
          type: 'localeDropdown',
          position: 'right',
          // dropdownItemsAfter: [
          //   {
          //     to: 'https://my-site.com/help-us-translate',
          //     label: 'Help us translate',
          //   },
          // ],
        },
        // {
        //   type: 'search',
        //   position: 'right',
        // },
        // {
        //   href: 'https://github.com/dudaji-vn',
        //   label: 'GitHub',
        //   position: 'right',
        // },

      ],
    },
    footer: {
      // style: 'dark',
      logo: {
        alt: 'Middo Logo',
        src: 'https://dudaji.vn/Img/f-logo.png',
        // href: 'https://opensource.fb.com',
        height: 51,
      },
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'What is Middo',
      //         to: '/docs/intro',
      //       },
      //       {
      //         label: 'Translation',
      //         to: '/docs/translation/what-is-translation',
      //       },
      //       {
      //         label: 'Conversation',
      //         to: '/docs/conversation/what-is-conversation',
      //       },
      //       {
      //         label: 'Extension',
      //         to: '/docs/extension/what-is-extension',
      //       },
      //       {
      //         label: 'Why I can NOT reply to a conversation',
      //         to: '/docs/why-i-can-not-reply-to-a-conversation',
      //       },
      //     ],
      //   },
      //   // {
      //   //   title: 'Community',
      //   //   items: [
      //   //     {
      //   //       label: 'Stack Overflow',
      //   //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //   //     },
      //   //     {
      //   //       label: 'Discord',
      //   //       href: 'https://discordapp.com/invite/docusaurus',
      //   //     },
      //   //     {
      //   //       label: 'Twitter',
      //   //       href: 'https://twitter.com/docusaurus',
      //   //     },
      //   //   ],
      //   // },
      //   {
      //     title: 'Find us',
      //     items: [
      //       {
      //         label: 'Blog',
      //         href: 'https://fringe-salsa-849.notion.site/Dudaji-VN-Published-56bb001012814cb1aad472841a79dd3d',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/dudaji-vn',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Dudaji, Inc © All Rights Reserved.`,
      // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;