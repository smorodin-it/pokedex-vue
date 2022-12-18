<template>
  <div class="search">
    <img :src="SearchIcon" alt="search icon" />
    <input placeholder="Search..." />
  </div>
</template>

<script setup lang="ts">
import SearchIcon from "../icons/SearchIcon.svg";
</script>

<style lang="scss" scoped>
.search {
  width: 100%;
  padding: 0.4rem 0.8rem;

  border: 0.1rem solid var(--light-gray);
  border-radius: 0.8rem;

  background: var(--white);

  display: flex;

  input {
    width: 100%;
  }
}
</style>
