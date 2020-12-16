---
title: The story so far
description: What I originally set out to achieve and the state of the project after a year and a half.
date: 2020-12-20
tags: [development, perserverance, nodejs, hapi, pg-promise, sequelize, digital ocean]
layout: layouts/post.njk
---

This website began in late June 2019 as a way for me to answer the question: have I played Bowie today? The page simply said yes or no but over the following weeks it expanded to include a list of tracks that I had listened to on a given day.

My initial idea quickly morphed into the concept of a musical diary where each track is an entry. I thought this would be more visually interesting than a plain list. While I have been a user of Last.fm for many years I feel that the site is lacking the creative edge I had in mind.

At the same time I felt that I had stagnated as a web developer in recent years. I viewed building this site as a way to rekindle my interest and learn some new technologies.

The second version of the site I hosted on Google App Engine with data stored in Postgres on CloudSQL. I rather enjoyed learning how to use Google Cloud but some areas were less clear such as permissions and service accounts.

The site went live at the end of Janaury 2020. It was basic in functionality and design but I was pleased that it worked. (Not that it's any more complex at the end of 2020). After putting the site live, I let it be for a period of time while I started a new job and the world entered a pandemic.

In April 2020 I received an unexpected invoice for approximately £60 and the projected invoice for May was over £70. I decided to turn off the website and investigate a new hosting solution. I was unsure what I had done to warrant such a large bill especially when I was the only person viewing the site.

My initial plan was to move the hosting and database to Heroku. I did some reading and made a small example app to deploy as it has been a number of years since I last used the platform. In the end I decided to host the website on Digital Ocean. There are a few reasons; it would be cheaper, I would get to learn how to run a web server (again), and have greater control over what software I can use.

At the same time of moving hosts I had to solve an issue with Daylight Savings Time. The timestamps of when tracks are played are in Universal Coordinated Time yet I did not apply British Summer Time to the timestamps from 29 March. While this is straightforward to fix, I was unaware of another time bug lurking on my laptop.

For local development I use WSL, Docker and VS Code. When I use my laptop I often don't switch it off but instead close the lid and the laptop goes to sleep. On waking the computer's time is correct but in WSL the time was not synchronised and would continue from the point that the laptop went to sleep. This in itself was more of an annoyance but I was initally rather confused as I noticed this at the time of BST starting.

In late spring I decided to refactor the site so that anyone with a Spotify account could join. During this process I discovered numerous bugs as well as introducing some. There is still further work to improve the site for additional users but in practice anyone could join today.

Features to be built for additional users are:

- welcome email
- signed in dashboard screen
- weekly or monthly summary email on the insights of their listening
- an improved calendar and diary view
- account screens

When I started on the second version of the site I chose to use [pg-promise](https://github.com/vitaly-t/pg-promise) as an interface between NodeJS and Postgres. I enjoyed the simplicity of the API along with the reasonably well written documentation, examples and best practice guides. Over the summer of 2020 I began to read about Sequelize and thought an interesting exercise would be to build a version of the site that used Sequelize as an ORM. After a few days of development time I realised this was a mistake because of the unclear documentation, lack of coherent examples and some of the more complex queries I wish to write were not possible. Or at least not possible as one query alone. I decided to abandon my attempt to convert the site to Sequelize and have stuck firmly with pg-promise.

By this point I'd become somewhat fed up of the project as in terms of user experience not much had changed. While I had made numerous changes to the backend, fixed bugs, changed hosts and enabled multiple accounts, I had not made any progress on the front-end. I decided to put the project aside for a month or so.

I've come to realise that working on personal projects takes time, persisting through frustration, not making progress, forgetting what I was in the middle of doing and learning to not care too much.

My advice for embarking on a personal project is to keep it simple, focus on small manageable tasks, be prepared to stop working on whatever it is you're doing at any moment (your partner or friends may want to see you), write ideas down on paper, have no deadline and just-do is fine. Most importantly enjoy it.

In October I decided to create a dashboard for the homepage to highlight listening activity. I wrote new API endpoints to get total duration of tracks played for a given period of time and the top tracks and artists. This also gave me the opportunity to think about how this information should be displayed which meant more drawing rough outlines on paper.

By November 2020 my interest in the project had picked up again with an emphasis on improving the interface. Admittedly the design has only slightly changed but the introduction of a simple logo with a pop of colour and Inter font has made the site more visually interesting. This has also begun to help me visualise in my mind of where I want to take the design.

Writing this first article has also given me the impetus to continue to chip away at my list of tasks to do over the coming months. One of those is to write at least one article per month on progress made.

The roadmap of features for 2021 include:

- improve the design of the diary
- improve the design of artist and track views
- add a calendar page to navigate between years, months, days
- add integration with BBC radio stations
- explore interesting ways to visualise listening history
- add my past listening history
- send welcome emails to new users
- send weekly or monthly emails of activity or trends to users
- increase the number of users which currently stands at 2!

I'm looking forward to writing 2021 in review to see what I actually get done.
