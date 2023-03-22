import { assert } from 'chai';
import HashTag from '../public/assets/hashtags.js';

describe('Функция для нахождения хэштегов', function () {
  it('Строка без хэштега', function () {
    assert.equal('Кто еще изучает хэштег?', HashTag('Кто еще изучает хэштег?'));
  });
  it('Строка с хэштегом', function () {
    assert.equal('Кто еще изучает <a href="/search?tag="javascript">#javascript</a> ?', HashTag('Кто еще изучает #javascript ?'));
  });
  it('Строка из хэштегов', function () {
    assert.equal('<a href="/search?tag="победа">#победа</a> <a href="/search?tag="Tesla">#Tesla</a> <a href="/search?tag="hello">#hello</a> <a href="/search?tag="Molodec">#Molodec</a>', HashTag('#победа #Tesla #hello #Molodec'));
  });
  it('Строка с хэштегами', function () {
    assert.equal('Кто еще изучает <a href="/search?tag="победа">#победа</a> <a href="/search?tag="Tesla">#Tesla</a>', HashTag('Кто еще изучает #победа #Tesla'));
  });
  it('Пустая строка', function () {
    assert.equal('', HashTag(''));
  });
  it('Строка из одного хэштега', function () {
    assert.equal('<a href="/search?tag="LoL">#LoL</a>', HashTag('#LoL'));
  });
  it('Хэштег с символом рядом', function () {
    assert.equal('как вам новая версия <a href="/search?tag="javascript">#javascript</a>? <a href="/search?tag="javascript">#javascript</a>?? <a href="/search?tag="javascript">#javascript</a>??:::;ж?', HashTag('как вам новая версия #javascript? #javascript? #javascript?:::;ж'));
  });
});
