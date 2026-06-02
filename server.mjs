import { createServer } from "node:http";
import { createReadStream, existsSync, statSync } from "node:fs";
import { extname, join, normalize, resolve } from "node:path";

const root = resolve(".");
const port = Number(process.env.PORT || 4173);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml; charset=utf-8",
  ".webp": "image/webp",
  ".glb": "model/gltf-binary"
};

createServer((request, response) => {
  const rawUrl = decodeURIComponent((request.url || "/").split("?")[0]);
  const safePath = normalize(rawUrl).replace(/^(\.\.[/\\])+/, "");
  let filePath = join(root, safePath === "/" ? "index.html" : safePath);

  if (!filePath.startsWith(root)) {
    response.writeHead(403);
    response.end("Forbidden");
    return;
  }

  if (!existsSync(filePath)) {
    response.writeHead(404);
    response.end("Not found");
    return;
  }

  if (statSync(filePath).isDirectory()) {
    filePath = join(filePath, "index.html");
  }

  const relativePath = filePath.slice(root.length).replace(/\\/g, "/");
  const headers = {
    "Content-Type": types[extname(filePath)] || "application/octet-stream",
    "Cache-Control": "no-cache"
  };

  if (relativePath.startsWith("/assets/models/")) {
    headers["Cache-Control"] = "public, max-age=86400";
  } else if (relativePath.startsWith("/assets/")) {
    headers["Cache-Control"] = "public, max-age=3600";
  }

  response.writeHead(200, headers);
  createReadStream(filePath).pipe(response);
}).listen(port, () => {
  console.log(`Server running: http://localhost:${port}`);
});
