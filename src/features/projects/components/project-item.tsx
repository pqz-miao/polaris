import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import { AlertCircleIcon, GlobeIcon, Loader2Icon } from "lucide-react";

import { Doc } from "../../../../convex/_generated/dataModel";

interface Props {
    project: Doc<"projects">;
};

export const formatTimestamp = (timestamp: number) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true })
};

export const getProjectIcon = (project: Doc<"projects">) => {
    if (project.importStatus === "completed") {
        return <FaGithub className="size-3.5 text-muted-foreground" />
    } else if (project.importStatus === "failed") {
        return <AlertCircleIcon className="size-3.5 text-muted-foreground" />
    } else if (project.importStatus === "importing") {
        return <Loader2Icon className="size-3.5 text-muted-foreground animate-spin" />
    } else {
        return <GlobeIcon className="size-3.5 text-muted-foreground" />
    }
};

export const ProjectItem = ({ project }: Props) => {
    return (
        <Link
            href={`/projects/${project._id}`}
            className="text-sm text-foreground/60 font-medium hover:text-foreground py-1 flex items-center justify-between w-full group"
        >
            <div className="flex items-center gap-2">
                {getProjectIcon(project)}
                <span className="truncate">{project.name}</span>
            </div>
            <span className="text-xs text-muted-foreground group-hover:text-foreground/60 transition-colors">
                {formatTimestamp(project.updatedAt)}
            </span>
        </Link>
    );
};
