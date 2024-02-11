import { useApi } from "../../serverHandlerApi";

export default defineEventHandler(async (event) => {
  const api = useApi(useRuntimeConfig().API_URL);
  const body = await readBody(event);
  // console.log(body);
  try {
    const data = await api.post("/gamelists/addGamePLayed", body);
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
});
