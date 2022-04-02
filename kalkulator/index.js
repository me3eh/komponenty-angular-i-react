var score = document.getElementById("score");
var mark = document.getElementById("mark");
var result = document.getElementById("result");

var firstNumber = document.getElementById("firstNumber");
var secondNumber = document.getElementById("secondNumber");

var thirdNumber = document.getElementById("thirdNumber");
var fourthNumber = document.getElementById("fourthNumber");
var mark2 = document.getElementById("mark2");
var mark3 = document.getElementById("mark3");

var third_label_above_input = document.getElementById("third_label_above_input");
var fourth_label_above_input = document.getElementById("fourth_label_above_input");
var calculatingDistance = false;
var number_inputs = [firstNumber, secondNumber, thirdNumber, fourthNumber];

var actual_mark = 0;

function addition(){
    defaultInputs();
    actual_mark = 1;
    let first = parseInt(firstNumber.value);
    let second = parseInt(secondNumber.value);

    if(!isNaN(first) && !isNaN(second)){
        score.textContent = first + second;
        mark.textContent = "+";
    }
    else
        result.textContent = "Please put some numbers in the given fields!";
}

function subtraction(){
    defaultInputs();
    actual_mark = 2;

    let first = parseInt(firstNumber.value);
    let second = parseInt(secondNumber.value);

    if(!isNaN(first) && !isNaN(second)){
        score.textContent = first - second;
        mark.textContent = "-";
    }
    else
        result.textContent = "Please put some numbers in the given fields!";
}

function multiplication(){
    defaultInputs();
    actual_mark = 3;

    let first = parseInt(firstNumber.value);
    let second = parseInt(secondNumber.value);

    if(!isNaN(first) && !isNaN(second)){
        score.textContent = first * second;
        mark.textContent = "*";
    }
    else
        result.textContent = "Please put some numbers in the given fields!";
}

function division(){
    defaultInputs();
    actual_mark = 4;

    let first = parseInt(firstNumber.value);
    let second = parseInt(secondNumber.value);
    if ( second == 0)
        result.textContent = "Wait a second, zer0 as second number is illegal";
    else if(!isNaN(first) && !isNaN(second)){
        score.textContent = first / second;
        mark.textContent = "/";
    }
    else
        result.textContent = "Please put some numbers in the given fields!";
}

function exponentiation(){
    defaultInputs();
    actual_mark = 5;

    let first = parseInt(firstNumber.value);
    let second = parseInt(secondNumber.value);
    if(!isNaN(first) && !isNaN(second)){
        let result = first;
        if( second === 0 ) result = 1;
        for( let i = 1 ; i < second ; ++i)
            result = result*first;
        score.textContent = result;
        mark.textContent = "^";
    }
    else
        result.textContent = "Please put some numbers in the given fields!";
}

function menu_for_length_between_two_points_in_sea_miles(){
    calculatingDistance = true;
    actual_mark = 6;

    mark.style.paddingRight = "5px";
    mark.textContent = "";
    first_label_above_input.textContent = "Start X";
    second_label_above_input.textContent = "Start Y";
    third_label_above_input.style.display = "block";
    fourth_label_above_input.style.display = "block";

    placeholders = ["start X", "start Y", "dest X", "dest Y"];
    for(var i = 0 ; i < number_inputs.length ; ++i){
        if(i == 2 || i == 3)
            number_inputs[i].style.display = "block";
        number_inputs[i].style.width = "120px";
        number_inputs[i].placeholder = placeholders[i];
    }
    mark2.style.display = "block";
    mark3.style.display = "block";
    mark2.textContent = "--->";
}

function length_between_two_points_in_sea_miles(){
    if(calculatingDistance){
        let beginningX = parseInt(firstNumber.value);
        let beginningY = parseInt(secondNumber.value);
        let destinationX = parseInt(thirdNumber.value);
        let destinationY = parseInt(fourthNumber.value);
        var length = Math.sqrt( Math.pow( destinationX - beginningX, 2 ) + Math.pow( Math.cos( beginningX * Math.PI / 180 ) * destinationY - beginningY, 2 ) * ( 40075.704 / 360 ) );
        score.textContent = length * 0.6214 + " sea miles";
    }
}

function defaultInputs(){
    if(calculatingDistance){
        first_label_above_input.textContent = "First argument";
        second_label_above_input.textContent = "Second argument";
        third_label_above_input.style.display = "none";
        fourth_label_above_input.style.display = "none";
        
        mark.style.paddingRight = "unset";

        firstNumber.placeholder = "First argument";
        secondNumber.placeholder = "Second argument";
        thirdNumber.style.display = "none";
        fourthNumber.style.display = "none";
        mark2.style.display = "none";
        mark3.style.display = "none";
        firstNumber.style.width = "unset";
        secondNumber.style.width = "unset";
        calculatingDistance = false;
    }
}
function isNumberCheck(number){
    if(number < 2 || calculatingDistance){
        if( isNaN( parseInt( number_inputs[number].value ) ) ){
            result.textContent = "Only numbers !!";
            number_inputs[number].value = "";
        }
        else
            result.textContent = "";
    }
}

function refresh_inputs(){
    switch(actual_mark){
        case 1:
            addition();
            break;
        case 2:
            subtraction();
            break;
        case 3:
            multiplication();
            break;
        case 4:
            division();
            break;
        case 5:
            exponentiation();
            break;
        case 6:
            length_between_two_points_in_sea_miles();
            break;
    }
}
