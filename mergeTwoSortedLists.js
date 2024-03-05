function mergeTwoLists(list1, list2) {
    // let compare = 0;
    // let result = [];

    // if (list1.length >= list2.length) {
    //     compare = list1.length
    // }else{
    //     compare = list2.length
    // }

    // for (let i = 0; i < compare; i++) {
    //     if (list1[i] != undefined) {
    //         result.push(list1[i])
    //     }
    //     if (list2[i] != undefined) {
    //         result.push(list2[i])
    //     }
    // }

    let result = list1.concat(list2);

    return result.sort();
};

console.log(mergeTwoLists([2,5],[1,2,3]));