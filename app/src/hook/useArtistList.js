

import useSWR from 'swr';
import fetchGet from './fetchGet';
import config from '../config';
import { useSelector } from 'react-redux';

const useArtistList = () => {
    let currentCountry = useSelector(state => state.currentCountry) || '';

    const { data, error } = useSWR({
        url: config.musicEndpoint,
        data: {
            apiName: 'chart.artists.get',
            country: currentCountry.toLowerCase(),
            page: 1,
            page_size: 10
        }
    }, fetchGet);

    let artistList;
    if (data && data.message && data.message.body && data.message.body.artist_list) {
        artistList = data.message.body.artist_list;
    }

    return {
        artistList: artistList,
        isLoading: !error && !artistList,
        isError: error
    }
}

export default useArtistList