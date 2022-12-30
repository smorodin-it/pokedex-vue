<template>
  <li class="card">
    <div class="card-header">#{{ leadingZeros(props.pokemon.pkdxId, 3) }}</div>
    <img :src="imgUrl" :alt="props.pokemon.name" />
    <div class="card-footer">{{ firstLetterCapital(props.pokemon.name) }}</div>
  </li>
</template>

<script setup lang="ts">
import type { PokemonListModel } from "@/models/PokemonModel";
import {
  createImgUrl,
  firstLetterCapital,
  leadingZeros,
} from "@/utils/functions";

export interface ListCard {
  pokemon: PokemonListModel;
}

const props = defineProps<ListCard>();

const imgUrl = createImgUrl(props.pokemon.pkdxId);
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
      border: 0.1rem solid #c12239;
    }
    &_flying {
      border: 0.1rem solid #a891ec;
    }
    &_poison {
      border: 0.1rem solid #a43e9e;
    }
    &_ground {
      border: 0.1rem solid #dec16b;
    }
    &_rock {
      border: 0.1rem solid #b69e31;
    }
    &_bug {
      border: 0.1rem solid #a7b723;
    }
    &_ghost {
      border: 0.1rem solid #70559b;
    }
    &_steel {
      border: 0.1rem solid #b7b9d0;
    }
    &_fire {
      border: 0.1rem solid #f57d31;
    }
    &_water {
      border: 0.1rem solid #6493eb;
    }
    &_grass {
      border: 0.1rem solid #74cb48;
    }
    &_electric {
      border: 0.1rem solid #f9cf30;
    }
    &_psychic {
      border: 0.1rem solid #fb5584;
    }
    &_ice {
      border: 0.1rem solid #9ad6df;
    }
    &_dragon {
      border: 0.1rem solid #7037ff;
    }
    &_dark {
      border: 0.1rem solid #75574c;
    }
    &_fairy {
      border: 0.1rem solid #e69eac;
    }
    &_unknown {
    }
    &_shadow {
    }
    &_normal {
      border: 0.1rem solid #aaa67f;
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
