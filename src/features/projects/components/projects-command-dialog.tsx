import { FaGithub } from "react-icons/fa";
import { useRouter } from "next/navigation";
import {
    AlertCircleIcon,
    GlobeIcon,
    Loader2Icon,
} from "lucide-react";

import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";

import { useProjects } from "../hooks/use-projects";
import { Doc } from "../../../../convex/_generated/dataModel";

interface Props {
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export const ProjectsCommandDialog = ({ open, onOpenChange }: Props) => {
    const router = useRouter();
    const projects = useProjects();

    const handleSelect = (projectId: string) => {
        router.push(`/projects/${projectId}`);
        onOpenChange(false);
    };

    return (
        <CommandDialog
            open={open}
            onOpenChange={onOpenChange}
            title="Search Projects"
            description="Search and navigate to your projects"
        >
            <CommandInput placeholder="Search projects..." />
            <CommandList>
                <CommandEmpty>No projects found.</CommandEmpty>
                <CommandGroup heading="Projects">
                    {projects?.map((project) => (
                        <CommandItem
                            key={project._id}
                            value={`${project.name}-${project._id}`}
                            onSelect={() => handleSelect(project._id)}
                        >
                            {getProjectIcon(project)}
                            <span>{project.name}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
};

const getProjectIcon = (project: Doc<"projects">) => {
    if (project.importStatus === "completed") {
        return <FaGithub className="size-4 text-muted-foreground" />
    } else if (project.importStatus === "failed") {
        return <AlertCircleIcon className="size-4 text-muted-foreground" />
    } else if (project.importStatus === "importing") {
        return <Loader2Icon className="size-4 text-muted-foreground animate-spin" />
    } else {
        return <GlobeIcon className="size-4 text-muted-foreground" />
    }
};
