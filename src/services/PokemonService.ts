import { api } from "./../https/index";

import type {
  PokemonListModel,
  PokemonListUrlParamsModel,
} from "./../models/PokemonModel";

export class PokemonService {
  static list = async (
    params?: PokemonListUrlParamsModel
  ): Promise<PokemonListModel[] | null> =>
    // TODO: Implement pagination
    // api<ResponsePaginated<PokemonListModel>>(`/pokemon?limit=1154`, params);
    api<PokemonListModel[]>(`/list`, params);
}
