import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

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