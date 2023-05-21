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

  getCurrentUser(jwt) {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: { ...this._headers, authorization: `Bearer ${jwt}` },
      method: 'GET',
    });
  }

  updateUser(name, email) {
    return this._request(`${this._baseUrl}/users/me`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${localStorage.getItem('jwt')}`,
      },
      method: 'PATCH',
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    });
  }

  getSavedMovies(jwt) {
    return this._request(`${this._baseUrl}/movies`, {
      headers: { ...this._headers, authorization: `Bearer ${jwt}` },
      method: 'GET',
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
    movieId,
    jwt
  ) {
    return this._request(`${this._baseUrl}/movies`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${jwt}`,
      },
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

  deleteMovieFromSaved(id, jwt) {
    return this._request(`${this._baseUrl}/movies/${id}`, {
      headers: {
        ...this._headers,
        authorization: `Bearer ${jwt}`,
      },
      method: 'DELETE',
    });
  }
}

export const mainApi = new MainApi({
  // baseUrl: 'http://localhost:3000',
  baseUrl: 'http://api.elenaliubimova-movies.nomoredomains.monster',
  headers: {
    'Content-Type': 'application/json',
  },
});
