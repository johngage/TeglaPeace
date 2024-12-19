---
# This is a template example; change the details below for each meeting; add images and links to facebook in main page, below front material
draft:  true
profile:  false
#
title: Meeting with Nyamira Governor

event: Governor Meeting
event_url: https://example.org

location: TLPF Main Office, Nairobi
address:
  street: Leroghi Lane, off Mbaazi Road
  city: Lavington, Nairobi
  region: Nairobi
  postcode: 'P.O. Box 10578'
  country: Kenya

summary: Meeting with Governor Amos Nyaribo of Nyamira County
abstract: 'We were thrilled to host His Excellency Amos Nyaribo, the Governor of Nyamira County, along with Ambassador Tegla Loroupe. They engaged in a fruitful discussion about sports and athletics, emphasizing their vital role in youth and community programs, particularly in promoting peace. '

# Talk start and end times.
#   End time can optionally be hidden by prefixing the line with `#`.
date: '2024-06-21T10:00:00Z'
date_end: '2024-06-21T13:00:00Z'
all_day: false

# Schedule page publish date (NOT talk date).
publishDate: '2024-06-21T20:00:00Z'

authors: []
tags: []

# Is this a featured talk? (true/false)
featured: false

image:
#  caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/bzdhc5b3Bxs)'
  caption:  "Governor Nyaribo"
  focal_point: Right



url_code: 'https://www.facebook.com/photo/?fbid=863621819127222&set=pcb.863622015793869&__cft__[0]=AZWmZqq1GgqKT-WHLF6osg6XhWQMVIriav_nwqaFPzwhzcmeHyQrn57pEhB-EdpvC5ZAzEtbcj5qGq-aeR-1iJBOwYtMupZxS91USyGL-IbXbaeaOj3zQ3kXEiJCEJ0r4H1ydMfwUtohJArdbLkyj5Al8m7O7mjWK4BYT4mViYz9mFtok5Dg28PUUv1eBFd-iyXrN4olEqG78s8xLJwHQexA&__tn__=*bH-R'
url_pdf: ''
url_slides: ''
url_video: ''

# Markdown Slides (optional).
#   Associate this talk with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides:

# Projects (optional).
#   Associate this post with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `projects = ["internal-project"]` references `content/project/deep-learning/index.md`.
#   Otherwise, set `projects = []`.
projects:
---
## Example 1

---
Further event details, including page elements such as image galleries, can be added to the body of this page.

So far, all images must be imported locally to be dispayed; remote url's only execute when clicked. 

---

First, use standard markdown references to the local .jpg file in the branch folder, by using a \! in front of \[\]\(\) notation.

![Governor and Ambassador](featured.jpg "Governor Nyaribo and Ambassador Tegla Loroupe")
![Governor and Ambassador](Nyaribo_2.jpg "Governor Nyaribo and Ambassador Tegla Loroupe")

Second, use the "Short Code" notation, using the \{\{ \}\} notation surrounding a Hugo command, using the local branch folder name for the .jpg file; this lets you add a caption:
{{< figure src="Nyaribo_3.jpg" caption="A caption" numbered="true" >}}

Third, use the "url_code" entry in front matter; here in this page, it appears in this frontmatter, and it makes a button, named "code", that links to the facebook URL for the image.

Fourth, use the facebook URL in markdown for an external link; the link appears, not the image:

[Link to Facebook URL](https://www.facebook.com/photo/?fbid=863621819127222&set=pcb.863622015793869&__cft__[0]=AZWmZqq1GgqKT-WHLF6osg6XhWQMVIriav_nwqaFPzwhzcmeHyQrn57pEhB-EdpvC5ZAzEtbcj5qGq-aeR-1iJBOwYtMupZxS91USyGL-IbXbaeaOj3zQ3kXEiJCEJ0r4H1ydMfwUtohJArdbLkyj5Al8m7O7mjWK4BYT4mViYz9mFtok5Dg28PUUv1eBFd-iyXrN4olEqG78s8xLJwHQexA&__tn__=*bH-R)

---
Fifth :
At the facebook site, copy the image address, not the url. This works in standard markdown notation for local viewing: \!\[\]:

![](https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/448813469_863622062460531_7561293442530742389_n.jpg?stp=dst-jpg_p960x960&_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Wu947I5VTF4Q7kNvgEYowj1&_nc_ht=scontent-lax3-1.xx&cb_e2o_trans=q&oh=00_AYBh_6RhnyIiH0R9dEr11X89gPlIhYDPgUdyhfbj-cLjAw&oe=668745E3)

---


Other elements can be linked here: 
---

Slides can be added in a few ways:

- **Create** slides using Wowchemy's [_Slides_](https://docs.hugoblox.com/managing-content/#create-slides) feature and link using `slides` parameter in the front matter of the talk file
- **Upload** an existing slide deck to `static/` and link using `url_slides` parameter in the front matter of the talk file
- **Embed** your slides (e.g. Google Slides) or presentation video on this page using [shortcodes](https://docs.hugoblox.com/writing-markdown-latex/).

