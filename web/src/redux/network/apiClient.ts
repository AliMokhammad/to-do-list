import axiosClient from "./axiosClient";

const getHeaders = () => ({
  headers: {
    Authorization: localStorage.getItem('TOKEN') || null
  }
})
const getData = async ({ endpoint }: any) => {
  return axiosClient
    .get(endpoint, getHeaders())
    .then((response) => ({ data: response.data, success: true }))
    .catch((err) => {
      console.log({ err });
      return { data: null, success: false };
    });
};

const postData = async ({ endpoint, body = {} }: any) => {
  return axiosClient
    .post(endpoint, body, getHeaders())
    .then((response) => ({ data: response.data, success: true }))
    .catch((err) => {
      console.log({ err });
      return { data: null, success: false };
    });
};

const putData = async ({ endpoint, body = {} }: any) => {
  return axiosClient
    .put(endpoint, body, getHeaders())
    .then((response) => ({ data: response.data, success: true }))
    .catch((err) => {
      console.log({ err });
      return { data: null, success: false };
    });
};

const deleteData = async ({ endpoint }: any) => {
  return axiosClient
    .delete(endpoint, getHeaders())
    .then((response) => ({ data: response.data, success: true }))
    .catch((err) => {
      console.log({ err });
      return { data: null, success: false };
    });
};

export { getData, postData, putData, deleteData };
