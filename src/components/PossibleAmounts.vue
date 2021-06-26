<template>
  <div class="grid gap-1 grid-cols-1">
    <button
      v-for="x in values"
      :key="x"
      class="px-20 py-2 bg-gray-500 text-gray-100"
      @click="handleClick(x)"
    >
      {{ convertNumberToEUR(x) }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { convertNumberToEUR } from "@/utils/CurrencyConverter";

export default defineComponent({
  name: "PossibleAmounts",
  props: {
    values: {
      type: Array as PropType<number[]>,
    },
  },
  methods: {
    convertNumberToEUR,
    handleClick(value: number) {
      this.$emit("inputNumber", value);
    },
  },
});
</script>
