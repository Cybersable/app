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
          @click="setModalDialog"
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
import {mapState} from "vuex";

export default {
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
    setModalDialog() {
      this.$store.dispatch('modalDialog/setModalDialog', {
        entity: 'post',
        entityId: this.post.id,
        title: "Deleting post: " + this.post.title,
        body: "Are you really want to delete this post?"
      })
    }
  },
  computed: {
    ...mapState('modalDialog', {
      modalDialogEntity: state => state.entity,
      modalDialogEntityId: state => state.entityId,
      modalDialogApprove: state => state.approved
    })
  },
  watch: {
    modalDialogApprove(newVal) {
      if (newVal && this.modalDialogEntity === 'post') {
        this.$store.dispatch('modalDialog/disApprove')
        this.$store.dispatch('post/deletePost', {
          id: this.modalDialogEntityId
        })
      }
    }
  }
}
</script>