/*global describe, it*/
/*eslint no-undef: "error"*/

import { assert } from 'chai';
import postSize from '../public/assets/PostSize.js';

describe('Функция проверки расчета размера поста', function () {
  it('без ссылок', function () {
    const expectedResult = 'Каждое предложение должно быть вот таким   '.length;
    const result = postSize('Каждое предложение должно быть вот таким vk.com https://vk.com edu.block.ru');
    assert.equal(expectedResult, result);

    const expectedResult1 = 'Допустим здесь есть такая длинная ссылка  и тут дальше предложение!'.length;
    const result1 = postSize('Допустим здесь есть такая длинная ссылка https://github.com/burtovoy/template/blob/master/public/assets/post_size.js и тут дальше предложение!');
    assert.equal(expectedResult1, result1);

    const expectedResult2 = 'После ссылки может быть всякие символы :;.! и они должны не засчитаться'.length;
    const result2 = postSize('После ссылки может быть всякие символы https://vk.com:;.! и они должны не засчитаться');
    assert.equal(expectedResult2, result2);
  });
});
