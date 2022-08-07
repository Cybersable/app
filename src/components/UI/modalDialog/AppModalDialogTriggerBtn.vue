<template>
  <button
    type="button"
    class="btn"
    data-bs-toggle="modal"
    :data-bs-target="'#modalDialog'"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "AppModalDialogTriggerBtn",
}
</script>