function convert(amount) {
    const coins = [100,50,20,10,5,2,1];
    const table = new Map();
    table.set(100,0);
    table.set(50,0);
    table.set(20,0);
    table.set(10,0);
    table.set(5,0);
    table.set(2,0);
    table.set(1,0);

    for (const coin of coins) {
        while (amount - coin >= 0) {
            table.set(coin,table.get(coin) + 1 );
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

console.log(convert(192));