const nums1 = [1, 2, 3]
const nums2 = [4, 5, 6]

// const num1PlusNum2 = nums1.concat(nums2, [7, 8, 9], 'Erik');
// ... rest operator -> ... spread operator

const newArr = [...nums1, ...nums2, 7, 8, 9, 'Erik'];

console.log(typeof newArr); 
console.log(newArr);
