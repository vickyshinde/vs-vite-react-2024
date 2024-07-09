// api.js
const BASE_URL = 'http://localhost:5174'; // Replace with your API base URL

const buildQueryString = (params) => {
  if (!params) return '';
  return '?' + new URLSearchParams(params).toString();
};

const apiRequest = async (endpoint, method = 'GET', data = null, params = null) => {
  const url = `${BASE_URL}/${endpoint}${buildQueryString(params)}`;
  const options = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (data) {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('API request error:', error);
    throw error;
  }
};


export const getRequest = (endpoint, params) => apiRequest(endpoint, 'GET', null, params);
export const postRequest = (endpoint, data, params) => apiRequest(endpoint, 'POST', data, params);
export const putRequest = (endpoint, data, params) => apiRequest(endpoint, 'PUT', data, params);
export const deleteRequest = (endpoint, params) => apiRequest(endpoint, 'DELETE', null, params);
