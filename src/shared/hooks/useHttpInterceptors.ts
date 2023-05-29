// write a hook to handle http interceptors, take base url and headers as input

import { useState, useEffect } from "react";
import axios, { AxiosRequestConfig } from "axios";

const useHttpInterceptors = (baseUrl: string, headers: any) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: headers,
  });

  const axiosRequestConfig: AxiosRequestConfig = {
    method: "GET",
    url: "/",
    headers: headers,
  };

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await axiosInstance(axiosRequestConfig);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { response, error, isLoading };
};

export default useHttpInterceptors;
