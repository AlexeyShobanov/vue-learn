<template>
  <div>
    <h1>Станица с постами</h1>
    <my-input v-focus v-model="searchQuery" placeholder="Поиск..."></my-input>
    <div class="app__btns">
      <my-button>Создать пост</my-button>
      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    </div>
    <my-dialog v-model:show="dialogVisible"> </my-dialog>
    <post-list
      :posts="sortedAndSearchedPosts"
      v-if="!isPostsLoading"
    ></post-list>
    <div v-else>Идет загрузка...</div>
  </div>
</template>

<!--В секции script нужно экспортировать сам объект, описываемый в файле, по сути все остальное ситксический сахар-->
<script>
import PostList from "@/components/PostList";
import { usePosts } from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default {
  components: {
    PostList,
  },
  data() {
    return {
      dialogVisible: false,
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По содержимому" },
      ],
    };
  },
  setup(props) {
    const { posts, totalPages, isPostsLoading } = usePosts(10);

    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);

    console.log(props);

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };
  },
};
</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>
