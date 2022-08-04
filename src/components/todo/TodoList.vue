<template>
  <div>
    <template v-if="todos.length > 0">
      <h3 class="my-4">Todo list</h3>
      <select
          name=""
          id=""
          v-model="selectedSort"
          class="form-select">
        <option
          v-for="option in sortOptions"
          :key="option.value"
          :value="option.value"
        >
          {{ option.name }}
        </option>
      </select>
      <div class="my-4" v-for="todo in todos" :key="todo.id">
        <TodoItem  :todo="todo" />
      </div>
    </template>
    <template v-else>
      Todo list is empty
    </template>
  </div>
</template>

<script>
import TodoItem from "@/components/todo/TodoItem";
export default {
  name: "TodoList",
  components: {TodoItem},
  data() {
    return {
      selectedSort: '',
      sortOptions: [
        { value: '', name: "Not chosen"},
        { value: 'id', name: "Identification number"},
        { value: 'title', name: "Title"},
        { value: 'completed', name: "Completed"},
        { value: 'userId', name: "Author"}
      ]
    }
  },
  props: {
    todos: {
      type: Object,
      required: true
    }
  },
  watch: {
    selectedSort(newValue) {
      this.todos.sort((todo1, todo2) => {
        return todo1[this.selectedSort].toString()?.localeCompare(todo2[this.selectedSort].toString())
      })
    }
  }
}
</script>