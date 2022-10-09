---
title: June 2022 update
description: A short summary of changes to Have I Played Bowie Today from the last 18 months
date: 2022-06-22
tags: [development, notes]
layout: layouts/post.njk
templateEngineOverride: njk, md
---

{%- from 'macros/charts/artists.njk' import ArtistChart %}
{%- from 'macros/charts/tracks.njk' import TrackChart %}

After writing the previous blog post I more or less forgot about this site. I focussed my attention on other things such as buying a house with [Fingers McGee](https://www.haveiplayedbowie.today/u/fingersmcgee/diary) and discovering the joys and frustrations of gardening. I did make a few small changes which I will write about in more detail another time, however, the following is a short summary of those changes.

The main visual change is showing an image for artists in the weekly Top Artists chart on the home page. This was fun to implement and involves the use of Redis to cache the data from Spotify's API.

One of my goals of this project is to record the music I listen to on BBC Sounds. I have made a bookmarklet which can can be activated on a radio station page on BBC Sounds website and it will send the tracks you listen to here. As of writing this feature only works for catch up shows rather than live programming.

I used to be a keen radio listener tuning in everyday but I've greatly reduced the amount of time I listen to the radio and Spotify over the past six months.

In January 2022 I created the following charts as a summary of 2021. Ideally the site itself should include this feature as a summary for each listener. Perhaps I should make this a goal for the remainder of the year so I don't have to manually create these charts in 2023.

<div class="breakout charts">
  <h2 class="title">Ian's 2021 summary</h2>
  <div class="charts__container">
    {{ ArtistChart(users.ian.artists) }}
    {{ TrackChart(users.ian.tracks) }}
  </div>
</div>

<div class="breakout charts">
  <h2 class="title">Fingers McGee's 2021 summary</h2>
  <div class="charts__container">
    {{ ArtistChart(users.fingers.artists) }}
    {{ TrackChart(users.fingers.tracks) }}
  </div>
</div>
