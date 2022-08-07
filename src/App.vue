<template>
  <Navbar />
  <div class="container my-4">
    <router-view />
  </div>
  <AppModalDialog @approve="approveModalDialog">
    <template v-slot:title>
      {{ modalDialogTitle }}
    </template>
    <template v-slot:body>
      Are you really want to delete this post?
      {{ modalDialogBody }}
    </template>
  </AppModalDialog>
</template>

<script>
import AppModalDialog from "@/components/UI/modalDialog/AppModalDialog";
import Navbar from "@/components/Navbar";
import {mapState} from "vuex";

export default {
  name: "App",
  components: {
    Navbar,
    AppModalDialog
  },
  computed: {
    // TODO: move it to mixins or setup
    ...mapState('modalDialog', {
      modalDialogTitle: state => state.title,
      modalDialogBody: state => state.body
    })
  },
  methods: {
    // TODO: move it to mixins or setup
    approveModalDialog() {
      this.$store.dispatch('modalDialog/approve')
    }
  }

}
</script>