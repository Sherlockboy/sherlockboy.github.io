import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "kobilov.dev",
  description: "SWE Notes",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Blog', link: '/markdown-examples' },
      { text: 'Projects', link: '/markdown-examples' },
      { text: 'Uses', link: '/markdown-examples' },
      { text: 'Contact', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],

    footer: {
      message: 'Created with ❤️ and <a href="https://github.com/vuejs/vitepress" target="_blank">VitePress</a>.',
    }
  }
})
