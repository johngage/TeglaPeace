---
title: "How the TLPF website is built, and how Nairobi TLPF staff build and edit"
subtitle: "What our Webmaster needs to know"
date: 2021-01-30
---


# How the **Tegla Loroupe Peace Foundation** website is structured

## Note: Netlify has now EOL'd the CMS system, that allowed easy editing. There is a new system, DeCap CMS, I'm trying

Editing is in the cloud, supported by our web publishing partner, **Netlify**. That's why our current web address is [https://teglaloroupepeacefoundation.netlify.app](https://teglaloroupepeacefoundation.netlify.app/)/

To access the editor, you log in to **Netlify**.  We'll set that up.

You are presented with *NetlifyCMS*, the content-management system  (CMS) supported by **Netlify**.  The interface displays a form for each page, allowing you to edit the text, the title, and the images displayed on the page.

*NetlifyCMS* is structured by an outline created by **Wowchemy**, a non-profit open source provider of tools to build websites.

Content is divided into categories: homepage, posts, blogs, slides, books, projects, events, publications, and content, and the categories match the physical arrangement of the directories that hold the content.  That is, each of these categories is a directory inside the overall directory named "content".  For example, all the posts are inside "content/post".  The homepage is inside "content/home". The events are inside "content/events".

Each time we create a new post, for example, the CMS system creates a new folder inside "content/post", with the name of the title of the post, and it puts the text of the post in a file named "index.md", and the images for the post alongside index.md.

**Wowchemy** sometimes refers to the online editing system as "*Wowchemy CMS*", because they designed the structure, the arrangement of directories and folders that hold the content, and the software tools to create the web pages.

#### Here's the overall plan:

1. Editing content interacts with the pages visible in the *NetlifyCMS*.
2. As content is added or changed, *NetlifyCMS* keeps track. Finally, when you are ready to "Publish", you click on the "Publish" button, and *NetlifyCMS* gathers everything together, and moves it to where is is permanently stored.
3. All content is permanently stored in an independent site, named **Github.** Currently, it's in what's called a **repository** in my account at **Github**, but we will create a TLPF repository, governed by TLPF. It's all free.  Millions of people use **Github** to store all their software. Microsoft bought them a few years ago, and happily have not ruined them.
4. Since all the content is there, you can also edit it using the **Github** editor, which is a different discussion.  Since the **Github** repository is linked to the *NetlifyCMS*, any changes made to the content at **Github** is instantly visible at the *NetlifyCMS*
5. I'm making an outline course for the learning process for our **TLPF Webmaster.** You can get a quick idea from this video that describes what someone needs to know to be able to get a job as a Webmaster.

Here's the video to watch, to get the overall idea of what's needed: [Web Development 2021](https://www.youtube.com/watch?v=VfGW0Qiy2I0&ab_channel=TraversyMedia)

And, as a practical matter, this could be the beginning of a course for the athletes who want to gain skills that can get them jobs.

**Here's a tiny taste of how a page is built**

Write text in the text field for a page.  When you want to insert an image, put in this line, making the appropriate changes to the words inside the double curly brackets: {{ put words here  }}. Things  inside curly brackets can be very complicated and powerful.  They're called "shortcodes".   I'll find the complete listing of them.  They combine into "widgets".

Here's an  example. Put the words below inside curly brackets: {{ words }}. When you do, it will make something happen.

words: < figure library="true" src="kap.race.2019.png" title="Kapenguria Peace Race 2018" >

This shortcode is the result: 
<hr>

{{< figure library="true" src="kap.race.2019.png" title="Kapenguria Peace Race 2018" >}}


<hr>

Figure one: 

{{% figure src="/assets/media/kap.race.2019.png"  title="KRace in /assets/media"  %}}

<hr>
  
Figure 2: 

{{< figure src= "/assets/media/kap.race.2019.png" title="KRace in media" >}}

 <hr>
Figure 3:  

{{% figure src="./gallery/boxing.jpg" title="Box in KTC" %}}

<hr>

Another  image, putting < figure library="true" src="tl.logo.png" title="A caption" > inside {{ }}

Figure 4: 

{{< figure library="true" src="tl.logo.png" title="A test caption for image in assets/media" >}}

<hr>
Direct calls to images


![Nature](./gallery/nature.png "Nature")

![tl.logo](/assets/media/tl.logo.png)

The curly brackets are the magical commands that the Wowchemy software looks for to insert images, or create a gallery of photos, or create a link to a Twitter account, or a dozen other things.

##### Here are more figure examples:

{{< figure src="./gallery/boxing.jpg" title="In folder" >}}

{{< figure src="./gallery/china-podium.jpg" title="In subfolder" >}}



##### How are images displayed?

The important thing for the Wowchemy software to know is exactly where the image is stored. It might be in the same folder as the text, which is in a file named "index.md", so the "src=tl.logo.png" means the image is there, next to "index.md" , or it might be in a special folder just for images available to all pages, which is why the words 'library="true" 'are inside the curly brackets.
{{% callout note %}} 

Found the source code for gallery. It's either local or static/media. Here's location.

https://github.com/wowchemy/wowchemy-hugo-modules/blob/main/wowchemy/layouts/shortcodes/gallery.html There's a second one: 


{{% /callout %}}

Here's an  illustration of the local "gallery" shortcode.  Images  are not the same size.

This document is in content/post/my-first/index.md . As a "leaf bundle", used in Hugo, with index.md, it should allow access to anything at any directory level in the same directory, as opposed  to "Branch Bundle", with _index.md, with access only in the directory level **of** the branch bundle directory i.e. the directory containing the `_index.md` ([ref](https://discourse.gohugo.io/t/question-about-content-folder-structure/11822/4?u=kaushalmodi)). 

gallery does not work with _index.md


[comment] # ( {{< gallery >}} )


There is a directory "gallery" with six  images:  asia.group.jpg, boxing.jpg, and china-podium.jpg, and latimes, nature, and science.  The same three  are inside my-first directory at the same level as index.md.  How to show them  as a gallery?

Without the album citation, it worked, but needed frontal material  to name  the pictures.

This succeeded in displaying similarly sized images that reside in static/media, and are specifically named in the yml front material, with the odd assignment of an "album" whose name seems to be required to be "gallery".

Now, try this--find images in leaf folder.

Since the front material is the  same, it's either one way or the other way. they do not coexist.

{{% callout note %}} If you are not familiar with the International System of Units (SI) I recommend you to check out this page of the Bureau International des Poids et Mesures (BIPM). {{%  /callout  %}}

end comment

