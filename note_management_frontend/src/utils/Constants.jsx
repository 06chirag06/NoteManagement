const backendHost = `http://localhost:8000`;

export const endpoints = {
  login: `${backendHost}/login`,
  forgetPassword: `${backendHost}/login/forgetPassword`,
  signup: `${backendHost}/signUp/Add`,
  getAllNotes: `${backendHost}/notes/getAll`,
  insertNote: `${backendHost}/notes/Add`,
  updateNotes: `${backendHost}/notes/modify`,
  deleteNotes: `${backendHost}/notes/delete`,
  getNote: `${backendHost}/notes/get`,
};
