<template>
  <div
    class="w-screen h-screen flex justify-center items-center bg-gray-800/50"
    @click.self="this.$emit('close')"
  >
    <Dialog :open="true" class="">
      <Dialog.Overlay />
      <slot />
    </Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppModal",
});
</script>
