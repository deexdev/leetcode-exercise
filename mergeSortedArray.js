// function merge(nums1, m, nums2, n) {
//     function notZero(number) {
//         return number > 0
//     };

//     let nums1filter = nums1.filter(notZero);
//     let nums2filter = nums2.filter(notZero);
//     let concat = nums1filter.concat(nums2filter);
//     return concat.sort();
// }
function merge(nums1, m, nums2, n) {
   let first = nums1.sort().reverse()
   let second = nums2.sort().reverse()

   let get1 = first.slice(0, m)
   let get2 = second.slice(0, n)

   result = get1.concat(get2).sort();
   return result;
}

console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
