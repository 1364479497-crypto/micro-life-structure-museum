from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path


ROOT = Path(__file__).resolve().parent
PORT = 4173


class StaticHandler(SimpleHTTPRequestHandler):
    directory = str(ROOT)

    MIME_OVERRIDES = {
        ".js": "text/javascript; charset=utf-8",
        ".mjs": "text/javascript; charset=utf-8",
        ".css": "text/css; charset=utf-8",
        ".html": "text/html; charset=utf-8",
        ".json": "application/json; charset=utf-8",
        ".glb": "model/gltf-binary",
        ".gltf": "model/gltf+json",
        ".webp": "image/webp",
        ".svg": "image/svg+xml; charset=utf-8",
    }

    def translate_path(self, path):
        translated = Path(super().translate_path(path)).resolve()
        try:
            translated.relative_to(ROOT)
        except ValueError:
            return str(ROOT / "index.html")
        return str(translated)

    def guess_type(self, path):
        suffix = Path(path).suffix.lower()
        return self.MIME_OVERRIDES.get(suffix, super().guess_type(path))

    def end_headers(self):
        suffix = Path(self.path.split("?", 1)[0]).suffix.lower()
        if suffix in {".glb", ".gltf", ".png", ".webp", ".jpg", ".jpeg"}:
            self.send_header("Cache-Control", "public, max-age=3600")
        else:
            self.send_header("Cache-Control", "no-cache")
        super().end_headers()


if __name__ == "__main__":
    server = ThreadingHTTPServer(("127.0.0.1", PORT), StaticHandler)
    print(f"Server running: http://localhost:{PORT}", flush=True)
    server.serve_forever()
