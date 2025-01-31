import axios from "axios";
import { rapidApiKey } from "../src/constants";

const baseUrl = 'https://exercisedb.p.rapidapi.com';

const apiCall = async (url, params = {}) => {
  try {
    const options = {
      method: 'GET',
      url,
      params,  // Correctly pass query params here
      headers: {
        'x-rapidapi-key': rapidApiKey,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
      },
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("API Error:", error.response?.data || error.message);
  }
};

export const FetchExercisesByBodypart = async (bodyPart) => {
  return await apiCall(`${baseUrl}/exercises/bodyPart/${bodyPart}`);
};
