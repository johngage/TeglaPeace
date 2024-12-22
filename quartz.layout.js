import * as Component from "./quartz/components";
import TopNavigation from "./quartz/components/TopNavigation";
import GalleryH from "./quartz/components/GalleryH";
// Shift order to change display: Shared, single page
// Created new component: TopNavigation, with hardwired dirctories to display menu
// at the top of every page
// Insert it in Shared Layout for components shared across all pages
export const sharedPageComponents = {
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
};
// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout = {
    beforeBody: [
        Component.Breadcrumbs(),
        GalleryH(),
        Component.ArticleTitle(),
        Component.ContentMeta(),
        //    Component.TagList(),
    ],
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Search(),
        Component.Darkmode(),
        Component.DesktopOnly(Component.Explorer()),
        //    Gallery(),
    ],
    right: [
        Component.Graph(),
        Component.DesktopOnly(Component.TableOfContents()),
        Component.Backlinks(),
        //    GalleryV(),
    ],
};
// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout = {
    beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
    left: [
        Component.PageTitle(),
        Component.MobileOnly(Component.Spacer()),
        Component.Search(),
        Component.Darkmode(),
        Component.DesktopOnly(Component.Explorer()),
    ],
    right: [],
};
