import { IUserData } from "../../interfaces";

export const postData = async (apiUrl: string, data: IUserData) => {
  await fetch(apiUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};
