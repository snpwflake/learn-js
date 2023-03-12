import { assert } from 'chai';
import timeLater from '../public/assets/timeLater.js';

describe('Функция для вывода пройденного времени после опубликования поста', function () {
  it('минута', function () {
    assert.equal('10 минут назад', timeLater(60 * 10));
    assert.equal('4 минуты назад', timeLater(60 * 4));
    assert.equal('14 минут назад', timeLater(60 * 14));
  });
  it('секунда', function () {
    assert.equal('1 секунду назад', timeLater(1));
    assert.equal('22 секунды назад', timeLater(22));
  });
  it('час', function () {
    assert.equal('1 час назад', timeLater(3600));
    assert.equal('3 часа назад', timeLater(3600 * 3));
  });
  it('день', function () {
    assert.equal('5 дней назад', timeLater(3600 * 24 * 5));
    assert.equal('1 день назад', timeLater(3600 * 24));
  });
  it('неделя', function () {
    assert.equal('2 недели назад', timeLater(3600 * 24 * 14));
    assert.equal('1 неделю назад', timeLater(3600 * 24 * 7));
  });
  it('месяц', function () {
    assert.equal('1 месяц назад', timeLater(3600 * 24 * 30));
    assert.equal('4 месяца назад', timeLater(3600 * 24 * 120));
  });
  it('год', function () {
    assert.equal('1 год назад', timeLater(3600 * 24 * 365));
    assert.equal('5 лет назад', timeLater(3600 * 24 * 365 * 5));
  });
});
