import Link from "next/link";

export default function Home() {
  return (
      <main className="flex flex-col items-center justify-start pt-10">
        <h1 className="font-bold text-3xl mb-12">Sistema de Consulta de Notas</h1>
        <div className="flex flex-col">
          <Link className="mb-5" href="/login/student">- Login como <strong>Aluno</strong></Link>
          <Link href="/login/teacher">- Login como <strong>Professor</strong></Link>
        </div>
      </main>
  );
}
