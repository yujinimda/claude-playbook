---
name: git-workflow
description: "Use when establishing branching strategies, implementing Conventional Commits, creating or reviewing PRs, resolving PR review comments, merging PRs (including CI verification, auto-merge queues, and post-merge cleanup), managing PR review threads, merging PRs with signed commits, handling merge conflicts, creating releases, or integrating Git with CI/CD."
license: "(MIT AND CC-BY-SA-4.0). See LICENSE-MIT and LICENSE-CC-BY-SA-4.0"
compatibility: "Requires git, gh CLI."
metadata:
  author: Netresearch DTT GmbH
  version: "1.10.0"
  repository: https://github.com/netresearch/git-workflow-skill
allowed-tools: Bash(git:*) Bash(gh:*) Read Write
---

# Git Workflow Skill

Expert patterns for Git version control: branching, commits, collaboration, and CI/CD.

## Expertise Areas

- **Branching**: Git Flow, GitHub Flow, Trunk-based development
- **Commits**: Conventional Commits, semantic versioning
- **Collaboration**: PR workflows, code review, merge strategies, thread resolution
- **CI/CD**: GitHub Actions, GitLab CI, branch protection

## Conventional Commits (Quick Reference)

```
<type>[scope]: <description>
```

**Types**: `feat` (MINOR), `fix` (PATCH), `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

**Breaking change**: Add `!` after type or `BREAKING CHANGE:` in footer.

**Examples:**
```
feat(auth): add OAuth2 login with Google
fix(api): handle null response from payment gateway
feat!: remove deprecated v1 endpoints

BREAKING CHANGE: v1 API endpoints removed, migrate to v2
```

## Branch Naming

```bash
feature/TICKET-123-description
fix/TICKET-456-bug-name
release/1.2.0
hotfix/1.2.1-security-patch
```

## GitHub Flow (Default)

```bash
# 1. 최신 main에서 시작
git checkout main && git pull

# 2. 기능 브랜치 생성
git checkout -b feature/my-feature

# 3. 작업 및 커밋
git add -p
git commit -m "feat(scope): description"

# 4. PR 생성 및 머지
git push -u origin HEAD
gh pr create --title "feat: ..." --body "..."
gh pr merge --squash
```

## PR 워크플로우

### PR 생성 체크리스트

- [ ] 브랜치가 최신 main 기반인가?
- [ ] Conventional Commit 형식의 커밋 메시지인가?
- [ ] 테스트가 모두 통과하는가?
- [ ] 변경 범위가 단일 목적인가?

### PR 머지 전 확인

```bash
# CI 상태 확인
gh pr checks

# 리뷰 상태 확인
gh pr view --json reviews

# 최신 main 반영
git fetch origin main
git rebase origin/main
```

### 머지 전략

| 상황 | 전략 | 이유 |
|------|------|------|
| 기능 브랜치 | Squash merge | 깔끔한 히스토리 |
| 릴리스 브랜치 | Merge commit | 릴리스 포인트 보존 |
| 핫픽스 | Merge commit | 추적 가능성 |

## 머지 충돌 해결

```bash
# rebase로 충돌 해결 (권장)
git fetch origin main
git rebase origin/main

# 충돌 파일 편집 후
git add <resolved-files>
git rebase --continue

# 충돌이 복잡한 경우 merge로 대체
git rebase --abort
git merge origin/main
```

## 릴리스 관리

**CRITICAL**: Deleted releases block tag names PERMANENTLY. Get releases right first time.

```bash
# 릴리스 생성
gh release create v1.2.0 \
  --title "Release v1.2.0" \
  --notes "## Changes\n- feat: ..." \
  --target main
```

## Git Hooks (권장)

프로젝트에서 git hooks 탐지:
```bash
ls lefthook.yml captainhook.json .pre-commit-config.yaml .husky/pre-commit 2>/dev/null
```

권장 hooks:
- `commit-msg`: Conventional Commits 형식 검증
- `pre-push`: 테스트 및 린트 실행
- `pre-commit`: 스테이징된 파일 타입 체크

## 고급 패턴

### Interactive Rebase (로컬 커밋 정리)

```bash
# 마지막 3개 커밋 정리 (push 전에만)
git rebase -i HEAD~3
```

### Git Bisect (버그 도입 커밋 탐색)

```bash
git bisect start
git bisect bad HEAD
git bisect good v1.0.0
# 각 단계에서 good/bad 표시
git bisect run npm test
```

### Cherry-pick (특정 커밋만 가져오기)

```bash
git cherry-pick <commit-hash>
```

## Verification

```bash
./scripts/verify-git-workflow.sh /path/to/repository
```

---

> **Source:** https://github.com/netresearch/git-workflow-skill
