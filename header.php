<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <?php include('inc/tdk.php'); ?>

  <link rel="icon" type="image/png" href="/favicon.ico">
  <link rel="shortcut icon" type="image/png" href="/favicon.ico">

  <?php $url = $_SERVER['REQUEST_URI']; ?>

  <?php if ($url == "/") : ?>
    <link rel="stylesheet" href="/assets/css/top.min.css">

  <?php endif; ?>
</head>

<body>
  <?php include('inc/header.php'); ?>