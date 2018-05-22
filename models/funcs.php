<?php

GLOBAL $Spotify_API;

function parseTopTracks($type, $limit = 18) {
    GLOBAL $Spotify_API;
    $result = $Spotify_API->getMyTop('tracks', array('limit' => $limit, 'time_range' => $type, 'offset' => 0));
    $export = array();
    foreach ($result->items as $queue) {
        if (strlen($queue->name) > 24)
            $queue->name = substr($queue->name, 0, strrpos($queue->name, ' ', 23 - strlen($queue->name))) . '...';
        $export[] = array('name' => $queue->name, 'link' => $queue->album->external_urls->spotify, 'image' => $queue->album->images[0]->url, 'artist' => $queue->artists[0]->name);
    }
    return $export;
}

function parseTopArtists($type, $limit = 18) {
    GLOBAL $Spotify_API;
    $result = $Spotify_API->getMyTop('artists', array('limit' => $limit, 'time_range' => $type, 'offset' => 0));
    $export = array();
    foreach ($result->items as $queue) {
        if (strlen($queue->name) > 23)
            $queue->name = substr($queue->name, 0, strrpos($queue->name, ' ', 23 - strlen($queue->name))) . '...';
        $export[] = array('name' => $queue->name, 'link' => $queue->external_urls->spotify, 'image' => $queue->images[0]->url);
    }
    return $export;
}

function echoTrackPreview($track) {
    echo "
        <div class='col s12 m6 l2'>
            <div class='card'>
                <div class='card-image'>
                    <img class='artist-cover' src='" . $track["image"] . "' height=75>
                    <a class='btn-floating halfway-fab waves-effect waves-light red' href='" . $track['link'] . "' target='_blank'><i class='material-icons'>music_note</i></a>
                </div>
                <div class='card-content'>
                    <p class='song-text'>" . $track["name"] . "</p>
                    <p class='song-text'><b>" . $track["artist"] . "</b></p>
                </div>
            </div>
        </div>
    ";
}

function echoArtistPreview($artist) {
    echo "
        <div class='col s12 m6 l2'>
            <div class='card'>
                <div class='card-image'>
                    <img class='artist-cover' src='" . $artist["image"] . "' height=75>
                    <a class='btn-floating halfway-fab waves-effect waves-light red' href='" . $artist['link'] . "' target='_blank'><i class='material-icons'>music_note</i></a>
                </div>
                <div class='card-content'>
                    <p class='song-text'>" . $artist["name"] . "</p>
                </div>
            </div>
        </div>
    ";
}

?>