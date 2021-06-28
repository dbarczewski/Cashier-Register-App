<template>
  <svg width="38" height="28" viewbox="0 0 38 28">
    <g fill="#FFF" fill-rule="nonzero">
      <path
        pid="0"
        d="M31.5 3h-30C.7 3 0 2.3 0 1.5S.7 0 1.5 0h30c.8 0 1.5.7 1.5 1.5S32.3 3 31.5 3z"
      />
      <path
        pid="1"
        d="M20.5 13h-19C.7 13 0 12.3 0 11.5S.7 10 1.5 10h19c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"
        opacity=".6"
      />
      <path
        pid="2"
        d="M15.5 23h-14C.7 23 0 22.3 0 21.5S.7 20 1.5 20h14c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5z"
        opacity=".3"
      />
      <path
        pid="3"
        d="M30.5 19V9c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v10h-7l8.5 8.5 8.5-8.5h-7z"
      />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuArrowIcon",
});
</script>
