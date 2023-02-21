/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
// eslint-disable-next-line no-multiple-empty-lines

import { assert } from 'chai';
import validEmail from '../public/assets/validEmail.js';

describe('Функция валидности email', function () {
  it('проверяет подходит email для регистрации или нет', function () {
    const expectedResult = 'E-mail подходит';

    const result0 = validEmail('timyr.278@gmail.com');
    assert(expectedResult, result0);

    const result1 = validEmail('1234asdzxc@ga');
    assert(expectedResult, result1);

    const result2 = validEmail('edu.com@');
    assert(expectedResult, result2);

    const result3 = validEmail('vk.com@vk.com');
    assert(expectedResult, result3);

    const result4 = validEmail('timyr .27  8@gmail.com');
    assert(expectedResult, result4);

    const result5 = validEmail('timyr.278@gm ail.com');
    assert(expectedResult, result5);

    const result6 = validEmail('timyr.278@gmail/com');
    assert(expectedResult, result6);

    const result7 = validEmail('Тутсамыйрах@rf.ру');
    assert(expectedResult, result7);

    const result8 = validEmail('timyr2780@sd.ru');
    assert(expectedResult, result8);
  });
});
