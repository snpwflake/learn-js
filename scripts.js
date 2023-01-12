const message1 = 'Всем привет!';
postSize(message1); // вернет 12
const message2 = 'Привет! https://github.com';
postSize(message2); // вернет 8

function postSize(message){
    let result;
    let str = message.indexOf('https://')
    if (str < 0){
        result = message.length;
    }
    else{
        result = str
    }
    console.log(result);
    return result;
}