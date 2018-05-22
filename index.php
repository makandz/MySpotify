<?php
    $_PAGE = array("title" => "Spotify Stats");
    require_once("models/SpotifyStats.php");
    require_once("models/include/header.php");
?>

<div class="section white">
    <div class="container">
        <h2 class="header center">What's Playing?</h2>
        <h4 class="header center subheader">A place to see what you've been playing.</h4>
        <?php if ($_USER['valid']) { ?>
            <div class="card">
                <div class="card-content">
                    <div class="card-title">Top Tracks</div>
                    <div class="row">
                        <p class="term-title"><b>Short Term (Past 4 Weeks)</b></p>
                        <?php 
                            foreach (parseTopTracks("short_term") as $track)
                                echoTrackPreview($track);
                        ?>
                    </div>
                    <hr />
                    <div class="row">
                        <p class="term-title"><b>Medium Term (Past 6 Months)</b></p>
                        <?php 
                            foreach (parseTopTracks("medium_term") as $track)
                                echoTrackPreview($track);
                        ?>
                    </div>
                    <hr />
                    <div class="row">
                        <p class="term-title"><b>Long Term (Past 2 Years)</b></p>
                        <?php 
                            foreach (parseTopTracks("long_term") as $track)
                                echoTrackPreview($track);
                        ?>
                    </div>
                </div>
            </div>
            <div class="card">
                <div class="card-content">
                    <div class="card-title">Top Artists</div>
                    <div class="row">
                        <p class="term-title"><b>Short Term (Past 4 Weeks)</b></p>
                        <?php 
                            foreach (parseTopArtists("short_term") as $artist)
                                echoArtistPreview($artist);
                        ?>
                    </div>
                    <hr />
                    <div class="row">
                        <p class="term-title"><b>Medium Term (Past 6 Months)</b></p>
                        <?php 
                            foreach (parseTopArtists("medium_term") as $artist)
                                echoArtistPreview($artist);
                        ?>
                    </div>
                    <hr />
                    <div class="row">
                        <p class="term-title"><b>Long Term (Past 2 Years)</b></p>
                        <?php 
                            foreach (parseTopArtists("long_term") as $artist)
                                echoArtistPreview($artist);
                        ?>
                    </div>
                </div>
            </div>
        <?php } else { ?>
            <div class="container">
                <div class="card">
                    <div class="card-content">
                        <div class="card-title">Spotify Access</div>
                        <p>To get your stats, we need access to your Spotify token. This token is saved as a cookie on the computer and is never shared or sent to a server, it will be deleted and you'll be required to authenticate again if your browser cookies get deleted.</p>
                    </div>
                    <div class="card-action">
                        <a href="auth.php">Connect with Spotify</a>
                    </div>
                </div>
            </div>
        <?php } ?>
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js"></script>