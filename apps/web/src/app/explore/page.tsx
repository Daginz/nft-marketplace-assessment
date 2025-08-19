import Image from "next/image";
import Link from "next/link";

type Creator = { name: string; avatar?: string };
type NFT = { id: number; title: string; image: string; category?: string; creator: Creator };

async function getNFTs(): Promise<NFT[]> {
  const r = await fetch("http://localhost:3002/api/creations/explore", { cache: "no-store" });
  if (!r.ok) throw new Error("Failed to fetch NFTs");
  return r.json();
}

export default async function ExplorePage() {
  const nfts = await getNFTs();

  return (
    <main className="mx-auto max-w-7xl px-4 py-8">
      <h1 className="mb-6 text-2xl font-semibold">Explore</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {nfts.map((nft) => (
          <Link
            key={nft.id}
            href={`/explore/${nft.id}`}
            className="group rounded-xl border border-neutral-800 bg-neutral-900/50 p-3 transition hover:-translate-y-0.5 hover:shadow-lg"
          >
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <Image
                src={nft.image}
                alt={nft.title}
                fill
                sizes="(max-width:768px) 100vw, (max-width:1280px) 50vw, 25vw"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={false}
              />
            </div>

            <div className="mt-3">
              <div className="text-sm text-neutral-400">{nft.creator?.name}</div>
              <div className="line-clamp-1 text-base font-medium text-neutral-100">{nft.title}</div>
              {nft.category && (
                <span className="mt-1 inline-block rounded-md bg-neutral-800 px-2 py-0.5 text-xs text-neutral-300">
                  {nft.category}
                </span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
