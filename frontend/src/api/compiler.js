import axiosInstance from "../lib/axios";

export const compilerApi = {
  executeCode: async ({ language, code }) => {
    const response = await axiosInstance.post("/compiler/execute", {
      language,
      code,
    });
    return response.data;
  },
};