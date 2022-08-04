<template>
  <button
    type="button"
    class="btn"
    data-bs-toggle="modal"
    :data-bs-target="'#' + id"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppModalDialogTriggerBtn",
  props: {
    id: {
      type: String,
      required: true
    }
  }
}
</script>