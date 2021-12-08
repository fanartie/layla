

import { Item } from 'semantic-ui-react'
import useArtistPhoto from "../../hook/useArtistPhoto";
import { useNavigate } from 'react-router-dom';

const ArtistListOne = props => {
    const navigate = useNavigate();

    let artist = props.artist;

    const { src } = useArtistPhoto(artist.artist_name);

    let imgSrc = src || 'https://react.semantic-ui.com/images/wireframe/image.png';

    const onClickArtistOne = () => {
        if (props.master) {
        } else {
            navigate("/artist/"+artist.artist_id)
        }
    }

    let styleProps = {
        minHeight: '120px'
    };
    if (props.master) {
    } else {
        styleProps.cursor = 'pointer'
    }

    return (
        <Item
            onClick={onClickArtistOne}
            style={styleProps}
            key={artist.artist_id}>
            <Item.Image size='tiny' src={imgSrc} avatar />

            <Item.Content>
                <Item.Header>{artist.artist_name}</Item.Header>
                {artist.artist_country.length>0 &&
                <Item.Meta>
                    <span>Country:</span>
                    <span>{artist.artist_country}</span>
                </Item.Meta>
                }
                {artist.begin_date!=='0000-00-00' && artist.begin_date &&
                <Item.Meta>
                    <span>Since:</span>
                    <span>{artist.begin_date}</span>
                </Item.Meta>
                }

                <Item.Meta>
                    <span>Rating:</span>
                    <span>{artist.artist_rating}</span>
                </Item.Meta>
            </Item.Content>
        </Item>
    );
}

export default ArtistListOne;
