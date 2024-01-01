import { createUser, login } from './assetsFetch/auth.js';
import {
  loadPosts, loadTopics, loadBlogs, loadStatistics,
} from './assetsFetch/loadHome.js';

// Подгрузка контента
loadPosts();
loadTopics();
loadBlogs();
loadStatistics();
// Модальное окно регистрации
document.getElementById('closeSignupForm').onclick = function () {
  document.getElementById('outbox-registration').style.display = 'none';
};
document.getElementById('buttonsignup-header').onclick = function () {
  document.getElementById('outbox-registration').style.display = 'flex';
};
document.getElementById('buttonsignup-footer').onclick = function () {
  document.getElementById('outbox-registration').style.display = 'flex';
};
// Модальное окно авторизации
document.getElementById('closeloginForm').onclick = function () {
  document.getElementById('outbox-login').style.display = 'none';
};
document.getElementById('buttonsignin-header').onclick = function () {
  document.getElementById('outbox-login').style.display = 'flex';
};
document.getElementById('buttonsignin-footer').onclick = function () {
  document.getElementById('outbox-login').style.display = 'flex';
};
// Отправка запросов
document.getElementById('btncreateuser').onclick = createUser;
document.getElementById('btnlogin').onclick = login;
