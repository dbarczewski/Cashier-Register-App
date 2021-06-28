<template>
  <div class="grid gap-1 grid-cols-1">
    <button
      v-for="value in values"
      :key="value"
      class="px-20 py-2 bg-gray-500 hover:bg-highlight text-gray-100"
      @click="handleClick(value)"
    >
      {{ convertNumberToEUR(value) }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { convertNumberToEUR } from "@/utils";

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
