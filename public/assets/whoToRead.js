function findHashTags(str) {
  const stroke = str.split(' ');
  const temp = [];
  const result = [];
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
      result.push(foo);
    }
  }
  return result;
}

export default function whoToRead(profile, newProfiles, count) {
  let newCount = count;
  const profiles = newProfiles;
  if (newCount > profiles.length) {
    newCount = newProfiles.length;
  }
  let unique2 = [];
  let temp1 = [];
  let tempResult;
  const result = [];
  profile.posts.forEach((post) => {
    temp1 = temp1.concat(findHashTags(post));
  });
  const unique1 = temp1.filter((item, i, ar) => ar.indexOf(item) === i);
  for (let i = 0; i < profiles.length; i += 1) {
    let temp2 = [];
    profiles[i].posts.forEach((post) => {
      temp2 = temp2.concat(findHashTags(post));
    });
    unique2 = temp2.filter((item, index, ar) => ar.indexOf(item) === index);
    tempResult = unique1.concat(unique2);
    profiles[i].hashtags = tempResult.filter((item, index, ar) => ar.indexOf(item) !== index);
  }
  for (let i = 0; i < profiles.length; i += 1) {
    for (let j = i; j < profiles.length; j += 1) {
      if (profiles[i].hashtags.length < profiles[j].hashtags.length) {
        const massiveTemp = profiles[i];
        profiles[i] = profiles[j];
        profiles[j] = massiveTemp;
      }
    }
  }
  for (let i = 0; i < newCount; i += 1) {
    result.push(profiles[i].id);
  }
  console.log(result);
  return result;
}

const profile = {
  id: 255,
  posts: [
    'Привет. #сегодня был на концерте группы #linkinpark',
    'как вам новая песня #linkinpark',
  ],
};
const profiles = [
  {
    id: 257,
    posts: [
      'Сегодня вышла новая версия #javascript',
      'как вам новая версия #javascript?',
    ],
  },
  {
    id: 258,
    posts: [
      '#сегодня мне не понравилась новая песня #linkinpark',
    ],
  },
  {
    id: 256,
    posts: [
      '#сегодня был невозмутимый день',
    ],
  },
  {
    id: 512,
    posts: [
      '#linkinpark мне #ужасно не понравилась новая песня #linkinpark',
    ],
  },
  {
    id: 1024,
    posts: [
      '#Добро мне не понравилась новая песня #зло',
    ],
  },
];
const profile1 = {
  id: 251,
  posts: [
    'Привет. #что был на концерте группы #linkinpark',
    'как вам новая песня #ужасно',
  ],
};
const profile2 = {
  id: 250,
  posts: [
    '#Добро побеждает #зло',
    '#зло выглядит #ужасно',
  ],
};
