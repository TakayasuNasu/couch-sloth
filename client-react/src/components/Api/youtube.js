import axios from 'axios';
const KEY = 'AIzaSyDbnU2A4PTv5B3IfmGji1jTF_MQcPSXQCM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})