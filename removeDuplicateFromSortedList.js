/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let sort = head.sort()
    let result = []
    for (let i = 0; i < head.length; i++) {
        console.log(sort[i], sort[i -1]);
        if (sort[i] != result[result.length - 1]) {
            result.push(sort[i])
        }
    }
    return result;
};

console.log(deleteDuplicates([1,1,2,3,3,2,1]));