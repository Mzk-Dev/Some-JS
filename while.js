let num;

do {
  num = prompt(" Please enter a number greater than 100?", 0);
} while (num <= 100 && num!=null);
if (num==null){
    alert('canceled')
}