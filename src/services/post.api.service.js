import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const postApiService = {
    getById: (postId) => axiosService(urls.posts.postId(postId))
}

export {postApiService}