const header = document.createElement("header");
const header_container = document.createElement("div");
const homepage = document.createElement("h1");
const homepage_a = document.createElement("a");
const nav = document.createElement("nav");
const nav_ul = document.createElement("ul");
const nav_li_essay = document.createElement("li");
const nav_li_photopraph = document.createElement("li");
const nav_li_thought = document.createElement("li");
/*const nav_li_comment = document.createElement("li");*/
const nav_li_letter = document.createElement("li");
const nav_essay = document.createElement("a");
const nav_thought = document.createElement("a");
const nav_photograph = document.createElement("a");
/*const nav_comment = document.createElement("a");*/
const nav_letter = document.createElement("a");

header_container.id = "header_container";
homepage_a.href = "/homepage.html";
homepage_a.innerText = "Jge.";

nav_li_letter.id = "nav_last";

nav_essay.href = "/essay.html";
nav_photograph.href = "/photograph.html";
nav_thought.href = "/thought.html";
/*nav_comment.href = "/comment.html";*/
nav_letter.href = "https://forms.gle/iUupMWH6DuynX3mi7";
nav_letter.target = "_blank";

nav_essay.innerText = "隨筆";
nav_photograph.innerText = "隨拍";
nav_thought.innerText = "隨想";
/*nav_comment.innerText = "隨評";*/
nav_letter.innerText = "隨信";

homepage.append(homepage_a);
header_container.append(homepage);
header.append(header_container);
nav_li_essay.append(nav_essay);
nav_li_photopraph.append(nav_photograph);
nav_li_thought.append(nav_thought);
/*nav_li_comment.append(nav_comment);*/
nav_li_letter.append(nav_letter);
nav_ul.append(nav_li_essay);
nav_ul.append(nav_li_photopraph);
nav_ul.append(nav_li_thought);
/*nav_ul.append(nav_li_comment);*/
nav_ul.append(nav_li_letter);
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
                <li><a href="photograph.html">隨拍</a></li>
                <li><a href="thought.html">隨想</a></li>
                <li><a href="comment.html">隨評</a></li>
                <li id="nav_last"><a href="https://forms.gle/iUupMWH6DuynX3mi7" target="_blank">隨信</a></li>
            </ul>
        </nav>
    </div>
</header>
*/