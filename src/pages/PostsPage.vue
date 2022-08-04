<template>
  <CreatingPostForm
    :createFakePost="createFakePost"
    @addNewPost="addNewPost"
  />
  <PostList :posts="posts" @deletePost="deletePost"/>
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
    }
  },
  mounted() {
    this.createFakePosts()
  }
}
</script>