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


// --------------------------- RESPONSE INTERCEPTOR  ----------------------------


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

export const resourceScreenData = (formData) => API.get(`/resource`, {params: formData});

// export const resourceDetailScreen = (id) => API.post(`/resource-details/${id}`);
export const resourceDetailScreen = (formData) => API.get(`/resource-details/${formData}`);

// export const resourceDetailScreen = (formData) => API.post(`/resource-details`, formData);

export const homeScreenData = (formData) => API.get(`/home`, formData);

export const cmmcScreenData = (formData) => API.get(`/cmmc`, formData);

export const securityScreenData = (formData) => API.get(`/microsoft-security`, formData)

export const industryScreenData = (formData) => API.get(`/industry`, formData);

export const approachScreenData = (formData) => API.get(`/approach`, formData);

export const complianceScreenData = (formData) => API.get(`/compliance`, formData);

// export const getBlogDetails = (id) => API.get(`/blogs/${id}`);
export const getBlogDetails = (id) => API.get(`/blogs/${id}`);

// export const getBlogDetails = (formData) => API.post(`/blogs`, formData);

export const globalFooter = (formData) => API.get(`/global`, formData);

export const getFaqScreenData = (formData) => API.get(`/newfaqs`, formData);