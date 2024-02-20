<template>
  <div class="home-feature page-feature">
    <home-top-feature />
    <home-bottom-feature />
  </div>
</template>
<script setup lang="ts">

import HomeTopFeature from '@/components/features/Home/HomeTopFeature.vue';
import HomeBottomFeature from '@/components/features/Home/HomeBottomFeature.vue';
</script>
<style scoped  lang="scss">
.home-feature {
  display: flex;
  flex-direction: column;
}
</style>
