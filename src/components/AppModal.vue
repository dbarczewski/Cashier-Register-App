<template>
  <div
    class="w-screen h-screen flex justify-center items-center bg-gray-800/50"
    @click.self="this.$emit('close')"
  >
    <Dialog :open="true" class="">
      <Dialog.Overlay />

      <Dialog.Title>Deactivate account</Dialog.Title>
      <Dialog.Description>
        This will permanently deactivate your account
      </Dialog.Description>

      <p>
        Are you sure you want to deactivate your account? All of your data will
        be permanently removed. This action cannot be undone.
      </p>
    </Dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "AppModal",
});
</script>
