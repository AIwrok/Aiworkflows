"""Generate premium showcase thumbnails for project cards."""
from __future__ import annotations

import re
import urllib.request
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "images" / "projects"
OUT.mkdir(parents=True, exist_ok=True)

W, H = 1280, 720
FONT_BOLD = "C:/Windows/Fonts/segoeuib.ttf"
FONT_REG = "C:/Windows/Fonts/segoeui.ttf"


def load_font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    try:
        return ImageFont.truetype(FONT_BOLD if bold else FONT_REG, size)
    except OSError:
        return ImageFont.load_default()


def lerp(a: int, b: int, t: float) -> int:
    return int(a + (b - a) * t)


def vertical_gradient(size: tuple[int, int], top: tuple[int, int, int], bottom: tuple[int, int, int]) -> Image.Image:
    img = Image.new("RGB", size)
    px = img.load()
    for y in range(size[1]):
        t = y / max(size[1] - 1, 1)
        color = tuple(lerp(top[i], bottom[i], t) for i in range(3))
        for x in range(size[0]):
            px[x, y] = color
    return img


def add_glow_orb(draw: ImageDraw.ImageDraw, xy: tuple[int, int], radius: int, color: tuple[int, int, int, int]) -> None:
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    odraw = ImageDraw.Draw(overlay)
    odraw.ellipse((xy[0] - radius, xy[1] - radius, xy[0] + radius, xy[1] + radius), fill=color)
    return overlay


def paste_overlay(base: Image.Image, overlay: Image.Image) -> Image.Image:
    if base.mode != "RGBA":
        base = base.convert("RGBA")
    return Image.alpha_composite(base, overlay)


def draw_browser_chrome(draw: ImageDraw.ImageDraw, title: str) -> None:
    draw.rounded_rectangle((56, 48, W - 56, H - 48), radius=28, fill=(12, 12, 24), outline=(255, 255, 255, 40))
    draw.rounded_rectangle((56, 48, W - 56, 118), radius=28, fill=(20, 20, 36))
    draw.rectangle((56, 86, W - 56, 118), fill=(20, 20, 36))
    for i, c in enumerate([(239, 68, 68), (251, 191, 36), (34, 197, 94)]):
        draw.ellipse((92 + i * 28, 64, 108 + i * 28, 80), fill=c)
    draw.rounded_rectangle((150, 58, 430, 86), radius=14, fill=(35, 35, 58))
    draw.text((170, 63), title, fill=(210, 210, 230), font=load_font(18))


def draw_pills(draw: ImageDraw.ImageDraw, labels: list[str], y: int, accent: tuple[int, int, int]) -> None:
    x = 110
    for label in labels:
        font = load_font(20)
        tw = draw.textlength(label, font=font)
        pad_x, pad_y = 18, 10
        box = (x, y, x + tw + pad_x * 2, y + 34 + pad_y)
        draw.rounded_rectangle(box, radius=18, fill=(*accent, 40), outline=(*accent, 120))
        draw.text((x + pad_x, y + pad_y - 2), label, fill=(235, 235, 245), font=font)
        x = box[2] + 14


def make_card(
    filename: str,
    title: str,
    subtitle: str,
    emoji: str,
    top: tuple[int, int, int],
    bottom: tuple[int, int, int],
    accent: tuple[int, int, int],
    pills: list[str],
    status: str,
) -> Path:
    base = vertical_gradient((W, H), top, bottom).convert("RGBA")
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    odraw = ImageDraw.Draw(overlay)
    odraw.ellipse((900, -80, 1260, 280), fill=(*accent, 70))
    odraw.ellipse((-120, 420, 280, 820), fill=(99, 102, 241, 55))
    base = paste_overlay(base, overlay)

    draw = ImageDraw.Draw(base)
    draw_browser_chrome(draw, title)

    content_top = 150
    draw.rounded_rectangle((90, content_top, W - 90, H - 70), radius=24, fill=(255, 255, 255, 18), outline=(255, 255, 255, 35))
    draw.text((120, content_top + 28), emoji, fill=(255, 255, 255), font=load_font(54))
    draw.text((210, content_top + 24), title, fill=(255, 255, 255), font=load_font(46, bold=True))
    draw.text((210, content_top + 88), subtitle, fill=(210, 214, 230), font=load_font(24))

    draw.rounded_rectangle((W - 250, content_top + 24, W - 110, content_top + 64), radius=16, fill=(*accent, 90))
    draw.text((W - 230, content_top + 33), status.upper(), fill=(255, 255, 255), font=load_font(18, bold=True))

    draw.rounded_rectangle((120, content_top + 150, W - 120, content_top + 190), radius=12, fill=(255, 255, 255, 28))
    draw.rounded_rectangle((120, content_top + 220, int(W * 0.62), content_top + 260), radius=12, fill=(255, 255, 255, 20))
    draw.rounded_rectangle((120, content_top + 290, int(W * 0.48), content_top + 330), radius=12, fill=(255, 255, 255, 16))

    block_y = content_top + 380
    for i, width in enumerate([0.34, 0.28, 0.3]):
        x1 = 120 + i * 250
        x2 = x1 + int((W - 300) * width)
        draw.rounded_rectangle((x1, block_y, x2, block_y + 150), radius=18, fill=(*accent, 55), outline=(255, 255, 255, 40))

    draw_pills(draw, pills, H - 130, accent)

    target = OUT / filename
    base.convert("RGB").save(target, "JPEG", quality=86, optimize=True)
    return target


