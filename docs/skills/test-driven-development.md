# test-driven-development

기능 구현 전 테스트를 먼저 작성하는 TDD Red-Green-Refactor 사이클을 강제하는 스킬.

## 출처

팀 내부 작성.

## 선택 이유

1. "테스트를 먼저 실패시키지 않으면 올바른 테스트인지 알 수 없다"는 원칙을 규칙으로 명문화
2. 흔한 TDD 회피 합리화(너무 단순함, 수동 테스트로 충분 등)에 대한 반박이 포함되어 있어 Claude가 TDD를 건너뛰지 않도록 강제
3. Red-Green-Refactor 각 단계의 Good/Bad 예시가 구체적으로 제시됨

## 적용 방법

### 설치

```bash
# 이 레포를 clone한 경우
cp skills/test-driven-development/SKILL.md your-project/.claude/skills/test-driven-development.md

# 또는 curl (레포 없이)
curl -o your-project/.claude/skills/test-driven-development.md \
  https://raw.githubusercontent.com/YY-Studios/claude-playbook/main/skills/test-driven-development/SKILL.md
```

### CLAUDE.md 통합 예시

```markdown
## Skills

새 기능 및 버그 수정 시 반드시 TDD를 따르세요.

@.claude/skills/test-driven-development.md
```

## 주의사항

- 프로토타입, 생성 코드, 설정 파일은 예외 허용 — 하지만 반드시 사람에게 확인할 것
- 구현 코드를 먼저 작성했다면 삭제하고 다시 시작. "참고용으로 보존"은 TDD 위반
