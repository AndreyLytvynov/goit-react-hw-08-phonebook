import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export async function signup(credentials) {
  try {
    const response = await axios.post('/users/signup', credentials);
    // if (response.status === 201)
    return response;
  } catch (error) {
    return error;
  }
}

export async function login(credentials) {
  try {
    const response = await axios.post('/users/login', credentials);
    // if (response.status === 201)
    return response;
  } catch (error) {
    return error;
  }
}

export async function logout() {
  try {
    const response = await axios.post('/users/logout');
    // if (response.status === 201)
    return response;
  } catch (error) {
    return error;
  }
}

export async function currentFetch() {
  try {
    const response = await axios.get('/users/current');
    // if (response.status === 201)
    return response;
  } catch (error) {
    return error;
  }
}