PROJECTS = [
    {
        "file": "mirch.jpg",
        "title": "Mirch Masala",
        "subtitle": "Restaurant · WhatsApp orders",
        "emoji": "🍽️",
        "top": (58, 18, 36),
        "bottom": (18, 10, 24),
        "accent": (239, 68, 68),
        "pills": ["Menu", "Orders", "Booking"],
        "status": "Live",
        "url": "https://mirch.ai-workflows.cloud/",
    },
    {
        "file": "mirch-app.jpg",
        "title": "Mirch App Demo",
        "subtitle": "Owner dashboard · Kitchen view",
        "emoji": "📱",
        "top": (24, 36, 72),
        "bottom": (10, 14, 30),
        "accent": (59, 130, 246),
        "pills": ["Dashboard", "Kitchen", "Orders"],
        "status": "Live",
        "url": "https://mirchapp.ai-workflows.cloud/",
    },
    {
        "file": "mirch-playstore.jpg",
        "title": "Mirch Play Store",
        "subtitle": "Published Android app",
        "emoji": "▶️",
        "top": (12, 48, 36),
        "bottom": (8, 20, 18),
        "accent": (34, 197, 94),
        "pills": ["Android", "Published", "Mirch"],
        "status": "Play Store",
        "url": "https://play.google.com/store/apps/details?id=com.mirchapp",
    },
    {
        "file": "formfiller.jpg",
        "title": "AI Form Filler",
        "subtitle": "Cyber cafe automation",
        "emoji": "🤖",
        "top": (10, 34, 58),
        "bottom": (8, 12, 28),
        "accent": (34, 211, 238),
        "pills": ["OCR", "Auto-fill", "Cyber Cafe"],
        "status": "Ongoing",
        "url": "https://formfiller.ai-workflows.cloud/",
    },
    {
        "file": "bhuvan.jpg",
        "title": "Bhuvan Bhaskar Dham",
        "subtitle": "Spiritual website experience",
        "emoji": "🛕",
        "top": (74, 42, 10),
        "bottom": (24, 18, 8),
        "accent": (245, 158, 11),
        "pills": ["Events", "Gallery", "Contact"],
        "status": "Live",
        "url": "https://bhuvanbhaskardham.ai-workflows.cloud/",
    },
    {
        "file": "mast-magan.jpg",
        "title": "Mast Magan",
        "subtitle": "Brand-first business website",
        "emoji": "✨",
        "top": (56, 20, 48),
        "bottom": (16, 10, 24),
        "accent": (244, 114, 182),
        "pills": ["Brand", "Landing", "CTA"],
        "status": "Live",
        "url": "https://mast-magan.onrender.com/",
    },
    {
        "file": "galaxy-decor.jpg",
        "title": "Galaxy Decor",
        "subtitle": "Interior portfolio preview",
        "emoji": "🏠",
        "top": (42, 18, 58),
        "bottom": (14, 10, 26),
        "accent": (168, 85, 247),
        "pills": ["Gallery", "Services", "Leads"],
        "status": "Preview",
        "url": "https://galaxy-decor.onrender.com/",
    },
    {
        "file": "radiant-classes.jpg",
        "title": "Radiant Classes",
        "subtitle": "Coaching & admissions site",
        "emoji": "🎓",
        "top": (18, 42, 88),
        "bottom": (8, 14, 32),
        "accent": (37, 99, 235),
        "pills": ["Batches", "Admissions", "Contact"],
        "status": "Preview",
        "url": "https://radiant-classes.onrender.com/",
    },
]


def try_fetch_og_image(url: str) -> bytes | None:
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=20) as resp:
            html = resp.read().decode("utf-8", "ignore")
        match = re.search(r'<meta[^>]+property=["\']og:image["\'][^>]+content=["\']([^"\']+)', html, re.I)
        if not match:
            match = re.search(r'<meta[^>]+content=["\']([^"\']+)["\'][^>]+property=["\']og:image', html, re.I)
        if not match:
            return None
        image_url = match.group(1)
        if image_url.startswith("/"):
            from urllib.parse import urljoin

            image_url = urljoin(url, image_url)
        with urllib.request.urlopen(urllib.request.Request(image_url, headers={"User-Agent": "Mozilla/5.0"}), timeout=20) as img_resp:
            return img_resp.read()
    except Exception:
        return None


def save_og_as_card(filename: str, data: bytes, title: str, accent: tuple[int, int, int]) -> Path:
    shot = Image.open(__import__("io").BytesIO(data)).convert("RGB")
    shot = shot.resize((W, H), Image.Resampling.LANCZOS)
    overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
    draw = ImageDraw.Draw(overlay)
    draw.rectangle((0, H - 180, W, H), fill=(5, 5, 16, 210))
    draw.text((48, H - 130), title, fill=(255, 255, 255), font=load_font(42, bold=True))
    draw.rounded_rectangle((48, H - 58, 190, H - 18), radius=14, fill=(*accent, 220))
    draw.text((68, H - 50), "LIVE DEMO", fill=(255, 255, 255), font=load_font(18, bold=True))
    base = shot.convert("RGBA")
    base = Image.alpha_composite(base, overlay)
    target = OUT / filename
    base.convert("RGB").save(target, "JPEG", quality=86, optimize=True)
    return target


def main() -> None:
    for project in PROJECTS:
        og = try_fetch_og_image(project["url"])
        if og:
            try:
                path = save_og_as_card(project["file"], og, project["title"], project["accent"])
                print(f"og-image -> {path.name}")
                continue
            except Exception:
                pass
        path = make_card(
            project["file"],
            project["title"],
            project["subtitle"],
            project["emoji"],
            project["top"],
            project["bottom"],
            project["accent"],
            project["pills"],
            project["status"],
        )
        print(f"generated -> {path.name}")


if __name__ == "__main__":
    main()
