import { token } from './constants';

class MainApi {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  addMovieToSaved(
    country,
    director,
    duration,
    year,
    description,
    image,
    trailer,
    nameRU,
    nameEN,
    thumbnail,
    movieId
  ) {
    return this._request(`${this._baseUrl}/movies`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({
        country,
        director,
        duration,
        year,
        description,
        image,
        trailer,
        nameRU,
        nameEN,
        thumbnail,
        movieId,
      }),
    });
  }

  deleteMovieFromSaved(id) {
    return this._request(`${this._baseUrl}/movies/${id}`, {
      headers: this._headers,
      method: 'DELETE',
    });
  }
}

export const mainApi = new MainApi({
  baseUrl: 'http://localhost:3000',
  headers: {
    authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
});
