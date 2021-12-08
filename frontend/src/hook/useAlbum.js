

import useSWR from 'swr';
import fetchGet from './fetchGet';
import config from '../config';
import {useParams} from "react-router-dom";

const useAlbum = () => {

    let params = useParams();

    const { data, error } = useSWR({
        url: config.musicEndpoint,
        data: {
            apiName: 'album.get',
            album_id: params.albumId,
        }
    }, fetchGet);

    let album;
    if (data && data.message && data.message.body && data.message.body.album) {
        album = data.message.body.album;
    }

    return {
        album: album,
        isLoading: !error && !album,
        isError: error
    }
}

export default useAlbum