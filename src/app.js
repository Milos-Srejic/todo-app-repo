window.onload = function () {
  // DELETE TODO
  const list = document.querySelector('#todo-list');
  list.addEventListener('click', function (e) {
    if (e.target.className == 'delete') {
      const li = e.target.parentNode;
      list.removeChild(li);
    }
  });

  // ADD NEW TODO
  const addForm = document.forms['add-form'];
  addForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const value = addForm.querySelector('input').value;
    if (value == '') {
      alert('Please enter name of new todo');
    } else {
      const li = document.createElement('li');
      const name = document.createElement('span');
      const deleteBtn = document.createElement('span');

      name.textContent = value;
      deleteBtn.textContent = 'delete';

      name.classList.add('name');
      deleteBtn.classList.add('delete');

      li.appendChild(name);
      li.appendChild(deleteBtn);
      list.appendChild(li);
      addForm.querySelector('input').value = '';
    }
  });
};
