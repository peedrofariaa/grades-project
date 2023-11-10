"use client";
import { useContext } from "react";
import DashboardAluno from "../../components/StudentDashboard";
import DashboardProfessor from "../../components/TeacherDashboard";
import { AuthContext } from "@/context/AuthContext";

const Dashboard = () => {
  const auth = useContext(AuthContext);

  return (
    <div>
      {auth.user?.userType === "teacher" ? (
        <DashboardProfessor />
      ) : (
        <DashboardAluno />
      )}
    </div>
  );
};

export default Dashboard;
