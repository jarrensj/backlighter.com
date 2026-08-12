"use client";

import { useEffect, useState } from "react";

const HEX_RE = /^#(?:[0-9a-f]{3}|[0-9a-f]{6})$/i;

function toSixDigit(hex: string) {
  if (hex.length !== 4) return hex;
  const [r, g, b] = hex.slice(1);
  return `#${r}${r}${g}${g}${b}${b}`;
}

export function BacklightNote() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState("#ffffff");
  const [hex, setHex] = useState("#ffffff");

  useEffect(() => {
    document.body.style.backgroundColor = color;
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [color]);

  const apply = (value: string) => {
    setHex(value);
    if (HEX_RE.test(value)) setColor(toSixDigit(value));
  };

  return (
    <div className="flex flex-col items-center gap-2 px-6">
      <p className="text-center text-sm text-neutral-400">
        this page is intentionally{" "}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="underline"
        >
          white
        </button>{" "}
        so you can visit this on your pc as a backlight
      </p>
      {open && (
        <div className="flex items-center gap-2 text-sm text-neutral-400">
          <input
            type="color"
            value={color}
            onChange={(e) => apply(e.target.value)}
            aria-label="pick a background color"
            className="h-8 w-8 cursor-pointer"
          />
          <input
            type="text"
            value={hex}
            onChange={(e) => apply(e.target.value)}
            aria-label="hex color value"
            className="w-24 rounded border border-neutral-300 px-2 py-1 text-center"
          />
        </div>
      )}
    </div>
  );
}
