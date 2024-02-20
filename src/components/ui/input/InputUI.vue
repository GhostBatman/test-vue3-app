<template>
  <div class="input-ui">
    <div class="input-ui__inner">
      <input
          :class="{'is-danger': showError}"
          type="text"
          class="input input-ui__field"
          required
          :value="props.modelValue"
          @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
          v-maska
          :data-maska="mask"
          @keyup="onKeyup"
      >
      <label
          class="input-ui__label"
          :class="{active: modelValue}">
        {{ placeholder }}
      </label>
    </div>
    <div
        class="input-ui__error"
        v-if="showError">
      {{ errorText }}
    </div>
  </div>

</template>
<script setup lang="ts">
import {vMaska} from 'maska';
import {useInputUI} from '@/components/ui/input/useInputUI.ts';
import {ValidateError} from 'async-validator';

const props = defineProps({
  modelValue: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: 'placeholder',
  },
  mask: {
    type: String,
    default: '',
  },
  errors: {
    type: Array<ValidateError> || null,
    default: null,
  },
});


const emit = defineEmits(['update:modelValue']);
const {showError, errorText, onKeyup} = useInputUI(props);
</script>


<style scoped  lang="scss">
.input-ui {
  display: flex;
  flex-direction: column;
  gap: 9px;

  &__inner {
    position: relative;
  }

  &__label {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    transition: all 0.2s ease;
    pointer-events: none;
    color: #999;
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
  }

  &__field {
    height: 60px;
    width: 100%;
    padding: 29px 16px 9px;
  }

  &__error {
    color: $red;
    font-size: 13px;
    line-height: 18px;
    font-weight: 400;
  }
}

.input-ui__field:focus + .input-ui__label,
.input-ui__label.active {
  font-size: 13px;
  line-height: 18px;
  transform: translateY(-100%);
  color: #333; /* Color when input is focused or has value */
}
</style>
