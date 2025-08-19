export default function LoadingExplore() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6 h-7 w-40 animate-pulse rounded bg-neutral-800" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-3">
            <div className="aspect-square animate-pulse rounded-lg bg-neutral-800" />
            <div className="mt-3 space-y-2">
              <div className="h-4 w-24 animate-pulse rounded bg-neutral-800" />
              <div className="h-5 w-40 animate-pulse rounded bg-neutral-800" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
