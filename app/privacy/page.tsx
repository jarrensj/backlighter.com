import type { Metadata } from "next";
import { Markdown } from "@/components/markdown";
import { loadContent } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy — backlighter",
};

export default async function PrivacyPage() {
  const { markdown, email } = await loadContent("privacy");
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 py-16">
      <Markdown markdown={markdown} email={email} />
    </main>
  );
}
