<template>
  <CreatingPostForm
    :createFakePost="createFakePost"
    @addNewPost="addNewPost"
  />
  <PostList :posts="posts"/>
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
        id: faker.datatype.uuid(),
        title: faker.company.companyName(),
        body: faker.lorem.paragraph(2)
      }
    },
    addNewPost(newPost) {
      this.posts.push({...newPost})
    }
  },
  mounted() {
    this.createFakePosts()
  }
}
</script>