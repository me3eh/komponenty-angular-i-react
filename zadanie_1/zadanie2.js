function zadanie2(numeric) {
    var arrayWithNumbers = new Array(numeric);
    for (var i = 0; i < numeric; ++i) {
        arrayWithNumbers[i] = i % (numeric - 1) + 1;
    }
    for (var i = 0; i < numeric; ++i) {
        console.log(arrayWithNumbers[i]);
    }
}
zadanie2(5);
