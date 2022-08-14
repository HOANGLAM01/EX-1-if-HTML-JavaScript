var number1 = prompt("nhập số chia");
var number2 = prompt("nhập số bị chia");
    let a = parseInt(number1);
    let b = parseInt(number2);
    let result = a % b;
    if (parseInt(result) == 0)
        document.writeln("chia hết");
    else
        document.writeln("ko chia hết");
