<template>
  <CreatingPostForm
    :createFakePost="createFakePost"
    @addNewPost="addNewPost"
  />
  <PostList
    :posts="searchedPosts"
    @deletePost="deletePost"
    @search="search"
  />
</template>

<script>

import CreatingPostForm from "@/components/post/PostCreatingForm";
import PostList from "@/components/post/PostList";
import {faker} from "@faker-js/faker";

export default {
  components: {
    CreatingPostForm,
    PostList,
    faker
  },
  data() {
    return {
      query: '',
      posts: []
    }
  },
  methods: {
    createFakePosts() {
      Array.from({length: 10}).forEach(() => {
        this.posts.push(this.createFakePost())
      })
    },
    createFakePost() {
      return {
        id: faker.database.mongodbObjectId(),
        title: faker.company.companyName(),
        body: faker.lorem.paragraph(2)
      }
    },
    addNewPost(newPost) {
      this.posts.push({...newPost})
    },
    deletePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    search(query) {
      this.query = query
    }
  },
  computed: {
    searchedPosts() {
      return this.posts.filter(post => post.title.toLowerCase().includes(this.query.toLowerCase()))
    }
  },
  mounted() {
    this.createFakePosts()
  }
}
</script>