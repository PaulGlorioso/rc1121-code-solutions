/* exported takeValueAtIndex */

function takeValueAtIndex(queue, index) {
  if (typeof queue.peek() === 'undefined') return;
  const first = queue.dequeue();
  if (typeof queue.peek() === 'undefined') {
    return first;
  }
  queue.enqueue(first);
  let counter = 1;
  let next;
  while (counter < index) {
    next = queue.dequeue();
    counter++;
    queue.enqueue(next);
  }
  next = queue.dequeue();
  return next;
}
