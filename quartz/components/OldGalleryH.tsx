import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import fs from "fs"
import path from "path"
import { useEffect, useState } from "preact/hooks"  // Changed to preact/hooks


const GalleryH: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const [currentIndex, setCurrentIndex] = useState(0) //added

  const mediaPath = path.join(process.cwd(), "content", "assets", "media")
  const files = fs.readdirSync(mediaPath)
  const imageFiles = files.filter(file => 
    file.toLowerCase().endsWith('.jpg') || 
    file.toLowerCase().endsWith('.png') ||
    file.toLowerCase().endsWith('.jpeg') || 
    file.toLowerCase().endsWith('.webp')
  )

  console.log('Found images:', imageFiles)
  console.log('Current index:', currentIndex)
  
  
  // Auto-scroll effect
  useEffect(() => {
    console.log('Setting up timer')

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === imageFiles.length - 1 ? 0 : prevIndex + 1
      )
    }, 2000)  // Change image every 2 seconds

    return () => clearInterval(timer)  // Cleanup on unmount
  }, [imageFiles.length])


  return (
    <div class={classNames(displayClass, "image-gallery-horizontal")}>
      <img 
        src={`../assets/media/${imageFiles[currentIndex]}`} 
        alt={imageFiles[currentIndex]}
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  )  
}

GalleryH.css = `
  .image-gallery-horizontal {
    display: flex;
    flex-wrap: nowrap;
    overflow-x: auto;
    gap: 1rem;
    padding: 1rem;
  }
`  
//.image-gallery-horizontal .gallery-item {
//  flex: 0 0 300px;
//  text-align: center;
//}

//.image-gallery-horizontal img {
//  width: 100%;
//  height: 200px;
//  object-fit: cover;
//}

// Add this initialization script
GalleryH.afterDOMLoaded = `
  console.log('Gallery initialized');
`
export default (() => GalleryH) satisfies QuartzComponentConstructor