
import axios from 'axios';

const fetchGet = async params => {

    let res = await axios.get(params.url, {
        params: params.data,
    });

    return res.data;

}

export default fetchGet