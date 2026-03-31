# react-ui-patterns

## 출처

- **Repository:** [ChrisWiles/claude-code-showcase](https://github.com/ChrisWiles/claude-code-showcase)
- **Author:** Chris Wiles
- **License:** 미지정 (공개 저장소)

## 선택 이유

1. **"Golden Rule" 명확화** — "데이터가 없을 때만 로딩 인디케이터를 표시하라"는 원칙이 명확하고, 캐시 데이터 있을 때 스피너 깜빡임 문제를 직접 해결함
2. **에러 계층 구조** — Inline → Toast → Banner → Full Screen 4단계 에러 계층이 실무에서 바로 적용 가능
3. **TanStack Query 통합** — `useQuery`/`useMutation` 패턴과 자연스럽게 연결됨
4. **Tailwind CSS 예제** — Next.js + Tailwind 스택에서 그대로 사용 가능한 컴포넌트 코드 포함
5. **체크리스트 형식** — 컴포넌트 완성 전 확인할 명확한 체크리스트 제공

## 적용 방법

### 설치

```bash
# 프로젝트 레벨
cp -r skills/curated/react-ui-patterns .claude/skills/

# 또는 개인 글로벌 설치
cp -r skills/curated/react-ui-patterns ~/.claude/skills/
```

### 사용

UI 컴포넌트 구현 요청 시:
```
/react-ui-patterns 사용자 목록 컴포넌트를 만들어줘
```

비동기 데이터를 다루는 페이지 작성 시 자동 참조되도록 `CLAUDE.md`에 명시:

```markdown
## UI 패턴
React 컴포넌트 구현 시 `/react-ui-patterns` 스킬을 따른다.
특히 로딩 상태, 에러 처리, 빈 상태는 스킬 명세를 준수한다.
```

### 의존성

```bash
# TanStack Query (서버 상태 관리)
npm install @tanstack/react-query

# React Hook Form + Zod (폼 처리)
npm install react-hook-form zod @hookform/resolvers

# Toast 알림
npm install sonner
```

### 관련 스킬

- `react-errors-boundaries` — Error Boundary 연동 시
- `zustand-state-management` — 글로벌 에러 상태 관리 시
- `react-impl-testing` — 로딩/에러 상태 테스트 작성 시

## 주의사항

- 이 스킬의 로딩 패턴은 TanStack Query의 `isLoading` + `data` 조합을 기준으로 설명됨
- SWR, React Query v3 등 다른 라이브러리는 API가 다를 수 있으니 확인 필요
- Optimistic update 패턴은 `useMutation`의 `onMutate`/`onError`/`onSettled` 훅을 활용
