import {
    Users,
    Clipboard,
    ClipboardCheck,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu"
import { useAppContext } from "../../context/AppContext"
import { useState } from "react"

const Dropdown = () => {
    const { currentUser } = useAppContext()
    const [isCopied, setIsCopied] = useState(false)

    const handleCopy = () => {
        navigator.clipboard.writeText(currentUser.roomId)
        setIsCopied(true)
        setTimeout(() => {
            setIsCopied(false)
        }, 2000)
    }

    return (
        <div className="relative">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary">
                        <Users className="mr-2" />
                        <span>{currentUser.username}</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>
                        <div className="flex items-center">
                            <span>Room ID: {currentUser.roomId}</span>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="ml-auto"
                                onClick={handleCopy}
                            >
                                {isCopied ? (
                                    <ClipboardCheck className="h-4 w-4" />
                                ) : (
                                    <Clipboard className="h-4 w-4" />
                                )}
                            </Button>
                        </div>
                    </DropdownMenuLabel>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default Dropdown