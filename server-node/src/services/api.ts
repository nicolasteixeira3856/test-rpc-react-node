import axios from 'axios';

const api = axios.create({
    baseURL: 'https://epg-api.video.globo.com'
});

export default api;