/* global LinkedList */ // eslint-disable-line no-unused-vars
/* exported prepend */

function prepend(list, value) {
  const newN = new LinkedList(value);
  newN.next = list;
  return newN;
}
