const TeacherDashboard = () => {
  return (
    <body>
      <header className="flex justify-between mb-8 h-28 pt-8 pb-8 px-10">
        <div className="flex flex-col items-start">
          <h1 className="text-xs font-normal">ESCOLA</h1>
          <h1 className="text-2xl font-normal">Mundial</h1>
        </div>
        <div className="flex items-center">
          <button className="bg-blue-800 text-white w-20 h-14 text-base rounded-md">
            Perfil
          </button>
        </div>
      </header>
      <main>
        <div className="flex justify-between mt-10">
          <h1>Meus Alunos</h1>
          <input className="" type="search" placeholder="Pesquisar alunos" />
        </div>
        <div>

        </div>
      </main>
    </body>
  );
};

export default TeacherDashboard;
