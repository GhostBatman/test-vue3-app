<template>
  <div class="form-feature page-feature side-indentation">
    <div class="form-feature__title font-tele2">
      Для активации подписки заполните форму
    </div>
    <div class="form-feature__form">
      <input-u-i
          v-model="form.name"
          placeholder="Введите имя"
          :errors="errorFields?.name"
      />
      <input-u-i
          v-model="form.email"
          placeholder="Email"
          :errors="errorFields?.email"
      />
      <input-u-i
          v-model="form.phone"
          placeholder="Введите телефон"
          mask="+7 ### ### ## ##"
          :errors="errorFields?.phone"
      />
    </div>
    <button
        class="button is-dark is-rounded"
        @click="submitForm"
        :disabled="pass"
    >
      Подключить
    </button>
  </div>
</template>

<script setup lang="ts">
import InputUI from '@/components/ui/input/InputUI.vue';
import {useFormFeature} from '@/components/features/Form/useFormFeature.ts';
import {useAsyncValidator} from '@vueuse/integrations/useAsyncValidator';

const {form, rules, submitForm} = useFormFeature();
const {pass, errorFields} = useAsyncValidator(form, rules);
</script>

<style scoped lang="scss">
.form-feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding-top: 27px;

  &__form {
    display: flex;
    flex-direction: column;
    gap: 9px;
    margin-bottom: 27px;
    width: 100%;
  }

  &__title {
    font-size: 24px;
    line-height: 24px;
    font-weight: 400;
  }
}
</style>
