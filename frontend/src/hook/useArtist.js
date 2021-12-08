

import useSWR from 'swr';
import fetchGet from './fetchGet';
import config from '../config';
import {useParams} from "react-router-dom";

const useArtist = () => {

    let params = useParams();

    const { data, error } = useSWR({
        url: config.musicEndpoint,
        data: {
            apiName: 'artist.get',
            artist_id: params.artistId,
        }
    }, fetchGet);

    let artist;
    if (data && data.message && data.message.body && data.message.body.artist) {
        artist = data.message.body.artist;
    }

    return {
        artist: artist,
        isLoading: !error && !artist,
        isError: error
    }
}

export default useArtist