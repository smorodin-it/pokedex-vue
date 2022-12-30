<template>
  <div class="view">
    <ListHeader />
    <ul class="list">
      <ListCard
        v-for="pokemon in pokemonStore.computedData"
        :key="pokemon.name"
        :pokemon="pokemon"
      />
    </ul>
    <!-- <pre>{{ pokemoList }}</pre> -->
  </div>
</template>

<script setup lang="ts">
import ListCard from "@/components/cards/ListCard.vue";
import { PokemonService } from "@/services/PokemonService";
import ListHeader from "@/components/headers/ListHeader.vue";
import { usePokemonStore } from "@/stores/PokemonStore";

const pokemonStore = usePokemonStore();

const getData = async () => {
  const resp = await PokemonService.list();

  // TODO: Implement getting data types of all fetched pokemons

  if (resp) {
    pokemonStore.initData(resp);
  }
};

getData();
</script>

<style lang="scss" scoped>
.view {
  padding: 2.4rem 1.6rem;
  background: var(--background);
  border-radius: 1.2rem;
  height: 100%;

  display: flex;
  flex-direction: column;

  .list {
    margin-top: 0.8rem;

    display: flex;
    flex-wrap: wrap;

    justify-content: center;

    gap: 0.8rem;

    overflow-y: auto;
  }
}
</style>
