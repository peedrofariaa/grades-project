"use client";

import { AuthContext } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import { useState, useContext } from "react";

const TeacherLogin: React.FC = () => {
  const auth = useContext(AuthContext);
  const router = useRouter();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const handleTeacherLogin = async () => {
    if (email && password) {
      const isLogged = await auth.login(email, password, "teacher");
      if (isLogged) {
        router.push("/dashboard");
      } else {
        alert("Login inválido");
      }
    }
  };

  return (
    <main className="flex flex-col items-center">
      <div className="pt-10">
        <h1 className="text-2xl font-bold mt-16 mb-16">Bem vindo Professor</h1>
      </div>
      <div className="flex flex-col mb-5">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e?.target?.value)}
          className="w-80 h-16 border-none text-lg bg-white rounded outline-none mb-5 pl-5 placeholder:text-[#6B7280]"
          placeholder="Email"
        ></input>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e?.target?.value)}
          className="w-80 h-16 border-none text-lg bg-white rounded outline-none mb-5 pl-5 placeholder:text-[#6B7280]"
          placeholder="Senha"
        ></input>
      </div>
      <div>
        <button
          onClick={handleTeacherLogin}
          className="bg-blue-700 w-80 h-14 rounded-md text-white font-bold text-xl hover:opacity-80"
        >
          Entrar
        </button>
      </div>
    </main>
  );
};

export default TeacherLogin;
