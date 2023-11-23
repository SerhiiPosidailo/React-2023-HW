import {apiService} from "./apiService";
import {posts} from "../constants/urls";

class PostsService {
    getAll() {
        return apiService.get(posts)
    }
}

export const postsService = new PostsService()