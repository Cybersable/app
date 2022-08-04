<template>
  <h2>
    Vue 3 App Todo Page
  </h2>
  <TodoList :todos="todos" />
</template>

<script>
import TodoList from "@/components/todo/TodoList";
import axios from 'axios'
export default {
  name: "TodoPage",
  components: {TodoList},
  data() {
    return {
      todos: []
    }
  },
  methods: {
    async fetchTodoList() {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
        this.todos = [...response.data]
      } catch (e) {
        alert('Error!')
      }
    }
  },
  mounted() {
    this.fetchTodoList()
  }
}
</script>
