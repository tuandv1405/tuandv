"use client";

import { useEffect, useState } from "react";

/** Types and deletes each word in turn, terminal-style. */
export default function Typer({ words, speed = 70, hold = 1400 }: { words: string[]; speed?: number; hold?: number }) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setText(words.join(" · "));
      return;
    }
    const word = words[i % words.length];
    let id: ReturnType<typeof setTimeout>;
    if (!del && text === word) id = setTimeout(() => setDel(true), hold);
    else if (del && text === "") {
      setDel(false);
      setI((n) => n + 1);
    } else {
      id = setTimeout(() => setText(del ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)), del ? speed / 2 : speed);
    }
    return () => clearTimeout(id);
  }, [text, del, i, words, speed, hold]);

  return (
    <span className="typer">
      {text}
      <span className="caret" aria-hidden>▌</span>
    </span>
  );
}
