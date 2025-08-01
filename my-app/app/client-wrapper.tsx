'use client';

//Faz com que o componente Providers só será carregado no navegador (cliente), nunca no servidor

import dynamic from "next/dynamic";
import React from "react";

const Providers = dynamic(() => import('./provider'), {
    ssr: false,
});

export default function ClientWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    return <Providers>{children}</Providers>;
}