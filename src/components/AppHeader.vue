<template>
  <div
    class="
      w-screen
      bg-background
      text-gray-300
      justify-between
      flex
      items-center
    "
  >
    <nav class="ml-16 flex flex-row space-x-16 my-2">
      <div><LockedIcon /></div>
      <div><MenuIcon /></div>
      <div><MenuArrowIcon /></div>
    </nav>
    <div class="flex flex-row items-center">
      <div
        class="
          bg-gray-100
          h-full
          border-t-8 border-background
          flex flex-row
          relative
          justify-center
          items-center
          pt-4
        "
      >
        <avatar-icon class="m-2 p-6" />
        <div class="text-gray-800 mr-16">
          <div>{{ content.sellingLabel }}</div>
          <div>012</div>
        </div>
        <button class="absolute right-2 top-0">x</button>
      </div>
      <div class="px-12">
        <PlusIcon />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LockedIcon from "./icons/LockedIcon.vue";
import MenuIcon from "./icons/MenuIcon.vue";
import MenuArrowIcon from "./icons/MenuArrowIcon.vue";
import PlusIcon from "./icons/PlusIcon.vue";
import AvatarIcon from "./icons/AvatarIcon.vue";
import Content from "./../../content.json";

export default defineComponent({
  name: "Header",
  components: {
    LockedIcon,
    MenuIcon,
    MenuArrowIcon,
    PlusIcon,
    AvatarIcon,
  },
  data() {
    return {
      content: Content,
    };
  },
});
</script>
