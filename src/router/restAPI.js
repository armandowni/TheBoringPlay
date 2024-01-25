const localStorage = "http://localhost:3000";
const globalStorage = process.env.VUE_APP_URL_API || localStorage;

export default {
  localStorage,
  globalStorage,
};
