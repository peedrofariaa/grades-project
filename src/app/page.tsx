import Link from "next/link";

export default function Home() {
  return (
      <div>
        <h1 className="">Sistema de Consulta de Notas</h1>
        <Link href="/login/student">Login como Aluno</Link>
        <Link href="/login/teacher">Login como Professor</Link>
      </div>
  );
}
