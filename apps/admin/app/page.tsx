export const dynamic = "force-dynamic";

type HealthState = {
  reachable: boolean;
  detail: string;
};

async function getHealth(apiUrl: string): Promise<HealthState> {
  try {
    const response = await fetch(`${apiUrl}/health`, {
      cache: "no-store",
      signal: AbortSignal.timeout(1500)
    });

    if (!response.ok) {
      return {
        reachable: false,
        detail: `Backend unreachable (${response.status})`
      };
    }

    return {
      reachable: true,
      detail: "Backend reachable"
    };
  } catch {
    return {
      reachable: false,
      detail: "Backend unreachable"
    };
  }
}

export default async function Home() {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";
  const health = await getHealth(apiUrl);

  return (
    <main className="grid min-h-screen place-items-center px-6 py-12">
      <section className="w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold text-emerald-700">Riplai Admin</p>
            <h1 className="mt-2 text-2xl font-bold text-gray-900">Admin scaffold</h1>
          </div>
          <span className="rounded-full bg-emerald-50 px-3 py-1 text-sm font-semibold text-emerald-700">
            3003
          </span>
        </div>
        <dl className="space-y-4 text-sm">
          <div>
            <dt className="font-semibold text-gray-900">API URL</dt>
            <dd className="mt-1 break-all text-gray-600">{apiUrl}</dd>
          </div>
          <div>
            <dt className="font-semibold text-gray-900">Health check</dt>
            <dd className={health.reachable ? "mt-1 text-green-700" : "mt-1 text-red-700"}>
              {health.detail}
            </dd>
          </div>
        </dl>
      </section>
    </main>
  );
}
