<template>
  <div class="navbar">
    <div @click="$router.push('/')">
      <strong> Vue 3 </strong>
    </div>
    <div class="navbar__btns">
      <my-button style="margin-right: 15px" @click="this.$router.push('/posts')"
        >Посты</my-button
      >
      <my-button
        style="margin-right: 15px"
        @click="$router.push({ path: '/about' })"
        >О проекте</my-button
      >
      <my-button @click="$router.push({ path: '/store' })">Store</my-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-navbar",
};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px grey;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin: 0 15px;
}

.navbar__btns {
  margin-left: auto;
}
</style>
