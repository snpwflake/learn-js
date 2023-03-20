export default function HashTag(str) {
  const stroke = str.split(' ');
  for (let index = 0; index < stroke.length; index += 1) {
    if (stroke[index].indexOf('#') === 0 && stroke[index].length > 1) {
      stroke[index] = `<a href="/search?tag="${stroke[index].substr(1)}">${stroke[index]}</a>`;
    }
  }
  const result = stroke.join(' ');
  return result;
}
