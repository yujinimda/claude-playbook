# git-workflow

브랜치 전략, Conventional Commits, PR 생성·머지·리뷰, 릴리스 관리, CI/CD 통합까지 Git 워크플로우 전반을 다루는 스킬.

## 출처

| 항목 | 내용 |
|------|------|
| **저장소** | [github.com/netresearch/git-workflow-skill](https://github.com/netresearch/git-workflow-skill) |
| **제작자** | Netresearch DTT GmbH |
| **버전** | 1.10.0 |
| **라이선스** | MIT AND CC-BY-SA-4.0 |

## 선택 이유

1. Conventional Commits + semantic versioning 패턴이 체계적으로 정리되어 있어 팀 커밋 컨벤션을 별도 문서 없이 통일할 수 있음
2. PR 생성·머지·CI 확인 절차가 `gh` CLI 명령어와 함께 구체적으로 제시되어 Claude가 바로 실행 가능한 수준
3. 릴리스 삭제 시 태그명 영구 차단 등 실수 방지 포인트가 CRITICAL로 명시되어 있어 사고 예방 효과
4. Git Bisect, Cherry-pick, Interactive Rebase 등 고급 패턴도 포함하여 스킬 하나로 대부분의 Git 시나리오를 커버

## 적용 방법

### 설치

```bash
# 이 레포를 clone한 경우
cp skills/git-workflow/SKILL.md your-project/.claude/skills/git-workflow.md

# 또는 curl (레포 없이)
curl -o your-project/.claude/skills/git-workflow.md \
  https://raw.githubusercontent.com/YY-Studios/claude-playbook/main/skills/git-workflow/SKILL.md
```

### 사용 예시

Claude에게 자연어로 요청하면 스킬에 정의된 패턴을 따릅니다.

```
# PR 생성
"git-workflow 스킬에 따라 현재 브랜치로 PR을 만들어줘"

# 릴리스
"v1.3.0 릴리스를 만들어줘. 변경사항은 feat: 다크모드 추가"

# 충돌 해결
"main과 충돌이 있어. rebase로 해결해줘"
```

### CLAUDE.md 통합 예시

```markdown
## Skills

프로젝트 작업 시 아래 스킬을 자동으로 적용하세요.

@.claude/skills/git-workflow.md
```

## 주의사항

- **Conventional Commits 형식 엄수** — `feat`, `fix`, `docs` 등 정해진 타입 외 사용 시 semantic versioning 자동화가 오작동함
- **릴리스 삭제 금지** — `gh release delete` 후 동일 태그명 재사용 불가. 릴리스는 처음부터 올바르게 생성할 것
- **rebase는 로컬 커밋에만** — 이미 push된 공개 브랜치를 rebase하면 팀원 히스토리가 훼손됨. push 전에만 사용
- **`allowed-tools` 범위 확인** — 이 스킬은 `Bash(git:*)`, `Bash(gh:*)`, `Read`, `Write`만 허용. 다른 도구가 필요하면 CLAUDE.md에서 별도 지정
