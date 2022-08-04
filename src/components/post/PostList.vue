<template>
  <div class="my-4">
    <template v-if="posts.length > 0">
      <h3>Posts list</h3>
      <div class="row row-cols-1 row-cols-md-2 g-4 pt-4 pb-4">
        <transition-group name="post-list">
          <div class="col" v-for="post in posts" :key="post.id">
            <PostItem :post="post" @deletePost="$emit('deletePost', post)" />
          </div>
        </transition-group>
      </div>
    </template>
    <template v-else>
      <h3>Post list is empty</h3>
    </template>
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
  emits: ['deletePost']
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