import axios from "axios";
// import Cookies from "js-cookie";
import {toast} from 'react-toastify';

export const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
        "Content-Type": "application/json",
        // "Content-Type": "multipart/form-data",
    }
});

// --------------------------- REQUEST INTERCEPTOR // ---------------------------

// API.interceptors.request.use(
//     (config) => {
//     const adminCookie = Cookies.get("babyAi");
//     let token = null;

//     if (adminCookie) {
//         try {
//             token = JSON.parse(adminCookie)?.accessToken;
//         } catch (e) {
//             Cookies.remove("babyAi");
//         }
//     }

//     if (token) {
//         config.headers["Authorization"] = `Bearer ${token}`;
//     } else {
//         delete config.headers["Authorization"];
//     }

//     return config;
// }, (error) => Promise.reject(error)
// );

// Even without login, keeping a basic global error handler captures server downs or bad requests


// --------------------------- RESPONSE INTERCEPTOR  ---------------------------

// let isRedirecting = false; 

API.interceptors.response.use(
    (response) => response, 
    (error) => {
      // Extract standard error message from backend if available
      const serverMessage = error?.response?.data?.message || "Something went wrong. Please try again.";
  
      // Handle standard global server errors cleanly without crashing
      if (error?.response?.status === 500) {
        toast.error("Internal Server Error. Please check back later.");
      } else if (error?.response?.status === 404) {
        // Handles data-not-found issues globally
        console.warn("Requested API resource not found:", error.config.url);
      } else {
        // Catch-all message for other runtime request failures
        toast.error(serverMessage);
      }
  
      return Promise.reject(error);
    }
);

// --------------------------- API FUNCTIONS ---------------------------

export const getFaqData = (formData) => API.get(`/faqs`, formData);

export const getContactScreenData = (formData) => API.get(`/contact`, formData);

export const postContactScreenData = (formData) => API.post(`/contact/submit`, formData);

export const aboutScreenData = (formData) => API.get(`/about`, formData);

export const resourceScreenData = (formData) => API.get(`/resource`, formData);

export const homeScreenData = (formData) => API.get(`/home`, formData);

export const cmmcScreenData = (formData) => API.get(`/cmmc`, formData);

export const industryScreenData = (formData) => API.get(`/industry`, formData);

export const approachScreenData = (formData) => API.get(`/approach`, formData);

export const complianceScreenData = (formData) => API.get(`/compliance`, formData);

export const getBlogDetails = (id) => API.get(`/blogs/${id}`);

export const globalFooter = (formData) => API.get(`/global`, formData);