import React from "react";
import DoctorsPage from "../src/components/DoctorsPage";
import { apiUrl, swrfetcher } from "../src/utils/fetcher";
import useSWR from "swr";
import { getAllDoctors } from "../src/controllers/doctor";
import { UserContext } from "../src/context/UserContext";
import SignIn from "../src/components/Signin";

// export async function getServerSideProps() {
//   const doctors = await getAllDoctors();

//   return {
//     props: {
//       doctors,
//     },
//   };
// }

export default function doctors() {
  const { doctors, token, setToken } = React.useContext(UserContext);
  console.log("DOCTORS LIST: ", doctors);
  return (
    <div style={{ minHeight: 800 }}>
      {token ? (
        <>{doctors && <DoctorsPage doctors={doctors} />}</>
      ) : (
        <SignIn setToken={setToken} />
      )}
    </div>
  );
}
