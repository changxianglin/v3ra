<template>
  <div>
    <layout-header />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutHeader from './header.vue'

export default defineComponent({
  components: {
    LayoutHeader,
  }
})
</script>