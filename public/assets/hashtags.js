export default function HashTag(str) {
  const stroke = str.split(' ');
  const temp = [];
  for (let index = 0; index < stroke.length; index += 1) {
    if (stroke[index].indexOf('#') === 0 && stroke[index].length > 1) {
      const ignore = [':', '!', '.', '/', '?', ';'];
      let foo = stroke[index];
      ignore.forEach((symb) => {
        if (foo.includes(symb) === true) {
          temp.push(foo.substr(foo.indexOf(symb)));
          foo = foo.substr(0, foo.indexOf(symb));
        }
      });
      stroke[index] = `<a href="/search?tag="${(foo).substr(1)}">${foo}</a>${temp.join('')}`;
    }
  }
  const result = stroke.join(' ');
  return result;
}
