<template>
  <div class="header-feature side-indentation">
    <router-link
        to="/"
        class="header-feature__logo">
      <img
          alt="site logo"
          src="~@/assets/logo.svg">
    </router-link>
    <div class="header-feature__user">
      <img
          alt="user avatar"
          src="~@/assets/user-avatar.svg">
    </div>
  </div>
</template>

<script setup>

</script>

<style
    scoped
    lang="scss">
.header-feature {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__user {
    width: 27px;
    height: 27px;
  }
}
</style>
