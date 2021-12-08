import albumArt from 'album-art';

const fetchArtistPhoto = async name => {

    return await new Promise(res=>{
        let src = 'https://react.semantic-ui.com/images/wireframe/image.png';

        try {
            albumArt( name, (err, url)=>{
                if (err) {
                } else {
                    src=url;
                }
                //console.log('src=',src);
                res(src);
            })
        } catch(e) {
            res(src);
        }


    });

}

export default fetchArtistPhoto