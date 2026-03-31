# 시작하기

## 이 레포가 하는 일

claude-playbook은 YY-Studios에서 Claude Code로 일하기 위한 팀 운영 레시피 모음입니다.

## 빠른 시작

### 1. 레포 탐색

필요한 스킬/훅/룰을 찾아 각자 프로젝트의 `.claude/` 디렉토리에 복사합니다.

```bash
# 스킬 복사 예시
cp -r skills/curated/[skill-name]/ ../my-project/.claude/skills/

# 훅 설정 참고
cat hooks/curated/[hook-name].md
```

### 2. 구조 이해

- `skills/curated/` — 마켓에서 검증된 스킬
- `skills/custom/` — 팀이 직접 만든 스킬
- `hooks/curated/` — 커뮤니티 검증 훅
- `hooks/custom/` — 팀 커스텀 훅
- `rules/curated/` — 외부 검증 룰
- `rules/custom/` — 팀 룰
- `agents/` — 에이전트 템플릿

### 3. 기여하기

새 레시피는 PR로 올려주세요. [기여 가이드](../README.md#기여-가이드) 참고.
