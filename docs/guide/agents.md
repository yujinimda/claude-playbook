# 에이전트 설계법

> Claude Code 서브에이전트를 어떻게 정의하고 활용하는지 설명합니다.

## 에이전트란?

특정 역할에 특화된 Claude Code 인스턴스입니다. `agents/` 폴더의 `.md` 파일로 정의합니다.

## 파일 형식

```markdown
---
name: agent-name
description: 이 에이전트가 하는 일 (언제 호출할지 포함)
tools: Read, Write, Bash, ...
---

# 시스템 프롬프트

에이전트의 역할, 행동 방식, 제약 조건을 정의합니다.
```

## 에이전트 추가하기

1. `agents/[agent-name].md` 파일 생성
2. frontmatter에 `name`, `description`, `tools` 정의
3. 본문에 시스템 프롬프트 작성
