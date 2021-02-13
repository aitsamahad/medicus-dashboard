import React, { createContext } from "react";
import { getAllDoctors } from "../controllers/doctor";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const [doctors, setDoctors] = React.useState();
  const [token, setToken] = React.useState(
    typeof window !== "undefined" && window.localStorage.getItem("token")
  );

  React.useEffect(() => {
    getDoctors();
  }, []);

  const getDoctors = () => {
    return getAllDoctors().then((res) => setDoctors(res));
  };

  const contextValues = {
    getDoctors,
    doctors,
    token,
    setToken,
  };

  return (
    <UserContext.Provider
      value={{
        ...contextValues,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
