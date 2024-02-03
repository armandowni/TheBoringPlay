import { useApi } from "../../serverHandlerApi";

export default defineEventHandler(async (event) => {
  const api = useApi(useRuntimeConfig().API_URL);
  const body = await readBody(event);

  const id = body?.id;
  delete body.id;

  try {
    const data = await api.put(`/test/${id}`, body);
    // console.log(data);
    return data;
  } catch (error) {
    return error;
  }
});
