type UserTypes = {
    _id: string;
    fName: string;
    lName: string;
    email: string;
    password: string;
    company: string;
    role: "Manager" | "TeamMember";
    updatedAt: string;
    __v: number;
    createdAt: string;
};

export default UserTypes