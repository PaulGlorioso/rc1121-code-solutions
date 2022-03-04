/* exported takeNextSmallest */

function takeNextSmallest(queue) {
  if (typeof queue.peek() === 'undefined') return;
  let first = queue.dequeue();
  if (typeof queue.peek() === 'undefined') {
    return first;
  }
  let nextNum = queue.peek();
  while (first > nextNum) {
    nextNum = queue.dequeue();
    queue.enqueue(first);
    first = nextNum;
    nextNum = queue.peek();
  }
  return first;
}
