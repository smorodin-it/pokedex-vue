<template>
  <div class="view">
    <ListHeader />
  </div>
</template>

<script setup lang="ts">
import ListHeader from "../components/headers/ListHeader.vue";
</script>

<style lang="scss" scoped>
.view {
  padding: 2.4rem 1.6rem;
  background: var(--background);
  border-radius: 1.2rem;
  height: 100%;
}
</style>
