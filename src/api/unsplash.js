import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 820dbdbb1028b107cde45e1932b569d2425117e10290343603d2f6b252a63627'
    }
})