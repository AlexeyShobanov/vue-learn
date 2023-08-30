<template>
  <form @submit.prevent>
    <h4>Создение поста</h4>
    <!--      Это пример организации двусторонннего связывания без использования v-model-->
    <!--      <input&ndash;&gt;-->
    <!--      v-bind:value="post.title"-->
    <!--      @input="post.title = $event.target.value"-->
    <!--      class="input"-->
    <!--      type="text"-->
    <!--      placeholder="Название"-->
    <!--    />-->
    <my-input v-model="post.title" placeholder="Название" />
    <my-input v-model="post.body" placeholder="Описание" />
    <my-button @click="createPost" class="form-btn">Создать</my-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

.form-btn {
  margin-top: 15px;
  align-self: flex-end;
}
</style>
