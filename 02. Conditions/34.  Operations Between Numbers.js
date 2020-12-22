function numOperation(n1, n2, operator) {
    n1 = Number(n1);
    n2 = Number(n2);
    let result = ''

    function evenOdd(result) {
        result = Number(result);
        if (result % 2 == 0) {
            console.log(`${n1} ${operator} ${n2} = ${result} - even`)
        } else {
            console.log(`${n1} ${operator} ${n2} = ${result} - odd`)
        }
    }

    switch (operator) {
        case "+":
            result = n1 + n2;
            evenOdd(result);
            break
        case "-":
            result = n1 - n2;
            evenOdd(result);
            break
        case "*":
            result = n1 * n2;
            evenOdd(result);
            break
        case "/":
            if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`);
            } else {
                console.log(`${n1} ${operator} ${n2} = ${(n1 / n2).toFixed(2)}`);
            }
            break
        case "%":
            if (n2 == 0) {
                console.log(`Cannot divide ${n1} by zero`)
            } else {
                result = n1 % n2
                console.log(`${n1} ${operator} ${n2} = ${result}`)
                break
            }

    }
}

numOperation("10", "0", "%")
