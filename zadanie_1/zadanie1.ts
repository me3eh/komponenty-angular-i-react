function zadanie1(word: string): number{
    let arrayOfVowels = ['a','e','i','y','u','o'];
    let stringWithCountingVowels = 0;
    for(let i = 0 ; i < arrayOfVowels.length ; ++i)
        stringWithCountingVowels +=
            word.split(arrayOfVowels[i]).length - 1;
    return stringWithCountingVowels;
}
console.log( zadanie1("auto") );