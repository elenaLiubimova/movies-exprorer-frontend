// export const BASE_URL = "http://localhost:3000";
export const BASE_URL = "http://api.elenaliubimova-movies.nomoredomains.monster";

export function checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Ошибка ${res.status}`);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export const register = (name, email, password) => {
  return request(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
};

export const authorize = (email, password) => {
  return request(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
};

export const checkToken = (jwt) => {
  return request(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  }).then((data) => data);
};
