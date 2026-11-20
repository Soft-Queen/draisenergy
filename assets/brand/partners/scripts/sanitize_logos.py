#!/usr/bin/env python3
"""Sanitise partner SVG logos for local serving. Does not invent artwork."""

from __future__ import annotations

import re
import shutil
from pathlib import Path

ROOT = Path(__file__).resolve().parents[4]
RAW = ROOT / "assets" / "brand" / "partners" / "raw"
OUT = ROOT / "public" / "brand" / "partners"

DANGEROUS = re.compile(
    r"<(script|foreignObject|iframe|embed|object|use)\b[^>]*>.*?</\1>",
    re.I | re.S,
)
DANGEROUS_SELF = re.compile(
    r"<(script|foreignObject|iframe|embed|object)\b[^/]*/>",
    re.I,
)
EVENT_ATTR = re.compile(r"\s+on[a-z]+\s*=\s*(\"[^\"]*\"|'[^']*')", re.I)
XLINK_HREF_EXTERNAL = re.compile(
    r"\s+(?:xlink:)?href\s*=\s*[\"']https?://[^\"']+[\"']",
    re.I,
)
XMLNS_JUNK = re.compile(
    r'\s+xmlns:(?:dc|cc|rdf|sodipodi|inkscape|svg|i|ns\d+)\s*=\s*"[^"]*"',
    re.I,
)
PREFIXED_ATTR = re.compile(
    r'\s+(?:inkscape|sodipodi|dc|cc|rdf):[A-Za-z0-9_-]+\s*=\s*("[^"]*"|\'[^\']*\')',
    re.I,
)
METADATA = re.compile(r"<metadata\b[^>]*>.*?</metadata>", re.I | re.S)
SODIPODI_EL = re.compile(r"<sodipodi:[^>]+(?:/>|>.*?</sodipodi:[^>]+>)", re.I | re.S)
INKSCAPE_EL = re.compile(r"<inkscape:[^>]+(?:/>|>.*?</inkscape:[^>]+>)", re.I | re.S)
COMMENTS = re.compile(r"<!--.*?-->", re.S)
XML_DECL = re.compile(r"<\?xml[^>]*\?>\s*", re.I)
DOCTYPE = re.compile(r"<!DOCTYPE[^>]*>\s*", re.I | re.S)


def sanitize_svg(content: str) -> str:
    content = XML_DECL.sub("", content)
    content = DOCTYPE.sub("", content)
    content = COMMENTS.sub("", content)
    content = METADATA.sub("", content)
    content = DANGEROUS.sub("", content)
    content = DANGEROUS_SELF.sub("", content)
    content = EVENT_ATTR.sub("", content)
    content = XLINK_HREF_EXTERNAL.sub("", content)
    content = XMLNS_JUNK.sub("", content)
    content = PREFIXED_ATTR.sub("", content)
    content = SODIPODI_EL.sub("", content)
    content = INKSCAPE_EL.sub("", content)
    # Collapse excessive blank lines
    content = re.sub(r"\n{3,}", "\n\n", content).strip() + "\n"
    return content


def mct_dark_variant(content: str) -> str:
    """Official site ships a white mark; dark fills for light backgrounds."""
    content = content.replace("mct-logo-white", "mct-logo-dark")
    content = content.replace("fill:#fff", "fill:#191b1e")
    content = content.replace("fill:#FFF", "fill:#191b1e")
    content = content.replace("fill:#dadada", "fill:#50565e")
    return content


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)

    mapping = {
        "siemens.svg": "siemens.svg",
        "schneider-electric.svg": "schneider-electric.svg",
        "eaton.svg": "eaton.svg",
        "legrand.svg": "legrand.svg",
        "philips.svg": "philips.svg",
        "assa-abloy.svg": "assa-abloy.svg",
        "raychem.svg": "raychem.svg",
        "elsewedy-electric.svg": "elsewedy-electric.svg",
        "mct-brattberg.svg": "mct-brattberg.svg",
        "cmp-products.svg": "cmp-products.svg",
        "innomotics.svg": "innomotics.svg",
        "eland-cables.png": "eland-cables.png",
    }

    for src_name, dest_name in mapping.items():
        src = RAW / src_name
        dest = OUT / dest_name
        if not src.exists():
            raise SystemExit(f"Missing raw asset: {src}")

        if src.suffix.lower() == ".svg":
            text = src.read_text(encoding="utf-8", errors="replace")
            if "<svg" not in text.lower():
                raise SystemExit(f"Not a valid SVG: {src}")
            text = sanitize_svg(text)
            if src_name == "mct-brattberg.svg":
                # Preserve official white mark for dark surfaces…
                light_dest = OUT / "mct-brattberg-on-dark.svg"
                light_dest.write_text(text, encoding="utf-8")
                print(f"svg  {light_dest.name} ({light_dest.stat().st_size} bytes)")
                # …and a charcoal mark for light surfaces.
                text = mct_dark_variant(text)
            dest.write_text(text, encoding="utf-8")
            print(f"svg  {dest_name} ({dest.stat().st_size} bytes)")
        else:
            shutil.copy2(src, dest)
            print(f"bin  {dest_name} ({dest.stat().st_size} bytes)")

    allowed = set(mapping.values()) | {
        "README.md",
        "SOURCES.md",
        "mct-brattberg-on-dark.svg",
    }
    for path in OUT.iterdir():
        if path.name not in allowed and path.is_file():
            path.unlink()
            print(f"removed stray {path.name}")


if __name__ == "__main__":
    main()
