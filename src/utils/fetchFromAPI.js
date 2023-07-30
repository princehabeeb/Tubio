import axios from "axios";


const BASE_URL = 'https://youtube-v31.p.rapidapi.com/captions';
const options = {
    url: BASE_URL,
    params: {
      part: 'snippet',
      videoId: 'M7FIvfx5J10'
    },
    headers: {
      'X-RapidAPI-Key': 'b315aa687dmsh1413c5483c476a7p158580jsn0c0355949ee7',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };