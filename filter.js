function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && b <= item))
}
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert( filtered ); // 3,1 (совпадающие значения)

alert( arr ); // 5,3,8,1 (без изменений)


let arr1 = [5, 2, 1, -10, 8];
arr1.sort((a,b) => b-a);
alert(arr1);