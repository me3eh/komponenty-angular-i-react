function countOccurences(str:string):void {
    const map1 = new Map();

    for( let i = 0 ; i < str.length ; ++i){
        let character = str[i];
        if( map1.get( character.toLowerCase() ) == undefined ){
            let numberOfOccurences = 0
            if( character != character.toLowerCase() )
                numberOfOccurences = str.split( character.toLowerCase() ).length - 1;
            numberOfOccurences += str.split( character ).length - 1;
            console.log("Character " + character + ": " + numberOfOccurences); 
            map1.set( character.toLowerCase(), 1);
        }
    }
}

countOccurences("LOLSSSSssssmmzkcnaj");