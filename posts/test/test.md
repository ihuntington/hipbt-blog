---
layout: layouts/post.njk
templateEngineOverride: njk, md
title: 2021 in summary
date: Created
---

After writing the previous blog post I more or less forgot about this site. I focussed my attention on other things such as buying a house with [Fingers McGee](https://www.haveiplayedbowie.today/u/fingersmcgee/diary) and discovering the joys and frustrations of gardening. I did make a few small changes which I will write about in more detail another time, however, the following is a short summary of those changes.

The main visual change is showing an image for artists in the weekly Top Artists chart on the home page. This was fun to implement and involves the use of Redis to cache the data from Spotify's API.

One of my goals of this project is to record the music I listen to on BBC Sounds. I have made a bookmarklet which can can be activated on a radio station page on BBC Sounds website and it will send the tracks you listen to here. As of writing this feature only works for catch up shows rather than live programming.

I used to be a keen radio listener tuning in everyday but I've greatly reduced the amount of time I listen to the radio and Spotify over the past six months.

In January 2022 I created the following charts as a summary of 2021. Ideally the site itself should include this feature as a summary for each listener. Perhaps I should make this a goal for the remainder of the year so I don't have to manually create these charts in 2023.

{%- from './chart.macro.njk' import chart %}
{{ chart(users.ian.artists)}}

<div class="breakout charts">
  <h2 class="title">Ian's 2021 summary</h2>
  <div class="charts__container">
    <div class="chart">
      <table class="chart__table">
        <thead>
          <tr>
            <th>Artists</th>
            <th class="chart__cell--count chart__cell--end">Listens</th>
          </tr>
        </thead>
        <tbody>
      {%- for item in users.ian.artists %}
          <tr>
            <td>
              <div class="chart-card">
                <div class="chart-card__image">
                  <img src="{{item.images[2].url}}" width="64" height="64" alt="Photo of {{item.name}}" />
                </div>
                <div class="chart-card__content">
                  <a href="/artists/{{item.id}}">
                    <div class="ellipsis-one-line">{{item.name}}</div>
                  </a>
                </div>
              </div>
            </td>
            <td class="chart__cell--count chart__cell--end">
              <span>{{item.total}}</span>
            </td>
          </tr>
      {%- endfor %}
        </tbody>
      </table>
    </div>
    <div class="chart">
      <table class="chart__table">
        <thead>
          <tr>
            <th>Tracks</th>
            <th class="chart__cell--count chart__cell--end">Listens</th>
          </tr>
        </thead>
        <tbody>
      {%- for item in users.ian.tracks %}
          <tr>
            <td>
              <div class="chart-card">
                <div class="chart-card__image">
                  <img src="{{item.images[2].url}}" width="64" height="64" alt="Photo of {{item.name}}" />
                </div>
                <div class="chart-card__content">
                  <div class="chart-card__primary-text">
                    <a href="/tracks/{{item.id}}">
                      <div class="ellipsis-one-line">{{item.name}}</div>
                    </a>
                  </div>
                  <ul class="chart-card__artists ellipsis-one-line">
                  {%- for artist in item.artists %}
                  <li class="chart-card__artist">
                    <a href="/artists/{{artist.id}}">{{artist.name}}</a>
                    {%- if loop.index < loop.length %},{% endif %}
                  </li>
                  {%- endfor %}
                  </ul>
                </div>
              </div>
            </td>
            <td class="chart__cell--count chart__cell--end">
              <span>{{item.total}}</span>
            </td>
          </tr>
      {%- endfor %}
        </tbody>
      </table>
    </div>
  </div>
</div>


<div class="breakout charts">
  <h2 class="title">Fingers McGee's 2021 summary</h2>
  <div class="charts__container">
    <div class="chart">
      <table class="chart__table">
        <thead>
          <tr>
            <th>Artists</th>
            <th class="chart__cell--count chart__cell--end">Listens</th>
          </tr>
        </thead>
        <tbody>
      {%- for item in users.fingers.artists %}
          <tr>
            <td>
              <div class="artist">
                <img src="{{item.images[2].url}}" width="64" height="64" alt="Photo of {{item.name}}" />
                <a href="/artists/{{item.id}}">
                  <div class="ellipsis-one-line">{{item.name}}</div>
                </a>
              </div>
            </td>
            <td class="chart__cell--count chart__cell--end">
              <span>{{item.total}}</span>
            </td>
          </tr>
      {%- endfor %}
        </tbody>
      </table>
    </div>
    <div class="chart">
      <table class="chart__table">
        <thead>
          <tr>
            <th>Tracks</th>
            <th class="chart__cell--count chart__cell--end">Listens</th>
          </tr>
        </thead>
        <tbody>
      {%- for item in users.fingers.tracks %}
          <tr>
            <td>
              <div class="chart-card">
                <div class="chart-card__image">
                  <img src="{{item.images[2].url}}" width="64" height="64" alt="Photo of {{item.name}}" />
                </div>
                <div class="chart-card__content">
                  <div class="chart-card__primary-text">
                    <a href="/tracks/{{item.id}}">
                      <div class="ellipsis-one-line">{{item.name}}</div>
                    </a>
                  </div>
                  <ul class="chart-card__artists ellipsis-one-line">
                  {%- for artist in item.artists %}
                  <li class="chart-card__artist">
                    <a href="/artists/{{artist.id}}">{{artist.name}}</a>
                    {%- if loop.index < loop.length %},{% endif %}
                  </li>
                  {%- endfor %}
                  </ul>
                </div>
              </div>
            </td>
            <td class="chart__cell--count chart__cell--end">
              <span>{{item.total}}</span>
            </td>
          </tr>
      {%- endfor %}
        </tbody>
      </table>
    </div>
  </div>
</div>

After writing the previous blog post I more or less forgot about this site. I focussed my attention on other things such as buying a house with [Fingers McGee](https://www.haveiplayedbowie.today/u/fingersmcgee/diary) and discovering the joys and frustrations of gardening. I did make a few small changes which I will write about in more detail another time, however, the following is a short summary of those changes.
