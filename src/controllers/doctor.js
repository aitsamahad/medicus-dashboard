import { apiUrl, fetcher } from "../utils/fetcher";

export async function getAllDoctors() {
  return fetch(`${apiUrl}/doctor/get/doctors`, {
    method: "GET",
    headers: {
      authentication: process.env.NEXT_PUBLIC_API_TOKEN,
    },
  }).then((res) => res.json());
}

export async function toggleDoctorApproval(doctorId) {
  // const { data } = await fetcher.post(
  //   `${apiUrl}/doctor/${doctorId}/toggle-doctor`
  // );
  const data = await fetch(`${apiUrl}/doctor/${doctorId}/toggle-doctor`, {
    method: "POST",
    headers: {
      authentication: process.env.NEXT_PUBLIC_API_TOKEN,
    },
  });
  if (data.length) return data.json();
  return [];
}
