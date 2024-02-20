<template>
  <div class="success-feature side-indentation page-feature">
    <result-feature>
      <template #title>
        Поздравляем, теперь ваш телефон защищен
      </template>
      <template #image>
        <img
            src="@/assets/succes.png"
            alt="success">
      </template>
      <template #action>
        <router-link
            to="/"
            class="button is-rounded is-dark">
          Перейти в личный кабинет
        </router-link>
      </template>
    </result-feature>
  </div>

</template>
<script setup lang="ts">
import ResultFeature from '@/components/features/Result/ResultFeature.vue';
</script>

<style scoped  lang="scss">
.success-feature {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
