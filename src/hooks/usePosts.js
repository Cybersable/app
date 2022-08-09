import {onMounted, ref} from 'vue'
import {useStore} from "vuex"

export default function usePosts({limit, page}) {
    const store = useStore()
    const nLimit = ref(limit ?? 10)
    const nPage = ref(page ?? 1)

    const fetchPosts = async() => await store.dispatch('post/getPosts', {
        page: nPage,
        limit: nLimit
    })

    onMounted(fetchPosts)

    return {
        fetchPosts
    }
}
