# 시작하기

## 이 레포 소개

claude-playbook은 YY-Studios에서 Claude Code를 팀 단위로 활용하기 위해 만든 카탈로그와 실사용 레시피 모음입니다.

## 빠른 시작

### 1. 카탈로그 확인

도입할 스킬, 훅, 룰은 먼저 카탈로그에서 확인합니다.

- 어떤 항목이 우리 스택에 맞는지 확인
- `검토중 / 확정 / 적용중` 상태 확인
- 실제 사용 중인 레시피와 비교

### 2. 필요한 레시피 가져오기

필요한 스킬/훅/룰을 찾아 각자 프로젝트의 `.claude/` 디렉토리에 복사하거나 설정에 반영합니다.

```bash
# 스킬 복사 예시
cp -r skills/curated/[skill-name]/ ../my-project/.claude/skills/

# 훅 설정 참고
cat hooks/curated/[hook-name].md
````

### 3. 구조 이해

* `docs/catalog/` — 도입 후보 카탈로그
* `skills/curated/` — 검증된 실사용 스킬
* `skills/custom/` — 팀이 직접 만든 실사용 스킬
* `hooks/curated/` — 외부에서 가져온 실사용 훅
* `hooks/custom/` — 팀 커스텀 훅
* `rules/curated/` — 외부 검증 룰
* `rules/custom/` — 팀 룰
* `agents/` — 에이전트 템플릿

### 4. 추가하기

새 레시피는 PR로 올려주세요. [기여 방식](../README.md#기여-방식) 참고.
