import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import fs from "fs"
import path from "path"

const GalleryV: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
//if (fileData.slug !== "gallery/index") {
//  return null
//

// Add this code
const mediaPath = path.join(process.cwd(), "content", "assets", "media")
const files = fs.readdirSync(mediaPath)
const imageFiles = files.filter(file => 
  file.toLowerCase().endsWith('.jpg') || 
  file.toLowerCase().endsWith('.png')
  )
  
    return (
      <div class={classNames(displayClass, "image-gallery-vertical")}>
        {imageFiles.map(file => (
          <div class="gallery-item" key={file}>
            <img src={`../assets/media/${file}`} alt={file} />
            <div class="caption">{file}</div>
          </div>
        ))}
      </div>
    )
  }
  
  GalleryV.css = `
  .image-gallery-vertical {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
    padding: 1rem;
  }
  
  .image-gallery-vertical .gallery-item {
    text-align: center;
  }
  
  .image-gallery-vertical img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
  `
  
  export default (() => GalleryV) satisfies QuartzComponentConstructor