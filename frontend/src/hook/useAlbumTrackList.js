

import useSWR from 'swr';
import fetchGet from './fetchGet';
import config from '../config';
import {useParams} from "react-router-dom";

const useAlbumTrackList = () => {

    let params = useParams();

    const { data, error } = useSWR({
        url: config.musicEndpoint,
        data: {
            apiName: 'album.tracks.get',
            album_id: params.albumId
        }
    }, fetchGet);


    let trackList;
    if (data && data.message && data.message.body && data.message.body.track_list) {
        trackList = data.message.body.track_list;
    }

    console.log(trackList);

    return {
        trackList: trackList,
        isLoading: !error && !trackList,
        isError: error
    }
}

export default useAlbumTrackList