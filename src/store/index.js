import {createStore} from "vuex";
import postModule from "@/store/postModule";
import modalDialogModule from "@/store/modalDialogModule";

export default createStore ({
    store: {
        auth: false
    },
    getters: {
        auth: (state) => state.auth
    },
    mutations: {

    },
    actions: {

    },
    modules: {
        post: postModule,
        modalDialog: modalDialogModule
    }
})