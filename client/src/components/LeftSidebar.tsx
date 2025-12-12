import {
    Folder,
    MessageCircle,
    Bot,
    Users,
    Settings,
} from "lucide-react"
import { Button } from "./ui/button"

const sidebarItems = [
    { icon: <Folder />, name: "files", title: "File Explorer" },
    { icon: <MessageCircle />, name: "chat", title: "Chat" },
    { icon: <Bot />, name: "copilot", title: "Copilot" },
    { icon: <Users />, name: "clients", title: "Clients" },
    { icon: <Settings />, name: "settings", title: "Settings" },
]

interface LeftSidebarProps {
    onSelect: (item: string) => void
    activeItem: string
}

const LeftSidebar = ({ onSelect, activeItem }: LeftSidebarProps) => {
    return (
        <div className="flex flex-col items-center gap-4 p-2 bg-gray-800 border-r border-gray-700">
            {sidebarItems.map(item => (
                <Button
                    key={item.name}
                    variant={activeItem === item.name ? "secondary" : "ghost"}
                    size="icon"
                    onClick={() => onSelect(item.name)}
                    title={item.title}
                >
                    {item.icon}
                </Button>
            ))}
        </div>
    )
}

export default LeftSidebar