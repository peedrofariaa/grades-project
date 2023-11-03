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
      if (auth?.user) {
        const studentRes: any = await api.callStudent(auth.user?.token);
        const updatedRows: object[] = [];
        studentRes?.forEach((student: any) => {
          const score = student.score.map((el: any) => {
            let n1 = el?.n1.toFixed(2);
            let n2 = el?.n2.toFixed(2);
            let n3 = el?.n3.toFixed(2);
            let n4 = el?.n4.toFixed(2);
            let average = el?.average.toFixed(2);
            let situation = el?.situation;
            const newRow = {
              n1,
              n2,
              n3,
              n4,
              average,
              situation,
            };
            updatedRows.push(newRow);
            return newRow;
          });
        });
        setRows(updatedRows);
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
    <table className="mt-4 w-full max-w-[1205px] mx-auto">
      <thead>
        <tr className="bg-[#F3F4F6] h-14 font-medium">
          <th className="">Av. 1</th>
          <th className="">Av. 2</th>
          <th className="">Av. 3</th>
          <th className="">Av. 4</th>
          <th className="">Média Final</th>
          <th className="">Situação</th>
        </tr>
      </thead>
      <tbody>
        {rows?.map((row: any, index) => (
          <tr key={index} className="bg-white">
            <td className="pl-4">{row?.n1}</td>
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

export default DashboardAluno;
