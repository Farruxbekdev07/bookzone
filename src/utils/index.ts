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
export const getUsers = async (apiUrl: string, token: string) => {
  const response = await axios.get(apiUrl, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response;
};
export const getDetailData = async (apiUrl: string) => {
  const response = await axios.get(apiUrl);
  return response?.data;
};
export const postData = async (
  apiUrl: string,
  data: Object | any,
  token?: string
) => {
  const responseWithToken = await axios.post(apiUrl, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const response = await axios.post(apiUrl, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (token) {
    return responseWithToken;
  } else {
    return response?.data;
  }
};
export const patchData = async (
  apiUrl: string,
  data: Object | any,
  token?: string
) => {
  const response = await axios.patch(apiUrl, data, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response?.data;
};