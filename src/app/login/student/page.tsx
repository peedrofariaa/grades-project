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
        <h1 className="text-2xl font-bold mt-12 mb-20">Bem vindo Aluno</h1>
      </div>
      <div className="flex flex-col mb-5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
          className="w-80 h-16 border-none text-lg bg-white rounded outline-none mb-5 pl-5 placeholder:text-black"
          placeholder="Email"
        ></input>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e?.target?.value)}
          className="w-80 h-16 border-none text-lg bg-white rounded outline-none mb-5 pl-5 placeholder:text-black"
          placeholder="Senha"
        ></input>
      </div>
      <div>
        <button
          onClick={handleStudentLogin}
          className="bg-blue-700 w-80 h-14 rounded-md text-white font-bold text-xl hover:opacity-80"
        >
          Entrar
        </button>
      </div>
    </main>
  );
};

export default StudentLogin;
