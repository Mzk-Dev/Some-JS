function unique(arr) {
    return(Array.from(new Set(arr)));
  }
  
  let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];
  
  alert( unique(values) );


let arr1 = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr){
   
    let map = new Map();

    for (let word of arr) {
      
      let sorted = word.toLowerCase().split("").sort().join("");
        
      map.set(sorted, word);
    }
  
    return Array.from(map.values());
  }
  
alert( aclean(arr1) ); // "nap,teachers,ear" or "PAN,cheaters,era"


let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

keys.push("more");

alert(keys); 