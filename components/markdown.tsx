import { Fragment } from "react";

function linkify(text: string, email?: string) {
  if (!email || !text.includes(email)) return text;
  const parts = text.split(email);
  return parts.map((part, i) => (
    <Fragment key={i}>
      {i > 0 && (
        <a href={`mailto:${email}`} className="underline">
          {email}
        </a>
      )}
      {part}
    </Fragment>
  ));
}

export function Markdown({
  markdown,
  email,
}: {
  markdown: string;
  email?: string;
}) {
  const blocks = markdown.trim().split(/\n\n+/);
  return blocks.map((block, i) => {
    if (block.startsWith("### ")) {
      return (
        <h3 key={i} className="mt-6 font-semibold">
          {block.slice(4)}
        </h3>
      );
    }
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="mt-8 text-lg font-semibold">
          {block.slice(3)}
        </h2>
      );
    }
    if (block.startsWith("# ")) {
      return (
        <h1 key={i} className="text-2xl font-semibold">
          {block.slice(2)}
        </h1>
      );
    }
    return (
      <p key={i} className="mt-3 leading-relaxed">
        {linkify(block, email)}
      </p>
    );
  });
}
