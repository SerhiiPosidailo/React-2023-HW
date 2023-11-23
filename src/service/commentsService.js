import {apiService} from "./apiService";
import {comments} from "../constants/urls";

class CommentsService {
    getAll() {
        return apiService.get(comments)
    }
}

export const commentsService = new CommentsService()