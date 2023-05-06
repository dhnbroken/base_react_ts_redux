import axios from "axios";

import { DEV_BASE_URL, MOCK_URL, ENV, DEV } from "../tools/constants";

// check the .env is dev/prod/test
const baseApiUrl = ENV === DEV ? DEV_BASE_URL : MOCK_URL;
// Create axios instance
export const baseUrl = axios.create({
  baseURL: `${baseApiUrl}`,
});
