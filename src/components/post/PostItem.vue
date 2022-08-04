<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.body }}</p>
      <div class="d-flex justify-content-end">
        <button class="btn btn-danger" @click="deletePost">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    deletePost() {
      this.$emit('deletePost', this.post)
    }
  }
}
</script>