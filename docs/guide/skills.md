# 스킬 활용법

> Claude Code 스킬을 팀에서 어떻게 관리하고 활용하는지 설명합니다.

## 스킬이란?

스킬은 Claude Code에서 `/skill-name` 으로 호출하는 재사용 가능한 프롬프트 템플릿입니다.

## 디렉토리 구조

```
.claude/skills/
└── skill-name/
    ├── SKILL.md        # 실제 스킬 정의
    └── README.md       # 사용법, 출처
```

## 큐레이션 스킬 추가

1. `skills/curated/[skill-name]/` 디렉토리 생성
2. `SKILL.md` — 스킬 본문
3. `README.md` — 출처, 선택 이유, 사용법 기록

## 커스텀 스킬 작성

1. `skills/custom/[skill-name]/` 디렉토리 생성
2. 어떤 문제를 해결하는지 README.md에 명시
3. 필요 시 `scripts/`, `references/` 하위 디렉토리 활용
