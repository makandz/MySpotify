<?php

require_once('vendor/autoload.php');
require_once('models/configuration.php');
require_once('models/funcs.php');

$session = new SpotifyWebAPI\Session(
    $_GLOBAL['client'],
    $_GLOBAL['secret'],
    $_GLOBAL['redirect']
);

$_USER = array("valid" => false, "username" => 'Guest');
GLOBAL $Spotify_API;
$Spotify_API = new SpotifyWebAPI\SpotifyWebAPI();

if (isset($_COOKIE['spotify_auth'])) {
    $Spotify_API->setAccessToken($_COOKIE['spotify_auth']);
    try {
        $userProfile = $Spotify_API->me();
        $_USER = array("valid" => true, "username" => $userProfile->id);
    } catch (Exception $e) {
        unset($_COOKIE['spotify_auth']);
        setcookie("spotify_auth", '', time() - 3600);
    }
}

?>