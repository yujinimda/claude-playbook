import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'claude-playbook',
  description: 'Claude Code 팀 운영 레시피 — YY-Studios',
  themeConfig: {
    nav: [
      { text: '홈', link: '/' },
      { text: 'Skills', link: '/skills/' },
      { text: 'Hooks', link: '/hooks/' },
      { text: 'Rules', link: '/rules/' },
      { text: 'Agents', link: '/agents/' },
    ],
    sidebar: [
      {
        text: 'Skills',
        items: [
          { text: '목록', link: '/skills/' },
          { text: 'git-workflow', link: '/skills/git-workflow' },
          { text: 'react-ui-patterns', link: '/skills/react-ui-patterns' },
          { text: 'test-driven-development', link: '/skills/test-driven-development' },
        ],
      },
      {
        text: 'Hooks',
        items: [
          { text: '목록', link: '/hooks/' },
        ],
      },
      {
        text: 'Rules',
        items: [
          { text: '목록', link: '/rules/' },
        ],
      },
      {
        text: 'Agents',
        items: [
          { text: '목록', link: '/agents/' },
        ],
      },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/YY-Studios/claude-playbook' },
    ],
  },
})
