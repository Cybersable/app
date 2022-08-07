<template>
  <template v-if="isLoading">
    Loading...
  </template>
  <template v-else>
    <template v-if="post">
      <h3>
        {{ post.title }}
      </h3>
      <p>
        {{ post.body }}
      </p>
    </template>
  </template>
</template>

<script>
import {mapActions, mapState} from "vuex";

export default {
  name: "PostPage",
  data() {
    return {
      id: parseInt(this.$route.params.id)
    }
  },
  methods: {
    ...mapActions('post', {
      getPost: "getPost"
    })
  },
  mounted() {
    this.getPost({id: this.id})
  },
  computed: {
    post() {
      return this.$store.getters['post/post'](this.id)
    },
    ...mapState('post', {
      postIsLoading: state => state.isLoading
    }),
    isLoading() {
      return this.postIsLoading
    }
  }
}
</script>

<style scoped>

</style>