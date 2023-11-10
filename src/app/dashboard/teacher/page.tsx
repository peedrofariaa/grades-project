import DashboardProfessor from "@/components/TeacherDashboard";
import logo from '@/assets/logo.png'
import lupa from '@/assets/icon.svg'
import Image from 'next/image'

const TeacherDashboard = () => {
  return (
    <body>
      <header className="flex justify-between mb-8 h-28 pt-8 pb-8 px-10">
        <div className="flex gap-16">
          <Image src={logo} alt="logo"></Image>
          <div className="flex gap-11 pt-2">
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
          <h1 className="font-bold text-2xl">Meus Alunos</h1>
            <div className="flex relative">
              <input
                className="pl-4 w-80 h-10 rounded outline-none"
                type="text"
                placeholder="Pesquisar alunos"
              />
              <Image className="absolute top-1/4 right-4" src={lupa} alt="lupa"></Image>
            </div>
        </div>
        <DashboardProfessor></DashboardProfessor>
      </main>
    </body>
  );
};

export default TeacherDashboard;
