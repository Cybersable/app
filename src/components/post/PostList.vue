<template>
  <div class="my-4">
    <div class="row row-cols-1 row-cols-md-2 g-4 my-2">
      <template v-if="posts.length > 0">
        <div class="col" v-for="post in posts" :key="post.id">
          <PostItem :post="post" />
        </div>
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
  }
}
</script>