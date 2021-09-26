import axios from 'axios'

const KEY = 'AIzaSyAGUU1-C-DEMbmE_hRwC9PucCnDj-6zbZQ'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    },
})
