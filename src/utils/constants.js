import words from '../images/words.png';
import design from '../images/design.png';
import banksy from '../images/banksy.png';

export const filmApiUrl = 'https://api.nomoreparties.co/';
export const token = localStorage.getItem('jwt');

export const savedCards = [
  {
    nameRU: '33 слова о дизайне',
    image: words,
    duration: '1ч42м',
  },
  {
    nameRU: 'Киноальманах «100 лет дизайна»',
    image: design,
    duration: '1ч42м',
  },
  {
    nameRU: 'В погоне за Бенкси',
    image: banksy,
    duration: '1ч42м',
  },
];
