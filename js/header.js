const header = document.createElement("header");
const header_container = document.createElement("div");
const homepage = document.createElement("h1");
const homepage_a = document.createElement("a");
const nav = document.createElement("nav");
const nav_ul = document.createElement("ul");
const nav_li_about = document.createElement("li");
const nav_li_articles = document.createElement("li");
const nav_li_photopraphs = document.createElement("li");
const nav_about = document.createElement("a");
const nav_articles = document.createElement("a");
const nav_photographs = document.createElement("a");


header.id = "header";
header_container.id = "header_container";
nav.id = "nav";
nav_li_about.className = "nav_divider";
nav_li_articles.className = "nav_divider";

homepage_a.href = "/homepage.html";
nav_about.href = "/html/about.html";
nav_articles.href = "/html/articles.html";
nav_photographs.href = "/html/photographs.html";

homepage_a.innerText = "Jge.";
nav_about.innerText = "關於 About.";
nav_articles.innerText = "文章 Articles.";
nav_photographs.innerText = "攝影 Photographs.";

homepage.append(homepage_a);
header_container.append(homepage);
header.append(header_container);
nav_li_about.append(nav_about);
nav_li_articles.append(nav_articles);
nav_li_photopraphs.append(nav_photographs);
nav_ul.append(nav_li_about);
nav_ul.append(nav_li_articles);
nav_ul.append(nav_li_photopraphs);
nav.append(nav_ul);
header_container.append(nav);
document.body.append(header);

/*      
        <header id="header">
            <div id="header_container">
                <h1><a href="/homepage.html">Jge.</a></h1>
                <nav id="nav">
                    <ul>
                        <li class="nav_divider"><a href="about.html">關於 About.</a></li>
                        <li class="nav_divider"><a href="articles.html">文章 Articles.</a></li>
                        <li><a href="photographs.html">攝影 Photographs.</a></li>
                    </ul>
                </nav>
            </div>
        </header>
*/