
import React from 'react';
import { Item, Label} from 'semantic-ui-react'
import useArtistPhoto from "../../hook/useArtistPhoto";
import {useNavigate} from "react-router-dom";

const AlbumListOne = props => {

    const navigate = useNavigate();

    let album = props.album;
    let albumId = album.album_id;
    let artistId = props.artistId;

    const { src } = useArtistPhoto(album.album_name);

    let imgSrc = src || 'https://react.semantic-ui.com/images/wireframe/image.png';

    const onClickAlbumListOne = () => {
        if (props.master) {
        } else {
            navigate("/album/"+artistId+'/'+albumId)
        }
    }

    let styleProps = {};
    if (props.master) {
    } else {
        styleProps = {
            cursor:'pointer'
        }
    }

    let genreList = [];
    if (album.primary_genres && album.primary_genres.music_genre_list) {
        album.primary_genres.music_genre_list.forEach(i=>{
            if (i.music_genre && i.music_genre.music_genre_name) {
                genreList.push(i.music_genre.music_genre_name)
            }
        })
    }




    return (
        <Item
            onClick={onClickAlbumListOne}
            style={styleProps}
            key={album.album_id}>
            <Item.Image size='tiny' src={imgSrc} />

            <Item.Content>
                <Item.Header>{album.album_name}</Item.Header>
                { album.album_release_date &&
                <Item.Meta>
                    <span>Released:</span>
                    <span>{album.album_release_date}</span>
                </Item.Meta>
                }

                <Item.Meta>
                    <span>Rating:</span>
                    <span>{album.album_rating}</span>
                </Item.Meta>
                {album.album_copyright &&
                <Item.Meta>
                    <span>Copyright:</span>
                    <span>{album.album_copyright}</span>
                </Item.Meta>
                }


                {genreList.length>0 &&
                <Item.Extra>
                    {genreList.map(genreName=>{
                        return (
                            <Label key={new Date().getTime() + Math.random(10)}>{genreName}</Label>
                    )
                    })}
                </Item.Extra>
                }


            </Item.Content>
        </Item>
    );
}

export default AlbumListOne;
