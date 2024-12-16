function calculate() {
    const x = parseFloat(document.getElementById("x-value").value);
    const y = parseFloat(document.getElementById("y-value").value);
    let result;

    if (isNaN(x) || isNaN(y)) {
        document.getElementById("result").innerHTML = "<strong>Please enter valid numbers.</strong>";
        return;
    }

    if (x >= 10 && y >= 8) {
        result = Math.pow(y, 3) + Math.pow(y, 3) + 300;
    } else if (x >= 3 && y >= 7) {
        result = Math.pow(y, 2) + Math.pow(y, 2) + x * y;
    } else {
        result = x + y;
    }

    document.getElementById("result").innerHTML = `<strong>${result}</strong>`;
}
function clean(){
    document.getElementById('result').innerHTML = '';
    document.getElementById('x-value').value = '';
    document.getElementById('y-value').value = '';
}
