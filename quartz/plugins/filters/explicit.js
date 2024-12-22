export const ExplicitPublish = () => ({
    name: "ExplicitPublish",
    shouldPublish(_ctx, [_tree, vfile]) {
        return vfile.data?.frontmatter?.publish === true || vfile.data?.frontmatter?.publish === "true";
    },
});
