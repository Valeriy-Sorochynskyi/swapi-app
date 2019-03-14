const BASE_API_URL = 'https://swapi.co/api/';

export const getIdFromUrl = url => {
  const [, id] = url.match(/(\d+)\/$/);

  return id;
};

 export const get = (url) => {
   const URL = url ? BASE_API_URL + url : BASE_API_URL
  return fetch(URL)
    .then(response => response.json())
};