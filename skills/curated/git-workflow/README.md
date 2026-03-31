# git-workflow

## 출처

- **Repository:** [netresearch/git-workflow-skill](https://github.com/netresearch/git-workflow-skill)
- **Author:** Netresearch DTT GmbH
- **Version:** 1.10.0
- **License:** MIT AND CC-BY-SA-4.0

## 선택 이유

1. **Conventional Commits 완전 지원** — `feat`/`fix`/`BREAKING CHANGE` 등 Semantic Versioning 연동 규칙이 명확하게 정의됨
2. **gh CLI 통합** — `gh pr create`, `gh pr merge`, `gh release create` 등 실제 CLI 명령어 예제 포함
3. **참조 파일 구조** — 브랜치 전략·커밋 컨벤션·PR 워크플로우·CI/CD를 별도 참조 파일로 분리해 필요한 내용만 로드 (컨텍스트 효율 최적화)
4. **릴리스 안전 경고** — "삭제된 릴리스는 태그 이름을 영구 차단한다" 같은 실수 방지 가이드 포함
5. **검증 스크립트** — `./scripts/verify-git-workflow.sh`로 실제 검증 가능

## 적용 방법

### 설치

```bash
# 프로젝트 레벨
cp -r skills/curated/git-workflow .claude/skills/

# 또는 개인 글로벌 설치
cp -r skills/curated/git-workflow ~/.claude/skills/
```

### 사용

PR 생성 요청 시:
```
/git-workflow PR을 만들어줘
```

커밋 메시지 작성 시:
```
/git-workflow 지금까지 변경사항을 커밋해줘
```

### CLAUDE.md 통합 예시

```markdown
## Git 컨벤션
- 모든 커밋은 Conventional Commits 형식을 따른다
- PR 생성 시 `/git-workflow` 스킬을 참조한다
- `feat!` 또는 `BREAKING CHANGE:` footer는 메이저 버전 범프를 의미한다
```

### 권장 Hook 설정 (`.husky/commit-msg`)

```bash
#!/bin/sh
npx commitlint --edit "$1"
```

```json
// commitlint.config.js
export default { extends: ['@commitlint/config-conventional'] }
```

## 주의사항

- `git rebase -i` 는 로컬 커밋 정리에만 사용 (push된 커밋에는 사용 금지)
- Squash merge 시 PR 제목이 커밋 메시지가 됨 — PR 제목도 Conventional Commits 형식으로 작성
- GitHub Releases는 한 번 삭제하면 해당 태그 이름 재사용 불가
