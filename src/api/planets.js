import { get, getIdFromUrl } from './_helper';

const BASE_URL = 'planets'

export const getAll = async () => {
  const { results } = await get(BASE_URL);
  
  return results.map(planet => {
    return {
      ...planet,
      id: getIdFromUrl(planet.url),
    };
  })
}

export const getOne = (id) => {
  return get(`${BASE_URL}/${id}`)
}