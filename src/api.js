import axios from "axios";

const apiRoutes = {
    post: {
        getPost: ({id}) => axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`),
        getPosts: (page, limit) => axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _page: page,
                _limit: limit
            }
        })
    }
}

export default apiRoutes