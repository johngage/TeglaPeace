"use strict";
const userPref = window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
const currentTheme = localStorage.getItem("theme") ?? userPref;
document.documentElement.setAttribute("saved-theme", currentTheme);
const emitThemeChangeEvent = (theme) => {
    const event = new CustomEvent("themechange", {
        detail: { theme },
    });
    document.dispatchEvent(event);
};
document.addEventListener("nav", () => {
    const switchTheme = (e) => {
        const newTheme = document.documentElement.getAttribute("saved-theme") === "dark" ? "light" : "dark";
        document.documentElement.setAttribute("saved-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        emitThemeChangeEvent(newTheme);
    };
    const themeChange = (e) => {
        const newTheme = e.matches ? "dark" : "light";
        document.documentElement.setAttribute("saved-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        emitThemeChangeEvent(newTheme);
    };
    // Darkmode toggle
    const themeButton = document.querySelector("#darkmode");
    if (themeButton) {
        themeButton.addEventListener("click", switchTheme);
        window.addCleanup(() => themeButton.removeEventListener("click", switchTheme));
    }
    // Listen for changes in prefers-color-scheme
    const colorSchemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    colorSchemeMediaQuery.addEventListener("change", themeChange);
    window.addCleanup(() => colorSchemeMediaQuery.removeEventListener("change", themeChange));
});