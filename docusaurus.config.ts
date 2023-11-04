import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'NexusPIPE',
  tagline: 'Competent DDoS Protection',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blog.nexuspipe.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'NexusPIPE', // Usually your GitHub org/user name.
  projectName: 'Blog', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  trailingSlash: true,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        blog: {
          showReadingTime: true,
          routeBasePath: '/',
          path: './blog',
          blogTitle: 'NexusPIPE Blog',
          blogSidebarTitle: 'Posts',
          editUrl: 'https://github.com/NexusPIPE/Blog/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/blog-social.png',
    announcementBar: {
      // content: '🚧 This is under construction 🚧',
      content: 'uvc-str-rng',
      backgroundColor: '#1a1a1a3a',
      textColor: '#c9c9c9',
      id: 'uvc-bar-1',
    },
    navbar: {
      title: 'NexusPIPE Blog',
      logo: {
        alt: 'NexusPIPE Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          href: '/tags',
          label: 'View All Article Tags',
          position: 'left',
        },
        {
          href: 'https://nexuspipe.com/discover',
          label: 'Discover NexusPIPE',
          position: 'right',
        },
        {
          href: 'https://dash.nexuspipe.com/',
          label: 'Client Dashboard',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Products',
          items: [
            {
              label: 'NexusPIPE ADC',
              href: 'https://nexuspipe.com/adc',
            },
            {
              label: 'DDoS Mitigation',
              href: 'https://nexuspipe.com/protection',
            },
            {
              label: 'NexusUVC™',
              href: 'https://nexuspipe.com/uvc/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/nexuspipe',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/company/nexuspipe',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/nexuspipe',
            },
          ],
        },
        {
          title: 'Other',
          items: [
            {
              label: 'Contact Us',
              href: 'https://nexuspipe.com/contact',
            },
            {
              href: 'https://docs.nexuspipe.com',
              label: 'Documentation',
              position: 'left',
            },
            {
              href: 'mailto:contact@nexuspipe.com',
              label: 'Report an error',
              position: 'left',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NexusPIPE. Licensed under the <a href="https://github.com/NexusPIPE/blog/blob/master/LICENSE" target="_blank">MIT License</a>.<br/>Want dedicated help? <a href="https://nexuspipe.com/contact" target="_blank">Contact Us</a>`,
    },
    prism: {
      theme: prismThemes.vsDark,
      darkTheme: prismThemes.vsDark,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
