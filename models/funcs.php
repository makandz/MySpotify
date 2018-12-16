<?php

GLOBAL $Spotify_API;

function getTopSongs($type, $limit = 50) {
    GLOBAL $Spotify_API;
    $result = $Spotify_API->getMyTop('tracks', array('limit' => $limit, 'time_range' => $type, 'offset' => 0));
    $export = array();
    foreach ($result->items as $queue)
        $export[] = array('name' => $queue->name, 'link' => $queue->album->external_urls->spotify, 'image' => $queue->album->images[0]->url, 'artist' => $queue->artists[0]->name);
    return $export;
}

function getTopArtist($type, $limit = 30) {
    GLOBAL $Spotify_API;
    $result = $Spotify_API->getMyTop('artists', array('limit' => $limit, 'time_range' => $type, 'offset' => 0));
    $export = array();
    foreach ($result->items as $queue)
        $export[] = array('name' => $queue->name, 'link' => $queue->external_urls->spotify, 'image' => $queue->images[0]->url, 'genre' => $queue->genres[0]);
    return $export;
}

?>