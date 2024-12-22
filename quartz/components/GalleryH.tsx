import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import fs from "fs"
import path from "path"

const GalleryH: QuartzComponent = ({ fileData, displayClass }: QuartzComponentProps) => {
  const mediaPath = path.join(process.cwd(), "content", "assets", "media")
   // Read captions file
   let captions = {}
   try {
     const captionsFile = path.join(mediaPath, "captions.json")
     const captionsContent = fs.readFileSync(captionsFile, 'utf8')
     captions = JSON.parse(captionsContent)
   } catch (e) {
     console.log('No captions file found or error reading it:', e)
   }
  
  
  const files = fs.readdirSync(mediaPath)
  const imageFiles = files.filter(file => 
    // Include all images EXCEPT those starting with 'noshow_'
    !file.startsWith('noshow_') &&
    file.toLowerCase().endsWith('.jpg') || 
    file.toLowerCase().endsWith('.png')
  )

  return (
    <div class={classNames(displayClass, "image-gallery-horizontal")}>
      {imageFiles.map((file, index) => (
        <div key={file} class="gallery-slide">
          <img 
            src={`../assets/media/${file}`} 
            alt={captions[file]?.title || file}
            class="gallery-image"
            style={{ display: index === 0 ? 'block' : 'none' }}
          />
   <div class="gallery-caption" style={{ display: index === 0 ? 'block' : 'none' }}>
            <div class="caption-title">{captions[file]?.title || file}</div>
            {captions[file]?.location && (
              <div class="caption-details">
                {captions[file].location}
                {captions[file]?.description && ` - ${captions[file].description}`}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}

GalleryH.css = `
  .image-gallery-horizontal {
    width: 100%;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    position: relative;
  }
  .gallery-slide {
    position: absolute;
    width: 450px;
    text-align: center;
  }
  .gallery-image {
    width: 100%;
    height: 300px;
    object-fit: contain;
    object-position: center;
  }
  .gallery-caption {
    position: absolute;
    bottom: -80px;
    left: 0;
    right: 0;
    text-align: center;
    background: rgba(255,255,255,0.9);
    padding: 10px;
    transition: opacity 0.5s ease;
  }
  .caption-title {
    font-weight: bold;
    margin-bottom: 5px;
  }
  .caption-details {
    font-size: 0.9em;
    color: #666;
  }
`

GalleryH.afterDOMLoaded = `
  console.log('Starting gallery initialization');
  const slides = document.querySelectorAll('.gallery-slide');
  console.log('Found slides:', slides.length);
  let currentIndex = 0;
  
  function showSlide(index) {
    slides.forEach(slide => {
      slide.querySelector('.gallery-image').style.display = 'none';
      slide.querySelector('.gallery-caption').style.display = 'none';
    });
    slides[index].querySelector('.gallery-image').style.display = 'block';
    slides[index].querySelector('.gallery-caption').style.display = 'block';
  }

  showSlide(0);
  
  setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
  }, 2000);
`

export default (() => GalleryH) satisfies QuartzComponentConstructor