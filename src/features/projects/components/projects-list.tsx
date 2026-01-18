import Link from "next/link";
import { ArrowRightIcon } from "lucide-react";

import { Kbd } from "@/components/ui/kbd";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

import { useProjectsPartial } from "../hooks/use-projects";
import { Doc } from "../../../../convex/_generated/dataModel";
import { formatTimestamp, getProjectIcon, ProjectItem } from "./project-item";

interface Props {
    onViewAll: () => void;
};

export const ProjectsList = ({ onViewAll }: Props) => {
    const projects = useProjectsPartial(6);

    if (projects === undefined) {
        return (
            <Spinner className="size-4 text-ring" />
        );
    }

    const [mostRecent, ...rest] = projects;

    return (
        <div className="flex flex-col gap-4">
            {mostRecent ? <ContinueCard project={mostRecent} /> : null}
            {rest.length > 0 && (
                <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between gap-2">
                        <span className="text-xs text-muted-foreground">
                            Recent projects
                        </span>
                        <button
                            onClick={onViewAll}
                            className="flex items-center gap-2 text-muted-foreground text-xs hover:text-foreground transition-colors"
                        >
                            <span>View all</span>
                            <Kbd className="bg-accent border">
                                ⌘K
                            </Kbd>
                        </button>
                    </div>
                    <ul className="flex flex-col">
                        {rest.map((project) => (
                            <ProjectItem
                                key={project._id}
                                project={project}
                            />
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

interface ContinueCardProps {
    project: Doc<"projects">;
};

const ContinueCard = ({ project }: ContinueCardProps) => {
    return (
        <div className="flex flex-col gap-2">
            <span className="text-xs text-muted-foreground">
                Last updated
            </span>
            <Button
                variant="outline"
                asChild
                className="h-auto items-start justify-start p-4 bg-background border rounded-none flex flex-col gap-2"
            >
                <Link href={`/projects/${project._id}`} className="group">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center gap-2">
                            {getProjectIcon(project)}
                            <span className="font-medium truncate">{project.name}</span>
                        </div>
                        <ArrowRightIcon className="size-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <span className="text-xs text-muted-foreground">
                        {formatTimestamp(project.updatedAt)}
                    </span>
                </Link>
            </Button>
        </div>
    );
};
