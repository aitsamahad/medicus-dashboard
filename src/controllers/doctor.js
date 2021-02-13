import { apiUrl, fetcher } from "../utils/fetcher";

export async function getAllDoctors() {
  const { data } = await fetcher(`${apiUrl}/doctor/get/doctors`);
  if (data.length) return data;
  return [];
}

export async function toggleDoctorApproval(doctorId) {
  const { data } = await fetcher.post(
    `${apiUrl}/doctor/${doctorId}/toggle-doctor`
  );
  if (data.length) return data;
  return [];
}
