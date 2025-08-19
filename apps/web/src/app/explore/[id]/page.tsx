import Image from "next/image";

type Creator = { name: string; avatar?: string };
type NFT = { id: number; title: string; image: string; description?: string; creator: Creator };

async function getNFT(id: string): Promise<NFT | null> {
  const r = await fetch("http://localhost:3002/api/creations/explore", { cache: "no-store" });
  if (!r.ok) return null;
  const list: NFT[] = await r.json();
  return list.find((n) => String(n.id) === id) ?? null;
}

export default async function NFTPage({ params }: { params: { id: string } }) {
  const nft = await getNFT(params.id);
  if (!nft) return <div className="p-6">Not found</div>;

  return (
    <main className="mx-auto max-w-5xl px-4 py-8">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image src={nft.image} alt={nft.title} fill className="object-cover" />
        </div>
        <div>
          <h1 className="text-2xl font-semibold">{nft.title}</h1>
          <div className="mt-2 text-sm text-muted-foreground">by {nft.creator?.name}</div>
          {nft.description && <p className="mt-4 whitespace-pre-line">{nft.description}</p>}
        </div>
      </div>
    </main>
  );
}
