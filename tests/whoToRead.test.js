/* eslint-env mocha */

import { assert } from 'chai';
import whoToRead from '../public/assets/whoToRead.js';

describe('Функция для подбора постов для пользователя по хэштегам в его посте', function () {
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
    {
      id: 256,
      posts: [
        '#сегодня был невозмутимый день',
      ],
    },
    {
      id: 512,
      posts: [
        '#linkinpark мне #ужасно не понравилась новая песня #linkinpark',
      ],
    },
    {
      id: 1024,
      posts: [
        '#Добро мне не понравилась новая песня #зло',
      ],
    },
  ];
  it('Профиль с 2-мя хэштегами #linkinpark и #сегодня выдает профили где есть хотя бы одно вхождение хэштега #linkinpark или #сегодня', function () {
    const profile = {
      id: 255,
      posts: [
        'Привет. #сегодня был на концерте группы #linkinpark',
        'как вам новая песня #linkinpark',
      ],
    };
    assert.equal([258, 256, 512].toString(), whoToRead(profile, profiles, 3).toString());
  });
  it('Профиль с 2-мя хэштегами #чмо и #linkinpark выдает профили где есть хотя бы одно вхождение хэштега #linkinpark или #чмо', function () {
    const profile1 = {
      id: 251,
      posts: [
        'Привет. #что был на концерте группы #linkinpark',
        'как вам новая песня #ужасно',
      ],
    };
    const result = [512, 258].toString();
    assert.equal(result, whoToRead(profile1, profiles, 2).toString());
  });
  it('Профиль с несколькоми хэштегами выдаёт профиль где есть хотя бы одно вхождение хэштегов #добро, #зло и #ужасно', function () {
    const profile2 = {
      id: 250,
      posts: [
        '#Добро побеждает #зло',
        '#зло выглядит #ужасно',
      ],
    };
    const result = [1024].toString();
    assert.equal(result, whoToRead(profile2, profiles, 1).toString());
  });
  it('Профиль без хэштегов, выдаёт профили в том порядке, в котором они записаны в базе данных', function () {
    const profile3 = {
      id: 229,
      posts: [
        'Добро побеждает зло',
        'зло выглядит ужасно',
      ],
    };
    const result = [1024, 512, 256, 257, 258].toString();
    assert.equal(result, whoToRead(profile3, profiles, 8).toString());
  });
});
