import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Next.js 中文站",
  description: "基于 Next.js v14.x 的官网站点进行翻译整理，方便国内开发者学习使用 Next.js。",
  srcDir: 'src',
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/docs/',activeMatch: '/docs/'},
      { text: '教程', link: '/learn/',activeMatch: '/learn/'}
    ],
    sidebar: {
      '/docs/': [
        {
          text: '开始使用',
          link: '/docs/',
          items: [
            { text: '安装', link: '/docs/getting-started/installation' },
            { text: '项目结构', link: '/docs/getting-started/project-structure' }
          ]
        }
      ],
      '/learn/': [
        {
          text: '介绍',
          link: '/learn/',
        },
        {
          text: '章节',
          items: [
            { text: '快速开始', link: '/learn/chapter/getting-started' },
            { text: 'CSS 样式', link: '/learn/chapter/css-styleing' }
          ]
        }
      ]
    
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tulies/nextjs-cn' }
    ]
  }
})
