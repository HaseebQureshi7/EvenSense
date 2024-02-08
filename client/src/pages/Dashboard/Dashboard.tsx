import { useContext } from "react";
import UserDataContext from "../../context/UserDataContext";
import UserTypes from "../../types/UserTypes";

type udConts = {
  userData: UserTypes;
};

function Dashboard() {
  const { userData }: udConts = useContext(UserDataContext);

  return <div>{userData?.fName}</div>;
}

export default Dashboard;
