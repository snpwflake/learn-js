import validEmail from '../assets/ValidateEmail.js';

async function login(e) {
  e.stopPropagation();
  const elements = {
    wrongEmail: document.getElementById('wrong_email-login'),
    wrongPass: document.getElementById('wrong_pass-login'),
  };
  const user = {
    email: document.getElementById('email-login').value,
    pass: document.getElementById('pass-login').value,
  };
  const options = {
    method: 'POST',
    body: JSON.stringify({
      email: user.email,
      pass: user.pass,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };
  elements.wrongEmail.style.display = 'none';
  elements.wrongPass.style.display = 'none';

  const response = await fetch('/api/login', options);
  const commits = await response.json();
  if (commits.status === 'ERROR') {
    if (commits.exist) {
      elements.wrongPass.textContent = 'Неправильный пароль';
      elements.wrongPass.style.display = 'block';
    } else {
      elements.wrongEmail.textContent = 'E-mail не зарегистрирован';
      elements.wrongEmail.style.display = 'block';
    }
    return;
  }
  window.location.replace('/feed');
}

async function createUser(e) {
  e.stopPropagation();
  const elements = {
    wrongEmail: document.getElementById('wrong_email'),
    wrongPass: document.getElementById('wrong_pass'),
    wrongNickname: document.getElementById('wrong_nickname'),
  };
  const user = {
    nickname: document.getElementById('username').value,
    email: document.getElementById('email').value,
    pass: document.getElementById('pass').value,
    passConfirm: document.getElementById('passconfirm').value,
  };

  const options = {
    method: 'POST',
    body: JSON.stringify({
      nickname: user.nickname,
      email: user.email,
      pass: user.pass,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  };

  if (user.passConfirm !== user.pass) {
    elements.wrongPass.style.display = 'block';
    return;
  }
  elements.wrongPass.style.display = 'none';

  if (!validEmail(user.email)) {
    elements.wrongEmail.textContent = 'E-mail не подходит';
    elements.wrongEmail.style.display = 'block';
    return;
  }
  elements.wrongEmail.style.display = 'none';

  const response = await fetch('/api/reg', options);
  const commits = await response.json();
  if (commits.status === 'ERROR') {
    if (commits.exist) {
      elements.wrongNickname.textContent = 'Никней занят';
      elements.wrongNickname.style.display = 'block';
    } else {
      elements.wrongEmail.textContent = 'E-mail уже зарегистрирован';
      elements.wrongEmail.style.display = 'block';
    }
    return;
  }
  alert('Вы успешно зарегистрированы!');
}

export { login, createUser };
