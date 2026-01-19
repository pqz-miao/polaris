import { ProjectIdView } from "@/features/projects/components/project-id-view";

import { Id } from "../../../../convex/_generated/dataModel";

interface Props {
    params: Promise<{ projectId: Id<"projects"> }>;
};

const Page = async ({ params }: Props) => {
    const { projectId } = await params;

    return (
        <ProjectIdView projectId={projectId} />
    );
};

export default Page;
