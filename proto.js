let head = {
  glasses: 1
};

let table = {
  pen: 3,
  __proto__: head
};

let bed = {
  sheet: 1,
  pillow: 2,
  __proto__: table
};

let pockets = {
  money: 2000 , 
  __proto__ : bed 
};

alert(pockets.pen);
console.log(pockets.pen);
alert(bed.glasses);