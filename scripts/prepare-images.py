#!/usr/bin/env python3
"""Derive additional editorial stills from the generated photography set."""

from __future__ import annotations

import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageOps

SRC = Path("/workspace/artifacts/imagine_images")
DST = Path("/workspace/public/images")

FILES = {
    "hero": "e0c41c5f-47ee-476e-8199-46a972988662.jpg",
    "atlas": "cb5b1eeb-dd3a-49b4-8627-b3b2d28fa416.jpg",
    "mira": "62d7e99b-5cb1-436b-98d0-472ccb2d947e.jpg",
    "jonah": "6118205f-24a0-4650-a2e9-9e8833d485eb.jpg",
    "aya": "e68b31c5-42c5-46c0-9f41-44baa89f57e6.jpg",
    "leo": "efc8f1f8-4827-4776-a48b-05b6a1649933.jpg",
    "sable": "51fd7133-348d-4ca6-a773-77f8f2cabff5.jpg",
    "rafi": "c51a6bd8-7288-4d11-859c-fd1883c9e5ee.jpg",
    "elena": "855f7b05-e54e-4d51-a5ee-8c7e81f67e68.jpg",
    "kai": "ea4e3d44-f8e0-4162-b858-ded1d6012974.jpg",
}


def open_img(key: str) -> Image.Image:
    return Image.open(SRC / FILES[key]).convert("RGB")


def save(img: Image.Image, rel: str, quality: int = 88) -> None:
    path = DST / rel
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, "JPEG", quality=quality, optimize=True, progressive=True)
    print(f"wrote {path} {img.size}")


def crop_box(img: Image.Image, left: float, top: float, right: float, bottom: float) -> Image.Image:
    w, h = img.size
    return img.crop((int(w * left), int(h * top), int(w * right), int(h * bottom)))


