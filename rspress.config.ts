import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'pages'),
  title: 'Rspress',
  description: 'Rspack-based Static Site Generator',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  lang: 'zh',
  locales: [
    {
      lang: 'en',
      // 导航栏切换语言的标签
      label: 'English',
      title: 'Modern.js',
      description: 'Modern.js 文档框架',
    },
    {
      lang: 'zh',
      // 导航栏切换语言的标签
      label: '简体中文',
      title: 'Modern.js',
      description: 'Rspress',
    },
  ],
  themeConfig: {
    locales: [
      {
        lang: 'zh',
        label: '简体中文',
        prevPageText: '上一篇',
        nextPageText: '下一篇',
        outlineTitle: '目录',
        searchPlaceholderText: '搜索',
      },
      {
        lang: 'en',
        label: 'English',
        searchPlaceholderText: 'Search',
      },
    ],
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
});
