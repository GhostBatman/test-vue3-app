<template>
  <div class="result-feature">
    <div class="result-feature__title font-tele2">
      <slot name="title"></slot>
    </div>
    <div class="result-feature__image">
      <slot name="image"></slot>
    </div>
    <div class="result-feature__action">
      <slot name="action"></slot>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>


<style scoped  lang="scss">
.result-feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 27px;

  &__title {
    font-size: 24px;
    font-weight: 400;
    line-height: 28px;
    text-align: center;

  }
}
</style>
