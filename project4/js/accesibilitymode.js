const btn2 = document.getElementById('accesibilityMode');
const access=document.getElementById('theme-link')

const isAccessible = localStorage.getItem("accessibility");
if (isAccessible == "yes") {
    access.getAttribute("href") == "accessibility-mode.css"
    btn2.checked = true;
}

btn2.addEventListener('click', () => {
    if (theme.getAttribute("href") == "accessibility-mode.css") {
        theme.href = "style.css";
        accessibility = "yes";
      } else {
        theme.href = "accessibility-mode.css";
        let accessibility = "no";
    }
localStorage.setItem("accesibility", accesibility);
})
