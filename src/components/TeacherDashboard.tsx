"use client";
import { AuthContext } from "@/context/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useApi } from "@/services/api";
import { format } from "date-fns";

const DashboardProfessor = () => {
  const api = useApi();
  const auth = useContext(AuthContext);
  const [rows, setRows] = useState<Array<object>>();
  //  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleCallTeacher = async () => {
      if (auth?.user) {
        const teacherRes: any = await api.callTeacher(auth.user?.token);
        const updatedRows: object[] = [];
        teacherRes?.forEach((teacher: any) => {
          let name = teacher?.firstName + " " + teacher?.lastName;
          const score = teacher.scores.map((el: any) => {
            let updated = format(new Date(el?.updatedAt), "dd-MM-yyyy");
            let updatedHour = format(new Date(el?.updatedAt), "hh:mm");
            let n1 = el?.n1.toFixed(2);
            let n2 = el?.n2.toFixed(2);
            let n3 = el?.n3.toFixed(2);
            let n4 = el?.n4.toFixed(2);
            let average = el?.average.toFixed(2);
            let situation = el?.situation;
            const newRow = {
              updated,
              updatedHour,
              n1,
              n2,
              n3,
              n4,
              average,
              situation,
              name,
            };
            updatedRows.push(newRow);
            return newRow;
          });
        });
        setRows(updatedRows);
      }
    };
    handleCallTeacher();
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
          <tr className="bg-[rgb(243,244,246)] h-14 font-medium">
            <th className="rounded-tl-lg px-4 py-3 text-left font-semibold">Nome do Aluno</th>
            <th className="px-4 py-3 tracking-wide text-left font-semibold">Atualização</th>
            <th className="px-4 py-3 tracking-wide text-left font-semibold">Av. 1</th>
            <th className="px-4 py-3 tracking-wide text-left font-semibold">Av. 2</th>
            <th className="px-4 py-3 tracking-wide text-left font-semibold">Av. 3</th>
            <th className="px-4 py-3 tracking-wide text-left font-semibold">Av. 4</th>
            <th className="px-4 py-3 tracking-wide text-left font-semibold">Média Final</th>
            <th className="rounded-tr-lg px-4 py-3 text-left tracking-wide font-semibold">Situação</th>
          </tr>
        </thead>
        <tbody className="divide-y-8">
          {rows?.map((row: any, index: any) => (
            <tr key={index} className="bg-white">
              <td className="px-4 py-3 tracking-wide whitespace-nowrap">{row?.name}</td>
              <td className="px-4 py-3tracking-wide whitespace-nowrap">
                <div className="flex flex-col items-start justify-center">
                  <p>{row?.updated}</p>
                  <span className="text-[#9CA3AF]">{row?.updatedHour}</span>
                </div>
              </td>
              <td className="px-4 py-3 tracking-wide whitespace-nowrap">{row?.n1}</td>
              <td className="px-4 py-3 tracking-wide whitespace-nowrap">{row?.n2}</td>
              <td className="px-4 py-3 tracking-wide whitespace-nowrap">{row?.n3}</td>
              <td className="px-4 py-3 tracking-wide whitespace-nowrap">{row?.n4}</td>
              <td className="px-4 py-3 tracking-wide whitespace-nowrap">{row?.average}</td>
              <td className="px-4 py-3 tracking-wide whitespace-nowrap font-semibold">
                <div className="flex items-center justify-center h-8 w-32 rounded-full bg-green-200">{row?.situation}</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

export default DashboardProfessor;
