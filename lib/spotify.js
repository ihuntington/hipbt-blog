"use strict";

const Process = require("process");
const qs = require("query-string");
const EleventyFetch = require("@11ty/eleventy-fetch");

class Spotify {
  constructor() {
    this.token = null;
  }

  async getAccessToken() {
    try {
      const authEncodedString = Buffer.from(
        `${Process.env.SPOTIFY_CLIENT_ID}:${Process.env.SPOTIFY_CLIENT_SECRET}`
      );
      const token = authEncodedString.toString("base64");
      const url = "https://accounts.spotify.com/api/token";
      const response = await EleventyFetch(url, {
        duration: "1h",
        type: "json",
        fetchOptions: {
          method: "POST",
          headers: {
            Authorization: `Basic ${token}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: qs.stringify({ grant_type: "client_credentials" }),
        },
      });

      this.token = response;
    } catch (err) {
      console.log("Failed to get access token");
      console.log(err);
      throw new Error(err);
    }
  }

  async getTrackById(id) {
    if (!this.token) {
      await this.getAccessToken();
    }

    try {
      const { payload } = await Wreck.get(
        `https://api.spotify.com/v1/tracks/${id}`,
        {
          headers: {
            Authorization: `Bearer ${this.token.access_token}`,
          },
          json: true,
        }
      );
      return payload;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async getArtists(ids) {
    if (!this.token) {
      await this.getAccessToken();
    }

    try {
      const url = `https://api.spotify.com/v1/artists?ids=${ids.join(",")}`;
      const response = await EleventyFetch(url, {
        duration: "1h",
        type: "json",
        fetchOptions: {
          headers: {
            Authorization: `Bearer ${this.token.access_token}`,
          },
        },
      });

      return response;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async getArtist(id) {
    if (!this.token) {
      await this.getAccessToken();
    }

    try {
      const { payload } = await Wreck.get(
        `https://api.spotify.com/v1/artists/${id}`,
        {
          headers: {
            Authorization: `Bearer ${this.token.access_token}`,
          },
          json: true,
        }
      );
      return payload;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  async getTracks(ids) {
    if (!this.token) {
      await this.getAccessToken();
    }

    try {
      const url = `https://api.spotify.com/v1/tracks?ids=${ids.join(",")}`;
      const response = await EleventyFetch(url, {
        duration: "1h",
        type: "json",
        fetchOptions: {
          headers: {
            Authorization: `Bearer ${this.token.access_token}`,
          },
        },
      });

      return response;
    } catch (err) {
      console.error(err);
      return { tracks: [] };
    }
  }
}

module.exports = Spotify;
