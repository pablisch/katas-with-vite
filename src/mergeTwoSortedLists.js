// Leet code - EASY - No.21

// 21. Merge Two Sorted Lists
// Easy
// Topics
// Companies
// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Example 1:

// image provided here, see images/mergeTwoSortedListsExample.jpg


// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:

// Input: list1 = [], list2 = []
// Output: []
// Example 3:

// Input: list1 = [], list2 = [0]
// Output: [0]

// from solution by sikkasakshi2

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = new ListNode, tail
  if (!list1 || !list2)
      return list2 || list1

  if (list1.val < list2.val) {
      head = list1
      list1 = list1.next
  }
  else {
      head = list2
      list2 = list2.next
  }
  tail = head
  while (list1 && list2) {
      if (list1.val < list2.val) {
          tail.next = list1
          tail = tail.next
          list1 = list1.next
      } else {
          tail.next = list2
          tail = tail.next
          list2 = list2.next
      }
  }
  tail.next = list1 || list2

  return head
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
// console.log(mergeTwoLists([], []));
// console.log(mergeTwoLists([], [0]));

// UNHELPFUL chatGPT nonsense

var mergeTwoListsGPT = function (list1, list2) {
  // Helper function to convert an array to a linked list
  const arrayToList = (arr) => {
      if (!arr || arr.length === 0) {
          return null;
      }
      let head = new ListNode(arr[0]);
      let current = head;
      for (let i = 1; i < arr.length; i++) {
          current.next = new ListNode(arr[i]);
          current = current.next;
      }
      return head;
  };

  // Convert list1 and list2 to linked lists
  list1 = arrayToList(list1);
  list2 = arrayToList(list2);

  let head = new ListNode(), tail;
  if (!list1 || !list2) {
      return list2 || list1;
  }

  if (list1.val < list2.val) {
      head = list1;
      list1 = list1.next;
  } else {
      head = list2;
      list2 = list2.next;
  }
  tail = head;

  // Rest of the code...
};
