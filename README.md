# 微观生命结构馆

一个中文交互式 3D 细胞结构科普页面，目前包含植物细胞主舞台、白细胞模型、结构索引、显微观察、横向对比和结构说明卡片。

## 本地运行

推荐在 Mac 或 Windows 使用 Python 静态服务：

```bash
python3 serve.py
```

然后访问：

```text
http://localhost:4173/
```

如果使用 Node.js，也可以运行：

```bash
node server.mjs
```

## 大文件

项目里的 `.glb` 3D 模型使用 Git LFS 管理。换到 Mac 后请先安装并启用 Git LFS：

```bash
brew install git-lfs
git lfs install
git lfs pull
```

## 目录说明

- `index.html`：页面结构和本地 importmap
- `src/app.js`：交互逻辑、Three.js 主舞台、细胞数据
- `src/styles.css`：页面样式
- `assets/`：缩略图、插图、模型、Three.js 本地依赖
- `3D/`：原始模型和参考图
- `serve.py`：本地静态服务，修正 `.js` 和 `.glb` MIME
- `server.mjs`：Node.js 版本地静态服务
