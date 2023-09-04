/* eslint-env mocha */

import { assert } from 'chai';
import OutURL from '../public/assets/OutURL.js';

describe('Функция для вывода ссылки в строке', function () {
  it('без ссылок', function () {
    const expectedResult = '<a href="https://vk.com">vk.com</a>';
    const result = OutURL('vk.com');
    assert.equal(expectedResult, result);

    const expectedResult1 = 'Здесь может быть и длинная ссылка <a href="https://github.com/snpwflake/learn-js/pull/26">https://github.com/snpwflake/learn-js/pull/26</a>';
    const result1 = OutURL('Здесь может быть и длинная ссылка https://github.com/snpwflake/learn-js/pull/26');
    assert.equal(expectedResult1, result1);

    const expectedResult2 = 'Здесь может быть и длинная ссылка <a href="https://timyr.278@gmail.com">timyr.278@gmail.com</a>';
    const result2 = OutURL('Здесь может быть и длинная ссылка timyr.278@gmail.com');
    assert.equal(expectedResult2, result2);
  });
});
