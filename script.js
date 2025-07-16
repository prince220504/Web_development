function Solve(val) {
    const v = document.getElementById('res');
    v.value += val;
}

function Result() {
    const input = document.getElementById('res');
    let num = input.value.replace(/x/g, '*');

    try {
        let ans = Function('"use strict"; return (' + num + ')')();
        input.value = ans;
    } catch (error) {
        input.value = 'Error';
    }
}

function Clear() {
    document.getElementById('res').value = '';
}

function Back() {
    const res = document.getElementById('res');
    res.value = res.value.slice(0, -1);
}

document.addEventListener('keydown', function (event) {
    const key = event.key;
    const validKeys = '0123456789+-*/.%';

    if (validKeys.includes(key)) {
        Solve(key === '*' ? 'x' : key);
    } else if (key === 'Enter') {
        Result();
    } else if (key === 'Backspace') {
        Back();
    } else if (key.toLowerCase() === 'c') {
        Clear();
    }
});
