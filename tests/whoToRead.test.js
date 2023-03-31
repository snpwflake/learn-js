import { assert } from 'chai';
import whoToRead from '../public/assets/whoToRead.js';

describe('Функция для подбора постов для пользователя по хэштегам в его посте', function () {
  it('Первый профиль вывод схожих постов до 3 пользователей', function () {
    const profile = {
      id: 255,
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
    assert.equal([258, 256, 512].toString(), whoToRead(profile, profiles, 3).toString());
  });
  it('Второй профиль c выводом до 5 схожих постов', function () {
    const profile1 = {
      id: 251,
      posts: [
        'Привет. #что был на концерте группы #linkinpark',
        'как вам новая песня #ужасно',
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
    const result = [512, 258, 256, 257, 1024].toString();
    assert.equal(result, whoToRead(profile1, profiles, 5).toString());
  });
  it('Третий профиль, вывод схожих постов до 8 пользователей', function () {
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
    const profile2 = {
      id: 250,
      posts: [
        '#Добро побеждает #зло',
        '#зло выглядит #ужасно',
      ],
    };
    const result = [1024, 512, 256, 257, 258].toString();
    assert.equal(result, whoToRead(profile2, profiles, 8).toString());
  });
});
