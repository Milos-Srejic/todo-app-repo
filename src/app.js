window.onload = function () {
  // DELETE TODO
  const list = document.querySelector('#todo-list');
  list.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
      const li = e.target.parentNode;
      list.removeChild(li);
    }
  });
};
