const header = document.createElement("header");
const header_container = document.createElement("div");
const homepage = document.createElement("h1");
const homepage_a = document.createElement("a");
const nav = document.createElement("nav");
const nav_ul = document.createElement("ul");
const nav_li_essay = document.createElement("li");
/* const nav_li_book = document.createElement("li"); */
const nav_li_photopraph = document.createElement("li");
/* const nav_li_music = document.createElement("li"); */
const nav_li_thought = document.createElement("li");
const nav_essay = document.createElement("a");
/* const nav_book = document.createElement("a"); */
const nav_photograph = document.createElement("a");
/* const nav_music = document.createElement("a"); */
const nav_thought = document.createElement("a");

header_container.id = "header_container";
homepage_a.href = "/homepage.html";
homepage_a.innerText = "Jge.";

nav_li_thought.id = "nav_last";

nav_essay.href = "/essay.html";
/* nav_book.href = "/book.html"; */
nav_photograph.href = "/photograph.html";
/* nav_music.href = "/music.html"; */
nav_thought.href = "/thought.html";

nav_essay.innerText = "隨筆";
/* nav_book.innerText = "隨讀"; */
nav_photograph.innerText = "隨拍";
/* nav_music.innerText = "隨聽"; */
nav_thought.innerText = "隨想";

homepage.append(homepage_a);
header_container.append(homepage);
header.append(header_container);
nav_li_essay.append(nav_essay);
/* nav_li_book.append(nav_book); */
nav_li_photopraph.append(nav_photograph);
/* nav_li_music.append(nav_music); */
nav_li_thought.append(nav_thought);
nav_ul.append(nav_li_essay);
/* nav_ul.append(nav_li_book); */
nav_ul.append(nav_li_photopraph);
/* nav_ul.append(nav_li_music); */
nav_ul.append(nav_li_thought);
nav.append(nav_ul);
header_container.append(nav);
document.body.append(header);

/*
<header>
    <div id="header_container">
        <h1><a href="/homepage.html">Jge.</a></h1>
        <nav>
            <ul>
                <li><a href="essay.html">隨筆</a></li>
                <li><a href="book.html">隨讀</a></li>
                <li><a href="photograph.html">隨拍</a></li>
                <li><a href="music.html">隨聽</a></li>
                <li id="nav_last"><a href="thought.html">隨想</a></li>
            </ul>
        </nav>
    </div>
</header>
*/