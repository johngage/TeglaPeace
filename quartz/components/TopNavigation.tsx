import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"

const TopNavigation: QuartzComponent = ({ displayClass }: QuartzComponentProps) => {
  return (
    <div class={classNames(displayClass, "top-nav")}>
      <a href="/">Home</a>
      <a href="/post">Posts</a>
      <a href="/project">Projects</a>
      <a href="/event">Events</a>
      <a href="/AB">Who We Are</a>
    </div>
  )
}

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
`

export default (() => TopNavigation) satisfies QuartzComponentConstructor