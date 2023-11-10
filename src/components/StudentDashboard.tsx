"use client";
import { AuthContext } from "@/context/AuthContext";
import { useApi } from "@/services/api";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/assets/logo.png";

const DashboardAluno = () => {
  const api = useApi();
  const auth = useContext(AuthContext);
  const [rows, setRows] = useState<Array<object>>();

  useEffect(() => {
    const handleCallStudent = async () => {
      if (auth.user) {
        const studentRes: any = await api.callStudent(auth.user?.token);

        studentRes?.scores.map((score: any) => {
          let n1 = score?.n1.toFixed(2);
          let n2 = score?.n2.toFixed(2);
          let n3 = score?.n3.toFixed(2);
          let n4 = score?.n4.toFixed(2);
          let average = score?.average.toFixed(2);
          let situation = score?.situation;

          return setRows([
            ...(rows ?? []),
            {
              n1,
              n2,
              n3,
              n4,
              average,
              situation,
            },
          ]);
        });
      }
    };

    handleCallStudent();
  }, []);

  return (
    <body>
      <header className="flex justify-between items-center mb-8 h-28 pt-8 pb-8 px-10">
        <div className="flex gap-16">
          <Image src={logo} alt="logo"></Image>
          <div className="flex gap-11">
            <p className="font-semibold">Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
          </div>
        </div>
        <div className="flex items-center">
          <button className="bg-blue-700 text-white w-20 h-14 text-lg font-semibold rounded-md">
            Perfil
          </button>
        </div>
      </header>
      <main>
        <div className="flex justify-between mt-10 px-20">
          <h1 className="font-bold text-2xl">Minhas Notas</h1>
        </div>
        <table className="border-spacing-2 mt-4 divide-y-8 w-full max-w-[1210px] mx-auto">
          <thead>
            <tr className="bg-[#F3F4F6] h-14 font-medium">
              <th className="rounded-tl-lg px-4 py-3 text-left font-semibold">
                Av. 1
              </th>
              <th className="px-4 py-3 tracking-wide text-left font-semibold">
                Av. 2
              </th>
              <th className="px-4 py-3 tracking-wide text-left font-semibold">
                Av. 3
              </th>
              <th className="px-4 py-3 tracking-wide text-left font-semibold">
                Av. 4
              </th>
              <th className="px-4 py-3 tracking-wide text-left font-semibold">
                Média Final
              </th>
              <th className="rounded-tr-lg px-4 py-3 text-left tracking-wide font-semibold">
                Situação
              </th>
            </tr>
          </thead>
          <tbody className="divide-y-8">
            {rows?.map((row: any, index) => (
              <tr key={index} className="bg-white">
                <td className="px-4 py-3 tracking-wide whitespace-nowrap">
                  {row?.n1}
                </td>
                <td className="px-4 py-3 tracking-wide whitespace-nowrap">
                  {row?.n2}
                </td>
                <td className="px-4 py-3 tracking-wide whitespace-nowrap">
                  {row?.n3}
                </td>
                <td className="px-4 py-3 tracking-wide whitespace-nowrap">
                  {row?.n4}
                </td>
                <td className="px-4 py-3 tracking-wide whitespace-nowrap">
                  {row?.average}
                </td>
                <td className="px-4 py-3 tracking-wide whitespace-nowrap">
                  <div className="flex items-center justify-center h-8 w-32 rounded-full bg-green-200">
                    {row?.situation}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </body>
  );
};

export default DashboardAluno;
