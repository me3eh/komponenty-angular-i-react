import React, { useState, useEffect} from 'react';

function ListOfAge(props){
    const [array, setArray] = useState(props.ages);
    const setSeconds = useState(0)[1]

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds + 1);
            intervalFunction();
        }, 2000)
        return () => clearInterval(interval);
    }, []);

    function intervalFunction() {
        var age = Math.floor(Math.random() * 100 + 1);
        setArray(prevArray => [...prevArray, age])
    }
    function average(ages){
        let sum = 0;
        ages.map(age =>
            sum += age
        )
        return (sum / ages.length).toFixed(2);
    }
    return(
        <div>
            <lu>
                <h1>Wiek:</h1>
                { array.map((age) =>
                    <li>{age}</li>
                )}
            </lu>
            <p>Średnia: {average(array)}</p>
        </div>
    )
}
export default ListOfAge;