var x = parseInt(prompt('Enter year'));
var flag = false;
if(x % 4 == 0)
{
    if(x % 100 == 0)
    {
        if(x % 400 == 0)
        {
            flag = true;
        }
        else
        {
            flag = false;
        }
    }
    else
    {
        flag = false;
    }

    if(flag)
    alert('leap');
    else
    alert('Not leap');

}