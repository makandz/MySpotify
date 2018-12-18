<?php 

require_once("models/SpotifyStats.php");

if (!isset($_COOKIE['spot_auth'])) {
    if (!isset($_GET['code']))
        header('Location: ' . $session->getAuthorizeUrl(['scope' => ['user-top-read']]));
    else {
        $session->requestAccessToken($_GET['code']);
        $accessToken = $session->getAccessToken();
        setcookie("spot_auth", $accessToken, time() + (86400 * 30), "/");
        header("Location: index.php");
    }
} else {
    header("Location: index.php");
}

?>