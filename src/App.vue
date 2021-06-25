<template>
  <Header></Header>
  <Main />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "./components/AppHeader.vue";
import Main from "./components/AppMain.vue";
export default defineComponent({
  name: "App",
  components: {
    Header,
    Main,
  },
});
</script>
