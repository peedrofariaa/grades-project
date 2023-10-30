"use client";

import { useState } from "react";

type LoginInfo = {
  email: string;
  password: string;
};

const TeacherLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <main className="flex flex-col items-center">
      <div className="pt-10">
        <h1 className="text-3xl font-bold mb-8">Bem vindo Professor</h1>
      </div>
      <div className="flex flex-col">
        <input
          type="email"
          value={email}
          className="w-80 h-16 border-none text-lg bg-white rounded-2xl outline-none mb-5 pl-5 placeholder:text-black"
          placeholder="Email"
        ></input>
        <input
          type="password"
          value={password}
          className="w-80 h-16 border-none text-lg bg-white rounded-2xl outline-none mb-5 pl-5 placeholder:text-black"
          placeholder="Senha"
        ></input>
      </div>
      <div>
        <button onClick={handleLogin} className="bg-blue-700 w-80 h-20 rounded-2xl text-white font-bold text-xl">
          Entrar
        </button>
      </div>
    </main>
  );
};

export default TeacherLogin;
