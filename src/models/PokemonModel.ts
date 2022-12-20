export interface PokemonListUrlParamsModel extends Record<string, unknown> {
  limit?: number;
  offset?: number;
}

export interface PokemonListModel {
  name: string;
  url: string;
}

type PokemonType =
  | "fighting"
  | "flying"
  | "poison"
  | "ground"
  | "rock"
  | "bug"
  | "ghost"
  | "steel"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "psychic"
  | "ice"
  | "dragon"
  | "dark"
  | "fairy"
  | "unknown"
  | "shadow"
  | "normal";

export interface PokemonTypeModel {
  slot: number;
  type: {
    name: PokemonType;
    url: string;
  };
}

export interface PokemonModel {
  id: number;
  name: string;
  order: number;
  types: PokemonTypeModel[];
}
