const footer = document.createElement("footer");
const footer_ul = document.createElement("ul");
const email = document.createElement("li");
const email_a = document.createElement("a");
const email_i = document.createElement("i");
const facebook = document.createElement("li");
const facebook_a = document.createElement("a");
const facebook_i = document.createElement("i");
const flickr = document.createElement("li");
const flickr_a = document.createElement("a");
const flickr_i = document.createElement("i");
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
email_i.className = "fas fa-envelope-square";
facebook_i.className = "fab fa-facebook-square";
flickr_i.className = "fab fa-flickr";
instagram_i.className = "fab fa-instagram";
medium_i.className = "fab fa-medium-m";
youtube_i.className = "fab fa-youtube";

email_a.href = "mailto: getseng19@gmail.com";
facebook_a.href = "https://www.facebook.com/jgetseng";
flickr_a.href = "https://www.flickr.com/photos/162890611@N04/";
instagram_a.href = "https://www.instagram.com/jgetseng/";
medium_a.href = "https://jgetseng.medium.com/";
youtube_a.href = "https://www.youtube.com/channel/UCV8minFHgKlfRzkbSTJFokA";

email_a.target = "_blank";
facebook_a.target = "_blank";
flickr_a.target = "_blank";
instagram_a.target = "_blank";
medium_a.target = "_blank";
youtube_a.target = "_blank";

email_a.append(email_i);
facebook_a.append(facebook_i);
flickr_a.append(flickr_i);
instagram_a.append(instagram_i);
medium_a.append(medium_i);
youtube_a.append(youtube_i);
email.append(email_a);
facebook.append(facebook_a);
flickr.append(flickr_a);
instagram.append(instagram_a);
medium.append(medium_a);
youtube.append(youtube_a);
footer_ul.append(email);
footer_ul.append(facebook);
footer_ul.append(flickr);
footer_ul.append(instagram);
footer_ul.append(medium);
footer_ul.append(youtube);
footer.append(footer_ul);
document.body.append(footer);

/*
        <footer id="footer">
            <ul>
                <li><a href="mailto: getseng19@gmail.com" target="_blank"><i class="fas fa-envelope-square"></i></a></li>
                <li><a href="https://www.facebook.com/jgetseng" target="_blank"><i class="fab fa-facebook-square"></i></a></li>
                <li><a href="https://www.flickr.com/photos/162890611@N04/" target="_blank"><i class="fab fa-flickr"></i></a></li>
                <li><a href="https://www.instagram.com/jgetseng/" target="_blank"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://jgetseng.medium.com/" target="_blank"><i class="fab fa-medium-m"></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCV8minFHgKlfRzkbSTJFokA" target="_blank"><i class="fab fa-youtube"></i></a></li>
            </ul>  
        </footer>
*/