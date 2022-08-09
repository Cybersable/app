import {mapState} from "vuex";

export default {
    methods: {
        setModalDialog({entity, entityId, title, action}) {
            this.$store.dispatch('modalDialog/setModalDialog', {
                entity: entity,
                entityId: entityId,
                title: "Deleting post: " + title,
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
                this.modalDialogApprovedAction()
            }
        }
    }
}