import spotifyAPI from "../../../../backend/spotifyAPI";

export default async function artistsAPI(req, res) {
  const { period } = req.query;
  const validPeriods = ['short_term', 'medium_term', 'long_term'];

  if (!validPeriods.includes(period))
    res.status(405).json("Bad time period");

  let spotify = spotifyAPI(req);
  await spotify.getMyTopArtists({ 'limit': 50, 'time_range': period }).then((data) => {
    let responseData = [];
    data.body.items.forEach(artist => {
      /**
       * API call to Spotify
       * @param artist.name
       * @param artist.images
       * @param artist.genres
       * @param artist.external_urls.spotify
       */
      responseData.push({
        'name': artist.name,
        'image': artist.images[0].url,
        'genre': artist.genres[0],
        'href': artist.external_urls.spotify
      });
    });
    res.status(200).json(responseData);
  }, () => {
    res.status(401).json("Invalid token");
  });
}
