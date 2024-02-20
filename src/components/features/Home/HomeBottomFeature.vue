<template>
  <div class="home-bottom-feature">
    <div class="home-bottom-feature__text-block">
      <div class="home-bottom-feature__title font-tele2">
        Полная защита от любых повреждений за 9 рублей в день
      </div>
      <div class="home-bottom-feature__subtitle">
        <span>– Разбился экран</span>
        <span>– Залили водой</span>
        <span>– Треснул корпус</span>
        <span>– Сломался от замыкания</span>
      </div>
    </div>
    <div class="home-bottom-feature__action">
      <router-link
          :to="{name: 'FormView'}"
          class="button is-light is-rounded">
        Подключить
      </router-link>
    </div>
    <div class="home-bottom-feature__offer-text">
      Нажимая кнопку «Подключить»,<br />
      вы соглашаетесь с условиями оферты
    </div>
  </div>
</template>
<script setup lang="ts">

</script>


<style scoped  lang="scss">
.home-bottom-feature {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 27px 21px 82px;
  background-color: $dark;
  background-image: url("@/assets/footer-background.svg");
  background-repeat: no-repeat;
  background-position: bottom center;
  background-size: contain;

  &__action {
    margin-bottom: 8px;
  }

  &__offer-text {
    text-align: center;
    color: $gray;
    font-size: 13px;
    line-height: 22px;
    font-weight: 400;
  }

  &__text-block {
    display: flex;
    flex-direction: column;
    gap: 18px;
    font-weight: 400;
    color: $light;
    margin-bottom: 27px;
  }

  &__title {
    font-size: 28px;
    line-height: 36px;
  }

  &__subtitle {
    font-size: 16px;
    line-height: 22px;
    display: flex;
    flex-direction: column;
  }
}
</style>
