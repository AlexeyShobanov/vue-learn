<template>
  <div class="page__wrapper">
    <div
      v-for="pageNumber in totalPage"
      :key="pageNumber"
      class="page"
      :class="{ 'current-page': page === pageNumber }"
      @click="changePageEvent(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: "my-pagination",
  props: {
    totalPage: {
      type: Number,
      required: true,
    },
    page: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePageEvent(pageNumber) {
      console.log(pageNumber);
      this.$emit("changepage", pageNumber);
    },
  },
};
</script>

<style scoped>
.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  padding: 10px;
  margin-left: 5px;
}

.current-page {
  border: 1px solid teal;
  background: aquamarine;
}
</style>
