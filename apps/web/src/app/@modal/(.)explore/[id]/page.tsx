import Image from "next/image";
import Modal from "../../../../components/Modal";

type Creator = { name: string; avatar?: string };
type NFT = { id: number; title: string; image: string; description?: string; creator: Creator };

async function getNFT(id: string): Promise<NFT | null> {
  const r = await fetch("http://localhost:3002/api/creations/explore", { cache: "no-store" });
  if (!r.ok) return null;
  const list: NFT[] = await r.json();
  return list.find((n) => String(n.id) === id) ?? null;
}

export default async function NFTModal({ params }: { params: { id: string } }) {
  const nft = await getNFT(params.id);
  if (!nft) return null;

  return (
    <Modal>
      <div className="grid gap-6 p-4 md:grid-cols-2 md:p-6">
        <div className="relative aspect-square overflow-hidden rounded-xl">
          <Image src={nft.image} alt={nft.title} fill className="object-cover" />
        </div>
        <div>
          <h2 className="text-xl font-semibold">{nft.title}</h2>
          <div className="mt-2 text-sm text-muted-foreground">by {nft.creator?.name}</div>
          {nft.description && <p className="mt-4 whitespace-pre-line">{nft.description}</p>}
        </div>
      </div>
    </Modal>
  );
}
