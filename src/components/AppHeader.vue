<template>
  <div
    class="w-screen bg-gray-700 text-gray-200 justify-between flex items-center"
  >
    <nav class="ml-6 flex flex-row space-x-6">
      <div><LockedIcon /></div>
      <div><MenuIcon /></div>
      <div><MenuArrowIcon /></div>
    </nav>
    <div class="flex flex-row items-center">
      <div
        class="
          bg-white
          h-full
          border-t-2 border-gray-700
          flex flex-row
          relative
          pt-2
        "
      >
        <avatar-icon class="m-2" />
        <div class="text-gray-800 mr-12">
          <div>{{ content.sellingLabel }}</div>
          <div>012</div>
        </div>
        <button class="absolute right-2 top-0">x</button>
      </div>
      <div class="px-6">
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
