/* exported insertUnderTop */

function insertUnderTop(stack, value) {
  if (stack.peek() === undefined) {
    return stack.print();
  }
  const num = stack.pop();
  stack.push(value);
  stack.push(num);
}
