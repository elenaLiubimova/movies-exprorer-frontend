import { token } from './constants';

class MainApi {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _checkResponse(res) {
    return res.ok ? res.json() : Promise.reject(res.status);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  getCurrentUser() {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "GET",
    });
  }

  setCurrentUser(name, email) {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: "PATCH",
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
  }

  getSavedMovies() {
    return this._request(`${this._baseUrl}/movies`, {
      headers: this._headers,
      method: "GET",
    });
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
        country: country,
        director: director,
        duration: duration,
        year: year,
        description: description,
        image: image,
        trailer: trailer,
        nameRU: nameRU,
        nameEN: nameEN,
        thumbnail: thumbnail,
        movieId: movieId,
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
