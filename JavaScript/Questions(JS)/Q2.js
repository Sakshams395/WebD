var x = Number(prompt("Enter a number"));

if(x % 3 ==0)
{
    alert("Fizz");
}
else if(x % 5 ==0)
{
    alert("Buzz");
}
else if (x % 3 ==0 && x % 5 ==0)
{
    alert("Fizz-Buzz");
}