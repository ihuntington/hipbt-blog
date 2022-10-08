const fetch = require("node-fetch");
const qs = require("query-string");

async function getTopArtists(username) {
  const query = {
    username,
    date: "2022-01-01",
    period: "year",
    limit: 10,
  };

  return fetch(`http://localhost:3030/charts/artists?${qs.stringify(query)}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      return {
        items: data.items,
      };
    });
}

module.exports = async function () {
  console.log("Fetching top artists for user");
  return getTopArtists("ian");
};
