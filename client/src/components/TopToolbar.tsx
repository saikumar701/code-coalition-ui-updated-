import { VscRunAll } from "react-icons/vsc"
import { Button } from "@/components/ui/button"
import { useRunCode } from "@/context/RunCodeContext"
import GitHubCorner from "@/components/GitHubCorner"
import Dropdown from "@/components/common/Dropdown"

const TopToolbar = () => {
    const { runCode } = useRunCode()

    return (
        <div className="flex items-center justify-between p-2 bg-gray-800 text-white border-b border-gray-700">
            <div className="flex items-center gap-4">
                <Button variant="default" size="sm" onClick={runCode}>
                    <VscRunAll className="h-5 w-5 mr-2" />
                    Run
                </Button>
            </div>
            <div className="flex items-center gap-4">
                <GitHubCorner />
                <Dropdown />
            </div>
        </div>
    )
}

export default TopToolbar