<template>
  <div class="fail-feature side-indentation page-feature">
    <result-feature>
      <template #title>
        Что-то пошло<br /> не так
      </template>
      <template #image>
        <img
            src="@/assets/fail.png"
            alt="success">
      </template>
      <template #action>
        <router-link
            :to="{name: 'FormView'}"
            class="button is-rounded is-dark">
          Вернуться назад
        </router-link>
      </template>
    </result-feature>
  </div>

</template>
<script setup lang="ts">
import ResultFeature from '@/components/features/Result/ResultFeature.vue';
</script>


<style scoped  lang="scss">
.fail-feature {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
</style>
