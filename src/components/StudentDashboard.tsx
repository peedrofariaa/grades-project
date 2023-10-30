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
    }
    fetchStudentScore();
  }, []);

  if(isLoading){
    return <div>Loading...</div>
  } 

  return(
    <ul>
        <li>Av. 1</li>
        <li>Av. 2</li>
        <li>Av. 3</li>
        <li>Av. 4</li>
        <li>Média Final</li>
        <li>Situação</li>
    </ul>
  )
};

export default DashboardAluno;
