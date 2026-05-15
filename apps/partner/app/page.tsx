export default async function HomePage() {
  let online = false;
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080"}/health`,
      { cache: "no-store", signal: AbortSignal.timeout(2000) },
    );
    online = res.ok;
  } catch {
    online = false;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-50">
      <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-xl font-bold">riplai — Partner</h1>
        <span className={online ? "text-brand-600" : "text-red-600"}>
          {online ? "Backend online ✓" : "Backend tidak terjangkau"}
        </span>
      </div>
    </main>
  );
}
