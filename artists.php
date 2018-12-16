<?php
    $Page = [
        "title" => "Spotify Stats for Everyone! - mySpotify"
    ];

    require_once("models/SpotifyStats.php");
    require_once("models/include/header.php");

    if ($User['valid']) {
?>

<div class="text-center">
    <h1 class="display-3 mt-5 bold">Top Artists</h1>
</div>

<div class="mt-5 pl-5 pr-5 container wide">
    <h2 class="mb-4">Past Week</h2>
    <div class="row">
        <?php 
            $i = 0;
            foreach (getTopArtist("short_term", 48) as $a) { 
                $i++; ?>
                <div class="col-2">
                    <div class="card mb-3">
                        
                        <div class="view overlay">
                            <img class=<?php echo "'card-img-top cover"; echo ($i > 6) ? "-songs'" : "'"; ?> src=<?php echo "'".$a['image']."'" ?>>
                            <a href=<?php echo "'".$a['link']."'" ?>>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        
                        <div class="card-body">
                            <h4 class="card-title song-title"><?php echo $a['name'] ?></h4>
                            <p class="card-text song-sub"><?php echo $a['followers'] ?> Followers</p>
                        </div>
                    </div>
                </div>
            <?php } 
        ?>
    </div>

    <h2 class="mb-4 mt-4">Past 6 Months</h2>
    <div class="row">
        <?php 
            $i = 0;
            foreach (getTopArtist("medium_term", 48) as $a) { 
                $i++; ?>
                <div class="col-2">
                    <div class="card mb-3">
                        
                        <div class="view overlay">
                            <img class=<?php echo "'card-img-top cover"; echo ($i > 6) ? "-songs'" : "'"; ?> src=<?php echo "'".$a['image']."'" ?>>
                            <a href=<?php echo "'".$a['link']."'" ?>>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        
                        <div class="card-body">
                            <h4 class="card-title song-title"><?php echo $a['name'] ?></h4>
                            <p class="card-text song-sub"><?php echo $a['followers'] ?> Followers</p>
                        </div>
                    </div>
                </div>
            <?php } 
        ?>
    </div>

    <h2 class="mb-4 mt-4">Past 2 Years</h2>
    <div class="row">
        <?php 
            $i = 0;
            foreach (getTopArtist("long_term", 48) as $a) { 
                $i++; ?>
                <div class="col-2">
                    <div class="card mb-3">
                        
                        <div class="view overlay">
                            <img class=<?php echo "'card-img-top cover"; echo ($i > 6) ? "-songs'" : "'"; ?> src=<?php echo "'".$a['image']."'" ?>>
                            <a href=<?php echo "'".$a['link']."'" ?>>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        
                        <div class="card-body">
                            <h4 class="card-title song-title"><?php echo $a['name'] ?></h4>
                            <p class="card-text song-sub"><?php echo $a['followers'] ?> Followers</p>
                        </div>
                    </div>
                </div>
            <?php } 
        ?>
    </div>
</div>

<?php } else {
    header("Location: index.php");
} ?>

<?php require_once("models/include/footer.php"); ?>