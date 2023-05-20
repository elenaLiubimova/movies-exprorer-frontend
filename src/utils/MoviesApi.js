import { FILM_API_URL } from "./constants";

class MoviesApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse)
  }

  getFilms() {
    return this._request(`${this._baseUrl}`, {
      method: "GET",
    });
  }
}

export const moviesApi = new MoviesApi({
  baseUrl: FILM_API_URL + 'beatfilm-movies',
});