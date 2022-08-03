<template>
  <div class="container">
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
      posts: []
    }
  },
  methods: {
    createPosts() {
      Array.from({length: 10}).forEach(() => {
        this.posts.push(this.createPost())
      })
    },
    createPost() {
      return {
        id: faker.datatype.uuid(),
        title: faker.company.companyName(),
        body: faker.lorem.paragraph(2)
      }
    }
  },
  mounted() {
    this.createPosts()
  }
}

</script>