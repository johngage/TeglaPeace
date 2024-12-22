import { jsx as _jsx } from "preact/jsx-runtime";
import { classNames } from "../util/lang";
import fs from "fs";
import path from "path";
const Gallery = ({ displayClass }) => {
    const mediaPath = path.join(process.cwd(), "content", "assets", "media");
    const files = fs.readdirSync(mediaPath);
    const imageFiles = files.filter(file => file.endsWith('.jpg') ||
        file.endsWith('.png') ||
        file.endsWith('.jpeg'));
    return (_jsx("div", { class: classNames(displayClass, "image-gallery"), children: imageFiles.map(file => (_jsx("div", { class: "gallery-item", children: _jsx("img", { src: `../assets/media/${file}`, alt: file }) }))) }));
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
}
.gallery-item img {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.caption {
  margin-top: 0.5rem;
  font-size: 0.9rem;
}


`;
export default (() => Gallery);
