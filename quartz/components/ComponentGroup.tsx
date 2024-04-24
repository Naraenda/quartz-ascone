import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

export default ((components?: QuartzComponent[]) => {
    if (components) {

        const Components: QuartzComponent = (props: QuartzComponentProps) => {
            return <div class="component-group">
                {components.map((c, i) => {
                    const Component = c;
                    return <Component {...props} />
                })}
            </div>
        }
        Components.css             = components.map((c, _) => c.css).join("\n");
        Components.afterDOMLoaded  = components.map((c, _) => c.afterDOMLoaded).join("\n");
        Components.beforeDOMLoaded = components.map((c, _) => c.beforeDOMLoaded).join("\n");

        return Components
    } else {
        return () => <></>
    }
}) satisfies QuartzComponentConstructor
