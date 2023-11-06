"use client";
import { AuthContext } from "@/context/AuthContext";
import { useApi } from "@/services/api";
import { useContext, useEffect, useState } from "react";

const DashboardAluno = () => {
  const api = useApi();
  const auth = useContext(AuthContext);
  const [rows, setRows] = useState<Array<object>>();
  //  const [isLoading, setIsLoading] = useState(true);

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

  //  if (isLoading) {
  //    return (
  //      <div className="mt-10 flex justify-center font-bold text-2xl">
  //        Loading...
  //      </div>
  //    );
  //  }

  return (
    <table className="border-spacing-2 mt-4 divide-y-8 w-full max-w-[1205px] mx-auto">
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
  );
};

export default DashboardAluno;
