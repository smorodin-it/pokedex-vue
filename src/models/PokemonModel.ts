export interface PokemonListUrlParamsModel extends Record<string, unknown> {
  limit?: number;
  offset?: number;
}

export interface PokemonTypeModel {
  slot: number;
  type: {
    Name: string;
    Url: string;
  };
}

export interface PokemonListModel {
  name: string;
  pkdxId: number;
  types: PokemonTypeModel[];
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

export interface PokemonModel {
  id: number;
  name: string;
  order: number;
  types: PokemonTypeModel[];
}
