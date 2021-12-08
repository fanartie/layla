
import Layout from "../Layout";
import useArtist from "../../hook/useArtist";
import useAlbumList from "../../hook/useAlbumList";
import ArtistListOne from "../ArtistListOne";
import AlbumListOne from "../AlbumListOne";
import { Item, Segment } from 'semantic-ui-react';
import {useParams} from "react-router-dom";

function Artist() {
    return (
        <Layout>
            <ArtistInfo/>
            <AlbumList/>
        </Layout>
    );
}

export default Artist;


const ArtistInfo = () => {
    const { artist, isLoading, isError } = useArtist();
    if (isError) return <div>failed to load artist info</div>
    if (isLoading) return <div>loading artist info...</div>
    return (
        <Segment>
            <Item.Group divided>
                <ArtistListOne artist={artist} master={true}/>
            </Item.Group>
        </Segment>
    )
}


const AlbumList = () => {
    let params = useParams();
    const { albumList, isLoading, isError } = useAlbumList();
    if (isError) return <div>failed to load album list</div>
    if (isLoading) return <div>loading album list...</div>
    return (
        <Item.Group divided unstackable>
            {
                albumList.map(one=>{
                    let album = one.album;
                    return(
                        <AlbumListOne key={album.album_id} album={album} artistId={params.artistId}/>
                    )
                })
            }

        </Item.Group>
    )
}