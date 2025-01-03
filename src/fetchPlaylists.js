const Spotify = require("spotify-web-api-js");
const spotify = new Spotify();


function fetchPlaylists(accessToken) {
  return new Promise((resolve, reject) => {
    spotify.getPlaylists(accessToken, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}


export default fetchPlaylists;