const modalDialogModule = {
    namespaced:true,
    state: () => ({
        entityId: 0,
        entity: '',
        title: '',
        body: '',
        approved: false
    }),
    mutations: {
        setModalDialogState(state, {title, body, entityId, entity}) {
            state.title = title,
            state.body = body,
            state.entity = entity
            state.entityId = entityId
            state.approved = false
        },
        setApprove(state, {approved}) {
            state.approved = approved
        }
    },
    actions: {
        setModalDialog({commit}, {title, body, entity, entityId}) {
            commit('setModalDialogState', {title, body, entity, entityId})
        },
        approve({commit}) {
            commit('setApprove', {approved: true})
        },
        disApprove({commit}) {
            commit('setApprove', {approved: false})
        }
    }
}

export default modalDialogModule