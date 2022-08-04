<template>
  <div class="my-4">
    <h3 class="mb-4">Posts list</h3>
    <input
        class="form-control"
        placeholder="Searching by title"
        v-model.trim="searchQuery"
    >
    <div class="row row-cols-1 row-cols-md-2 g-4 my-2">
      <template v-if="posts.length > 0">
        <transition-group name="post-list">
          <div class="col" v-for="post in posts" :key="post.id">
            <PostItem :post="post" @deletePost="$emit('deletePost', post)" />
          </div>
        </transition-group>
      </template>
      <template v-else>
        <p>Post list is empty</p>
      </template>
    </div>
  </div>
</template>

<script>
import PostItem from "@/components/post/PostItem";
export default {
  components: {PostItem},
  props: {
    posts: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      searchQuery: '',
    }
  },
  emits: ['deletePost', 'search'],
  watch: {
    searchQuery(newValue) {
      if (newValue.length > 2)
        this.$emit('search', this.searchQuery)
      else
        this.$emit('search', '')
    }
  }
}
</script>

<style>
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.3s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>