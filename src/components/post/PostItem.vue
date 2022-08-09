<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.body }}</p>
      <div class="d-flex justify-content-between">
        <button class="btn btn-primary" @click="openPost">
          Open
        </button>
        <AppModalDialogTriggerBtn
          @click="setModalDialogProps"
          :class="'btn-danger'"
        >
          Delete
        </AppModalDialogTriggerBtn>
      </div>
    </div>
  </div>
</template>

<script>
import AppModalDialogTriggerBtn from "@/components/UI/modalDialog/AppModalDialogTriggerBtn";
import modalDialogMixin from "@/mixins/modalDialogMixin";

export default {
  mixins: [modalDialogMixin],
  components: {
    AppModalDialogTriggerBtn
  },
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    openPost() {
      this.$router.push({name: 'post', params: {id: this.post.id}})
    },
    setModalDialogProps() {
      this.setModalDialog({
        entity: 'post',
        entityId: this.post.id,
        title: this.post.title,
        action: 'delete'
      })
    },
    modalDialogApprovedAction() {
      this.$store.dispatch('post/deletePost', {
        id: this.post.id
      })
    }
  }
}
</script>