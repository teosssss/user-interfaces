// darkmode toggle

const darkModeToggle = document.getElementById('darkMode');


const currentTheme = localStorage.getItem("theme");
if (currentTheme == "dark") {
    document.body.classList.add('dark');
    darkModeToggle.checked = true;
}

darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    let theme = "light";
    if (document.body.classList.contains("dark")) {
        theme = "dark";
    }
    localStorage.setItem("theme", theme);
})

// accesibility toggle

const btn2 = document.getElementById('accessibilityMode');
const access=document.getElementById('accessibilityLink')
const isAccessible = localStorage.getItem("accessibility");

if (isAccessible == "yes") {
    access.href = "accessibility-mode.css";
    btn2.checked = true;
}

btn2.addEventListener('click', () => {
    if (access.getAttribute("href") == "accessibility-mode.css") {
        access.href = "style.css";
        let accessibility = "no";
        localStorage.setItem("accessibility", accessibility);
      } else {
        access.href = "accessibility-mode.css";
        accessibility = "yes";
        localStorage.setItem("accessibility", accessibility);
    }
    
})
