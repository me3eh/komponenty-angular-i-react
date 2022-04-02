function zadanie1(word) {
    var arrayOfVowels = ['a', 'e', 'i', 'y', 'u', 'o'];
    var stringWithCountingVowels = 0;
    for (var i = 0; i < arrayOfVowels.length; ++i)
        stringWithCountingVowels +=
            word.split(arrayOfVowels[i]).length - 1;
    return stringWithCountingVowels;
}
console.log(zadanie1("auto"));
