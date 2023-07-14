import timeLater from './assets/timeLater.js';

function createPost(post) {
  const post1 = `           <img class="post_img-user" src="${post.avatar}" alt="">
  <div class="post_information">
    <div class="post_header">
      <div class="post_user">
        <div class="post_username">${post.username}</div>
        <div class="post_nickname">${post.nickname}</div>
      </div>
      <span class="post_time-created">${timeLater(post.timecreate)}</span>
    </div>
    <span class="post_text">${post.text}</span>
    <div class="post_statistics">
      <div class="post_repost">
        <svg width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.6875 0.8125L1.40625 4.5625M1.40625 4.5625L4.6875 8.3125M1.40625 4.5625H8.4375C12.1875 4.5625 14.0625 6.4375 14.0625 10.1875" stroke="#ABACB1" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <span>${post.repost}</span>                
      </div>
      <div class="post_like">
        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.875 6.50002C0.46875 4.62502 0.9375 1.81252 3.28125 0.875015C5.625 -0.0624846 7.03125 1.81252 7.5 2.75002C7.96875 1.81252 9.84375 -0.0624846 12.1875 0.875015C14.5312 1.81252 14.5312 4.62502 13.125 6.50002C11.7187 8.37502 7.5 12.125 7.5 12.125C7.5 12.125 3.28125 8.37502 1.875 6.50002Z" stroke="#ABACB1" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <span>${post.like}</span>                
      </div>
      <div class="post_save">
        <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.125 9.3125V13.0625H0.875V9.3125M6.5 0.875V10.25M6.5 0.875L2.75 4.625M6.5 0.875L10.25 4.625" stroke="#ABACB1" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        <span>${post.save}</span>                
      </div>
    </div>
  </div>`;
  return post1;
}

function downloadPosts(temp) {
  const dataPost = document.querySelectorAll('.post');

  for (let i = 0; i < dataPost.length; i += 1) {
    dataPost[i].id = temp.lastMessages[i].id;
    dataPost[i].innerHTML = createPost(temp.lastMessages[i]);
  }
  // console.log(temp.lastMessages.length, dataPost.length);

  if (temp.lastMessages.length > dataPost.length) {
    for (let i = dataPost.length; i < temp.lastMessages.length; i += 1) {
      const div = document.createElement('div');
      const hr = document.createElement('hr');
      div.className = 'post';
      div.id = temp.lastMessages[i].id;
      hr.className = 'post-hr';
      document.querySelector('.posts_container').appendChild(hr);
      document.querySelector('.posts_container').appendChild(div);
      div.innerHTML = createPost(temp.lastMessages[i]);
    }
  }
}

fetch('data.json').then((data) => data.text()).then((data) => {
  const temp = JSON.parse(data);
  const statics = document.querySelectorAll('.stat_count');
  statics[0].innerText = temp.static.signUp;
  statics[1].innerText = temp.static.sendMessages;
  statics[2].innerText = temp.static.sendToday;

  setTimeout(downloadPosts, 3000, temp);
});
