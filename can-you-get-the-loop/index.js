// Solution 1 (O(nxn) time complexity):
function loop_size(node) {
  let nodes = [];
  let currentNode = node;
  while (nodes.indexOf(currentNode) === -1) {
    nodes.push(currentNode);
    currentNode = currentNode.next;
  }
  return nodes.length - nodes.indexOf(currentNode);
}

// Solution 2 (O(n) time complexity):
function loop_size_On(node) {
  let slow = node;
  let fast = node;
  let loopDetected = false;
  let length = 0;

  while (!loopDetected && fast) {
    slow = slow.next;
    fast = fast.next.next;

    if (slow === fast) {
      loopDetected = true;
    }
  }

  if (loopDetected) {
    slow = slow.next;
    length++;

    while (slow !== fast) {
      slow = slow.next;
      length++;
    }
  }

  return length;
}
