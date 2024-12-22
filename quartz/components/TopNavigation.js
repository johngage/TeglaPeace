import { jsx as _jsx, jsxs as _jsxs } from "preact/jsx-runtime";
import { classNames } from "../util/lang";
const TopNavigation = ({ displayClass }) => {
    return (_jsxs("div", { class: classNames(displayClass, "top-nav"), children: [_jsx("a", { href: "/", children: "Home" }), _jsx("a", { href: "/post", children: "Posts" }), _jsx("a", { href: "/project", children: "Projects" }), _jsx("a", { href: "/event", children: "Events" }), _jsx("a", { href: "/AB", children: "Who We Are" })] }));
};
TopNavigation.css = `
.top-nav {
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  gap: 1rem;
  margin: 1rem 0;
}

.top-nav a {
  color: inherit;
  text-decoration: none;
}

.top-nav a:hover {
  color: var(--secondary);
}
`;
export default (() => TopNavigation);
