import spotifyAPI from "../../../../backend/spotifyAPI";

export default async function tracksAPI(req, res) {
  const { period } = req.query;
  const validPeriods = ['short_term', 'medium_term', 'long_term'];

  if (!validPeriods.includes(period))
    res.status(405).json("Bad time period");

  let spotify = spotifyAPI(req);

  await spotify.getMyTopTracks({ 'limit': 50, 'time_range': period }).then((data) => {
    let responseData = [];
    data.body.items.forEach(track => {
      /**
       * @param track.name
       * @param track.artists
       * @param track.album
       * @param track.external_url.spotify
       */
      responseData.push({
        'name': track.name,
        'artist': track.artists[0].name,
        'album': track.album.name,
        'image': track.album.images[0].url,
        'href': track.album.external_urls.spotify
      });
    });
    res.status(200).json(responseData);
  }, () => {
    res.status(401).json("Invalid token");
  });
}
