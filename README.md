# 🍳 claude-recipes

> Claude Code를 위한 팀 운영 레시피 — 마켓 큐레이션 + 커스텀 skills, hooks, rules, agents 가이드

YY-Studios에서 Claude Code로 일하기 위한 모든 것을 담은 레포입니다.

## 이 레포가 하는 일

| 역할 | 설명 |
|------|------|
| **레시피 모음** | 마켓에서 검증된 skills, hooks, rules를 큐레이션하고 커스텀 레시피를 관리합니다 |
| **팀 도구 모음** | 프로젝트에서 바로 재사용할 수 있는 skills, hooks, rules 컬렉션입니다 |
| **운영 플레이북** | Claude Code를 팀 단위로 어떻게 쓰는지, 왜 이렇게 설정했는지 가이드합니다 |

## 프로젝트 구조

```
claude-recipes/
├── skills/                    # 스킬 모음
│   ├── curated/               # 마켓에서 가져온 검증된 스킬
│   │   └── [skill-name]/
│   │       ├── SKILL.md
│   │       └── README.md      # 출처, 선택 이유, 사용법
│   └── custom/                # 우리 팀이 만든 스킬
│       └── [skill-name]/
│           ├── SKILL.md
│           ├── scripts/       # 번들 스크립트 (선택)
│           └── references/    # 참조 문서 (선택)
│
├── hooks/                     # 훅 모음
│   ├── curated/               # 마켓/커뮤니티에서 가져온 훅
│   │   └── [hook-name].md     # 설정 + 출처 + 사용법
│   └── custom/                # 우리 팀이 만든 훅
│       └── [hook-name].md
│
├── rules/                     # 룰 모음
│   ├── curated/               # 검증된 외부 룰
│   │   └── [rule-name].md
│   └── custom/                # 우리 팀 룰
│       └── [rule-name].md
│
├── agents/                    # 에이전트 템플릿
│   └── [agent-name].md
│
├── docs/                      # VitePress 가이드 사이트
│   ├── .vitepress/
│   ├── index.md               # 홈
│   ├── getting-started.md     # 시작하기
│   ├── guide/                 # 운영 가이드
│   │   ├── claude-md.md       # CLAUDE.md 작성법
│   │   ├── skills.md          # 스킬 활용법
│   │   ├── hooks.md           # 훅 설정법
│   │   ├── rules.md           # 룰 관리법
│   │   └── agents.md          # 에이전트 설계법
│   └── lessons/               # 삽질 로그 & 교훈
│       └── [topic].md
│
└── README.md
```

## 사용법

### 레퍼런스로 참고하기

이 레포를 탐색하면서 필요한 스킬/훅/룰을 각자 프로젝트의 `.claude/` 디렉토리에 복사해서 사용합니다.

```bash
# 예시: 스킬 복사
cp -r skills/curated/frontend-design/ ../typing-room/.claude/skills/

# 예시: 훅 설정 참고해서 프로젝트 settings.json에 추가
cat hooks/curated/auto-prettier.md
```

### 새 레시피 추가하기

1. 해당 카테고리의 `curated/` 또는 `custom/` 디렉토리에 추가
2. 마켓에서 가져온 경우 출처와 선택 이유를 README.md에 기록
3. PR 올려서 팀 리뷰 후 머지

## 큐레이션 기준

마켓에서 스킬/훅/룰을 가져올 때 이 기준으로 판단합니다:

- **우리 스택에 맞는가** — Next.js + TypeScript + Tailwind + FSD 기반
- **반복 작업을 줄이는가** — 매번 같은 프롬프트를 치고 있었는지
- **검증되었는가** — 설치 수, 커뮤니티 피드백, 소스 코드 확인
- **컨텍스트를 낭비하지 않는가** — 500줄 이내, Progressive Disclosure 원칙

## 기여 가이드

- 새 레시피는 PR로 올려주세요
- `curated/`에 추가할 때는 출처 링크 필수
- `custom/`에 추가할 때는 어떤 문제를 해결하는지 설명 필수
- 삽질 경험은 `docs/lessons/`에 기록해주세요

## 관련 링크

- [Claude Code 공식 문서](https://code.claude.com/docs/en/skills)
- [awesome-claude-skills](https://github.com/travisvn/awesome-claude-skills)
- [Claude Code Best Practices](https://code.claude.com/docs/en/best-practices)
