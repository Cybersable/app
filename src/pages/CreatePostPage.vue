<template>
  <PostCreatingForm
      :createFakePost="createFakePost"
      @addNewPost="addNewPost"
  />
</template>

<script>
import {faker} from "@faker-js/faker";
import PostCreatingForm from "@/components/post/PostCreatingForm";

export default {
  components: {
    PostCreatingForm,
    faker
  },
  methods: {
    createFakePost() {
      return {
        id: faker.database.mongodbObjectId(),
        title: faker.company.companyName(),
        body: faker.lorem.paragraph(2)
      }
    },
    addNewPost(newPost) {
      // this.posts.push({...newPost})
    },
  }
}
</script>