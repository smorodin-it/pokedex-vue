import { api } from "./../https/index";

import type { ResponsePaginated } from "./../models/ResponseModel";
import type {
  PokemonListModel,
  PokemonListUrlParamsModel,
} from "./../models/PokemonModel";

export class PokemonService {
  static list = async (
    params: PokemonListUrlParamsModel
  ): Promise<ResponsePaginated<PokemonListModel> | null> =>
    await api<ResponsePaginated<PokemonListModel>>("/pokemon", params);
}
