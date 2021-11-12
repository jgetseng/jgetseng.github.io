const normalize = document.createElement("LINK");
const main = document.createElement("LINK");
const fontgoogleapis = document.createElement("link");
const fontgstatic = document.createElement("link");
const merriweather = document.createElement("link");
const notosans = document.createElement("link");

normalize.rel = "stylesheet";
main.rel = "stylesheet";
fontgoogleapis.rel = "preconnect";
fontgstatic.rel = "preconnect";
merriweather.rel = "stylesheet";
notosans.rel = "stylesheet";

normalize.href = "/css/normalize.css";
main.href = "/css/main.css";
fontgoogleapis.href = "https://fonts.googleapis.com";
fontgstatic.href = "https://fonts.gstatic.com";
fontgstatic.crossOrigin;
merriweather.href = "https://fonts.googleapis.com/css2?family=Merriweather&display=swap";
notosans.href = "https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap";

document.head.append(normalize);
document.head.append(main);
document.head.append(fontgoogleapis);
document.head.append(fontgstatic);
document.head.append(merriweather);
document.head.append(notosans);

/*
<link rel="stylesheet" href="/css/normalize.css">
<link rel="stylesheet" href="/css/main.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Merriweather&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC&display=swap" rel="stylesheet">
*/