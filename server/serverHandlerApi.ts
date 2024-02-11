import axios from "axios";

const API_VER = "v1";

export function useApi(baseUrl: string, config?: any) {
  if (!baseUrl) throw new Error("base url is undefined");

  const api = axios.create({
    headers: { "content-type": "application/json" },
  });

  // console.log(configNuxt);

  const base_path = `${baseUrl}/api/${API_VER}`;

  const get = async (url: string, query?: string) => {
    const path = base_path + url;

    const result = await api
      .get(path)
      .then((result) => result.data)
      .catch((err) => err);

    return result;
  };
  const post = async (url: string, data: any) => {
    const path = base_path + url;

    const result = await axios
      .post(path, data)
      .then((result) => result.data)
      .catch((err) => err);

    return result;
  };
  const put = async (url: string, data: any) => {
    const path = base_path + url;

    const result = await axios
      .put(path, data)
      .then((result) => result.data)
      .catch((err) => err);

    return result;
  };
  const del = async (url: string) => {
    const path = base_path + url;
    const result = await axios
      .delete(path)
      .then((result) => result.data)
      .catch((err) => err);

    return result;
  };

  return { get, post, put, del };
}
