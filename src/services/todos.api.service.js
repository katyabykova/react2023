import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const todosApiService = {
    getAll: () => axiosService.get(urls.todos)
}

export {todosApiService}