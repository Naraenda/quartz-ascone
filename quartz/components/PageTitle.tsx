import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const ascii_art = `
 _    _,  _, _, ,  ,  _, 
'|\\  (_, /  / \\,|\\ | /_, 
 |-\\  _)'\\_'\\_/ |'\\|'\\_  
  '  \`'     \`'   '  \`   \` 
 nara's online home
      for random things
`

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)
  return (
    <h1 class={classNames(displayClass, "page-title")}>
      <a href={baseDir}>
        <pre>{ascii_art}</pre>
      </a>
    </h1>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1em;
  margin: 0;
}
.page-title a {
  color: black;
  text-align: center;
}
.page-title pre {
  margin: 0;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
