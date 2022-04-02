function zadanie3(arrayOfNumber: number[]): boolean{
    for( let i =0 ; i < arrayOfNumber.length - 1 ; ++i )
        if( arrayOfNumber[i] > arrayOfNumber[i + 1] )
            return false;
    return true;
}
console.log(zadanie3([1, 2, 3, 6, 90, 2]) );
