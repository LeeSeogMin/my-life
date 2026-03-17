# macOS 로컬 환경 설치 현황 → Windows 이식 가이드

> 기준: macOS Darwin 23.3.0 (2026-03-13 기준)

---

## 1. 기본 런타임

| 항목 | macOS 현재 버전 | Windows 설치 방법 |
|------|----------------|------------------|
| Node.js | v22.11.0 | https://nodejs.org → LTS 다운로드 |
| npm | 8.19.1 | Node.js에 포함 |
| Python | 3.14.2 | https://python.org → 설치 시 "Add to PATH" 체크 |
| Pandoc | 3.8.3 | https://pandoc.org/installing.html → Windows installer |
| Git | (brew) | https://git-scm.com/download/win |
| ripgrep | (brew) | `winget install BurntSushi.ripgrep.MSVC` |

---

## 2. Claude Code

```bash
# 버전: 2.1.74
npm install -g @anthropic-ai/claude-code
```

### 전역 설정 (~/.claude/settings.json)

```json
{
  "env": {
    "ENABLE_TOOL_SEARCH": "true",
    "CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS": "1"
  },
  "enabledPlugins": {
    "frontend-design@claude-plugins-official": true,
    "feature-dev@claude-plugins-official": true,
    "code-review@claude-plugins-official": true,
    "security-guidance@claude-plugins-official": true,
    "claude-md-management@claude-plugins-official": true,
    "skill-creator@claude-plugins-official": true,
    "ralph-loop@claude-plugins-official": true
  }
}
```

### 플러그인 (7개 활성화)

Claude Code 실행 후 `/install` 명령으로 설치:
1. frontend-design
2. feature-dev
3. code-review
4. security-guidance
5. claude-md-management
6. skill-creator
7. ralph-loop

---

## 3. 전역 npm 패키지 (25개)

```bash
npm install -g @anthropic-ai/claude-code
npm install -g @github/copilot
npm install -g @google/gemini-cli
npm install -g @openai/codex
npm install -g vercel
npm install -g firebase-tools
npm install -g pm2
npm install -g playwright

# MCP 서버
npm install -g @modelcontextprotocol/server-filesystem
npm install -g @21st-dev/magic
npm install -g @andrebuzeli/advanced-memory-bank-mcp
npm install -g @puchunjie/doc-tools-mcp
npm install -g @upstash/context7-mcp
npm install -g agent-browser
npm install -g edit-file-lines
npm install -g linear-taskmaster-mcp
npm install -g mcp-cli
npm install -g mcp-sequentialthinking-tools
npm install -g mcp-shrimp-task-manager
npm install -g nascoder-perplexity-mcp
npm install -g octagon-deep-research-mcp
npm install -g opencode-ai

# 문서 생성
npm install -g docx
npm install -g pptxgenjs
```

---

## 4. Python 패키지 (주요)

```bash
# 데이터 분석 핵심
pip install numpy pandas scipy scikit-learn matplotlib seaborn

# AI/ML
pip install torch transformers sentence-transformers faiss-cpu

# LLM 관련
pip install langchain-core langchain-text-splitters langsmith

# 문서 변환
pip install pypandoc python-docx python-pptx openpyxl xlsxwriter
pip install pdfplumber pdfminer.six pypdf pikepdf pypdfium2 reportlab

# 웹 스크래핑
pip install beautifulsoup4 requests httpx markdownify markitdown

# 한글(HWP)
pip install pyhwp

# 유틸리티
pip install pillow lxml pyyaml python-dotenv tqdm regex magika
```

---

## 5. Claude Desktop MCP 서버 (~/.claude/claude_desktop_config.json)

```json
{
  "mcpServers": {
    "filesystem": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-filesystem", "C:\\Users\\USERNAME"]
    },
    "github": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-github"],
      "env": { "GITHUB_PERSONAL_ACCESS_TOKEN": "YOUR_TOKEN" }
    },
    "web": {
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-fetch"]
    }
  }
}
```

> Windows에서는 경로를 `C:\Users\USERNAME`으로 변경

---

## 6. Claude Code 스킬 (~/.claude/skills/, 20개)

수동 복사 필요 (macOS → Windows):

```
~/.claude/skills/
├── agent-browser/
├── algorithmic-art/
├── brand-guidelines/
├── canvas-design/
├── data-fetch/
├── data-prep/
├── doc-coauthoring/
├── docx/
├── frontend-design/
├── hwp/
├── internal-comms/
├── mcp-builder/
├── md2pdf/
├── pdf/
├── pptx/
├── skill-creator/
├── slack-gif-creator/
├── theme-factory/
├── web-artifacts-builder/
└── xlsx/
```

> Windows에서 경로: `%USERPROFILE%\.claude\skills\`

---

## 7. Homebrew → Windows 대체 (주요 항목만)

| macOS (brew) | Windows 대체 |
|-------------|-------------|
| pandoc | winget install pandoc |
| ripgrep | winget install BurntSushi.ripgrep.MSVC |
| git | winget install Git.Git |
| gh (GitHub CLI) | winget install GitHub.cli |
| ffmpeg | winget install Gyan.FFmpeg |
| tesseract | https://github.com/UB-Mannheim/tesseract/wiki |
| typst | winget install typst |
| jq | winget install jqlang.jq |
| tmux | 해당 없음 (Windows Terminal 탭 사용) |

---

## 8. 이식 시 주의사항

1. 경로 구분자: macOS `/` → Windows `\` (또는 `/`도 대부분 작동)
2. `~/.claude/` → Windows에서는 `%USERPROFILE%\.claude\`
3. Python: Windows에서 `pip install --user` 대신 venv 사용 권장
4. pyhwp: Windows에서 정상 작동 확인 필요 (OLE 파싱 의존)
5. Homebrew 전용 패키지(brew로만 설치한 것)는 winget/choco로 대체
6. SessionEnd 훅 (`cleanup-mcp.sh`) → Windows용 `.bat` 또는 `.ps1`로 변환 필요
