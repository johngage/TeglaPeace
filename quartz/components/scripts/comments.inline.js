"use strict";
const changeTheme = (e) => {
    const theme = e.detail.theme;
    const iframe = document.querySelector("iframe.giscus-frame");
    if (!iframe) {
        return;
    }
    if (!iframe.contentWindow) {
        return;
    }
    iframe.contentWindow.postMessage({
        giscus: {
            setConfig: {
                theme: getThemeUrl(getThemeName(theme)),
            },
        },
    }, "https://giscus.app");
};
const getThemeName = (theme) => {
    if (theme !== "dark" && theme !== "light") {
        return theme;
    }
    const giscusContainer = document.querySelector(".giscus");
    if (!giscusContainer) {
        return theme;
    }
    const darkGiscus = giscusContainer.dataset.darkTheme ?? "dark";
    const lightGiscus = giscusContainer.dataset.lightTheme ?? "light";
    return theme === "dark" ? darkGiscus : lightGiscus;
};
const getThemeUrl = (theme) => {
    const giscusContainer = document.querySelector(".giscus");
    if (!giscusContainer) {
        return `https://giscus.app/themes/${theme}.css`;
    }
    return `${giscusContainer.dataset.themeUrl ?? "https://giscus.app/themes"}/${theme}.css`;
};
document.addEventListener("nav", () => {
    const giscusContainer = document.querySelector(".giscus");
    if (!giscusContainer) {
        return;
    }
    const giscusScript = document.createElement("script");
    giscusScript.src = "https://giscus.app/client.js";
    giscusScript.async = true;
    giscusScript.crossOrigin = "anonymous";
    giscusScript.setAttribute("data-loading", "lazy");
    giscusScript.setAttribute("data-emit-metadata", "0");
    giscusScript.setAttribute("data-repo", giscusContainer.dataset.repo);
    giscusScript.setAttribute("data-repo-id", giscusContainer.dataset.repoId);
    giscusScript.setAttribute("data-category", giscusContainer.dataset.category);
    giscusScript.setAttribute("data-category-id", giscusContainer.dataset.categoryId);
    giscusScript.setAttribute("data-mapping", giscusContainer.dataset.mapping);
    giscusScript.setAttribute("data-strict", giscusContainer.dataset.strict);
    giscusScript.setAttribute("data-reactions-enabled", giscusContainer.dataset.reactionsEnabled);
    giscusScript.setAttribute("data-input-position", giscusContainer.dataset.inputPosition);
    const theme = document.documentElement.getAttribute("saved-theme");
    if (theme) {
        giscusScript.setAttribute("data-theme", getThemeUrl(getThemeName(theme)));
    }
    giscusContainer.appendChild(giscusScript);
    document.addEventListener("themechange", changeTheme);
    window.addCleanup(() => document.removeEventListener("themechange", changeTheme));
});
