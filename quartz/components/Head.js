import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "preact/jsx-runtime";
import { i18n } from "../i18n";
import { joinSegments, pathToRoot } from "../util/path";
import { CSSResourceToStyleElement, JSResourceToScriptElement } from "../util/resources";
import { googleFontHref } from "../util/theme";
import satori from "satori";
import fs from "fs";
import sharp from "sharp";
import { getSatoriFont, defaultImage } from "../util/og";
import { unescapeHTML } from "../util/escape";
/**
 * Generates social image (OG/twitter standard) and saves it as `.webp` inside the public folder
 * @param opts options for generating image
 */
async function generateSocialImage({ cfg, description, fileName, fontsPromise, title, fileData }, userOpts, imageDir) {
    const fonts = await fontsPromise;
    const { width, height } = userOpts;
    // JSX that will be used to generate satori svg
    const imageComponent = userOpts.imageStructure(cfg, userOpts, title, description, fonts, fileData);
    const svg = await satori(imageComponent, { width, height, fonts });
    // Convert svg directly to webp (with additional compression)
    const compressed = await sharp(Buffer.from(svg)).webp({ quality: 40 }).toBuffer();
    // Write to file system
    const filePath = joinSegments(imageDir, `${fileName}.${extension}`);
    fs.writeFileSync(filePath, compressed);
}
const extension = "webp";
const defaultOptions = {
    colorScheme: "lightMode",
    width: 1200,
    height: 630,
    imageStructure: defaultImage,
    excludeRoot: false,
};
export default (() => {
    let fontsPromise;
    let fullOptions;
    const Head = ({ cfg, fileData, externalResources, ctx, }) => {
        // Initialize options if not set
        if (!fullOptions) {
            if (typeof cfg.generateSocialImages !== "boolean") {
                fullOptions = { ...defaultOptions, ...cfg.generateSocialImages };
            }
            else {
                fullOptions = defaultOptions;
            }
        }
        // Memoize google fonts
        if (!fontsPromise && cfg.generateSocialImages) {
            fontsPromise = getSatoriFont(cfg.theme.typography.header, cfg.theme.typography.body);
        }
        const slug = fileData.filePath;
        // since "/" is not a valid character in file names, replace with "-"
        const fileName = slug?.replaceAll("/", "-");
        // Get file description (priority: frontmatter > fileData > default)
        const fdDescription = fileData.description?.trim() ?? i18n(cfg.locale).propertyDefaults.description;
        const titleSuffix = cfg.pageTitleSuffix ?? "";
        const title = (fileData.frontmatter?.title ?? i18n(cfg.locale).propertyDefaults.title) + titleSuffix;
        let description = "";
        if (fdDescription) {
            description = unescapeHTML(fdDescription);
        }
        if (fileData.frontmatter?.socialDescription) {
            description = fileData.frontmatter?.socialDescription;
        }
        else if (fileData.frontmatter?.description) {
            description = fileData.frontmatter?.description;
        }
        const fileDir = joinSegments(ctx.argv.output, "static", "social-images");
        if (cfg.generateSocialImages) {
            // Generate folders for social images (if they dont exist yet)
            if (!fs.existsSync(fileDir)) {
                fs.mkdirSync(fileDir, { recursive: true });
            }
            if (fileName) {
                // Generate social image (happens async)
                generateSocialImage({
                    title,
                    description,
                    fileName,
                    fileDir,
                    fileExt: extension,
                    fontsPromise,
                    cfg,
                    fileData,
                }, fullOptions, fileDir);
            }
        }
        const { css, js } = externalResources;
        const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`);
        const path = url.pathname;
        const baseDir = fileData.slug === "404" ? path : pathToRoot(fileData.slug);
        const iconPath = joinSegments(baseDir, "static/icon.png");
        const ogImageDefaultPath = `https://${cfg.baseUrl}/static/og-image.png`;
        // "static/social-images/slug-filename.md.webp"
        const ogImageGeneratedPath = `https://${cfg.baseUrl}/${fileDir.replace(`${ctx.argv.output}/`, "")}/${fileName}.${extension}`;
        // Use default og image if filePath doesnt exist (for autogenerated paths with no .md file)
        const useDefaultOgImage = fileName === undefined || !cfg.generateSocialImages;
        // Path to og/social image (priority: frontmatter > generated image (if enabled) > default image)
        let ogImagePath = useDefaultOgImage ? ogImageDefaultPath : ogImageGeneratedPath;
        // TODO: could be improved to support external images in the future
        // Aliases for image and cover handled in `frontmatter.ts`
        const frontmatterImgUrl = fileData.frontmatter?.socialImage;
        // Override with default og image if config option is set
        if (fileData.slug === "index") {
            ogImagePath = ogImageDefaultPath;
        }
        // Override with frontmatter url if existing
        if (frontmatterImgUrl) {
            ogImagePath = `https://${cfg.baseUrl}/static/${frontmatterImgUrl}`;
        }
        // Url of current page
        const socialUrl = fileData.slug === "404" ? url.toString() : joinSegments(url.toString(), fileData.slug);
        return (_jsxs("head", { children: [_jsx("title", { children: title }), _jsx("meta", { charSet: "utf-8" }), cfg.theme.cdnCaching && cfg.theme.fontOrigin === "googleFonts" && (_jsxs(_Fragment, { children: [_jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }), _jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }), _jsx("link", { rel: "stylesheet", href: googleFontHref(cfg.theme) })] })), _jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }), _jsx("meta", { name: "og:site_name", content: cfg.pageTitle }), _jsx("meta", { property: "og:title", content: title }), _jsx("meta", { property: "og:type", content: "website" }), _jsx("meta", { name: "twitter:card", content: "summary_large_image" }), _jsx("meta", { name: "twitter:title", content: title }), _jsx("meta", { name: "twitter:description", content: description }), _jsx("meta", { property: "og:description", content: description }), _jsx("meta", { property: "og:image:type", content: `image/${extension}` }), _jsx("meta", { property: "og:image:alt", content: description }), !frontmatterImgUrl && (_jsxs(_Fragment, { children: [_jsx("meta", { property: "og:image:width", content: fullOptions.width.toString() }), _jsx("meta", { property: "og:image:height", content: fullOptions.height.toString() })] })), _jsx("meta", { property: "og:image:url", content: ogImagePath }), cfg.baseUrl && (_jsxs(_Fragment, { children: [_jsx("meta", { name: "twitter:image", content: ogImagePath }), _jsx("meta", { property: "og:image", content: ogImagePath }), _jsx("meta", { property: "twitter:domain", content: cfg.baseUrl }), _jsx("meta", { property: "og:url", content: socialUrl }), _jsx("meta", { property: "twitter:url", content: socialUrl })] })), _jsx("link", { rel: "icon", href: iconPath }), _jsx("meta", { name: "description", content: description }), _jsx("meta", { name: "generator", content: "Quartz" }), css.map((resource) => CSSResourceToStyleElement(resource, true)), js
                    .filter((resource) => resource.loadTime === "beforeDOMReady")
                    .map((res) => JSResourceToScriptElement(res, true))] }));
    };
    return Head;
});
