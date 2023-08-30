<template>
  <div class="app">
    <post-form @create="createPost"></post-form>
    <post-list :posts="posts" @remove="removePost"></post-list>
  </div>
</template>

<!--В секции script нужно экспортировать сам объект, описываемый в файле, по сути все остальное ситксический сахар-->
<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Javascript 1", body: "Описание поста 1" },
        { id: 2, title: "Javascript 2", body: "Описание поста 2" },
        { id: 3, title: "Javascript 3", body: "Описание поста 3" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  padding: 15px;
}
</style>
