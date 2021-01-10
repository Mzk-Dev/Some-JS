function sumTo(n) {//рекурсия
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}
alert( sumTo(100) );

function sumTo(n) {//цикл
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

alert( sumTo(100) );


function sumTo(n) {//функция
  return n * (n + 1) / 2;
}

alert( sumTo(100) );


let list = {//цикл
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
function printList(list) {
  while(list) {
    alert(list.value);
    list = list.next;
  }
}
alert(printList(list));


function printList(list) {//рекурсия

  alert(list.value); 

  if (list.next) {
    printList(list.next); 
  }

}

printList(list);