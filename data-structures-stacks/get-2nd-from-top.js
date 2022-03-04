/* exported get2ndFromTop */

function get2ndFromTop(stack) {
  if (stack.peek() === undefined) {
    return undefined;
  }
  const num = stack.pop();
  if (stack.peek() === undefined) {
    const newStack = stack.push(num);
    return newStack;
  }
  const sec = stack.peek();
  stack.push(num);
  return sec;
}
