<?php
    $Page = [
        "title" => "Spotify Stats for Everyone! - mySpotify"
    ];

    require_once("models/SpotifyStats.php");
    require_once("models/include/header.php");

    if ($User['valid']) {
?>

<div class="text-center">
    <h1 class="display-4 mt-5 bold">Top Tracks</h1>
</div>

<div class="mt-5 pl-5 pr-5 container wide">
    <h2 class="mb-4">Past Week</h2>
    <div class="row">
        <?php 
            $i = 0;
            foreach (getTopSongs("short_term", 100) as $a) { 
                $i++; ?>
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-12">
                    <div class="card mb-3">
                        <div class="view overlay zoom">
                            <img class=<?php echo "'card-img-top cover"; echo ($i > 6) ? "-songs'" : "'"; ?> src=<?php echo "'".$a['image']."'" ?>>
                            <a href=<?php echo "'".$a['link']."'" ?>>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        
                        <div class="card-body">
                            <h4 class="card-title song-title"><?php echo $a['name'] ?></h4>
                            <p class="card-text song-sub"><?php echo $a['artist'] ?></p>
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
            foreach (getTopSongs("medium_term", 100) as $a) { 
                $i++; ?>
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-12">
                    <div class="card mb-3">
                        <div class="view overlay zoom">
                            <img class=<?php echo "'card-img-top cover"; echo ($i > 6) ? "-songs'" : "'"; ?> src=<?php echo "'".$a['image']."'" ?>>
                            <a href=<?php echo "'".$a['link']."'" ?>>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        
                        <div class="card-body">
                            <h4 class="card-title song-title"><?php echo $a['name'] ?></h4>
                            <p class="card-text song-sub"><?php echo $a['artist'] ?></p>
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
            foreach (getTopSongs("long_term", 100) as $a) { 
                $i++; ?>
                <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-12">
                    <div class="card mb-3">
                        <div class="view overlay zoom">
                            <img class=<?php echo "'card-img-top cover"; echo ($i > 6) ? "-songs'" : "'"; ?> src=<?php echo "'".$a['image']."'" ?>>
                            <a href=<?php echo "'".$a['link']."'" ?>>
                                <div class="mask rgba-white-slight"></div>
                            </a>
                        </div>
                        
                        <div class="card-body">
                            <h4 class="card-title song-title"><?php echo $a['name'] ?></h4>
                            <p class="card-text song-sub"><?php echo $a['artist'] ?></p>
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
