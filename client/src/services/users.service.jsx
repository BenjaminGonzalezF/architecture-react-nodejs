import axios from 'axios';

export const addUser = async (name, password, role) => {
    try {
      const response = await axios.post('/api/addUser', {
        name,
        password,
        role
      });
      return response.data;
    } catch (error) {
      console.error("error: ", error);
    }
  }

export const getUsers = async () => {
    try {
        const response = await axios.get('/api/');
        return response.data;
    } catch (error) {
        console.error("error: ", error);
    }
};
