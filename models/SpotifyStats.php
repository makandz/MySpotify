<?php

GLOBAL $Spotify_API;

require_once('vendor/autoload.php'); // Composer reqs.
require_once('models/configuration.php'); // Page configuration data.
require_once('models/funcs.php'); // Functions required to run.

// API info, from the configuration file.
$session = new SpotifyWebAPI\Session(
    $_GLOBAL['client'],
    $_GLOBAL['secret'],
    $_GLOBAL['redirect']
);

// Current user information.
$User = [
    "valid" => false,
    "username" => 'Guest'
];

$Spotify_API = new SpotifyWebAPI\SpotifyWebAPI();

// Check if a Spotify auth. token is set.
if (isset($_COOKIE['spot_auth'])) {
    $Spotify_API->setAccessToken($_COOKIE['spot_auth']); // Set session to token.

    try {
        $userProfile = $Spotify_API->me(); // Get user from token.
        // Update user information.
        $User = [
            "valid" => true,
            "username" => $userProfile->id
        ];
    } catch (Exception $e) {
        // Something went wrong, remove this auth.
        unset($_COOKIE['spot_auth']);
        setcookie("spotify_auth", '', time() - 3600);
    }
}

?>