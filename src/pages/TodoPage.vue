<template>
  <h2 class="mb-4">
    Vue 3 App Todo Page
  </h2>
  <TodoList :todos="todos" />
  <div ref="observer" class="observer"></div>
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
        this.todos = [ ...this.todos, ...response.data]
      } catch (e) {
        alert('Error!')
      }
    }
  },
  mounted() {
    this.fetchTodoList()

    const options = {
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
      console.log('test')
      if (entries[0].isIntersecting && this.page < this.totalPage) {
        this.page++
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer)
  },
  watch: {
    page() {
      this.fetchTodoList()
    }
  }
}
</script>
