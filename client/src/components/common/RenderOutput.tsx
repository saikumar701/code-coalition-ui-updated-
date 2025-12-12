import { FC } from "react"

interface RenderOutputProps {
    output: string
}

const RenderOutput: FC<RenderOutputProps> = ({ output }) => {
    const isHtml = (str: string) => /<[a-z][\s\S]*>/i.test(str)

    if (isHtml(output)) {
        return (
            <iframe
                srcDoc={output}
                className="h-full w-full bg-white"
                title="output"
                sandbox="allow-scripts"
            />
        )
    }

    return <pre className="text-wrap whitespace-pre-wrap">{output}</pre>
}

export default RenderOutput