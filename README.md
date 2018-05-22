# mySpotify - Your Spotify Stats
Over the past few weeks I've been listening to some music, and was interested in which music I've listened to the most. I checked out Spotify's API and noticed there is a way the information, so I went ahead and worked on a program to get the stats for my account and list them out in the most elegant way possible.

## Live Preview
You can see a live preview of the website at https://server2.mastacoder.com/mySpotify.

## What does this do?
It prompts whoever that is visiting the website to authenticate using their Spotify account. Upon them logging into their account a token is sent to the website and saved as a cookie on the users computer. The token allows the website to request information about the users top songs and artists in a period of time, and the stats are printed on a page with images and links to visit the pages.

## How do I get it running?
The first step is to head over to the [Spotify Dashboard](https://beta.developer.spotify.com/dashboard/) where you can create a new app. You're then given a client and secret token. You can add those including the URL of your website inside of [models/configuration.php](https://github.com/MastaCoder/mySpotify/blob/master/models/configuration.php). So an example of how the file will look like is below:

```php
<?php

$_GLOBAL = array(
    'client' => "37c9b2d96x0d47e3b14vef163020zxf9",
    'secret' => "c6a5c0f2122x4b1cab83b6af0de42311",
    'redirect' => "http://localhost/mySpotify/auth.php"
)

?>
```

Upon getting that done you're all set to simply login and it should do it's work, enjoy

## Screenshots
![image](https://i.imgur.com/tTR8h8o.png)
