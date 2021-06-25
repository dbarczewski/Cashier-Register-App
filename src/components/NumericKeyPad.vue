<template>
  <div class="grid grid-cols-3 grid-flow-row gap-1">
    <button
      v-for="x in inputField"
      :key="x"
      class="px-6 py-2 text-3xl bg-gray-500 text-gray-100"
      @click="handleOnClick(x)"
    >
      {{ x }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NumericKeyPad",
  data() {
    return {
      inputField: [1, 2, 3, 4, 5, 6, 7, 8, 9, "<", 0, " "],
    };
  },
  mounted() {
    window.addEventListener("keydown", this.listenKeyPressEvent);
  },
  unmounted() {
    window.removeEventListener("keydown", this.listenKeyPressEvent);
  },
  methods: {
    handleOnClick(value: string | number) {
      console.log(value);
      this.$emit("inputNumber", value);
    },
    listenKeyPressEvent(e: KeyboardEvent) {
      if (["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(e.key))
        this.$emit("inputNumber", e.key);
      if (e.key === "Backspace") this.$emit("inputNumber", "<");
    },
  },
});
</script>
