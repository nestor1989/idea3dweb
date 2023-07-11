import axios from 'axios';

const thingsAPI = axios.create({
    baseURL : 'https://api.thingiverse.com',
    headers : {
        Authorization : 'Bearer 7a75d2e90e63619c17a9ddc68b06980b'
    }
}
)

export default thingsAPI;