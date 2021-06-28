<template>
  <div class="grid grid-cols-3 grid-flow-row gap-1">
    <button
      v-for="sign in inputField"
      :key="sign"
      class="
        px-6
        py-2
        text-3xl
        bg-gray-500
        text-gray-100
        shadow-xl
        hover:bg-highlight
      "
      @click="handleOnClick(sign)"
      :title="sign"
    >
      {{ displayValue(sign) }}
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "NumericKeyPad",
  data() {
    return {
      inputField: [7, 8, 9, 4, 5, 6, 1, 2, 3, "delete", 0, " "],
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
      this.$emit("inputNumber", value);
    },
    displayValue(value: string) {
      switch (value) {
        case "delete":
          return "⌫";
        default:
          return value;
      }
    },
    listenKeyPressEvent(e: KeyboardEvent) {
      if (["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].includes(e.key))
        this.$emit("inputNumber", parseInt(e.key));
      if (e.key === "Backspace") this.$emit("inputNumber", "delete");
    },
  },
});
</script>
