# Dashboard - Escola

Sistema de notas com perfis de aluno e professor, com rotas protegidas e dashboards distintos.​

---

## Comandos para executar o projeto

### npm install

Instala as dependências.

### npm run dev

Inicia a aplicação localmente.

---

## Rotas

### /

É a página inicial (HOME), que dá a opção do usuário fazer login, como aluno ou como professor.

### /login/student

Página para o estudante fazer o seu login.

### /login/teacher

Página para o professor fazer o seu login.

### /dashboard/student

Página que só será acessada quando o estudante concluir o login, nessa página o estudante terá acesso as suas notas.

### /dashboard/teacher

Página que só será acessada quando o professor concluir o login, nessa página o professor terá acesso as notas dos seus alunos.

---

##Decisões de arquitetura

Roteamento client-side (ex.: React Router) para isolar contextos por perfil.​

Mock de autenticação e dados para foco na UI/fluxo.​

Componentização de tabelas e formulários para reuso.

---

##Tecnologias

Stack web SPA (ex.: React + Vite) e CSS utilitário/opcional.

---

## Contato

Para dúvidas, sugestões ou feedback, estou disponível!

---

> Desenvolvido por: Pedro Faria  
> Contato: [pedrofariagaldino@gmail.com] / [https://www.linkedin.com/in/peedrofariaa/]
