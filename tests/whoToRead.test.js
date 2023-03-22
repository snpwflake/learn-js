import { assert } from 'chai';
import whoToRead from '../public/assets/whoToRead.js';

describe('Функция для вывода ссылки в строке', function () {
  it('1 профиль', function () {
    const profile = {
      id: 256,
      posts: [
        'Привет. #сегодня был на концерте группы #linkinpark',
        'как вам новая песня #linkinpark',
      ],
    };
    const profiles = [
      {
        id: 257,
        posts: [
          'Сегодня вышла новая версия #javascript',
          'как вам новая версия #javascript?',
        ],
      },
      {
        id: 258,
        posts: [
          '#сегодня мне не понравилась новая песня #linkinpark',
        ],
      },
    ];
    assert.equal(258, whoToRead(profile, profiles, 1));
  });
});
