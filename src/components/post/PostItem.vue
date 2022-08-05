<template>
  <div class="card" @click="openPost">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.body }}</p>
      <div class="d-flex justify-content-end">
        <AppModalDialogTriggerBtn
          :id="'id' + post.id"
          :class="'btn-danger'"
        >
          Delete
        </AppModalDialogTriggerBtn>
      </div>
    </div>
  </div>
  <AppModalDialog :id="'id' + post.id" @approve="deletePost">
    <template v-slot:title>
      Deleting post: {{ post.title }}
    </template>
    <template v-slot:body>
      Are you really want to delete this post?
    </template>
  </AppModalDialog>
</template>

<script>
import AppModalDialogTriggerBtn from "@/components/UI/modalDialog/AppModalDialogTriggerBtn";
import AppModalDialog from "@/components/UI/modalDialog/AppModalDialog";
export default {
  components: {
    AppModalDialogTriggerBtn,
    AppModalDialog
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  emits: ['deletePost'],
  methods: {
    deletePost() {
      this.$emit('deletePost', this.post)
    },
    openPost() {
      this.$router.push({name: 'post', params: {id: this.post.id}})
    }
  }
}
</script>