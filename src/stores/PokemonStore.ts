import { computed, ref } from "vue";
import { defineStore } from "pinia";
import type { PokemonListModel } from "@/models/PokemonModel";

export const usePokemonStore = defineStore("pokemonList", () => {
  const searchName = ref("");
  const data = ref<PokemonListModel[]>([]);

  const initData = (array: PokemonListModel[]): void => {
    data.value = array;
  };

  const clear = (): void => {
    initData([]);
  };

  const computedData = computed(() =>
    data.value.filter((el) => el.name.includes(searchName.value.toLowerCase()))
  );

  return { data, computedData, initData, clear, searchName };
});
