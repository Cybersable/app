<template>
  <div class="card" :class="{ 'border-success': todo.completed }">
    <div class="card-body" :class="{'text-success': todo.completed}">
      <div class="card-title">
        {{ todo.title }}
      </div>
      <div class="card-subtitle">
        Author: {{ todo.userId }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>