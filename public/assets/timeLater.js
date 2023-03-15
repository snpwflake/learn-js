function timeText(time) {
  let second = time;
  let minute = 0;
  let hour = 0;
  let day = 0;
  let week = 0;
  let month = 0;
  let year = 0;
  let result = ['second', second];
  if (second >= 60) {
    minute = (second - (second % 60)) / 60;
    second %= 60;
    result = ['minute', minute];
    if (minute >= 60) {
      hour = (minute - (minute % 60)) / 60;
      minute %= 60;
      result = ['hour', hour];
      if (hour >= 24) {
        day = (hour - (hour % 24)) / 24;
        hour %= 24;
        result = ['day', day];
        if (day >= 7) {
          week = (day - (day % 7)) / 7;
          result = ['week', week];
          if (day >= 30) {
            month = (day - (day % 30)) / 30;
            result = ['month', month];
            if (day >= 365) {
              year = (day - (day % 365)) / 365;
              month %= 12;
              result = ['year', year];
            }
          }
        }
      }
    }
  }
  // console.log(`${year}:${month}:${week}:${day}:${hour}:${minute}:${second}`);
  return result;
}
export default function timeLater(time) {
  const result = timeText(time);
  const x = result[0];
  const foo = result[1];
  let output;
  switch (x) {
    case 'second':
      if (foo === 1) {
        output = '1 секунду назад';
      } else if (foo >= 2 && foo <= 4) {
        output = `${foo} секунды назад`;
      } else if (foo >= 5 && foo <= 20) {
        output = `${foo} секунд назад`;
      } else if (foo >= 21 && foo < 60 && foo % 10 === 1) {
        output = `${foo} секунду назад`;
      } else if (foo >= 21 && foo < 60 && foo % 10 >= 2 && foo % 10 <= 4) {
        output = `${foo} секунды назад`;
      } else {
        output = `${foo} секунд назад`;
      }
      break;
    case 'minute':
      if (foo === 1) {
        output = '1 минуту назад';
      } else if (foo >= 2 && foo <= 4) {
        output = `${foo} минуты назад`;
      } else if (foo >= 5 && foo <= 20) {
        output = `${foo} минут назад`;
      } else if (foo >= 21 && foo < 60 && foo % 10 === 1) {
        output = `${foo} минуту назад`;
      } else if (foo >= 21 && foo < 60 && foo % 10 >= 2 && foo % 10 <= 4) {
        output = `${foo} минуты назад`;
      } else {
        output = `${foo} минут назад`;
      }
      break;
    case 'hour':
      if (foo === 1) {
        output = '1 час назад';
      } else if (foo >= 2 && foo <= 4) {
        output = `${foo} часа назад`;
      } else if (foo >= 5 && foo <= 20) {
        output = `${foo} часов назад`;
      } else if (foo >= 21 && foo < 24 && foo % 10 === 1) {
        output = `${foo} час назад`;
      } else if (foo >= 21 && foo < 24 && foo % 10 >= 2 && foo % 10 <= 4) {
        output = `${foo} часа назад`;
      } else {
        output = `${foo} часов назад`;
      }
      break;
    case 'day':
      if (foo === 1) {
        output = '1 день назад';
      } else if (foo >= 2 && foo <= 4) {
        output = `${foo} дня назад`;
      } else if (foo >= 5 && foo < 7) {
        output = `${foo} дней назад`;
      }
      break;
    case 'week':
      if (foo === 1) {
        output = '1 неделю назад';
      } else if (foo >= 2 && foo <= 4) {
        output = `${foo} недели назад`;
      }
      break;
    case 'month':
      if (foo === 1) {
        output = '1 месяц назад';
      } else if (foo >= 2 && foo <= 4) {
        output = `${foo} месяца назад`;
      } else if (foo >= 5 && foo <= 12) {
        output = `${foo} месяцев назад`;
      }
      break;
    case 'year':
      if (foo === 1) {
        output = '1 год назад';
      } else if (foo >= 2 && foo <= 4) {
        output = `${foo} года назад`;
      } else if (foo >= 5 && foo <= 20) {
        output = `${foo} лет назад`;
      } else if (foo >= 21 && foo < 100 && foo % 10 === 1) {
        output = `${foo} год назад`;
      } else if (foo >= 21 && foo < 100 && foo % 10 >= 2 && foo % 10 <= 4) {
        output = `${foo} года назад`;
      } else if (foo > 100) {
        output = `более ${100} лет назад`;
      } else {
        output = `${foo} лет назад`;
      }
      break;
    default:
      output = 1;
      break;
  }
  return output;
}
