import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const albumsApiService = {
    getAll: () => axiosService(urls.albums)
}

export {albumsApiService}