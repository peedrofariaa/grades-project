"use client";
import { useEffect, useState } from "react";

type StudentData = {
  updatedAt: string;
  firstName: string;
  lastName: string;
  n1: number;
  n2: number;
  n3: number;
  n4: number;
  average: number;
  situation: string;
};

const DashboardProfessor = () => {
  const [studentData, setStudentData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const res = await fetch("https://test-dev.tikal.tech/adm/student", {
          headers: {
            Authorization: "Bearer xxx",
          },
        });
        const data = await res.json();
        setStudentData(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStudentData();
  }, []);

  if (isLoading) {
    return <div className="mt-10 flex justify-center font-bold text-2xl">Loading...</div>;
  }

  return (
    <table className="ml-20 mt-4">
      <tr className="bg-[#F3F4F6] h-14 font-medium">
        <th className="pr-12 pl-4">Nome do Aluno</th>
        <th className="pr-16">Atualização</th>
        <th className="pr-28">Av. 1</th>
        <th className="pr-28">Av. 2</th>
        <th className="pr-28">Av. 3</th>
        <th className="pr-28">Av. 4</th>
        <th className="pr-16">Média Final</th>
        <th className="pr-24">Situação</th>
      </tr>
      <tr className="bg-white">           
        <td className="pl-4">Fábio</td>
        <td>Fábio</td>
        <td>Flavio</td>
        <td>Flavio</td>
        <td>Flavio</td>
        <td>Flavio</td>
        <td>Flavio</td>
        <td>Flavio</td>
      </tr>
    </table>
  );
};

export default DashboardProfessor;
