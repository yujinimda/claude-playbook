import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'claude-playbook',
  description: 'Claude Code 팀 운영 레시피 — YY-Studios',
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: '시작하기', link: '/getting-started' },
      { text: '가이드', link: '/guide/claude-md' },
    ],
    sidebar: [
      {
        text: '가이드',
        items: [
          { text: 'CLAUDE.md 작성법', link: '/guide/claude-md' },
          { text: '스킬 활용법', link: '/guide/skills' },
          { text: '훅 설정법', link: '/guide/hooks' },
          { text: '룰 관리법', link: '/guide/rules' },
          { text: '에이전트 설계법', link: '/guide/agents' },
          { text: '스킬 카탈로그', link: '/guide/catalog' },
        ],
      },
      {
        text: '삽질 로그',
        items: [],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YY-Studios/claude-playbook' },
    ],
  },
})
