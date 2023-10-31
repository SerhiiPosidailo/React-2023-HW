const baseURL = 'https://jsonplaceholder.typicode.com'

const users = '/users'

const urls = {
    users: {
        users,
        getDetailsByUserId: (userId) => `${users}/${userId}`
    },
    posts: {
        byId: (userId) => `users/${userId}/posts`,
        getPostById: (id) => `/posts/${id}`
    },
    comments: {
        getComments: (id) => `posts/${id}/comments`
    }
}

export {
    baseURL,
    urls
}