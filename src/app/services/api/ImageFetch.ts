import { error } from "console";

const fetchimages = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export default fetchimages;