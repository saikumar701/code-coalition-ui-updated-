import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import EditorComponent from "../components/editor/EditorComponent"
import DrawingEditor from "../components/drawing/DrawingEditor"
import OutputView from "../components/OutputView"
import LeftSidebar from "../components/LeftSidebar"
import FileStructureView from "../components/files/FileStructureView"
import ChatsView from "../components/sidebar/sidebar-views/ChatsView"
import CopilotView from "../components/sidebar/sidebar-views/CopilotView"

import SettingsView from "../components/sidebar/sidebar-views/SettingsView"
import UsersView from "../components/sidebar/sidebar-views/UsersView"
import TopToolbar from "../components/TopToolbar"
import { useState } from "react"

const EditorPage = () => {
    const [activeSidebarItem, setActiveSidebarItem] = useState("files")

    const renderActiveSidebarView = () => {
        switch (activeSidebarItem) {
            case "files":
                return <FileStructureView />
            case "chat":
                return <ChatsView />
            case "copilot":
                return <CopilotView />
            case "clients":
                return <UsersView />
 
            case "settings":
                return <SettingsView />
            default:
                return null
        }
    }

    return (
        <div className="h-screen bg-gray-900 text-white flex flex-col">
            <TopToolbar />
            <div className="flex flex-grow">
                <LeftSidebar
                    onSelect={setActiveSidebarItem}
                    activeItem={activeSidebarItem}
                />
                <ResizablePanelGroup direction="horizontal" className="flex-grow">
                    <ResizablePanel defaultSize={20}>
                        {renderActiveSidebarView()}
                    </ResizablePanel>
                    <ResizableHandle withHandle />
                    <ResizablePanel defaultSize={80}>
                        <ResizablePanelGroup direction="vertical">
                            <ResizablePanel defaultSize={70}>
                                <div className="flex h-full">
                                    <ResizablePanelGroup
                                        direction="horizontal"
                                        className="flex-grow"
                                    >
                                        <ResizablePanel defaultSize={50}>
                                            <EditorComponent />
                                        </ResizablePanel>
                                        <ResizableHandle withHandle />
                                        <ResizablePanel defaultSize={50}>
                                            <DrawingEditor />
                                        </ResizablePanel>
                                    </ResizablePanelGroup>
                                </div>
                            </ResizablePanel>
                            <ResizableHandle withHandle />
                            <ResizablePanel defaultSize={30}>
                                <OutputView />
                            </ResizablePanel>
                        </ResizablePanelGroup>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    )
}

export default EditorPage