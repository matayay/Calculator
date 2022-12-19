// Main program

const keys = document.querySelector('.keys');

const input_value = keys.querySelector('.numbers');
const nums = input_value.querySelectorAll('button');

const misc = keys.querySelector('.misc');
const misc_keys = misc.querySelectorAll('button');

const operands = keys.querySelector('.operands');
const operators = operands.querySelectorAll('button');

let num1;
let num2;
let operation;
let display_value = "";

// Number keys and dot key.
for ( let key of nums )
{
    key.addEventListener('click', () => {
        if ( key.className === 'dot' )
        {
            if ( !dotUsed(display_value) )
            {   
                if ( getDisplay().length >= 20 )
                {
                    removeFromScreen();
                }

                numbers(key.textContent);
                display_value += key.textContent;
            }
        }   

        else
        {
            if ( getDisplay().length >= 20 )
            {
                removeFromScreen();
            }

            numbers(key.textContent);
            display_value += key.textContent;
        }
    });
}

// Light gray keys.
for ( let key of misc_keys )
{
    key.addEventListener('click', () =>{
        if ( key.className === 'AC' )
        {
            clear();
            num1 = null;
            num2 = null;
            operation = null;
            display_value = "";
        }

        else if ( key.className === 'negative' )
        {
            if ( getDisplay() != '' && getDisplay().length < 20 )
            {
                toggleNegative();
            }

            if ( display_value != "" )
            {
                if ( !dotUsed(display_value) )
                {
                    display_value = parseInt(display_value);
                    display_value *= -1;
                    display_value = display_value.toString();
                }

                else if ( dotUsed(display_value) )
                {
                    display_value = parseFloat(display_value);
                    display_value *= -1;
                    display_value = display_value.toString();
                }
            }
        }

        else if ( key.className === 'percent' )
        {
            let result;

            if ( dotUsed(display_value) )
            {
                display_value = percent(parseFloat(display_value));
                display_value = display_value.toString();

                if ( getDisplay() != "" && getDisplay().length < 18 )
                {
                    result = percent(parseFloat(getDisplay()));

                    if ( result.toString().length > 20 )
                    {
                        result = Math.round(result);
                    }

                    displayCalculation(result.toString());
                }
            }

            else if ( !dotUsed(display_value) )
            {
                display_value = percent(parseInt(display_value))
                display_value = display_value.toString();

                if ( getDisplay() != "" && getDisplay().length < 20 )
                {
                    result = percent(parseFloat(getDisplay()));

                    if ( result.toString().length > 20 )
                    {
                        result = Math.round(result);
                    }

                    displayCalculation(result.toString());
                }
            }
        }
    });
}

// Operand keys.
for ( let key of operators )
{
    key.addEventListener('click', () => {
        let result;
        
        if ( key.className != 'equals' && display_value != "" )
        {
            if ( num1 != null )
            {
                if ( dotUsed(display_value) )
                {
                    num2 = parseFloat(display_value);
                }

                else if ( !dotUsed(display_value) )
                {
                    num2 = parseInt(display_value);
                }

                if ( num2 == 0 && operation == 'divide' )
                {
                    displayCalculation("Bruh");
                }

                else
                {
                    result = operate(num1, num2, operation);
                    display_value = result.toString();
                    
                    if ( result.toString().length > 20 )
                    {
                        result = Math.round(result);
                    }
                    
                    displayCalculation(result.toString());
                }

                num1 = null;
                num2 = null;
                operation = null;
            }

            operation = key.className;

            if ( dotUsed(display_value) )
            {
                num1 = parseFloat(display_value);
            }

            else if ( !dotUsed(display_value) )
            {
                num1 = parseInt(display_value)
            }

            clear();
            display_value = "";
        }

        else if ( key.className === 'equals' && display_value != "" )
        {   
            if ( dotUsed(display_value) )
            {
                num2 = parseFloat(display_value);
            }

            else if ( !dotUsed(display_value) )
            {
                num2 = parseInt(display_value);
            }

            if ( num2 == 0 && operation == 'divide' )
            {
                displayCalculation("Bruh");
            }

            else
            {
                result = operate(num1, num2, operation);
                display_value = result.toString();
                
                if ( result.toString().length > 20 )
                {
                    result = Math.round(result);
                }
                
                displayCalculation(result.toString());
            }

            num1 = null;
            num2 = null;
            operation = null;
        }
    });
}