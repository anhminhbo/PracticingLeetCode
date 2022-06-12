// 21. Merge Two Sorted Lists
// https://leetcode.com/problems/merge-two-sorted-lists/
// *
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

//  function ListNode(val, next) {
//      this.val = (val===undefined ? 0 : val)
//     this.next = (next===undefined ? null : next)
//  }

// var mergeTwoLists = function(list1, list2) {
//     if (list1 == null) return list2;
//     if (list2 == null) return list1;
//     if (list1.val <= list2.val){
//         list1.next = mergeTwoLists(list1.next,list2);
//         return list1;
//     } else {
//         list2.next = mergeTwoLists(list2.next,list1);
//         return list2;
//     }

// };

var mergeTwoLists = function (list1, list2) {
  const newNode = new ListNode(null, null);
  let currentNode = newNode;

  while (list1 || list2) {
    if (!list1) {
      currentNode.next = list2;
      return newNode.next;
    }
    if (!list2) {
      currentNode.next = list1;
      return newNode.next;
    }
    if (list1.val <= list2.val) {
      currentNode.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      currentNode.next = new ListNode(list2.val);
      list2 = list2.next;
    }

    currentNode = currentNode.next;
  }

  return newNode.next;
};
