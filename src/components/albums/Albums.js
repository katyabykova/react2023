import React, {useEffect, useState} from 'react';
import {albumsApiService} from "../../services/albums.api.service";
import {Album} from "./Album";

const Albums = () => {

    const [albums, setAlbums] = useState([]);
    useEffect(() => {
        albumsApiService.getAll().then(({data}) => setAlbums(data))
    })

    return (
        <div>
            {
                albums.map(album => <Album key={album.id} album={album}/>)
            }
        </div>
    );
};

export {Albums};