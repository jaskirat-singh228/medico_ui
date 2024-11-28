import axios from "axios";

const ApiIntercepter = (baseURL) => {
    const apiClient = axios.create({
        baseURL: baseURL, // Dynamic base URL
        timeout: 10000, // Timeout after 10 seconds
        headers: {
            'Content-Type': 'application/json',
        },
    });

    // Request Interceptor
    apiClient.interceptors.request.use(
        async (config) => {
            try {
                return config;
            } catch (error) {
                return Promise.reject(error);
            }
        },
        (error) => {
            // Handle request errors
            return Promise.reject(error);
        }
    );

    // Response Interceptor
    apiClient.interceptors.response.use(
        (response) => {
            // Handle successful responses
            return response;
        },
        (error) => {
            // Handle response errors
            if (error.response) {
                // Server-side error (response code outside 2xx)
                switch (error.response.status) {
                    case 400:
                        console.error('Bad Request:', error.response.data);
                        break;
                    case 401:
                        handleUnauthorized(); // Handle unauthorized access, e.g., token expired
                        break;
                    case 403:
                        console.error('Forbidden:', error.response.data);
                        break;
                    case 404:
                        console.error('Not Found:', error.response.data);
                        break;
                    case 500:
                        console.error('Server Error:', error.response.data);
                        break;
                    default:
                        console.error('Error:', error.response.data);
                }
            } else if (error.request) {
                // Network error (no response)
                console.error('Network Error:', error.message);
            } else {
                // Other errors
                console.error('Error:', error.message);
            }
            return Promise.reject(error);
        }
    );

    return apiClient;
};

// Function to handle unauthorized access (replace with your logic)
const handleUnauthorized = () => {
    // Implement logic for unauthorized access, like redirecting to login
};

// Export API methods that accept a dynamic base URL and endpoint
export const apiGet = (baseURL, endpoint, params = {}) => {
    const client = ApiIntercepter(baseURL);
    return client.get(endpoint, { params });
};

export const apiPost = (baseURL, endpoint, data = {}) => {
    const client = ApiIntercepter(baseURL);
    return client.post(endpoint, data);
};

export const apiPut = (baseURL, endpoint, data = {}) => {
    const client = ApiIntercepter(baseURL);
    return client.put(endpoint, data);
};

export const apiDelete = (baseURL, endpoint) => {
    const client = ApiIntercepter(baseURL);
    return client.delete(endpoint);
};


export const apiGetPhotos = (baseURL, endpoint) => {
    const client = ApiIntercepter(baseURL);
    return client.get(endpoint);
};
export default ApiIntercepter