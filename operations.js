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

function percent( num )
{
    return num / 100;
}

function operate( num1, num2, operator )
{
    let result;

    if ( operator === "add" )
    {
        result = add(num1, num2);
    }

    else if ( operator === "sub" )
    {
        result = subtract(num1, num2);
    }

    else if ( operator === "multi" )
    {
        result = multiply(num1, num2);
    }

    else if ( operator === "divide" )
    {
        result = divide(num1, num2);
    }

    return result;
}