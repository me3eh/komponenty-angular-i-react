function countOccurences(str) {
    var map1 = new Map();
    for (var i = 0; i < str.length; ++i) {
        var character = str[i];
        if (map1.get(character.toLowerCase()) == undefined) {
            var numberOfOccurences = 0;
            if (character != character.toLowerCase())
                numberOfOccurences = str.split(character.toLowerCase()).length - 1;
            numberOfOccurences += str.split(character).length - 1;
            console.log("Character " + character + ": " + numberOfOccurences);
            map1.set(character.toLowerCase(), 1);
        }
    }
}
countOccurences("LOLSSSSssssmmzkcnaj");
