import axios from "axios";

export function pxToRem(px: number): string {
  return px / 16 + "rem";
}
export const getDataWithToken = async (apiUrl: string, token: string) => {
  const response = await axios.get(apiUrl, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response?.data;
};
