<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination">
      <li class="page-item">
        <a class="page-link" aria-label="Previous" @click="page--">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li
        v-for="num in totalPage"
        :key="num"
        class="page-item"
      >
        <a
          class="page-link"
          @click="page=num"
          :class="{active: page === num}"
        >
          {{ num }}
        </a>
      </li>
      <li class="page-item">
        <a class="page-link" aria-label="Next" @click="page++">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppPagination",
  props: {
    page: {
      required: true
    },
    totalPage: {
      required: true
    }
  },
  emits: ['changePage'],
  watch: {
    page(newVal) {
      if (newVal > 0 && newVal <= this.totalPage)
        this.$emit('changePage', newVal)
    }
  }
}
</script>

<style scoped>

</style>