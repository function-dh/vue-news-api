<template>
  <div id="app">
    <ToolBar />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ToolBar from './components/common/ToolBar.vue'

export default Vue.extend({
  components:{
    ToolBar,
  }
})
</script>

<style lang="scss">
  @import '@/assets/scss/common';
</style>