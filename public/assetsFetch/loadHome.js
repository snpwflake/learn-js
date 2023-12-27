import createPost from './createpost.js';

async function loadPosts() {
  const dataPost = document.querySelectorAll('.post');
  const response = await fetch('/api/post');
  const data = await response.json();
  console.log(data);

  for (let i = 0; i < dataPost.length; i += 1) {
    dataPost[i].id = data[i].id;
    dataPost[i].innerHTML = createPost(data[i]);
  }

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

async function loadTopics() {
  const response = await fetch('data.json');
  const data = (await response.json()).topics;
  const buffer = document.querySelectorAll('.topic_container');
  for (let i = 0; i < buffer.length; i += 1) {
    buffer[i].innerHTML = `
        <a href="#${data[i].hashtag}">#${data[i].hashtag}</a>
        <span>${data[i].messagesCount}</span>`;
  }
}

async function loadBlogs() {
  const response = await fetch('data.json');
  const data = (await response.json()).blogs;
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

async function loadStatistics() {
  const statics = document.querySelectorAll('.stat_count');
  const response = await fetch('data.json');
  const data = (await response.json()).static;
  statics[0].innerText = data.signUp;
  statics[1].innerText = data.sendMessages;
  statics[2].innerText = data.sendToday;
}

export {
  loadStatistics, loadBlogs, loadTopics, loadPosts,
};
