import { useApi } from "../../serverHandlerApi";

export default defineEventHandler(async () => {
  const api = useApi(useRuntimeConfig().API_URL);

  try {
    const data = await api.get("/highscorecanons/getAllData");
    // console.log(data);

    return data.Data?.map((dataHighScore: any, index: number) => ({
      ...dataHighScore,
      no: index + 1,
    }));
  } catch (error) {
    return error;
  }
});
