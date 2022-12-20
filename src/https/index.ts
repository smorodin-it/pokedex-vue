import { parseUrlParams } from "@/utils/functions";

export const FetchConfig = {
  BaseUrl: "https://pokeapi.co/api/v2/",
  Headers: [],
};

export async function api<T>(
  url: string,
  params?: Record<string, unknown>
): Promise<T | null> {
  let urlParams: URLSearchParams | string = "";

  if (urlParams) {
    urlParams = parseUrlParams(params);
  }

  const resp = await fetch(`${FetchConfig.BaseUrl}${url}?${urlParams}`);
  if (!resp.ok) {
    throw new Error(`${resp.status} | ${resp.statusText}`);
  }
  const json: { data: T } = await resp.json();

  return json.data;
}
