<template>
  <li class="card">
    <div class="card-header">#{{ leadingZeros(id, 3) }}</div>
    <img :src="imgUrl" :alt="props.pokemon.name" />
    <div class="card-footer">{{ firstLetterCapital(props.pokemon.name) }}</div>
  </li>
</template>

<script setup lang="ts">
import type { PokemonListModel } from "@/models/PokemonModel";
import {
  createImgUrl,
  getIdFromUrl,
  firstLetterCapital,
  leadingZeros,
} from "@/utils/functions";

export interface ListCard {
  pokemon: PokemonListModel;
}

const props = defineProps<ListCard>();

const id = getIdFromUrl(props.pokemon.url);
const imgUrl = createImgUrl(id);
</script>

<style lang="scss" scoped>
.card {
  min-width: 10.4rem;
  max-width: 10.4rem;
  width: 100%;
  height: 11.2rem;
  padding: 0.4rem 0.8rem;

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  border: 0.1rem solid red;
  border-radius: 0.8rem;

  display: flex;
  flex-direction: column;

  &-color {
    &_fighting {
    }
    &_flying {
    }
    &_poison {
    }
    &_ground {
    }
    &_rock {
    }
    &_bug {
    }
    &_ghost {
    }
    &_steel {
    }
    &_fire {
    }
    &_water {
    }
    &_grass {
    }
    &_electric {
    }
    &_psychic {
    }
    &_ice {
    }
    &_dragon {
    }
    &_dark {
    }
    &_fairy {
    }
    &_unknown {
    }
    &_shadow {
    }
    &_normal {
    }
  }

  &-header {
    font: var(--x-small) / 1.5 Poppins;
    text-align: right;
  }

  img {
    margin-left: auto;
    margin-right: auto;

    max-width: 7.2rem;
    max-height: 7.2rem;
    height: 100%;
  }

  &-footer {
    margin: 0 -0.8rem -0.4rem -0.8rem;

    /* width: 100%; */
    max-height: 2.2rem;
    height: 100%;

    font: var(--small) / 1.5 Poppins;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 0 0 0.8rem 0.8rem;

    background: red;

    color: var(--white);
  }
}
</style>
