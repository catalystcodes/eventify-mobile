import axios from "axios";
import { baseUrl } from "../utils/config";

export const doAPILogin = async (loginPayload: {
  username: string;
  password: string;
  expiresInMins?: number;
}): Promise<any> => {
  try {
    const { data } = await axios.post(`${baseUrl}/auth/login`, loginPayload);
    return data;
  } catch (error) {
    console.log(JSON.stringify(error, null, 2));
  }
};
