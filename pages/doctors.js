import React from "react";
import DoctorsPage from "../src/components/DoctorsPage";
import { apiUrl, swrfetcher } from "../src/utils/fetcher";
import useSWR from "swr";
import { getAllDoctors } from "../src/controllers/doctor";

export async function getServerSideProps() {
  const doctors = await getAllDoctors();

  return {
    props: {
      doctors,
    },
  };
}

export default function doctors({ doctors }) {
  return (
    <>
      <DoctorsPage doctors={doctors} />
    </>
  );
}
