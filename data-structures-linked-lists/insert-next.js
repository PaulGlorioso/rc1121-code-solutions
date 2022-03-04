/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported insertNext */

function insertNext(list, value) {
  const end = list.next;
  const insert = new LinkedList(value);
  if (list.next !== null) {
    list.next = insert;
    list.next.next = end;
  }
}
