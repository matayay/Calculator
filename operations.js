function add( num1, num2 )
{
    return num1 + num2;
}

function subtract( num1, num2 )
{
    return num1 - num2;
}

function multiply( num1, num2 )
{
    return num1 * num2;
}

function divide( num1, num2 )
{
    return num1 / num2;
}

function operate( num1, num2, operator )
{
    let result;

    if ( operator === "plus" )
    {
        result = add(num1, num2);
    }

    else if ( operator === "minus" )
    {
        result = subtract(num1, num2);
    }

    else if ( operator === "times" )
    {
        result = multiply(num1, num2);
    }

    else if ( operator === "divide" )
    {
        result = divide(num1, num2);
    }

    return result;
}

function percent( num )
{
    return num / 100;
}