const meta_charset = document.createElement("meta")
const meta_robots = document.createElement("meta")
const meta_viewport = document.createElement("meta")
const meta_google_site_verification = document.createElement("meta")
const normalize = document.createElement("link");
const main = document.createElement("link");
const fontgoogleapis = document.createElement("link");
const fontgstatic = document.createElement("link");
const font = document.createElement("link");
const icon = document.createElement("script");

meta_charset.charset = "UTC-8";
meta_robots.name = "robots";
meta_robots.content = "nofollow";
meta_google_site_verification.content = "BINezfq2izQzubd5TzG4FuKbuENlcQZL8Uz2QgJeiOE";
meta_viewport.name = "viewport";
meta_viewport.content = "width=device-width, initial-scale=1, user-scalable=no";

normalize.rel = "stylesheet";
normalize.href = "/css/normalize.css";

main.rel = "stylesheet";
main.href = "/css/main.css";

fontgoogleapis.rel = "preconnect";
fontgoogleapis.href = "https://fonts.googleapis.com";

fontgstatic.rel = "preconnect";
fontgstatic.href = "https://fonts.gstatic.com";
fontgstatic.crossOrigin;

font.rel = "stylesheet";
font.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Noto+Serif&family=Noto+Serif+TC&display=swap";

icon.src = "https://kit.fontawesome.com/1f333a0a21.js";
icon.crossOrigin;

document.head.append(meta_charset);
document.head.append(meta_robots);
document.head.append(meta_viewport);
document.head.append(meta_google_site_verification);
document.head.append(normalize);
document.head.append(main);
document.head.append(fontgoogleapis);
document.head.append(fontgstatic);
document.head.append(font);
document.head.append(icon);

/*
    <meta charset="UTC-8">
    <meta name="robots" content="nofollow">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
    <meta name="google-site-verification" content="BINezfq2izQzubd5TzG4FuKbuENlcQZL8Uz2QgJeiOE" />
    <link rel="stylesheet" href="/css/normalize.css">
    <link rel="stylesheet" href="/css/main.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Noto+Serif&family=Noto+Serif+TC&display=swap">
    <script src="https://kit.fontawesome.com/1f333a0a21.js" crossorigin="anonymous"></script>
*/