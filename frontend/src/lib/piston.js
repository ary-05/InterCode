import { compilerApi } from "../api/compiler";

export async function executeCode(language, code) {
  try {
    const data = await compilerApi.executeCode({ language, code });
    return data;
  } catch (error) {
    return {
      success: false,
      error: error.response?.data?.error || `Failed to execute code: ${error.message}`,
    };
  }
}