<template>
  <h2>Posts List</h2>
  <template v-if="isLoading">
    Loading ...
  </template>
  <template v-else>
    <PostList :posts="posts" />
  </template>
</template>

<script>
import PostList from "@/components/post/PostList";
import {mapState} from 'vuex'

export default {
  components: {
    PostList
  },
  data() {
    return {
      query: '',
      page: 1,
      limit: 10
    }
  },
  methods: {
    getPosts() {
      this.$store.dispatch('post/getPosts', {page: this.page, limit: this.limit})
    }
  },
  computed: {
    ...mapState('post', {
      postsIsLoading: state => state.isLoading,
      posts: state => state.posts
    }),
    isLoading() {
      return this.postsIsLoading
    }
  },
  mounted() {
    this.getPosts()
  }
}
</script>