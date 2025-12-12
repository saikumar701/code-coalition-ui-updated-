import RenderOutput from "./common/RenderOutput"
import { useRunCode } from "@/context/RunCodeContext"

const OutputView = () => {
    const { output, setInput } = useRunCode()
    return (
        <div className="h-full w-full bg-gray-800 text-white p-4">
            <h1 className="text-lg font-bold mb-2">Output</h1>
            <div className="h-full w-full">
                <RenderOutput output={output} />
                <input
                    type="text"
                    className="w-full bg-gray-900 text-white p-2"
                    placeholder="Enter input..."
                    onChange={(e) => setInput(e.target.value)}
                />
            </div>
        </div>
    )
}

export default OutputView