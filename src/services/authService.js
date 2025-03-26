import api from '../axiosConfig';

export const signupHandler = async (user) => {
  try {
    const res = await api.post('/user/signup', user);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const loginHandler = async (user) => {
  try {
    const res = await api.post('/user/login', user);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const getUserProfileHandler = async () => {
  try {
    const res = await api.get('/user/profile');
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const forgotPasswordHandler = async (email) => {
  try {
    const res = await api.post('/user/forgot-password', { email });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export const resetPasswordHandler = async (token, password) => {
  try {
    const res = await api.post('/user/reset-password', {
      token,
      new_password: password,
    });
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
