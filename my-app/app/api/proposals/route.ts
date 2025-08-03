import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { vaultAddress, title } = await req.json();

  if (!vaultAddress || !title) {
    return NextResponse.json({ error: "Dados incompletos" }, { status: 400 });
  }

  const proposal = await prisma.proposal.create({
    data: { vaultAddress, title },
  });

  return NextResponse.json(proposal);
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const vaultAddress = searchParams.get("vaultAddress");

  if (!vaultAddress) {
    return NextResponse.json({ error: "vaultAddress não informado" }, { status: 400 });
  }

  const proposals = await prisma.proposal.findMany({
    where: { vaultAddress },
    include: { votes: true },
  });

  return NextResponse.json(proposals);
}
