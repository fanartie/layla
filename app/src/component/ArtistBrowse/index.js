
import DropdownCountry from "../DropdownCountry";
import Layout from "../Layout";
import useArtistList from "../../hook/useArtistList";
import { Item } from "semantic-ui-react";
import ArtistListOne from "../ArtistListOne";

function ArtistBrowse() {

  return (
      <Layout>
        <DropdownCountry/>
        <ArtistList/>
      </Layout>
  );
}

export default ArtistBrowse;



function ArtistList() {

    const { artistList, isLoading, isError } = useArtistList();

    if (isError) return <div>failed to load artist list</div>
    if (isLoading) return <div>loading artist list...</div>

    console.log(artistList);

    return (
        <Item.Group divided unstackable>
            {
                artistList.map(one=>{
                    let artist = one.artist;
                    return(
                        <ArtistListOne key={artist.artist_id} artist={artist}/>
                    )
                })
            }

        </Item.Group>
    );
}