<template>
  <div class="container">
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
    <div class="row row-cols-1 row-cols-md-2 g-4 pt-4 pb-4">
      <div class="col" v-for="post in posts">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{ post.title }}</h5>
            <p class="card-text">{{ post.body }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { faker } from '@faker-js/faker'

export default {
  name: "App",
  components: {
    faker
  },
  data() {
    return {
      newPost: {
        id: 0,
        title: '',
        body: ''
      },
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
    fillFakedData() {
      const fakePost = this.createFakePost()
      for(const [key, val] of Object.entries(this.newPost)) {
        if (fakePost[key] !== undefined) {
          this.newPost[key] = fakePost[key]
        }
      }
    },
    addNewPost() {
      if (this.newPost.id === 0) {
        this.newPost.id = faker.datatype.uuid()
      }
      this.posts.push({ ...this.newPost})
      this.clearNewPost()
    },
    clearNewPost() {
      this.newPost.id = 0
      this.newPost.title = this.newPost.body = ''
    }
  },
  mounted() {
    this.createFakePosts()
  }
}

</script>