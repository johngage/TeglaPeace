import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { classNames } from "../util/lang";
import fs from "fs";
import path from "path";
const Gallery = ({ fileData, displayClass }) => {
    //  if (fileData.slug !== "gallery/index") {
    //    return null
    // Path to media directory relative to where the script runs
    const mediaPath = path.join(process.cwd(), "content", "assets", "media");
    // Read and filter image files
    const files = fs.readdirSync(mediaPath);
    const imageFiles = files.filter(file => file.toLowerCase().endsWith('.jpg') ||
        file.toLowerCase().endsWith('.png') ||
        file.toLowerCase().endsWith('.jpeg') ||
        file.toLowerCase().endsWith('.webp'));
    return (_jsx("div", { class: classNames(displayClass, "image-gallery"), children: imageFiles.map(file => (_jsxs("div", { class: "gallery-item", children: [_jsx("img", { src: `../assets/media/${file}`, alt: file }), _jsx("div", { class: "caption", children: file })] }, file))) }));
};
Gallery.css = `
.image-gallery {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1rem;
  padding: 1rem;
}

.gallery-item {
  text-align: center;
  border: 1px solid #eee;
  padding: 0.5rem;
  border-radius: 4px;
}

.gallery-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 2px;
}

.caption {
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #666;
}
`;
export default (() => Gallery);
