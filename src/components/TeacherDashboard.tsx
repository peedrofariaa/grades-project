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
        const updatedRows:object[] = [];
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
        setRows(updatedRows)
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
    <table className="mt-4 w-full max-w-[1205px] mx-auto">
      <thead>
        <tr className="bg-[rgb(243,244,246)] h-14 font-medium">
          <th className="">Nome do Aluno</th>
          <th className="">Atualização</th>
          <th className="">Av. 1</th>
          <th className="">Av. 2</th>
          <th className="">Av. 3</th>
          <th className="">Av. 4</th>
          <th className="">Média Final</th>
          <th className="">Situação</th>
        </tr>
      </thead>
      <tbody>
        {rows?.map((row: any, index: any) => (
          <tr key={index}>
            <td>{row?.name}</td>
            <td>
              <div>
                <p>{row?.updated}</p>
                <span>{row?.updatedHour}</span>
              </div>
            </td>
            <td>{row?.n1}</td>
            <td>{row?.n2}</td>
            <td>{row?.n3}</td>
            <td>{row?.n4}</td>
            <td>{row?.average}</td>
            <td>
              <div>
                {row?.situation}
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DashboardProfessor;
