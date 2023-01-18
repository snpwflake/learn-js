const message1 = 'Всем привет!';
postSize(message1); // вернет 12

const message2 = 'Привет! https://github.com';
postSize(message2); // вернет 8

function postSize(message){
  let result;
  const str = message.split(' ');
  const arr = [];
  let i = 0;
  str.forEach(element => {
    if (element.indexOf('https') < 0 && element.indexOf('http') < 0 && element.indexOf('www.') < 0){
      arr.push(element);
    } 
    else{
      i+=1;
    } 
  });
  result = arr.join(' ').length + i;
  console.log(result);
  return result;
}