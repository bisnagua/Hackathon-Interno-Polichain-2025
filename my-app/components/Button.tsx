'use client';

type BotaoProps = { 
  texto: string;
  aoClicar?: () => void;
  children?: React.ReactNode; 
  cor?: string;
  disabled?: boolean;
};

export default function Button({
  texto,
  aoClicar,
  children,
  cor = "bg-pink-500 text-white"
}: BotaoProps) {
  return (
    <button
      onClick={aoClicar}
      className={`${cor} flex flex-col items-center px-5 py-2 rounded hover:brightness-90 transition font-mono text-2xl`}
    >
      {children}
      <span className="mt-2">{texto}</span>
    </button>
  );
}
