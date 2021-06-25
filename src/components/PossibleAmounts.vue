<template>
  <div class="grid gap-1 grid-cols-1">
    <button
      v-for="x in [100, 70, 65, 63, 62]"
      :key="x"
      class="px-20 py-2 bg-gray-500 text-gray-100"
      @click="handleClick(x)"
    >
      {{ convertNumberToEUR(x) }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { convertNumberToEUR } from "@/utils/CurrencyConverter";

/**
 * This is a description
 */
export default defineComponent({
  name: "PossibleAmounts",
  methods: {
    convertNumberToEUR,
    handleClick(value: number) {
      this.$emit("inputNumber", value);
    },
  },
});
</script>
