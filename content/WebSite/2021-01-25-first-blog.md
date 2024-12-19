---
title: Setting up teglapeace.org on Netlify as a static site generated web site,
  or SSG
date: 2021-01-27T22:07:45.581Z
description: "try to see content in Academic "
subtitle: Enable cloud editing using the Netlify CMS, a form-based editing tool
summary: >-
  What we've done so far, as described in much greater detail in the Book under
  "Courses"


  Get domain name from Cheapnames: teglapeace.org


  1. Set up Github repository to hold content in johngage/tlpf-1.

  2. Generate content in a content framework using the Hugo website generator together with the free, open source Wowchemy Website Builder, either on local machine or on Github.

  3. Link Github repository to Netlify to  serve as web server. (could use Github Pages or Cloudflare) following the Wowchemy instructions.

  4. Link Github repository to local machine, to mirror development environments using Git.

  5. Link the Netlify publishing site to the domain name teglapeace.org
---
The first round of building the Netlify site used Wowchemy to create the Github repository, and to link it to Netlify.  Then, configuring the Netlify CMS editor, building a config.yml file in the Github site to allow the NetlifyCMS editor to see all the Academic content on the Github site.

But that file was missing.

So I downloaded it from a Wowchemy Github site that displays a sample site. Suddenly, I could see the home page, see the authors, see people.  The YML file contains sections that refer to each directory of content  inside the  content directory inside the Wowchemy structured repository on Github. Without that section, the CMS cannot see the content. I added sections in the config.yml file for blog, for book, etc.

Now to add new images to existing pages.

Separately, I downloaded an Academic site to my computer; installed Hugo, and executed "hugo server", which created a site, and put it up on a web page at "localhost:49840".  It shows a 2019 page, so I expect its config.yml file to be old.

There are occasional NetlifyCMS access errors. Fix them by looking at the config /_default/config.toml file to be sure the branch is "main". Then, go to the Netlify dashboard, find the Identity section, and update the Git Gateway token.
Git Gateway Error: Please ask your site administrator to reissue the Git Gateway token.

In Swahili:
Ratiba ya kwanza ya kujenga tovuti ya Netlify iliyotumia Wowchemy kuunda repositori ya Github na kuilenga kwenye Netlify. Halafu, kwa kusanidi mhariri wa Netlify CMS, kujenga faili ya config.yml kwenye tovuti ya Github ili kuruhusu mhariri wa Netlify CMS kuona yaliyomo yote ya kitaaluma kwenye tovuti ya Github.

Lakini faili hiyo ilikosekana.

Kwa hivyo, niliipakua kutoka kwenye tovuti ya Github ya Wowchemy ambayo inaonyesha mfano wa tovuti. Ghafla, niliweza kuona ukurasa wa nyumbani, kuona waandishi, kuona watu. Faili ya YML ina sehemu zinazohusiana na kila saraka ya yaliyomo ndani ya saraka ya yaliyomo ndani ya repositori iliyopangiliwa na Wowchemy kwenye Github. Bila sehemu hiyo, CMS haiwezi kuona yaliyomo. Niliongeza sehemu katika faili ya config.yml kwa blogu, vitabu, n.k.

Sasa ni kuongeza picha mpya kwenye kurasa zilizopo.

Kando na hayo, nilipakua tovuti ya Academic kwenye kompyuta yangu; nikainstalli Hugo na kutekeleza "hugo server", ambayo iliumba tovuti na kuionyesha kwenye ukurasa wa wavuti kwa "localhost:49840". Inaonyesha ukurasa wa 2019, kwa hivyo ninatarajia faili yake ya config.yml kuwa ya zamani.

Kuna makosa ya mara kwa mara ya ufikiaji wa Netlify CMS. Kuyatatua kwa kutazama faili ya config /_default/config.toml ili kuhakikisha tawi ni "main". Kisha, nenda kwenye jopo la Netlify, tafuta sehemu ya Utambulisho, na sasisha kitufe cha Git Gateway.
Kosa la Git Gateway: Tafadhali mwombe msimamizi wako wa tovuti atoe upya kitufe cha Git Gateway.
