import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { Tab } from "./tab";
import { useEditor } from "../hooks/use-editor";
import { Id } from "../../../../convex/_generated/dataModel";

interface Props {
    projectId: Id<"projects">;
};

export const TopNavigation = ({ projectId }: Props) => {
    const { openTabs } = useEditor(projectId);

    return (
        <ScrollArea className="flex-1">
            <nav className="bg-sidebar flex items-center h-8.75 border-b">
                {openTabs.map((fileId, index) => (
                    <Tab
                        key={fileId}
                        fileId={fileId}
                        isFirst={index === 0}
                        projectId={projectId}
                    />
                ))}
            </nav>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    );
};