def to_ratio(img: Image.Image, ratio: float, focus=(0.5, 0.42)) -> Image.Image:
    w, h = img.size
    current = w / h
    if current > ratio:
        nw = int(h * ratio)
        cx = int(w * focus[0])
        left = max(0, min(w - nw, cx - nw // 2))
        return img.crop((left, 0, left + nw, h))
    nh = int(w / ratio)
    cy = int(h * focus[1])
    top = max(0, min(h - nh, cy - nh // 2))
    return img.crop((0, top, w, top + nh))


def grade(img: Image.Image, warmth: float = 1.06, contrast: float = 1.08, sat: float = 0.92) -> Image.Image:
    img = ImageEnhance.Color(img).enhance(sat)
    img = ImageEnhance.Contrast(img).enhance(contrast)
    img = ImageEnhance.Brightness(img).enhance(0.98)
    r, g, b = img.split()
    r = ImageEnhance.Brightness(r).enhance(warmth)
    b = ImageEnhance.Brightness(b).enhance(2 - warmth)
    return Image.merge("RGB", (r, g, b))


def grain_overlay(size: tuple[int, int], amount: int = 18) -> Image.Image:
    noise = Image.effect_noise(size, amount).convert("L")
    return noise


def main() -> None:
    for d in [
        "portraits",
        "dwellings",
        "neighborhoods",
        "hearths",
        "keepsakes",
        "sparks",
        "textures",
    ]:
        (DST / d).mkdir(parents=True, exist_ok=True)

    hero = open_img("hero")
    atlas = open_img("atlas")

    save(grade(hero), "hero.jpg", 90)
    save(grade(atlas, 1.04, 1.05, 0.95), "atlas.jpg", 90)

    # Atmosphere crops of the doorway
    save(to_ratio(hero, 16 / 9, (0.55, 0.5)), "hearths/threshold.jpg")
    save(to_ratio(hero, 1, (0.52, 0.48)), "portraits/you.jpg")
    save(to_ratio(hero, 3 / 2, (0.6, 0.52)), "dwellings/you.jpg")

    people = ["mira", "jonah", "aya", "leo", "sable", "rafi", "elena", "kai"]
    focuses = {
        "mira": (0.48, 0.38),
        "jonah": (0.5, 0.36),
        "aya": (0.52, 0.4),
        "leo": (0.5, 0.42),
        "sable": (0.5, 0.38),
        "rafi": (0.48, 0.35),
        "elena": (0.5, 0.36),
        "kai": (0.5, 0.4),
    }
    for p in people:
        img = open_img(p)
        save(grade(img), f"portraits/{p}.jpg", 90)
        cover = to_ratio(img, 3 / 2, focuses[p])
        save(grade(cover, 1.05, 1.06, 0.9), f"dwellings/{p}.jpg")
        # Spark detail — tighter, more environmental
        detail = to_ratio(img, 4 / 5, (0.5, 0.62))
        save(grade(detail, 1.08, 1.1, 0.85), f"sparks/{p}-1.jpg")
        detail2 = to_ratio(img, 1, (0.72, 0.55))
        save(grade(detail2, 1.04, 1.12, 0.8), f"sparks/{p}-2.jpg")

    # Neighborhood crops from the atlas (regions of the peninsula)
    neigh = {
        "meadow-edge": (0.02, 0.48, 0.48, 0.98),
        "conservatory": (0.18, 0.18, 0.52, 0.62),
        "hearth-grain": (0.42, 0.28, 0.78, 0.78),
        "night-terrace": (0.52, 0.04, 0.98, 0.48),
    }
    for name, box in neigh.items():
        crop = crop_box(atlas, *box)
        crop = to_ratio(crop, 16 / 9, (0.5, 0.5))
        save(grade(crop, 1.05, 1.08, 0.93), f"neighborhoods/{name}.jpg")

    # Hearth stills from hero + atlas
    save(grade(to_ratio(hero, 16 / 9, (0.4, 0.55)), 1.12, 1.1, 0.88), "hearths/night-bread.jpg")
    save(grade(to_ratio(atlas, 16 / 9, (0.3, 0.7)), 1.02, 1.05, 0.9), "hearths/walk.jpg")
    save(grade(to_ratio(open_img("sable"), 16 / 9, (0.5, 0.55)), 0.98, 1.08, 0.75), "hearths/letters.jpg")
    save(grade(to_ratio(open_img("mira"), 16 / 9, (0.45, 0.5)), 1.06, 1.06, 0.9), "hearths/kept.jpg")
    save(grade(to_ratio(open_img("kai"), 16 / 9, (0.5, 0.48)), 1.08, 1.04, 0.92), "hearths/steam.jpg")
    save(grade(to_ratio(open_img("rafi"), 16 / 9, (0.5, 0.3)), 1.0, 1.12, 0.85), "hearths/looking-up.jpg")

    # Keepsake squares — object-forward crops
    keep_specs = [
        ("stone", "jonah", (0.35, 0.7)),
        ("bowl", "mira", (0.25, 0.72)),
        ("crumb", "aya", (0.7, 0.7)),
        ("leaf", "leo", (0.8, 0.55)),
        ("type", "sable", (0.7, 0.65)),
        ("star", "rafi", (0.2, 0.3)),
        ("silver", "elena", (0.75, 0.45)),
        ("steam", "kai", (0.55, 0.55)),
        ("key", "hero", (0.35, 0.7)),
        ("thread", "mira", (0.8, 0.4)),
        ("shell", "atlas", (0.25, 0.85)),
        ("page", "sable", (0.3, 0.5)),
    ]
    for name, src_key, focus in keep_specs:
        img = hero if src_key == "hero" else atlas if src_key == "atlas" else open_img(src_key)
        sq = to_ratio(img, 1, focus)
        sq = sq.resize((900, 900), Image.Resampling.LANCZOS)
        save(grade(sq, 1.07, 1.14, 0.82), f"keepsakes/{name}.jpg")

    # Soft paper texture + film grain
    paper = Image.new("RGB", (1600, 1000), (244, 239, 230))
    n = Image.effect_noise((1600, 1000), 12).convert("L")
    paper = ImageEnhance.Contrast(
        Image.composite(paper, ImageOps.colorize(n, (228, 220, 208), (250, 246, 238)), n)
    ).enhance(0.95)
    paper.save(DST / "textures/paper.jpg", "JPEG", quality=80)
    grain = Image.effect_noise((1200, 800), 22).convert("L")
    grain.save(DST / "textures/grain.png")
    print("textures written")


if __name__ == "__main__":
    main()
