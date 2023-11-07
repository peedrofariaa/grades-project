import Link from "next/link";

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-start pt-10">
        <h1 className="font-bold text-2xl mb-20">Sistema de Consulta de Notas</h1>
        <div className="flex flex-col text-xl">
          <Link className="mb-5" href="/login/student">- Entrar como <strong>Aluno</strong></Link>
          <Link href="/login/teacher">- Entrar como <strong>Professor</strong></Link>
        </div>
      </main>
  );
}
