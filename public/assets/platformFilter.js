import censorship from './badWords.js';

export default function platformFilter(InnerText) {
  const CensoreWords = censorship();
  const Text = InnerText.split(' ');
  CensoreWords.forEach((BadWord) => {
    for (let i = 0; i < Text.length; i += 1) {
      const box = Text[i].toLowerCase();
      if (box.includes(BadWord) === true) {
        const boxIndex = [box.indexOf(BadWord), BadWord.length];
        const censore = Text[i].substr(boxIndex[0], boxIndex[1]);
        Text[i] = Text[i].substr(0, boxIndex[0]) + '*'.repeat(censore.length) + Text[i].substr(boxIndex[1]);
      }
    }
  });
  console.log(Text.join(' '));
  return Text.join(' ');
}
