<template>
  <div
    class="w-screen h-screen flex justify-center items-center bg-gray-800/50"
    @click.self="this.$emit('close')"
  >
    <dialog class="block bg-gray-50 w-4/6 h-64">
      <slot />
    </dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppModal",
});
</script>
