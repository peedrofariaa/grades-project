import axios from "axios";

const api = axios.create({
  baseURL: "https://test-dev.tikal.tech",
  headers: {
    "x-api-key": "AUTH_ADMIN_CONFIG",
  },
});

export const useApi = () => ({
  validateToken: async (token: string, userType: string) => {},
  login: async (email: string, password: string, userType: string) => {
    if (userType === "teacher") {
      const res = await api
        .post("/adm/admin/login", {
          email,
          password,
        })
        .then((response) => {
          return response.data;
        })
        .catch(function (error) {
          return console.error(error);
        });
      return res;
    } else if (userType === "student") {
      const res = await api
        .post("/aluno/student/login", {
          email,
          password,
        })
        .then((response) => {
          return response.data;
        })
        .catch(function (error) {
          return console.error(error);
        });
      return res;
    }
  },
  callTeacher: async (token: string) => {
    try {
      const res = await api.get("/adm/student", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },
  callStudent: async (token: string) => {
    try {
      const res = await api.get("/aluno/score", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (err) {
      console.log(err);
    }
  },
});
