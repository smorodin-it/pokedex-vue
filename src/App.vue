<template>
  <div class="container"><RouterView /></div>
</template>

<script setup lang="ts">
import "normalize.css";
import "./assets/main.scss";
import { RouterView } from "vue-router";
</script>

<style scoped>
.container {
  min-width: 28rem;
  max-width: 122.4rem;
  width: 100%;
  height: 100%;
  margin: 0 auto;
}
</style>
