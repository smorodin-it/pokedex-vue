export const parseUrlParams = (params: unknown): URLSearchParams => {
  const requestParams = new URLSearchParams();
  if (params) {
    for (const [key, value] of Object.entries(
      params as Record<string, string | number>
    )) {
      if (value || value === "" || value === 0) {
        requestParams.append(key, String(value));
      }
    }
  }

  return requestParams;
};

export const getIdFromUrl = (url: string): number => {
  const array = url.split("/");

  return Number(array[array.length - 2]);
};

export const createImgUrl = (pokemonId: number): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemonId}.svg`;

export const firstLetterCapital = (string: string): string =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const leadingZeros = (number: number, size: number): string => {
  let numStr = String(number);
  while (numStr.length < size) numStr = "0" + numStr;
  return numStr;
};
