import { commonRequest } from "./apiCall";
import { BASE_URL } from "./helper";

//Login End Points------------------------------------------------------------------------
 // Login Function
export const loginFunction = async (data) => {
  return await commonRequest("POST", `${BASE_URL}/auth/login`, data);
};