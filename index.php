<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script lang="JavaScript">
        var txt = " KelasQu | SMK Teknologi 07 | ";
        var speed = 500;
        var refresh = null;

        function action() {
            document.title = txt;
            txt = txt.substring(1, txt.length) + txt.charAt(0);
            refresh = setTimeout("action()", speed);
        }
        action();
  
    </script>
    <title>KelasQu | SMK Teknologi 07</title>
    <!-- Web icons -->
    <link rel="shortcut icon" href="/public/icons/web-logo.jpg" type="image/x-icon">
    <!-- Local CSS Files -->
    <link rel="stylesheet" href="/public/css/index.css">

    <!-- Vendor CSS Files -->
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/notyf@3.7.0/notyf.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>

</head>
<body>
     <div class="bgpos bg"></div>
    <?php include 'public/components/header.php' ?>
    <!-- Main script -->
    <main>
        <!-- Hero Section -->
         <?php include 'public/components/heroIndex.php' ?>
        <!-- End hero Section -->
    </main>

    <!-- Local JS Files -->
    <script src="public/script/index.js"></script>
    <!-- Vendor JS Files -->
    <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
    <script src="https://kit.fontawesome.com/51db0def59.js" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <script src="https://cdn.jsdelivr.net/npm/notyf@3.7.0/notyf.min.js"></script>
</body>
</html>