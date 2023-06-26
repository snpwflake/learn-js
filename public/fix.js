import timeLater from './assets/timeLater.js';

function createPost() {
  const div = document.createElement('div');
  const hr = document.createElement('hr');
  div.className = 'post';
  div.innerHTML = document.querySelector('.post').innerHTML;
  document.querySelector('.views_posts').append(hr);
  document.querySelector('.views_posts').append(div);
}

function dataPost(indexUser, indexPost) {
  indexPost.setAttribute('id', indexUser.id);
  const avatar = indexPost.querySelector('img');
  const userName = indexPost.querySelector('.username');
  const nickName = indexPost.querySelector('.nickname');
  const timeCreate = indexPost.querySelector('.time-create');
  const text = indexPost.querySelector('.post_text');
  const like = indexPost.querySelector('.like').querySelector('span');
  const repost = indexPost.querySelector('.repost').querySelector('span');
  const save = indexPost.querySelector('.save').querySelector('span');

  avatar.src = indexUser.avatar;
  userName.innerHTML = indexUser.username;
  nickName.innerHTML = indexUser.nickname;
  timeCreate.innerHTML = timeLater(indexUser.timecreate);
  text.innerHTML = indexUser.text;
  like.innerHTML = indexUser.like;
  save.innerHTML = indexUser.save;
  repost.innerHTML = indexUser.repost;
}

fetch('data.json').then((data) => data.text()).then((data) => {
  const temp = JSON.parse(data);
  const statics = document.querySelectorAll('.stats_count');
  statics[0].innerText = temp.static.signUp;
  statics[1].innerText = temp.static.sendMessages;
  statics[2].innerText = temp.static.sendToday;

  const maxCountPost = 5;
  const viewPost = document.querySelectorAll('.post');
  for (let i = viewPost.length; i <= maxCountPost; i += 1) {
    createPost();
  }
  const viewPostCreated = document.querySelectorAll('.post');
  for (let i = 0; i <= maxCountPost; i += 1) {
    dataPost(temp.lastMessages[i], viewPostCreated[i]);
  }
});
