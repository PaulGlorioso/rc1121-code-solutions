/* exported takeSmaller */

function takeSmaller(queue) {
  if (typeof queue.peek() === 'undefined') return;
  const front = queue.dequeue();
  if (typeof queue.peek() === 'undefined') {
    return front;
  }
  const second = queue.dequeue();
  if (front < second) {
    queue.enqueue(second);
    return front;
  } else if (front === second) {
    queue.enqueue(second);
    return second;
  } else if (front > second) {
    queue.enqueue(front);
    return second;
  }
}
