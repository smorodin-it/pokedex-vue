<template>
  <div class="view">
    <ListHeader />
    <pre>{{ data }}</pre>
  </div>
</template>

<script setup lang="ts">
import type { PokemonListModel } from "@/models/PokemonModel";
import { PokemonService } from "@/services/PokemonService";
import { ref } from "vue";
import ListHeader from "../components/headers/ListHeader.vue";

const data = ref<PokemonListModel[]>([]);

const getData = async () => {
  const resp = await PokemonService.list();

  if (resp) {
    data.value.push(...resp.results);
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
}
</style>
