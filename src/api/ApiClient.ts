export const BASE_URL = 'https://api.themoviedb.org/3';
export const MOVIE = '/movie';
export const SEARCH = '/search';
export const CAST = '/credits';
export const REVIEWS = '/reviews';
export const POPULAR = '/popular';
export const NOW_PLAYING = '/now_playing';
export const UPCOMING = '/upcoming';
export const TOP_RATED = '/top_rated';

export const IMAGE_RESOURCE = 'https://image.tmdb.org/t/p/w500';

const API_KEY = '?api_key=9ab54deb09e30c7f062f23fb2967a540';

class ApiClient {
  async get(url: string, query: string = '') {
    try {
      const response = await fetch(`${url}${API_KEY}${query}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new ApiClient();
