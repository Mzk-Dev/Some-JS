function camelize(str){
    str.split('-');
    str.map((word, index) => index == 0 ? word : word[0].toUpperCase() );
    str.join('');
    return str;
}
a = 'enter-your-numb';
alert(camelize(a));