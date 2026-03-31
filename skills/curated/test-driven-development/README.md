# test-driven-development

## 출처

- **Repository:** [obra/superpowers](https://github.com/obra/superpowers/tree/main/skills/test-driven-development)
- **Author:** Jesse Vincent (obra)
- **License:** 미지정 (공개 저장소)

## 선택 이유

1. **내용의 완성도** — RED-GREEN-REFACTOR 사이클의 철학적 근거부터 구체적 TypeScript 예제까지 500줄 이내로 밀도 있게 정리됨
2. **합리화 차단** — "나중에 테스트 써도 돼", "이번만 빼도 돼" 같은 흔한 변명을 항목별로 논리적으로 반박함
3. **검증 체크리스트** — 작업 완료 전 확인할 체크리스트가 명확하고 실행 가능함
4. **프레임워크 중립** — Jest/Vitest/Testing Library 어디에나 적용 가능한 원칙 기반
5. **Next.js + TypeScript 스택 호환** — TypeScript 예제 코드가 실제 사용 패턴과 일치

## 적용 방법

### 설치

```bash
# 프로젝트 레벨
cp -r skills/curated/test-driven-development .claude/skills/

# 또는 개인 글로벌 설치
cp -r skills/curated/test-driven-development ~/.claude/skills/
```

### 사용

Claude Code 대화에서 스킬 활성화:

```
/test-driven-development
```

또는 Claude가 새 기능 구현을 시작할 때 자동으로 참조하도록 `CLAUDE.md`에 명시:

```markdown
## 개발 원칙
새 기능 구현 및 버그 수정 시 반드시 `/test-driven-development` 스킬을 따른다.
```

### 권장 테스트 스택 (Next.js + TypeScript)

```json
{
  "devDependencies": {
    "vitest": "^2.0.0",
    "@testing-library/react": "^16.0.0",
    "@testing-library/user-event": "^14.0.0",
    "@playwright/test": "^1.48.0"
  }
}
```

## 주의사항

- 이 스킬은 Claude에게 TDD를 강제하는 행동 가이드임
- "테스트 먼저 실패를 확인했는가?"를 완료 조건으로 삼음
- 프로토타입/설정 파일은 예외로 처리 가능 (human partner 판단)
