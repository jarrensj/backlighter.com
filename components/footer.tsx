import Link from "next/link";

export function Footer() {
  return (
    <footer className="flex items-center justify-center gap-4 p-4 text-xs text-neutral-500 sm:gap-6 sm:p-6 sm:text-sm">
      <Link href="/terms" className="hover:underline">
        Terms
      </Link>
      <Link href="/privacy" className="hover:underline">
        Privacy Policy
      </Link>
      <Link href="/support" className="hover:underline">
        Support
      </Link>
    </footer>
  );
}
