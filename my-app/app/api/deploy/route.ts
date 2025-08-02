import { exec } from "child_process";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const body = await req.json();
  const { nome, meta, dias, modo, curadores, owner } = body;

  if (!nome || !meta || !dias || modo === undefined || !curadores || !owner) {
    return NextResponse.json({ error: "Parâmetros inválidos ou ausentes" }, { status: 400 });
  }

  const cmd = `npx hardhat run scripts/deploy.cjs --network localhost "${nome}" ${meta} ${dias} ${modo} ${curadores.length}`;

  return new Promise((resolve) => {
    exec(cmd, async (err, stdout, stderr) => {
      if (err) {
        resolve(NextResponse.json({ error: stderr || err.message }, { status: 500 }));
        return;
      }

      const match = stdout.match(/Cofrinho deployado em: (0x[a-fA-F0-9]{40})/);
      const address = match?.[1];

      if (!address) {
        resolve(NextResponse.json({ error: "Endereço não encontrado na saída do deploy" }, { status: 500 }));
        return;
      }

      try {
        // Salva o cofrinho no banco
        const novoCofrinho = await prisma.cofrinho.create({
          data: {
            address: address.toLowerCase(),
            nome,
            owner: owner.toLowerCase(),
            curadores: {
              createMany: {
                data: curadores.map((c: string) => ({ carteira: c.toLowerCase() })),
              },
            },
          },
        });

        resolve(NextResponse.json({ address: novoCofrinho.address }, { status: 200 }));
      } catch (dbError) {
        resolve(NextResponse.json({ error: "Erro ao salvar no banco: " + String(dbError) }, { status: 500 }));
      }
    });
  });
}