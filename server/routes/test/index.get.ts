import { useApi } from "../../serverHandlerApi";

export default defineEventHandler(async () => {
  const api = useApi(useRuntimeConfig().API_URL);

  try {
    const data = await api.get("/test");
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
});
