import Link from "next/link";

const TeacherLogin = () => {
  return (
    <main>
      <div>
        <h1>Professor-Login</h1>
      </div>
      <div>
        <label>Email</label>
        <input placeholder="Email"></input>
        <label>Senha</label>
        <input placeholder="Senha"></input>
      </div>
      <div>
        <button>Log In</button>
      </div>
      <div>
        <Link href="">
          Novo aqui? <strong>Crie uma conta</strong>
        </Link>
      </div>
    </main>
  );
};

export default TeacherLogin;
