"use client";

import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState, useContext } from "react";

const StudentLogin: React.FC = () => {
  const auth = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();

  const handleStudentLogin = async () => {
    if (email && password) {
      const isLogged = await auth.login(email, password, "student");
      if (isLogged) {
        router.push("/dashboard/student");
      } else {
        alert("Login inválido");
      }
    }
  };

  return (
    <main className="flex flex-col items-center">
      <div className="pt-10">
        <h1 className="text-3xl font-bold mb-8">Bem vindo Aluno</h1>
      </div>
      <div className="flex flex-col">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
          className="w-80 h-16 border-none text-lg bg-white rounded-2xl outline-none mb-5 pl-5 placeholder:text-black"
          placeholder="Email"
        ></input>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e?.target?.value)}
          className="w-80 h-16 border-none text-lg bg-white rounded-2xl outline-none mb-5 pl-5 placeholder:text-black"
          placeholder="Senha"
        ></input>
      </div>
      <div>
        <button
          onClick={handleStudentLogin}
          className="bg-blue-700 w-80 h-14 rounded-2xl text-white font-bold text-xl hover:opacity-80"
        >
          Entrar
        </button>
      </div>
    </main>
  );
};

export default StudentLogin;
