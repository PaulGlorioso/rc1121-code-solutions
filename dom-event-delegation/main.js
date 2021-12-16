document.querySelector('.task-list').addEventListener('click', function (event) {
  console.log('Event.target:', event.target);
  console.log('Event.target.tagName:', event.target.tagName);
  if (event.target.tagName === 'BUTTON') {
    var taskItem = document.querySelector('button').closest('.task-list-item');
    console.log('Closest target:', taskItem);
    taskItem.remove();
  }
});
