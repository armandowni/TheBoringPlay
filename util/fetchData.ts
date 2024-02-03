export default async function (
  url: string,
  methodFetch: "get" | "post" | "put" | "delete",
  options?: any,
  dataBody?: any
) {
  const { data }: any = await useFetch(url, {
    method: methodFetch,
    body: dataBody,
  });
  return data?._rawValue;
}
