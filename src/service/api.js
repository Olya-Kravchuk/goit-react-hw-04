import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://api.unsplash.com",
// });

const API_KEY = 'i9wbXvFd-cu6QxKyhooRASCj8VWy50rtQG-9BbauSY4';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;

export const getPhotos = async (query, page = 1, per_page = 15) => {
  const { data } = await axios.get('search/photos', {
    params: {
      query,
      page,
      per_page,
    },
  });

  return data;
  
};


// const API_KEY = "i9wbXvFd-cu6QxKyhooRASCj8VWy50rtQG-9BbauSY4";
// const defaultParams = {
//   orientation: "landscape",
//   per_page: 20,
// };

// export const getImages = async (query, page) => {
//   const { data } = await instance.get(`search?query=${query}&page=${page}`, {
//     headers: {
//       Authorization: `Client-ID ${API_KEY}`,
//     },
//     params: defaultParams,
//   });

//   return data;
// };


