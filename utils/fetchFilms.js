const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY;

async function fetchFilm (title="") {
    try {
        let response = await fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&t=${title}`);
        let film = await response.json();
        if (film.Response === 'False') {
            return null;
    }
        return film 
    } catch (error) {
        console.log('Error fetching film:', error.message);
        return null;
    }
};

module.exports = fetchFilm;