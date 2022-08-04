<template>
  <div class="my-4">
    <template v-if="posts.length > 0">
      <h3>Posts list</h3>
      <div class="row row-cols-1 row-cols-md-2 g-4 pt-4 pb-4">
        <div class="col" v-for="post in posts" :key="post.id">
          <PostItem :post="post" @deletePost="$emit('deletePost', post)" />
        </div>
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
  }
}
</script>