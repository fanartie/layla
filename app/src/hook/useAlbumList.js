

import useSWR from 'swr';
import fetchGet from './fetchGet';
import config from '../config';
import {useParams} from "react-router-dom";

const useAlbumList = () => {

    let params = useParams();

    const { data, error } = useSWR({
        url: config.musicEndpoint,
        data: {
            apiName: 'artist.albums.get',
            artist_id: params.artistId
        }
    }, fetchGet);


    let albumList;
    if (data && data.message && data.message.body && data.message.body.album_list) {
        albumList = data.message.body.album_list;
    }

    console.log(albumList);

    return {
        albumList: albumList,
        isLoading: !error && !albumList,
        isError: error
    }
}

export default useAlbumList