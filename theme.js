function toggleTheme() {
    document.body.classList.toggle("dark");
    updateIcon();

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

function updateIcon() {
    const icon = document.getElementById("theme-icon");

    if (document.body.classList.contains("dark")) {
        icon.textContent = "☀️";
    } else {
        icon.textContent = "🌙";
    }
}

window.addEventListener("load", () => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        document.body.classList.add("dark");
    }

    updateIcon();
});