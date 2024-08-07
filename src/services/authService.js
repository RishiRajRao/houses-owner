import api from "../axiosConfig";

export const registerHandler = async (user) => {
  try {
    const res = await api.post("/users/register", user);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const loginHandler = async (user) => {
  try {
    const res = await api.post("/users/login", user);
    return res.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export const getUserProfile = () => {
  const userString = localStorage.getItem("user");

  let user;

  if (userString) {
    try {
      // Parse the JSON string back into an object
      user = JSON.parse(userString);
      return user;
    } catch (error) {
      console.error("Error parsing JSON from localStorage", error);
      // Handle the error, e.g., set user to a default value
      user = null;
      throw error;
    }
  } else {
    // Handle the case where the item is not found in localStorage
    user = null;
  }
};
