

import useSWR from 'swr';
import fetchArtistPhoto from './fetchArtistPhoto';


const useArtistPhoto = artistName => {
    const { data } = useSWR(artistName, fetchArtistPhoto);

    return {
        src: data
    }
}

export default useArtistPhoto