import DashboardAluno from "@/components/StudentDashboard";
import logo from "@/assets/logo.png";
import Image from "next/image";

const StudentDashboard = () => {
  return (
    <body>
      <header className="flex justify-between items-center mb-8 h-28 pt-8 pb-8 px-10">
        <div className="flex gap-16">
          <Image src={logo} alt="logo"></Image>
          <div className="flex gap-11">
            <p className="font-semibold">Menu Item</p>
            <p>Menu Item</p>
            <p>Menu Item</p>
          </div>
        </div>
        <div className="flex items-center">
          <button className="bg-blue-700 text-white w-20 h-14 text-lg font-semibold rounded-md">
            Perfil
          </button>
        </div>
      </header>
      <main>
        <div className="flex justify-between mt-10 px-20">
          <h1 className="font-bold text-2xl">Minhas Notas</h1>
        </div>
        <DashboardAluno></DashboardAluno>
      </main>
    </body>
  );
};

export default StudentDashboard;
