<html>
<head>
    <title><?php echo $_PAGE['title'] ?></title>
    <!-- Favicon -->
    <link rel="icon" href="assets/img/favicon.ico">
    <!-- Website Theme -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css">
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato">
    <link rel="stylesheet" href="assets/css/main.css">
    <!-- Website JS -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
</head>
<body>

<nav>
    <div class="nav-wrapper blue darken-4">
        <a href="#" class="brand-logo"><b>mySpotify</b></a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a><?php echo $_USER['username'] ?></a></li>
        </ul>
    </div>
</nav>