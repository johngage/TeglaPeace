import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"
import { QuartzComponent, QuartzComponentProps } from "./quartz/components/types"
import TopNavigation from "./quartz/components/TopNavigation"
import Gallery from "./quartz/components/Gallery"


// Shift order to change display: Shared, single page

// Created new component: TopNavigation, with hardwired dirctories to display menu
// at the top of every page
// Insert it in Shared Layout for components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [
    TopNavigation(), 
    Component.MobileOnly(Component.Spacer()),
//   Component.Breadcrumbs(),
 ],

  afterBody: [],
  footer: Component.Footer({
    links: {
//      GitHub: "https://github.com/jackyzha0/quartz",
//      "Discord Community": "https://discord.gg/cRFFHYye7t",
      "Facebook": "https://www.facebook.com/teglapeacefoundation/",
      "Contact": "/contact"
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  
//    Component.TagList(),
  ],
  afterBody: [Gallery()],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(), 
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),

  ],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
