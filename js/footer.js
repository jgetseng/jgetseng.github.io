const footer = document.createElement("footer");
const footer_ul = document.createElement("ul");
const email = document.createElement("li");
const email_a = document.createElement("a");
const taplink = document.createElement("li");
const taplink_a = document.createElement("a");

footer.id = "footer";

email_a.href = "mailto: getseng19@gmail.com";
taplink_a.href = "https://taplink.cc/jgetseng";
taplink_a.target = "_blank";

email_a.innerText = "Email.";
taplink_a.innerText = "Taplink.";

email.append(email_a);
taplink.append(taplink_a);
footer_ul.append(email);
footer_ul.append(taplink);
footer.append(footer_ul);
document.body.append(footer);

/*
<footer id="footer">
    <ul>
        <li><a href="mailto: getseng19@gmail.com">Email.</a></li>
        <li><a href="https://taplink.cc/jgetseng" target="_blank">Taplink.</a></li>
    </ul>  
</footer>
*/