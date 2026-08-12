import { promises as fs } from "fs";
import path from "path";

export async function loadContent(slug: string) {
  const raw = await fs.readFile(
    path.join(process.cwd(), "content", `${slug}.md`),
    "utf8"
  );
  const email = process.env.EMAIL_ADDRESS;
  return {
    markdown: raw.replaceAll("{{EMAIL_ADDRESS}}", email ?? ""),
    email,
  };
}
