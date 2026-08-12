export default function Home() {
  const appStoreUrl = process.env.APP_STORE_URL;
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-semibold tracking-tight">backlighter</h1>
      {appStoreUrl && (
        <a
          href={appStoreUrl}
          className="text-lg text-neutral-500 hover:underline"
        >
          download the iOS app
        </a>
      )}
    </main>
  );
}
