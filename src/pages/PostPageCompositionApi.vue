<template>
  <div>
    <h1>Станица с постами</h1>
    <h1>{{ likes }}</h1>
    <my-button @click="addLike">Add Like</my-button>
    <!--    <my-input v-focus v-model="searchQuery" placeholder="Поиск..."></my-input>-->
    <!--    <div class="app__btns">-->
    <!--      <my-button @click="showDialog">Создать пост</my-button>-->
    <!--      <my-select v-model="selectedSort" :options="sortOptions"></my-select>-->
    <!--    </div>-->
    <!--    <my-dialog v-model:show="dialogVisible">-->
    <!--      <post-form @create="createPost"></post-form>-->
    <!--    </my-dialog>-->
    <!--    <post-list-->
    <!--      :posts="sortedAndSearchedPosts"-->
    <!--      @remove="removePost"-->
    <!--      v-if="!isPostsLoading"-->
    <!--    ></post-list>-->
    <!--    <div v-else>Идет загрузка...</div>-->
    <!--    &lt;!&ndash;    <div ref="observer" class="observer"></div>&ndash;&gt;-->
    <!--    <div v-intersection="loadMorePosts" class="observer"></div>-->
  </div>
</template>

<!--В секции script нужно экспортировать сам объект, описываемый в файле, по сути все остальное ситксический сахар-->
<script>
// import PostForm from "@/components/PostForm";
// import PostList from "@/components/PostList";
import { ref } from "vue";

export default {
  components: {
    // PostList,
    // PostForm,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержанию" },
      ],
    };
  },
  methods: {},
  mounted() {},
  computed: {},
  setup(props) {
    const likes = ref(0);

    const addLike = () => {
      likes.value += 1;
    };

    console.log(props);
    return { likes, addLike };
  },
};
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}

.observer {
  height: 10px;
  /*background: teal;*/
}
</style>
