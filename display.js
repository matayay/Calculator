function getDisplay()
{
    const text = document.querySelector('.text');
    return text.textContent;
}

function dotUsed( string )
{
    for ( let i = 0; i < string.length; i++ )
    {
        if ( string[i] === '.' )
        {
            return true;
        }
    }

    return false;
}

function numbers( string )
{
    const text = document.querySelector('.text');
    text.textContent += string;
}

function removeFromScreen()
{
    const text = document.querySelector('.text');
    text.textContent = text.textContent.slice(1);
}

function clear()
{
    const text = document.querySelector('.text');
    text.textContent = '';
}

function displayCalculation( string )
{
    const text = document.querySelector('.text');
    text.textContent = string;
}