<template>
  <div
    class="modal fade"
    id="modalDialog"
    tabindex="-1"
    aria-labelledby="modalDialogLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="modalDialogLabel">
            <slot name="title"></slot>
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="$emit('approve')"
          >
            Approve
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppModalDialog",
  emits: ['approve']
}
</script>