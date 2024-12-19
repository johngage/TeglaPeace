---
title: "Image Gallery"
tags:
  - gallery
---

# Our Image Gallery

Here are images from our assets/media directory:

<div class="image-gallery">
  <script>
    const fs = require('fs');
    const imageFiles = fs.readdirSync('../assets/media');
    imageFiles.forEach(file => {
      document.write(`<img src="../assets/media/${file}" width="300">`);
    });
  </script>
</div>

 ![tl](../assets/media/tlhome.jpg)