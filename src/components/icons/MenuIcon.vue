<template>
  <svg width="28" height="28" viewbox="0 0 28 28">
    <g fill="#FDFEFF" fill-rule="nonzero">
      <circle pid="0" cx="4" cy="4" r="4" />
      <circle pid="1" opacity=".9" cx="14" cy="4" r="4" />
      <circle pid="2" opacity=".8" cx="24" cy="4" r="4" />
      <circle pid="3" opacity=".7" cx="4" cy="14" r="4" />
      <circle pid="4" opacity=".6" cx="14" cy="14" r="4" />
      <circle pid="5" opacity=".5" cx="24" cy="14" r="4" />
      <circle pid="6" opacity=".4" cx="4" cy="24" r="4" />
      <circle pid="7" opacity=".3" cx="14" cy="24" r="4" />
      <circle pid="8" opacity=".2" cx="24" cy="24" r="4" />
    </g>
  </svg>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuIcon",
});
</script>
