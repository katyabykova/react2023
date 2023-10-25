import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const commentsApiService = {
    getAll: () => axiosService(urls.comments)
}

export {commentsApiService}