import axios from "axios";


const axiosClient = axios.create({
  baseURL: `/api`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

// handle loader
const switchLoader = (loading: boolean) => {
  // dispatch(setLoading({ loading }));
};

axiosClient.interceptors.request.use(
  function (config: any) {
    switchLoader(true);
    return config;
  },
  function (error: any) {
    switchLoader(false);
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response: any) {
    switchLoader(false);
    return response;
  },
  function (error: any) {
    switchLoader(false);
    return Promise.reject(error);
  }
);

export default axiosClient;
