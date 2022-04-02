function zadanie2(numeric: number): void{
    let arrayWithNumbers = new Array(numeric);
    for(let i = 0 ; i < numeric ; ++i){
        arrayWithNumbers[i] = i % (numeric-1) + 1;
    }    
    for(let i = 0 ; i < numeric ; ++i){
        console.log(arrayWithNumbers[i]);
    }  
}
zadanie2( 5 ) ;