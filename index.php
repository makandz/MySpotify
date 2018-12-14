<?php
    $Page = [
        "title" => "Spotify Stats for Everyone! - mySpotify"
    ];

    require_once("models/SpotifyStats.php");
    require_once("models/include/header.php");
?>

<div class="text-center">
    <h1 class="display-2 mt-5">Music Speaks</h1>
    <h2 class="mt-1">What have you been listening to?</h2>
</div>

<div class="container mt-5">
    <div class="row justify-content-md-center">
        <div class="col-5">
            <div class="card">
                <div class="card-body">
                    <h4 class="card-title"><a>Login with Spotify</a></h4>
                    <p class="card-text">Sign in with your Spotify account to view statistics for your statistics, your login token is not stored on any server.</p>
                    <a href="#" class="btn btn-primary"><i class="fab fa-spotify"></i> Login with Spotify</a>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- JQuery -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<!-- Bootstrap tooltips -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>
<!-- Bootstrap core JavaScript -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.1.3/js/bootstrap.min.js"></script>
<!-- MDB core JavaScript -->
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.5.15/js/mdb.min.js"></script>