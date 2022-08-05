<template>
  <h2 class="mb-4">
    Vue 3 App Todo Page
  </h2>
  <div class="d-flex justify-content-center">
    <AppPagination :page="page" :totalPage="totalPage" @changePage="changePage"/>
  </div>
  <TodoList :todos="todos" />
  <div class="d-flex justify-content-center">
    <AppPagination :page="page" :totalPage="totalPage" @changePage="changePage"/>
  </div>
</template>

<script>
import TodoList from "@/components/todo/TodoList";
import axios from 'axios'
import AppPagination from "@/components/UI/AppPagination";
export default {
  name: "TodoPage",
  components: {AppPagination, TodoList},
  data() {
    return {
      todos: [],
      page: 1,
      limit: 15,
      totalPage: 0
    }
  },
  methods: {
    async fetchTodoList() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        })
        this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
        this.todos = [...response.data]
      } catch (e) {
        alert('Error!')
      }
    },
    changePage(page) {
      this.page = page
      this.fetchTodoList()
    }
  },
  mounted() {
    this.fetchTodoList()
  }
}
</script>
