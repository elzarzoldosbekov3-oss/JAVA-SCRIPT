
//let text = "Hello";   
//let num = 10;         
//let empty;            

//console.log(empty);                    //Dz:1
//console.log(false);           
//console.log(true);            
//console.log(typeof num);      
//console.log(typeof text);     




var a  = prompt("Введите сумму покупки");
a = Number(a);

if (isNaN(a) || a < 0) {
    console.log("Ошибка");
} else {
    var b = 0;
    if (a >= 100 && a <= 500) {
        b = 5;
    } else if (a > 500 && a <= 1000) {            //dz:2
        b = 10;
    } else if (a > 1000) {` x`
        b = 15;
    }

    var c = a - (a * b / 100);

    c = c.toFixed(2);

    console.log(`Сумма покупки: $${a}`);
    console.log(`Скидка: ${b}%`);
    console.log(`Итого к оплате: $${c}`);
}
