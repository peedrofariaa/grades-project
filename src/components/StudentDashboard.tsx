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
              <div>{row?.situation}</div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DashboardAluno;
