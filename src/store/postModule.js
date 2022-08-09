import apiRoutes from "@/api";

const postModule = {
    namespaced: true,
    state: () => ({
        posts: [],
        isLoading: false
    }),
    getters: {
        isLoading: state => state.isLoading,
        post: state => id => state.posts.find(post => post.id === id),
        posts: state => state.posts
    },
    mutations: {
        setLoading(state, isLoading) {
            state.isLoading = isLoading
        },
        addPost(state, post) {
            state.posts = [...state.posts, post]
        },
        setPosts(state, posts) {
            state.posts = [...posts]
        },
        addPosts(state, posts) {
            state.posts = [...state.posts, ...posts]
        },
        deletePost(state, {id}) {
            const del = state.posts.findIndex(post => post.id === id)
            if (del >= 0) {
                state.posts.splice(del, 1)
            }
        }
    },
    actions: {
        async getPost({commit, getters}, {id}) {
            if (getters['post'](id) === undefined) {
                commit('setLoading', true)
                const resp = await apiRoutes.post.getPost({id})
                commit('addPost', resp.data)
                commit('setLoading', false)
            }
        },
        async getPosts({commit}, {page, limit}) {
            commit('setLoading', true)
            const resp = await apiRoutes.post.getPosts(page, limit)
            page > 1
                ? commit('addPosts', resp.data)
                : commit('setPosts', resp.data)
            commit('setLoading', false)
        },
        editPost({commit}, {post}) {
            commit('deletePost', {id: post.id})
            commit('addPost', post)
        },
        deletePost({commit}, {id}) {
            commit('deletePost', {id})
        }
    }
}
export default postModule