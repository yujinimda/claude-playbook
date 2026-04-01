# react-ui-patterns

로딩 상태, 에러 처리, 빈 상태, 폼 제출 등 React UI 패턴을 다루는 스킬.

## 출처

팀 내부 작성.

## 선택 이유

1. 로딩 인디케이터·에러 처리의 안티패턴이 명확히 정리되어 있어 리뷰 코멘트 없이도 일관된 UI 구현 가능
2. Skeleton vs Spinner 판단 기준, 에러 계층 구조(Inline → Toast → Banner → Full Screen)가 표로 제시됨
3. React Query + Zod + React Hook Form 조합의 실전 패턴 포함

## 적용 방법

### 설치

```bash
# 이 레포를 clone한 경우
cp skills/react-ui-patterns/SKILL.md your-project/.claude/skills/react-ui-patterns.md

# 또는 curl (레포 없이)
curl -o your-project/.claude/skills/react-ui-patterns.md \
  https://raw.githubusercontent.com/YY-Studios/claude-playbook/main/skills/react-ui-patterns/SKILL.md
```

### CLAUDE.md 통합 예시

```markdown
## Skills

@.claude/skills/react-ui-patterns.md
```

## 주의사항

- 이 스킬은 React Query 기반 패턴을 전제함. SWR 등 다른 라이브러리 사용 시 직접 조정 필요
- `isLoading && !data` 조건 패턴은 캐시 데이터 존재 시 스피너를 숨기는 의도적 설계임
