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
    <ul>
      <li>Nome do Aluno</li>
      <li>Atualização</li>
      <li>Av. 1</li>
      <li>Av. 2</li>
      <li>Av. 3</li>
      <li>Av. 4</li>
      <li>Média Final</li>
      <li>Situação</li>
    </ul>
  );
};

export default DashboardProfessor;
