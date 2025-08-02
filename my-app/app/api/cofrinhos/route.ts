import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// GET → Buscar cofrinhos do usuário
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const carteira = searchParams.get("owner");

  if (!carteira) {
    return NextResponse.json({ error: "Carteira não especificada." }, { status: 400 });
  }

  try {
    const carteiraLower = carteira.toLowerCase();

    const cofrinhos = await prisma.cofrinhos.findMany({
      where: {
        OR: [
          { owner: carteiraLower },
          { 
            curador: { 
              some: { 
                carteira: carteiraLower 
              } 
            } 
          }
        ]
      },
      distinct: ["address"],
      select: {
        id: true,
        address: true,
        nome: true
      }
    });

    return NextResponse.json({ cofrinhos });
  } catch (error) {
    console.error("Erro ao buscar cofrinhos:", error);
    return NextResponse.json({ error: "Erro ao buscar cofrinhos." }, { status: 500 });
  }
}

// POST → Criar novo cofrinho no banco (chamado depois do deploy)
export async function POST(req: Request) {
  const body = await req.json();
  const { nome, address, owner, curadores } = body;

  if (!nome || !address || !owner || !curadores) {
    return NextResponse.json({ error: "Parâmetros inválidos ou ausentes" }, { status: 400 });
  }

  try {
    const novoCofrinho = await prisma.cofrinhos.create({
      data: {
        address: address.toLowerCase(),
        nome,
        owner: owner.toLowerCase(),
        curador: {
          createMany: {
            data: curadores.map((c: string) => ({ carteira: c.toLowerCase() })),
          },
        },
      },
    });

    return NextResponse.json({ success: true, address: novoCofrinho.address }, { status: 200 });
  } catch (dbError) {
    console.error("Erro ao salvar cofrinho:", dbError);
    return NextResponse.json({ error: "Erro ao salvar no banco: " + String(dbError) }, { status: 500 });
  }
}