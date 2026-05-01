const input = document.getElementById('task-input');
const addButton = document.getElementById('add-button');
const taskList = document.getElementById('task-list');

addButton.addEventListener('click', function () {
  const text = input.value.trim();
  if (text === '') return;

  const li = document.createElement('li');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      li.classList.add('done');
    } else {
      li.classList.remove('done');
    }
  });

  const span = document.createElement('span');
  span.textContent = text;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '削除';
  deleteButton.className = 'delete-button';
  deleteButton.addEventListener('click', function () {
    taskList.removeChild(li);
  });

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteButton);
  taskList.appendChild(li);

  input.value = '';
  input.focus();
});

input.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    addButton.click();
  }
});
