//UserStory 1
function convert(amount) {
    const coins = [100, 50, 20, 10, 5, 2, 1];
    const table = new Map();
    table.set(100, 0);
    table.set(50, 0);
    table.set(20, 0);
    table.set(10, 0);
    table.set(5, 0);
    table.set(2, 0);
    table.set(1, 0);

    for (const coin of coins) {
        while (amount - coin >= 0) {
            table.set(coin, table.get(coin) + 1);
            amount -= coin;
        }

        if (amount === 0) {
            const output = {};
            for (const [coin, count] of table.entries()) {
                if (count > 0) {
                    output[coin] = count;
                }
            }

            return output;
        }

    }

}

//UserStory 2
function rot13(text) {
    text = text.toString();
    let result = "";
    const alphabetMap = new Map([
        ['A', 'N'], ['B', 'O'], ['C', 'P'], ['D', 'Q'], ['E', 'R'], ['F', 'S'], ['G', 'T'], ['H', 'U'], ['I', 'V'], ['J', 'W'], ['K', 'X'], ['L', 'Y'], ['M', 'Z'],
        ['N', 'A'], ['O', 'B'], ['P', 'C'], ['Q', 'D'], ['R', 'E'], ['S', 'F'], ['T', 'G'], ['U', 'H'], ['V', 'I'], ['W', 'J'], ['X', 'K'], ['Y', 'L'], ['Z', 'M'],
        ['a', 'n'], ['b', 'o'], ['c', 'p'], ['d', 'q'], ['e', 'r'], ['f', 's'], ['g', 't'], ['h', 'u'], ['i', 'v'], ['j', 'w'], ['k', 'x'], ['l', 'y'], ['m', 'z'],
        ['n', 'a'], ['o', 'b'], ['p', 'c'], ['q', 'd'], ['r', 'e'], ['s', 'f'], ['t', 'g'], ['u', 'h'], ['v', 'i'], ['w', 'j'], ['x', 'k'], ['y', 'l'], ['z', 'm']
    ]);

    for (let i = 0; i < text.length; i++) {
        if (alphabetMap.has(text.charAt(i))) {
            result = result + alphabetMap.get(text.charAt(i));
        } else {
            result = result + text.charAt(i);
        }

    }
    return result;
}

//UserStory3
function lexicalorder(stringarray) {
    return stringarray.slice.sort((a, b) => a.localeCompare(b));

}

//UserStory4
function evenarray(numberarr) {
    var result = [];
    for (const number of numberarr) {
        if (number % 2 === 0) {
            result.push(number);
        }
    }
    return result;
}

//UserStory5
function test(fu, arg, exp) {
    if (fu(arg) === exp) {
        return true;
    } else {
        return false;
    }
}

//UserStory6
function generate(op) {
    return function (a, b) {
        return eval(a + op + b);
    }
}

//Tests
//console.log(rot13(123123));
//console.log(convert(192));
//const inputArray = ["banana", "apple", "orange", "grape"];
//const sortedArray = lexicalorder(inputArray);
//console.log(sortedArray);
//console.log(evenarray([1, 2, 3, 4, 5, 6, 1923871294, 7, 8, 9]));
//console.log(test(rot13, 123123, "123123"));
const mult = generate('*');
console.log(mult(3, 4)); // the value is 12 printed on the console
