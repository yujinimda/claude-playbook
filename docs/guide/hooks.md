# 훅 설정법

> Claude Code 훅을 프로젝트에 적용하는 방법을 설명합니다.

## 훅이란?

훅은 Claude Code의 특정 이벤트(파일 저장, 명령 실행 등)에 반응해 자동으로 실행되는 스크립트입니다.

## 설정 위치

`.claude/settings.json` 또는 `.claude/settings.local.json`에 훅을 등록합니다.

```json
{
  "hooks": {
    "postToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [{ "type": "command", "command": "prettier --write $FILE" }]
      }
    ]
  }
}
```

## 훅 카탈로그 사용법

`hooks/curated/` 또는 `hooks/custom/` 의 `.md` 파일에서 설정 스니펫을 복사해 프로젝트 settings.json에 붙여넣으세요.
