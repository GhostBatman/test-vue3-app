<template>
  <div class="root-container">
    <div class="header-container">
      <header-feature />
    </div>
    <div class="page-container">
      <router-view />
    </div>
  </div>
</template>
<script setup lang="ts">
import HeaderFeature from '@/components/features/Header/HeaderFeature.vue';
</script>
<style scoped  lang="scss">
.root-container {
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100vw;
  overflow: hidden;
  background-color: white;
}
.header-container {
  width: 100%;
  height: 49px;
  flex-shrink: 0;
}
.page-container {
  display: flex;
  flex-grow: 1;
  width: 100%;
}
</style>
