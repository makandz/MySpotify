import spotifyAPI from "../../../backend/spotifyAPI";

export default async function tracksAPI(req, res) {
  let spotify = spotifyAPI(req);

  await spotify.getMyRecentlyPlayedTracks({ 'limit': 50 }).then((data) => {
    let responseData = [];
    data.body.items.forEach(track => {
      /**
       * @param track.track.name
       * @param track.track.artists
       * @param track.track.album
       * @param track.track.external_url.spotify
       */
      responseData.push({
        'name': track.track.name,
        'artist': track.track.artists[0].name,
        'album': track.track.album.name,
        'image': track.track.album.images[0].url,
        'href': track.track.album.external_urls.spotify
      });
    });
    res.status(200).json(responseData);
  }, () => {
    res.status(401).json("Invalid token");
  });
}