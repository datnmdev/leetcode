/**
 * @return {Generator<number>}
 */
var fibGenerator = function*() {
    let fib0 = 0
    let fib1 = 1
    while (true) {
        yield fib0
        fib1 += fib0
        fib0 = fib1 - fib0
    }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */
