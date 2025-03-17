// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("light-mode");

    const button = document.getElementById("toggleModeButton");

    if (document.body.classList.contains("light-mode")) {
        document.body.style.backgroundColor = "#ffffff";
        document.body.style.color = "#000000";
        button.textContent = "Dark Mode";
        button.style.backgroundColor = "#222222";
        button.style.color = "#ffffff";
    } else {
        document.body.style.backgroundColor = "#161616";
        document.body.style.color = "#e0e0e0";
        button.textContent = "Light Mode";
        button.style.backgroundColor = "#1a3d6d";
        button.style.color = "#ffffff";
    }
}

// Sayfa yüklendiğinde Dark Mode ayarını kontrol et
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("toggleModeButton");

    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light-mode");
        button.textContent = "Dark Mode";
        button.style.backgroundColor = "#222222";
        button.style.color = "#ffffff";
    } else {
        document.body.classList.remove("light-mode");
        button.textContent = "Light Mode";
        button.style.backgroundColor = "#1a3d6d";
        button.style.color = "#ffffff";
    }
});

// LocalStorage ile Dark Mode ayarını sakla
document.getElementById("toggleModeButton").addEventListener("click", () => {
    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }
});
