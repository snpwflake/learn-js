import censorship from './badWords.js';

export default function platformFilter(InnerText) {
  const CensoreWords = censorship();
  const Text = InnerText.split(' ');
  for (let i = 0; i < Text.length; i += 1) {
    const word = Text[i].toLowerCase();
    CensoreWords.forEach((badWord) => {
      if (word.includes(badWord) === true) {
        const IndexBadWord = [word.indexOf(badWord), badWord.length];
        Text[i] = Text[i].substr(0, IndexBadWord[0]) + '*'.repeat(IndexBadWord[1]) + Text[i].substr(IndexBadWord[1] + 1);
      }
    });
  }
  console.log(Text.join(' '));
  return Text.join(' ');
}
