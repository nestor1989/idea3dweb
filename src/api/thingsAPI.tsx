import axios from 'axios';

const thingsAPI = axios.create({
    baseURL : 'https://api.thingiverse.com',
    headers : {
        Authorization : 'Bearer ***'
    }
}
)

export default thingsAPI;