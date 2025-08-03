import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { proposalId, wallet } = await req.json();

  if (!proposalId || !wallet) {
    return NextResponse.json({ error: "Dados incompletos" }, { status: 400 });
  }

  try {
    const vote = await prisma.proposalVote.create({
      data: { proposalId, wallet },
    });

    return NextResponse.json(vote);
  } catch (error) {
    return NextResponse.json({ error: "Já votou ou erro de banco" }, { status: 400 });
  }
}
