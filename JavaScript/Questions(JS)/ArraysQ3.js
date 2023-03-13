// Write a JavaScript program which accept a number as input and 
// insert dashes (-) between each two even numbers. For example if you 
// accept 025468 the output should be 0-254-6-8.

var number = prompt("Enter a number");

document.write(number+"<br>");
var x = [];

for(var i=0; i<number.length; i++)
{
    var num1 = parseInt(number[i]);
    var num2 = parseInt(number[i+1]);
    if(num1%2==0 && num2%2==0)
    {
        x.push(num1+"-");
    }
    else
    {
        x.push(num1);
    }
}
x.forEach
(
    i=>{document.write(i);}
);