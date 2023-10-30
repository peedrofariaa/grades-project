"use client";
import { useEffect, useState } from "react";

type StudentScore = {
  n1: number;
  n2: number;
  n3: number;
  n4: number;
  average: number;
  situation: string;
};

const DashboardAluno = () => {
  const [studentScore, setStudentScore] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchStudentScore = async () => {
      try {
        const res = await fetch("https://test-dev.tikal.tech/aluno/score", {
          headers: {
            Authorization: "Bearer xxx",
          },
        });
        const data = await res.json();
        setStudentScore(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchStudentScore();
  }, []);

  if (isLoading) {
    return (
      <div className="mt-10 flex justify-center font-bold text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <table className="ml-20 mt-4">
      <tr className="bg-[#F3F4F6] h-14 font-medium">
        <th className="pr-28 pl-4">Av. 1</th>
        <th className="pr-28">Av. 2</th>
        <th className="pr-28">Av. 3</th>
        <th className="pr-28">Av. 4</th>
        <th className="pr-28">Média Final</th>
        <th className="pr-24">Situação</th>
      </tr>
      <tr className="bg-white">           
        <td className="pl-4">Fábio</td>
        <td>Flavio</td>
        <td>Flavio</td>
        <td>Flavio</td>
        <td>Flavio</td>
        <td>Flavio</td>
      </tr>
    </table>
  );
};

export default DashboardAluno;
