/*global describe, it*/
/*eslint no-undef: "error"*/

import { assert } from 'chai';
import platformFilter from '../public/assets/platformFilter.js';

describe('Функиця для цензурирования мата в тексте', function () {
  let result;
  it('Текст без мата 1', function () {
    const SourceText = 'Дядя Семён ехал из города домой. С ним была собака Жучка, Вдруг из леса выскочили волки. Жучка испугалась и прыгнула в сани. У дяди Семёна была хорошая лошадь. Она тоже испугалась и быстро помчалась по дороге. Деревня была близко. Показались огни в окнах. Волки отстали.';
    result = 'Дядя Семён ехал из города домой. С ним была собака Жучка, Вдруг из леса выскочили волки. Жучка испугалась и прыгнула в сани. У дяди Семёна была хорошая лошадь. Она тоже испугалась и быстро помчалась по дороге. Деревня была близко. Показались огни в окнах. Волки отстали.';
    assert.equal(result, platformFilter(SourceText));
  });
  it('Текст без мата 2', function () {
    const SourceTextNoCensore = 'В этом уроке мы решим похожую задачу, но будем создавать таблицу не из массива как в предыдущем уроке, а из объекта на JavaScript. Рассмотрим как можно объединять ячейки таблицы из JavaScript кода и закрепим ранее полученные знания и создадим вложенные циклы, для того чтобы работать с многомерными структурами данных.';
    result = 'В этом уроке мы решим похожую задачу, но будем создавать таблицу не из массива как в предыдущем уроке, а из объекта на JavaScript. Рассмотрим как можно объединять ячейки таблицы из JavaScript кода и закрепим ранее полученные знания и создадим вложенные циклы, для того чтобы работать с многомерными структурами данных.';
    assert.equal(result, platformFilter(SourceTextNoCensore));
  });
  it('Текст без мата 3', function () {
    const SourceTextNoCensore = 'В деревне было много садов. Осенью поспевали яблоки и груши. В садах было много птиц. Они выводили птенцов и целый день кормили их червяками.';
    result = 'В деревне было много садов. Осенью поспевали яблоки и груши. В садах было много птиц. Они выводили птенцов и целый день кормили их червяками.';
    assert.equal(result, platformFilter(SourceTextNoCensore));
  });
  it('Текст без мата 4', function () {
    const SourceTextNoCensore = 'На ферме большой птичий двор. На дворе гуляют гуси и гусята, утки и утята, куры и цыплята. Птиц кормит птичница бабушка Настя. Ей помогают Таня и Катя. Они кормят гусят, утят и цыплят.';
    result = 'На ферме большой птичий двор. На дворе гуляют гуси и гусята, утки и утята, куры и цыплята. Птиц кормит птичница бабушка Настя. Ей помогают Таня и Катя. Они кормят гусят, утят и цыплят.';
    assert.equal(result, platformFilter(SourceTextNoCensore));
  });
  it('Текст с матом 1', function () {
    const SourceTextNoCensore = 'В этом тексте такие матерные слова как хуй пизда охуели';
    result = 'В этом тексте такие матерные слова как *** ***** о***ли';
    assert.equal(result, platformFilter(SourceTextNoCensore));
  });
  it('Текст с матом 2', function () {
    const SourceTextNoCensore = 'Пиздец сегодня такое произошло, все просто в ахере были. Вышел тип и один уебАл другого';
    result = '****** сегодня такое произошло, все просто в а***е были. Вышел тип и один уебАл другого';
    assert.equal(result, platformFilter(SourceTextNoCensore));
  });
});
