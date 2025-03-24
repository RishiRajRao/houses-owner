import api from '../axiosConfig';

export const signupHandler = async (user) => {
  try {
    const res = await api.post('/user/signup', user);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const loginHandler = async (user) => {
  try {
    const res = await api.post('/user/login', user);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUserProfileHandler = async () => {
  try {
    const res = await api.get('/user/profile');
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
