<template>
  <div class="row">
    <div class="col">
      <form action="" class="card">
        <div class="card-body">
          <fieldset>
            <legend>
              Create New Post
            </legend>
            <div class="mb-3">
              <label for="postTitle" class="form-label">Title</label>
              <input v-model="newPost.title" type="text" class="form-control" id="postTitle">
            </div>
            <div class="mb-3">
              <label for="postBody" class="form-label">Description</label>
              <input v-model="newPost.body" type="text" class="form-control" id="postBody">
            </div>
            <button type="button" @click="clearNewPost" class="btn btn-danger me-3">Clear</button>
            <button type="button" @click="fillFakedData" class="btn btn-primary me-3">Fill faked data</button>
            <button type="button" @click="addNewPost" class="btn btn-success">Create post</button>
          </fieldset>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

import {faker} from "@faker-js/faker";

export default {
  props: ["createFakePost"],
  data() {
    return {
      newPost: {
        id: faker.datatype.uuid(),
        title: '',
        body: ''
      }
    }
  },
  methods: {
    clearNewPost() {
      this.newPost.id = faker.database.mongodbObjectId()
      this.newPost.title = this.newPost.body = ''
    },
    fillFakedData() {
      const fakePost = this.createFakePost()
      for(const [key, val] of Object.entries(this.newPost)) {
        if (fakePost[key] !== undefined) {
          this.newPost[key] = fakePost[key]
        }
      }
    },
    addNewPost() {
      this.$emit('addNewPost', this.newPost)
      this.clearNewPost()
    }
  }
}
</script>