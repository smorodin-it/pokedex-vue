<template>
  <header>
    <nav>
      <img :src="PokeballIcon" alt="pokeball icon" />
      <h1 class="title">Pokédex</h1>
      <div class="sort">
        <span>#</span>
        <img :src="ArrowDownIcon" alt="sort icon" />
      </div>
    </nav>
    <SearchInput />
  </header>
</template>

<script setup lang="ts">
import PokeballIcon from "../icons/Pokeball.svg";
import ArrowDownIcon from "../icons/ArrowDown.svg";
import SearchInput from "../inputs/SearchInput.vue";
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  margin-bottom: 0.8rem;
  padding: 0.4rem 0.8rem;

  display: flex;
  align-items: center;
  gap: 1.6rem;

  .title {
    flex-grow: 1;

    font: 700 var(--title) / 1.3 "Poppins";
  }

  .sort {
    display: flex;
    align-items: center;
    gap: 0.2rem;
    cursor: pointer;

    span {
      /* font: 700 var(--small) / 1.2; */
      font-weight: 500;
      line-height: 1.2;
    }
  }
}
</style>
