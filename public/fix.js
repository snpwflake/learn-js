fetch('data.json').then((data) => data.text()).then((data) => {
  const temp = JSON.parse(data);
  const statics = document.querySelectorAll('.stats_count');
  statics[0].innerText = temp.static.signUp;
  statics[1].innerText = temp.static.sendMessages;
  statics[2].innerText = temp.static.sendToday;
});
