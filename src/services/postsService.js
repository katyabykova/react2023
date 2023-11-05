import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const postsService = {
    getByUserID:(userId)=>axiosService.get(urls.posts.base, {params:{userId}}),
    getById:(id)=>axiosService.get(urls.posts.byId(id))
}

export {postsService}