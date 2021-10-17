import { API_URL, ENCRYPTION_SECRET_KEY } from '../global'

const axios = require('axios');
const CryptoJS = require('crypto-js');

export const postRequest = (url: string, data: any) => {
  return new Promise((resolve, reject) => {
    axios.post(`${API_URL}${url}`, data).then((response: any) => {
      const decrypted = CryptoJS.TripleDES.decrypt(response.data, ENCRYPTION_SECRET_KEY);
      const resData = decrypted.toString(CryptoJS.enc.Utf8);
      const responseJson = JSON.parse(resData);
      resolve(responseJson);
    }).catch((error: any) => {
      const decrypted = CryptoJS.TripleDES.decrypt(error, ENCRYPTION_SECRET_KEY);
      const resData = decrypted.toString(CryptoJS.enc.Utf8);
      const responseError = JSON.parse(resData);
      reject(responseError);
    });
  });
}