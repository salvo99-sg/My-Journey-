#!/usr/bin/env python3
"""Genera artwork via Gemini Nano Banana Pro (REST, niente SDK). Chiave da /tmp/gk."""
import sys, json, base64, urllib.request, argparse, pathlib

ap = argparse.ArgumentParser()
ap.add_argument("--prompt", required=True)
ap.add_argument("--out", required=True)
ap.add_argument("--ratio", default="16:9")
ap.add_argument("--model", default="gemini-3-pro-image-preview")
a = ap.parse_args()

key = pathlib.Path("/tmp/gk").read_text().strip()
url = f"https://generativelanguage.googleapis.com/v1beta/models/{a.model}:generateContent?key={key}"
body = {
    "contents": [{"parts": [{"text": a.prompt}]}],
    "generationConfig": {
        "responseModalities": ["IMAGE", "TEXT"],
        "imageConfig": {"aspectRatio": a.ratio},
    },
}
req = urllib.request.Request(
    url, data=json.dumps(body).encode(),
    headers={"Content-Type": "application/json"}, method="POST",
)
try:
    with urllib.request.urlopen(req, timeout=300) as r:
        data = json.load(r)
except urllib.error.HTTPError as e:
    print("HTTP", e.code, e.read().decode()[:800]); sys.exit(1)

img = None
for part in data.get("candidates", [{}])[0].get("content", {}).get("parts", []):
    inl = part.get("inlineData") or part.get("inline_data")
    if inl and str(inl.get("mimeType", inl.get("mime_type", ""))).startswith("image/"):
        img = inl["data"]; break

if not img:
    print("Nessuna immagine. Risposta:", json.dumps(data)[:800]); sys.exit(2)

out = pathlib.Path(a.out); out.parent.mkdir(parents=True, exist_ok=True)
out.write_bytes(base64.b64decode(img))
print("OK ->", out, round(out.stat().st_size / 1024), "KB")
