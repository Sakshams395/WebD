for(var i=1; i<=15; i++)
{
    if(i%3==0)
    {
        document.write(i+'Fizz'+'<br>')
    }
    else if(i%5==0)
    {
        document.write(i+'Buzz'+'<br>');
    }
    else if(i%5 && i%3==0)
    {
        document.write(i+'Buzz - Fizz(both)'+'<br>');
    }
    else if(i == 15)
    {
        document.write(i+'Buzz - Fizz');
    }
}