function calculate() {
    var a = parseInt(document.getElementById("number1"));
    var b = parseInt(document.getElementById("number2"));
    let result = a % b;
    if (parseInt(result) == 0)
        document.writeln("chia hết")
    else
        document.writeln("không chia hết")
}