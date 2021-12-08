
import Layout from "../Layout";

import {Item, Label, Segment, Button, Icon} from "semantic-ui-react";
import ArtistListOne from "../ArtistListOne";
import AlbumListOne from "../AlbumListOne";
import useArtist from "../../hook/useArtist";
import useAlbum from "../../hook/useAlbum";
import useAlbumTrackList from "../../hook/useAlbumTrackList";
import React from "react";

function Album() {

    return (
        <Layout>
            <ArtistInfo/>
            <AlbumInfo/>
            <TrackList/>
        </Layout>
    );
}

export default Album;


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

const AlbumInfo = () => {
    const { album, isLoading, isError } = useAlbum();
    if (isError) return <div>failed to load album info</div>
    if (isLoading) return <div>loading album info...</div>
    return (
        <Segment>
            <Item.Group divided>
                <AlbumListOne album={album} master={true}/>
            </Item.Group>
        </Segment>
    )
}

const TrackList = () => {
    const { trackList, isLoading, isError } = useAlbumTrackList();
    if (isError) return <div>failed to load track list</div>
    if (isLoading) return <div>loading track list...</div>
    return (
        <Item.Group divided unstackable>
            {
                trackList.map((one,idx)=>{
                    let track = one.track;
                    return(
                        <TrackListOne key={track.track_id} track={track} idx={idx} />
                    )
                })
            }

        </Item.Group>
    )
}


const TrackListOne = props => {

    let track = props.track;

    let genreList = [];
    if (track.primary_genres && track.primary_genres.music_genre_list) {
        track.primary_genres.music_genre_list.forEach(i=>{
            if (i.music_genre && i.music_genre.music_genre_name) {
                genreList.push(i.music_genre.music_genre_name)
            }
        })
    }

    const onClickShare = () => {
        window.open(track.track_share_url, '_blank');
    }

    return (
        <Item>
            <Item.Content>
                <Item.Header>{props.idx+1}. {track.track_name}</Item.Header>
                <Item.Meta>
                    <span>Rating:</span>
                    <span>{track.track_rating}</span>
                </Item.Meta>
                {genreList.length>0 &&
                <Item.Extra>
                    {genreList.map(genreName=>{
                        return (
                            <Label key={new Date().getTime() + Math.random(10)}>{genreName}</Label>
                        )
                    })}
                </Item.Extra>
                }
                <Item.Extra>
                    <Button onClick={onClickShare} primary floated='right'>
                        Share
                        <Icon name='right chevron' />
                    </Button>
                </Item.Extra>
            </Item.Content>
        </Item>
    );
}