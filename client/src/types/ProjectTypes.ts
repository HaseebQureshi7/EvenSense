type ProjectTypes = {
    _id?: string;
    title: string;
    owner: string;
    deadline: number;
    currentStage?: string;
    teamLead: string;
    members: string[];
    projectPurpose: string;
    projectErd?: string;
    figmaDesign?: string;
    createdAt?: Date;
}

export default ProjectTypes