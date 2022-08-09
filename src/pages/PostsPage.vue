<template>
  <h2>Posts List</h2>
  <template v-if="isLoading && posts.length > 0">
    Loading ...
  </template>
  <template v-else>
    <PostList :posts="posts" />
  </template>
</template>

<script>
import PostList from "@/components/post/PostList";
import usePosts from "@/hooks/usePosts";
import {mapState} from 'vuex'

export default {
  components: {
    PostList
  },
  props: {
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 10
    }
  },
  setup(props) {
    return {
      ...usePosts({
        limit: props.limit,
        page: props.page
      })
    }
  },
  computed: {
    ...mapState('post', {
      posts: state => state.posts,
      postsIsLoading: state => state.postIsLoading
    }),
    isLoading() {
      return this.postsIsLoading
    }
  }
}
</script>