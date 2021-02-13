import React, { createContext } from "react";

export const UserContext = createContext();

function UserContextProvider({ children }) {
  const contextValues = {};

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
