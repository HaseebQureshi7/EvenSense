interface StageTypes {
    title: string;
    position: number;
    percentage: number;
    status?: 'Incomplete' | 'InProgress' | 'Completed';
    ofProject: string;
}

export default StageTypes;