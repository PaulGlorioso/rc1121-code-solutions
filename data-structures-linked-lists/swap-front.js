/* exported swapFront */

function swapFront(list) {
  if (list.next !== null) {
    const sec = list.next;
    const end = list.next.next;
    list.next = end;
    sec.next = list;
    return sec;
  }
  return list;
}
