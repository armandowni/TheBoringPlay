import { useApi } from "../../serverHandlerApi";

export default defineEventHandler(async (event) => {
  const api = useApi(useRuntimeConfig().API_URL);
  const body = await readBody(event);
  
  try {
    const data = await api.post("/highscorecanons/addDataPlayer", body);
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
});
