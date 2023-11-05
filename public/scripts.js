import timeLater from './assets/timeLater.js';
import validEmail from './assets/ValidateEmail.js';

function createPost(post) {
  const post1 = `<img class="post_img-user" src="" alt="">
  <div class="post_information">
    <div class="post_header">
      <div class="post_user">
        <div class="post_username">${post.name} ${post.surname}</div>
        <div class="post_nickname">${post.nickname}</div>
      </div>
      <span class="post_time-created">${timeLater(post.timecreate)}</span>
    </div>
    <span class="post_text">${post.content}</span>
    <div class="post_statistics">
      <div class="post_repost">
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.6875 0.8125L1.40625 4.5625M1.40625 4.5625L4.6875 8.3125M1.40625 4.5625H8.4375C12.1875 4.5625 14.0625 6.4375 14.0625 10.1875" stroke="#ABACB1" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <span>${post.reposts}</span>                
      </div>
      <div class="post_like">
        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.875 6.50002C0.46875 4.62502 0.9375 1.81252 3.28125 0.875015C5.625 -0.0624846 7.03125 1.81252 7.5 2.75002C7.96875 1.81252 9.84375 -0.0624846 12.1875 0.875015C14.5312 1.81252 14.5312 4.62502 13.125 6.50002C11.7187 8.37502 7.5 12.125 7.5 12.125C7.5 12.125 3.28125 8.37502 1.875 6.50002Z" stroke="#ABACB1" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <span>${post.likes}</span>                
      </div>
      <div class="post_save">
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.125 9.3125V13.0625H0.875V9.3125M6.5 0.875V10.25M6.5 0.875L2.75 4.625M6.5 0.875L10.25 4.625" stroke="#ABACB1" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <span>${post.saves}</span>                
      </div>
    </div>
  </div>`;
  return post1;
}

function downloadPosts(db) {
  const dataPost = document.querySelectorAll('.post');
  const data = JSON.parse(db);

  for (let i = 0; i < dataPost.length; i += 1) {
    dataPost[i].id = data[i].id;
    dataPost[i].innerHTML = createPost(data[i]);
  }
  // console.log(temp.lastMessages.length, dataPost.length);

  if (data.length > dataPost.length) {
    for (let i = dataPost.length; i < data.length; i += 1) {
      const div = document.createElement('div');
      const hr = document.createElement('hr');
      div.className = 'post';
      div.id = data[i].id;
      hr.className = 'post-hr';
      document.querySelector('.posts_container').appendChild(hr);
      document.querySelector('.posts_container').appendChild(div);
      div.innerHTML = createPost(data[i]);
    }
  }
}

function topicsData(data) {
  const buffer = document.querySelectorAll('.topic_container');
  for (let i = 0; i < buffer.length; i += 1) {
    buffer[i].innerHTML = `
        <a href="#${data[i].hashtag}">#${data[i].hashtag}</a>
        <span>${data[i].messagesCount}</span>`;
  }
}

function blogsData(data) {
  const buffer = document.querySelectorAll('.blog');
  for (let i = 0; i < buffer.length; i += 1) {
    buffer[i].innerHTML = `
    <img class="blog_img" src="${data[i].img}" alt="">
    <div class="blog_container">
      <span class="blog_name">${data[i].title}</span>
      <span class="blog_nickname">${data[i].url}</span>
    </div>
    <a href="#${data[i].url}">Читать</a>
    `;
  }
}

fetch('data.json').then((data) => data.text()).then((data) => {
  const temp = JSON.parse(data);
  const statics = document.querySelectorAll('.stat_count');
  statics[0].innerText = temp.static.signUp;
  statics[1].innerText = temp.static.sendMessages;
  statics[2].innerText = temp.static.sendToday;

  setTimeout(downloadPosts, 3000, temp);

  topicsData(temp.topics);

  blogsData(temp.blogs);
});

fetch('/api/posts').then((data) => data.text()).then((data) => {
  setTimeout(downloadPosts, 3000, data);
});

const closeSignupForm = document.getElementById('closeSignupForm');
const openSignupFormHeader = document.getElementById('buttonsignup-header');
const openSignupFormFooter = document.getElementById('buttonsignup-footer');

closeSignupForm.onclick = function () {
  document.getElementById('outbox-registration').style.display = 'none';
};

openSignupFormHeader.onclick = function () {
  document.getElementById('outbox-registration').style.display = 'flex';
};
openSignupFormFooter.onclick = function () {
  document.getElementById('outbox-registration').style.display = 'flex';
};

const closeloginForm = document.getElementById('closeloginForm');
const openloginFormHeader = document.getElementById('buttonsignin-header');
const openloginFormFooter = document.getElementById('buttonsignin-footer');

closeloginForm.onclick = function () {
  document.getElementById('outbox-login').style.display = 'none';
};

openloginFormHeader.onclick = function () {
  document.getElementById('outbox-login').style.display = 'flex';
};
openloginFormFooter.onclick = function () {
  document.getElementById('outbox-login').style.display = 'flex';
};

async function createUser(e) {
  e.stopPropagation();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const pass = document.getElementById('pass').value;
  const passConfirm = document.getElementById('passconfirm').value;
  if (passConfirm !== pass) {
    document.getElementById('wrong_pass').style.display = 'block';
    return;
  }
  document.getElementById('wrong_pass').style.display = 'none';
  if (!validEmail(email)) {
    document.getElementById('wrong_email').textContent = 'E-mail не подходит';
    document.getElementById('wrong_email').style.display = 'block';
  } else {
    document.getElementById('wrong_email').style.display = 'none';
    await fetch('/api/createuser', {
      method: 'POST',
      body: JSON.stringify({
        username,
        email,
        pass,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        if (json === 'ERROR') {
          document.getElementById('wrong_email').textContent = 'E-mail уже зарегистрирован';
          document.getElementById('wrong_email').style.display = 'block';
        } else {
          alert('Вы успешно зарегистрированы!');
        }
      });
  }
}
document.getElementById('btncreateuser').addEventListener('click', createUser);

async function login(e) {
  e.stopPropagation();
  document.getElementById('wrong_email-login').style.display = 'none';
  document.getElementById('wrong_pass-login').style.display = 'none';
  const email = document.getElementById('email-login').value;
  const pass = document.getElementById('pass-login').value;
  await fetch('/api/login', {
    method: 'POST',
    body: JSON.stringify({
      email,
      pass,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((json) => {
      if (json === 400) {
        document.getElementById('wrong_email-login').textContent = 'E-mail не зарегистрирован';
        document.getElementById('wrong_email-login').style.display = 'block';
      } else if (json === 401) {
        document.getElementById('wrong_pass-login').textContent = 'Неправильный пароль';
        document.getElementById('wrong_pass-login').style.display = 'block';
      } else {
        document.cookie = `email=${json.email};`;
        document.cookie = `token=${json.token};`;
        window.location.replace('/feed');
      }
    });
}

document.getElementById('btnlogin').addEventListener('click', login);
// Проверка на существующие cookies
if (document.cookie !== '') {
  window.location.replace('/feed');
  alert('Вы уже авторизованы!');
}
