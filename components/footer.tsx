import Link from "next/link";

export function Footer() {
  const email = process.env.EMAIL_ADDRESS;
  return (
    <footer className="flex items-center justify-center gap-6 p-6 text-sm text-neutral-500">
      <Link href="/terms" className="hover:underline">
        Terms of Service
      </Link>
      {email && (
        <a href={`mailto:${email}`} className="hover:underline">
          {email}
        </a>
      )}
    </footer>
  );
}
