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
    return <div>Loading...</div>;
  }

  return (
    <table>
      <th>Nome do Aluno</th>
      <th>Atualização</th>
      <th>Av. 1</th>
      <th>Av. 2</th>
      <th>Av. 3</th>
      <th>Av. 4</th>
      <th>Média Final</th>
      <th>Situação</th>
    </table>
  );
};

export default DashboardProfessor;
