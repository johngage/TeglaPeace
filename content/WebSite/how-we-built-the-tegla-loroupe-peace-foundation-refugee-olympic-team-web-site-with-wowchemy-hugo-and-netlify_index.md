---
title: How To Build the Tegla Loroupe Peace Foundation Refugee Olympic Team Web
  Site with Wowchemy, Hugo, and Netlify
date: 2021-02-09T03:54:39.616Z
subtitle: Overview of Major Components,  followed by Step By Step Guide
summary: >-
  The **Tegla Loroupe Peace Foundation** website is now built with content
  created with **Hugo** components, which are assembled in **Wowchemy**
  templates. All content is stored on **Github.** This content is published by
  **Netlify. Netlify** uses, or will soon use, the ***teglapeace.org*** domain
  name purchased from **Cheapnames.**




  **For an overview of all of this, see *[Learn Enough Custom Domains To Be Dangerous](https://www.learnenough.com/custom-domains-tutorial/)***


  **Wowchemy** is a set of templates for creating and publishing a *static* website specialized for academic research and research groups. *Static* just means that the complete website is built each time you finish editing it, and all the website pages, now in their final HTML form, are published on the Internet, so that your website doesn't need any backend data base, or complicated backend programs to run, as Wordpress, or Wix, or other costly services require.


  The templates are built using **Hugo** components--pages, posts, books, biographies, events, images, galleries--software programs that convert various kinds of content into HTML pages ready to publish. **Hugo** establishes the framework for the website--the directories and subdirectories that contain text, images, bibliographic entries, biographical entries, and the software programs that control their appearance--Javascript programs, configuration files, CSS files, HTML files, scripting language programs.


  Interaction with these directory structures, templates, and software components can be very high-level, dealing only with editing text and uploading images, or can go deeper, allowing the fine-tuning of individual components.


  This discussion begins at the high level, allowing immediate editing of an existing web site, and explores the expansion and modification of the web site (and troubleshooting any errors) by a series of examples.
draft: false
diagram: true
---
# How the Tegla Loroupe Peace Foundation website was rebuilt in February, 2021
```mermaid
graph LR;
    A-->B;
    B-->C;
    C-->A;

graph TD;
  subgraph Local Computer
    Local-Computer -->|Push| Github
    LocalAtomEditor -->|Edit| GithubEditor
    All-Content-On-Local-Computer -->|Sync| Mediated-and-Synchronized-By-Git
  end

  subgraph GitHub
    Github -->|Trigger Build| Netlify
    GithubEditor -->|Edit| LocalAtomEditor
    All-Content-on-Github -->|Trigger Build| Rendered-Into-Final-HTML-Sent-To-Netlify
  end

  subgraph Netlify
    Netlify -->|Deploy| Rendered-Into-Final-HTML-Sent-To-Netlify
    NetlifyCMS -->|Edit| GithubEditor
  end
```

## Quick Overview

The **Tegla Loroupe Peace Foundation** website is now built with content created with **Hugo** components, brought together in **Wowchemy** templates. All content is stored on **Github.** This content is published by **Netlify. Netlify** uses, or will soon use, the ***teglapeace.org*** domain name purchased from **Cheapnames.**

Day-to-day content is edited using a cloud editor named **NetlifyCMS**, with a nice "WYSIWYG" or "what you see is what you get" interface. Just log in to **NetlifyCMS**, and the web interface shows all the content. As you edit, it synchronizes with the content repository at **Github**.

**For an overview of all of this, see *[Learn Enough Custom Domains To Be Dangerous](https://www.learnenough.com/custom-domains-tutorial/)***. In the example, it uses **Cloudflare** rather than **Netlify**; we may move to **Cloudflare** in the future.

## ***Components***
### Wowchemy

**Wowchemy** is a set of software programs or templates for creating and publishing a *static* website specialized for research groups and teams. *Static* just means that the complete website is rebuilt each time you finish editing it; all your changes are turned into new HTML, and all the website pages, now in their final HTML form, are published on the Internet immediately.

1. Here is a description by George Cushen of his **Wowchemy** project to build a framework for creating a static web site in a short [outline](https://georgecushen.com/create-your-website-with-hugo/) published in December, 2020.

    Here's his promise: *In this guide, you’ll learn **how to create a free website for your online portfolio, resumé, or your team/organization using just your web browser**.*

Read his [outline](https://georgecushen.com/create-your-website-with-hugo/).  In what follows, I will describe how we use his Wowchemy elements, how they fit together,  what works, what is still under development, and what requires a deeper understanding of how the components are built and interact.  I will link to online tutorials on software development and developer tools.

A *static* website doesn't need any backend data base, or complicated backend programs to run, as Wordpress, or Wix, or other costly services require.  There's no back-and-forth conversation across the Internet. It's just instantly accessible. And more secure, since there aren't any programs interacting with the user.

The templates are built using **Hugo** components--programs that make pages, posts, books, biographies, events, images, galleries--pre-written software programs that convert various kinds of content into HTML pages ready to publish. **Hugo** establishes the framework for the website--the directories and subdirectories that contain text, images, bibliographic entries, biographical entries, and the software programs that control their appearance--Javascript programs, configuration files, CSS files, HTML files, scripting language programs.

Interaction with these directory structures, templates, and software components can be very high-level, dealing only with editing text and uploading images, or can go deeper, allowing the fine-tuning of individual components.

This discussion begins at the high level, allowing immediate editing of an existing web site, and explores the expansion and modification of the web site (and troubleshooting any errors) by a series of examples.

{{% callout note %}} Here's the full documentation for [Wowchemy](https://wowchemy.com/docs/){{% /callout %}}



I have used his set of tools to recreate the **teglapeacefoundation.org** website as it existed in mid-2019, using snapshots taken by the Webarchive Foundation.

2. Read ***[Learn Enough Custom Domains To Be Dangerous](https://www.learnenough.com/custom-domains-tutorial/).***

## Overall structure of the TLPF website

### Where is the content?

The master copy of the content is held in the cloud, in a massive site called **Github.** Millions of developers keep their code and their content in **repositories** in **Github.**  Microsoft purchased **Github** in 2018, as a service to software developers. There are several rivals, but all use the same basic tools, named **Git,** to keep track of changing content.  These tools are called **Version Control** tools.  They allow software developers to keep track of every change in the text of what they write, with the power to revert to older versions if newer versions prove to contain mistakes. These **Git** tools allow teams of writers to work on a common text, editing together, discussing changes, and deciding what final text to adopt.

**Repositories** for personal use at **Github** are free, and for the moment, **TLPF** files are in a repository owned by me.  I will create a **TLPF** repository owned by **TLPF.**



### How can I edit the content?



###### Editing with the Netlify Content Management System: NetlifyCMS Editor

The content is pulled from **Github** by the web publishing site named **Netlify.  Netlify** has an on-line editor, named **Netlify Content Management System,**  or **NetlifyCMS**, which allows you to edit all the text, upload images, change details of what is published for biographies, or posts, or blog entries, or events, and, generally, manage all of the site content.  This is where most of the day-to-day work will take place.  As you change the content on **NetlifyCMS**, it automatically updates the main repository at **Github**, so everything remains synchronized.

Editing in **NetlifyCMS** is simple---what you see is what you get. There are a few simple visual commands, almost exactly like editors used for email.  The text files are called "markdown", and their names end in ".md".  **NetlifyCMS** stores them as ".md", but shows you what looks like rich text, like Microsoft Word.

Occasionally, you will want to modify something that **Netlify CMS** does not let you change. There is a separate editor at **Github** that allows you to change almost everything. Editing is more complicated on **Github**, but all edits automatically synchronize with **NetlifyCMS**.

##### Editing at Github with the Github Editor

First, you need to understand the arrangement of directories at **Github** that contain the content. Most content is in the directory ***content.*** Text files for posts or news entries are in the directory ***content/posts.*** Text files for biographies of people are in the directory ***content/authors.*** Text files for events are in ***content/events.***

Everything is arranged in directory and file hierarchies, as in any Unix system. You must be familiar with how that works.  There are two areas to be comfortable with: the **Command LIne**, and the **Development Environment.** For an overview, see *[Learn Enough Command Line To Be Dangerous](https://www.learnenough.com/command-line-tutorial/basics).* And the [Learn Enough Dev Environment to Be Dangerous](https://www.learnenough.com/dev-environment-tutorial) tutorial, but skip building the Amazon Cloud and the Ruby stuff. The full courses--and all of them are great---cost money--but you can read enough of each of them to get what you need. The editing course--*[Learn Enough Text Editor To Be Dangerous](https://www.learnenough.com/text-editor)--*teaches how to use an extremely powerful editor, ***Atom,*** which is integrated with the fundamental **Version Control** tool, **Git**, covered in the course, *[Learn Enough Git To Be Dangerous](https://www.learnenough.com/git)*.

##### Editing locally, with Atom and Git

Which brings us to the third way to edit all content: using the **Atom** editor on your local computer.

I use Macintosh, which is a Unix computer.  I open **Atom** in the directory in my Unix file system that holds all of the sub-directories of my web site.  **Atom** calls this directory the "Project".  When you open the Project, you see all the subdirectories, and all their contents, all the files inside them. They are exactly the same as the directories on the **Github** site, with exactly the same contents.  What keeps them exactly the same is the **Git** **Version Control** software, that tracks every change to every file, assembles them into a "stage", then commits the changes to a master version, and pushes them across the network to update the **Github** version.

After I make a change to the local content file on my local computer, using **Atom**, I save it.  **Atom** keeps track of the change, and asks me to "stage" it, or put it in a ready state to be saved across the network to its **Github** twin. After I save, and stage, any other changes I want, I "commit" all  to  the final set of changed files, locally, with a message documenting what I've done. Now, with my local changes all assembled, I "push" all the changes across the network to **Github.**

If I make changes  across the network in the editor at **Github,** to the files at **Github,** then I need to bring the new versions from **Github** to my local machine, to update the local files.  I tell **Atom**, locally,  to "pull" any changes from **Github.** **Atom** compares the timestamp of the local files to the timestamp of the remote files, and if the remote file version is newer, it pulls the remote version to the local computer, and makes all the necessary changes to ensure that the files are identical.

**Git** always checks for the newest version, and won't allow an older version to overwrite a newer version.  It will tell you if you can or cannot "push" or "pull".

For greatest control of file names, directory names, and file content, **Atom** is easiest.  You can change file names, move files around, see the content of image files, and have a complete view of your entire site. In particular, you use **Atom** to edit the specialized "configuration" files that describe to **Hugo**  and **Wowchemy** how to make all the different components work with each other. With some effort, you can do most of that in the **Github** editor, except edit the "configuration" files.  In **NetlifyCMS,** you can't change file names or move files around, or even see the "configuration" files, but you do have the "what you see is what you get" interface.  Most content editing should take place in **NetlifyCMS.**

### Overall Site Maintenance

#### How can I edit the configuration files that control the overall look? TOML and YAML?

#### What to do with the Hugo software that converts markdown files to HTML?

When you commit a change to **Github**, Hugo goes to work, updating everything, changing all the files from Markdown to HTML, inserting headers and links, and finally writing all the finished HTML pages to a directory you don't see, named "public", which is sent to **Netlify** to publish.

Hugo shortcodes

Making sense of how a Hugo template works





### Possible Site Migration from Netlify to Cloudshare
