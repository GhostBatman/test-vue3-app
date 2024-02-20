<template>
  <div class="home-top-feature side-indentation">
    <div class="home-top-feature__title font-stencil">
      Защита вашего телефона
    </div>
    <div class="home-top-feature__subtitle">
      Полная защита от любых повреждений за 9 рублей в день
    </div>
    <div class="home-top-feature__illustration">
      <img
          alt="user avatar"
          src="~@/assets/illustration.png">
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped  lang="scss">
.home-top-feature {
  padding: 18px 0;
  color: $dark;
  display: flex;
  flex-direction: column;
  gap: 18px;

  &__title {
    font-size: 28px;
    font-weight: 700;
    line-height: 28px;
    text-transform: uppercase;
  }

  &__subtitle {
    font-size: 14px;
    font-weight: 400;
    line-height: 18px;
  }
}
</style>
