let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
function sumSalaries(obj){
    let sum = 0;
    for (let num of Object.values(obj)){
        sum += num;
    }
    return(sum);
}
  alert( sumSalaries(salaries) );



function count(obj) {
return Object.keys(obj).length;
}
let user = {
    name: 'John',
    age: 30
  };
  
alert( count(user) );