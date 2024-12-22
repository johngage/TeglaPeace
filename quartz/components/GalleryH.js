import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { classNames } from "../util/lang";
import fs from "fs";
import path from "path";
const GalleryH = ({ fileData, displayClass }) => {
    //  console.log('Current slug:', fileData.slug)
    //  console.log('Media path:', path.join(process.cwd(), "content", "assets", "media"))
    //  if (fileData.slug !== "gallery/index") {
    //    return null
    //  }
    const mediaPath = path.join(process.cwd(), "content", "assets", "media");
    const files = fs.readdirSync(mediaPath);
    const imageFiles = files.filter(file => file.toLowerCase().endsWith('.jpg') ||
        file.toLowerCase().endsWith('.png') ||
        file.toLowerCase().endsWith('.jpeg') ||
        file.toLowerCase().endsWith('.webp'));
    return (_jsx("div", { class: classNames(displayClass, "image-gallery-horizontal"), children: imageFiles.map(file => (_jsxs("div", { class: "gallery-item", children: [_jsx("img", { src: `../assets/media/${file}`, alt: file }), _jsx("div", { class: "caption", children: file })] }, file))) }));
};
GalleryH.css = `
.image-gallery-horizontal {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 1rem;
  padding: 1rem;
}

.image-gallery-horizontal .gallery-item {
  flex: 0 0 300px;
  text-align: center;
}

.image-gallery-horizontal img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
`;
export default (() => GalleryH);
