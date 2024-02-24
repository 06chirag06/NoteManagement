const backendHost = `https://inline-note-management.onrender.com`;
const frontendHost = `https://65da4208a23aec000859a2c1--tiny-mochi-9ffbbb.netlify.app/`;

export const endpoints = {
  login: `${backendHost}/login`,
  forgetPassword: `${backendHost}/login/forgetPassword`,
  signup: `${backendHost}/signUp/Add`,
  getAllNotes: `${backendHost}/notes/getAll`,
  insertNote: `${backendHost}/notes/Add`,
  updateNotes: `${backendHost}/notes/modify`,
  deleteNotes: `${backendHost}/notes/delete`,
  getNote: `${backendHost}/notes/get`,
  resetPassword: `${backendHost}/login/resetpassword`,

  forgotPassword: `${frontendHost}/forgotpassword`,
};
