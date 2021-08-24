# MySpotify
![](https://img.shields.io/badge/license-MIT%20License-blue?style=flat-square)

## Description
A Next.js (React.js) with a Node.js backend that makes use of the Spotify API to show users their
top tracks and artists within various time periods. Project was created mainly to play around with
the various API endpoints while displaying the information on a modern and mobile compatible frontend.

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Screenshots](#screenshots)

## Installation
1. Clone repository to local environment.
2. Install all dependencies with `npm install`.
3. Grab a Spotify API key at the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications)
   and add the info to .env.sample.
4. Rename .env.sample to .env or .env.local.
5. Run Next.js project with `npm run dev`.

## Usage
You can visit the website at [localhost:3000](http://localhost:3000). Click the button to login with
your Spotify account and that's all!

Spotify's API has changed since this project first started. You can only login with your own Spotify
account that made the key if you *do not have a quota extension*. You can read more about it at this
[Spotify blog post](https://developer.spotify.com/community/news/2021/05/27/improving-the-developer-and-user-experience-for-third-party-apps/).

## License
This project is covered under the MIT License.

## Screenshots
![img](https://u.mkn.cx/4/ms2.png)

![img](https://u.mkn.cx/4/ms5.png)