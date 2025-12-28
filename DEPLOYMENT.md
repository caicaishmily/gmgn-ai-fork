# GitHub Pages 部署指南

## 部署步骤

### 方法 1: 使用 GitHub Actions（推荐）

项目已配置 GitHub Actions 工作流，当你推送代码到 `main` 分支时，会自动构建并部署到 GitHub Pages。

1. 确保你的仓库已启用 GitHub Pages：
   - 前往仓库的 Settings → Pages
   - Source 选择 "GitHub Actions"

2. 推送代码到 main 分支：
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. 等待 Actions 完成部署（通常在几分钟内）

4. 访问你的网站：`https://<你的用户名>.github.io/gmgn-ai/`

### 方法 2: 手动部署

1. 构建项目：
```bash
npm run build
```

2. 将 `dist` 目录的内容推送到 `gh-pages` 分支：
```bash
npm install -g gh-pages
gh-pages -d dist
```

或者手动操作：
```bash
git subtree push --prefix dist origin gh-pages
```

### 配置说明

- **Base Path**: 项目配置了 base path 为 `/gmgn-ai/`（在 `vite.config.js` 中）
- 如果你的仓库名不是 `gmgn-ai`，需要修改 `vite.config.js` 中的 `base` 配置
- 如果是部署到根路径（如 `username.github.io`），将 `base` 改为 `'/'`

### 修改 Base Path

编辑 `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: '/你的仓库名/', // 或 '/' 用于根路径部署
})
```

### 故障排除

1. **404 错误**：检查 base path 配置是否正确
2. **资源加载失败**：确保所有资源路径使用相对路径或正确的 base path
3. **路由不工作**：如果使用 React Router，需要配置 404 重定向到 `index.html`

### 自定义域名

如果使用自定义域名：
1. 在仓库 Settings → Pages 中添加自定义域名
2. 添加 `CNAME` 文件到 `public` 目录，内容为你的域名
3. 重新构建和部署

