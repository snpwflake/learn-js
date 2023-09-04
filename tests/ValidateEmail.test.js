/* eslint-env mocha */

import { assert } from 'chai';
import validEmail from '../public/assets/ValidateEmail.js';

describe('Функция для проверки валидности email', function () {
  it('без ссылок', function () {
    const expectedResult = 'E-mail подходит';
    const result = validEmail('timyr.278@gmail.com');
    assert.equal(expectedResult, result);

    const expectedResult1 = 'E-mail подходит';
    const result1 = validEmail('timyr278@vk.com');
    assert.equal(expectedResult1, result1);

    const expectedResult2 = 'E-mail не подходит';
    const result2 = validEmail('timyr.278@g');
    assert.equal(expectedResult2, result2);

    const expectedResult3 = 'E-mail не подходит';
    const result3 = validEmail('timyr.278@gmail.');
    assert.equal(expectedResult3, result3);

    const expectedResult4 = 'E-mail не подходит';
    const result4 = validEmail('timyr.278@gmail.v');
    assert.equal(expectedResult4, result4);

    const expectedResult5 = 'E-mail не подходит';
    const result5 = validEmail('timyr.278gmail.com');
    assert.equal(expectedResult5, result5);

    const expectedResult6 = 'E-mail не подходит';
    const result6 = validEmail('timyr.278@https://gmail.com');
    assert.equal(expectedResult6, result6);
  });
});
