<template>
  <div class="header">HEADER</div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/runtime-core";
import { useRoute } from "vue-router";

export default defineComponent({
  setup() {
    const route = useRoute
    function getRoutequery() {
      console.log('参数', route)
    }
  }
})
</script>

<style scoped>
  .header {
    width: 100vw;
    height: 80px;
    line-height: 80px;
    font-size: 20px;
    font-weight: bold;
  }
</style>