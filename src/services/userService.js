import {axiosService} from "./axiosService";
import {urls} from "../constants/urls";

const userService = {
    getAll:()=>axiosService.get(urls.users.base),
    byId:(id)=>axiosService.get(urls.users.byId(id))
}

export {userService}