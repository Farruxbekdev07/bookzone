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
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const response = await axios.post(apiUrl, data);
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
export const shallowEqualityCheck = (obj1: any, obj2: any) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      console.log(false);
      console.log(obj1);
      console.log(obj2);
      return false;
    }
  }
  console.log(true);
  return true;
};
