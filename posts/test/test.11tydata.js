const fetch = require("node-fetch");
const qs = require("query-string");
const Spotify = require("../../lib/spotify");

async function getTopArtists(username) {
  const query = {
    username,
    date: "2022-01-01",
    period: "year",
    limit: 10,
  };

  return fetch(`http://localhost:3030/charts/artists?${qs.stringify(query)}`)
    .then((response) => response.json())
    .then((data) => ({
      items: data.items,
    }));
}

async function getTopTracks(username) {
  const query = {
    username,
    date: "2022-01-01",
    period: "year",
    limit: 10,
  };

  return fetch(`http://localhost:3030/charts/tracks?${qs.stringify(query)}`)
    .then((response) => response.json())
    .then((data) => ({
      items: data.items,
    }));
}

async function getCharts(user) {
  const [topArtists, topTracks] = await Promise.all([
    getTopArtists(user),
    getTopTracks(user),
  ]);

  const spotify = new Spotify();

  const { artists } = await spotify.getArtists(
    topArtists.items.map((item) => item.spotify_id)
  );
  const topArtistChart = artists.reduce(
    (previous, current) => ({
      ...previous,
      [current.id]: current,
    }),
    {}
  );

  const { tracks } = await spotify.getTracks(
    topTracks.items.map((item) => item.spotify_id)
  );
  const tracksMap = tracks.reduce((previous, current) => {
    return {
      ...previous,
      [current.id]: current,
    };
  }, {});

  const a = topArtists.items.map((item) => {
    const images = topArtistChart[item.spotify_id].images;
    return { ...item, images };
  });
  const t = topTracks.items.map((item) => ({
    ...item,
    images: tracksMap[item.spotify_id].album.images,
  }));

  return {
    artists: a,
    tracks: t,
  };
}

module.exports = async function () {
  const [ian, fingers] = await Promise.all([
    getCharts("ian"),
    getCharts("fingersmcgee"),
  ]);

  return {
    users: {
      ian,
      fingers,
    },
  };

  // const [ian, fingers] = await Promise.all([
  //   getTopArtists("ian"),
  //   getTopArtists("fingersmcgee"),
  // ]);
  // const artistsIds = [...ian.items, ...fingers.items].map((item) => {
  //   return item.spotify_id;
  // });
  // const spotify = new Spotify();
  // const data = await spotify.getArtists(artistsIds);
  // const artists = data.artists.reduce((prev, curr) => {
  //   return {
  //     ...prev,
  //     [curr.id]: curr,
  //   };
  // }, {});

  // return {
  //   users: {
  //     ian: {
  //       artists: ian.items.map((item) => ({
  //         ...item,
  //         images: artists[item.spotify_id].images,
  //       })),
  //     },
  //     fingers: {
  //       artists: fingers.items.map((item) => ({
  //         ...item,
  //         images: artists[item.spotify_id].images,
  //       })),
  //     },
  //   },
  // };
};
