import { BacklightNote } from "@/components/backlight-note";

export default function Home() {
  const appStoreUrl = process.env.APP_STORE_URL;
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-2">
      backlighter
      {appStoreUrl && (
        <a href={appStoreUrl} className="hover:underline">
          download the iOS app
        </a>
      )}
      <BacklightNote />
    </main>
  );
}
