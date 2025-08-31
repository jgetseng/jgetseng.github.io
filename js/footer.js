const footer = document.createElement("footer");
const footer_ul = document.createElement("ul");
const instagram = document.createElement("li");
const instagram_a = document.createElement("a");
const instagram_i = document.createElement("i");
const medium = document.createElement("li");
const medium_a = document.createElement("a");
const medium_i = document.createElement("i");
const youtube = document.createElement("li");
const youtube_a = document.createElement("a");
const youtube_i = document.createElement("i");

footer.id = "footer";
instagram_i.className = "fab fa-instagram";
medium_i.className = "fab fa-medium";
youtube_i.className = "fab fa-youtube";

instagram_a.href = "https://www.instagram.com/jgetseng/";
medium_a.href = "https://jgetseng.medium.com/";
youtube_a.href = "https://www.youtube.com/channel/UCV8minFHgKlfRzkbSTJFokA";

instagram_a.target = "_blank";
medium_a.target = "_blank";
youtube_a.target = "_blank";

instagram_a.append(instagram_i);
medium_a.append(medium_i);
youtube_a.append(youtube_i);
instagram.append(instagram_a);
medium.append(medium_a);
youtube.append(youtube_a);
footer_ul.append(instagram);
footer_ul.append(medium);
footer_ul.append(youtube);
footer.append(footer_ul);
document.body.append(footer);

/*
        <footer id="footer">
            <ul>
                <li><a href="https://www.instagram.com/jgetseng/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://jgetseng.medium.com/" target="_blank"><i class="fa fa-medium"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCV8minFHgKlfRzkbSTJFokA" target="_blank"><i class="fab fa-youtube"></i></a></li>
            </ul>  
        </footer>
*/