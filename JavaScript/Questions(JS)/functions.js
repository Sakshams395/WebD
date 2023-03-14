//ananymous function in this the function is declared in a variable
//creating and calling a function
// var anonymousFunc=function()
// {
//     document.write("i am arrow function");
// }
// let name = 
// {
//     firstName : 'saksham',
//     lastName : 'sharma',
//     printFullName : function()
//     {
//         document.write(this.firstName+" "+this.lastName); 
//     }
// }
// name.printFullName();

// there following functions in JS : named, anonymous, arrow(ES6) 

// named functions
// defining a function
// var x = 2;
// var y = 3;
// function sum()//arguments
// {
//     alert(a+b);
// }

// sum();//parameters


// arrow functions
// in arrow functions we dont use function or return keywords
// var arrowFunc=() => document.write("i am arrow function");

// var arrowFunc=() =>
// {//braces because of the multiple lines in the body
//     document.write("i am ");
//     document.write(" arrow ");
//     document.write(" function ");
// }



//to find all the prime numbers till the range
// var x = prompt("Enter range");
// function even()
// {
//     for(let i=2 ; i<=x; i++)
//     {
//         if(i%2 == 0)
//         {
//             document.write("Even numbers"+i+"<br>");
//         }
//     }
// }
// //to find all the prime numbers till the range
// function prime()
// {
//     for(let i=2; i<=x; i++)
//     {
//         if(i%i == 0)
//         {
//             document.write("Prime numbers"+i+"<br>");
//         }
//     }
// }

// prime();


//even or odd
// function check()
// {
//     var x = prompt("Press o for odd numbers and e for even numbers");
//     var y = Number(prompt('Enter range'));
//     for(let i=2; i<=y; i++)
//     {
//         if(x == "o")
//         {
//             if(i%2 == 0)
//             {
//             document.write("Even numbers"+i+"<br>");
//             }
//         }
//         else
//         {
//             if(i%3 == 0)
//             {
//                 document.write("Odd numbers"+i+"<br>");
//             }
//         }
//     }
// }
// check();


//local and global scope
// var name3 = "ABC";//global variable
// var names = ()=>
// {
//     var name1 = "saksham";// local variable
//     var name2 = "sharma"; // local variable
// } 
// document.write(names.name1);


var x = prompt("Enter a number for table:");
var y = prompt("Enter number for range:");
var table = ()=>
{
    for(var i=1; i<=y; i++)
    {
        document.write(x+" * "+i+" = " +(x*i)+"<br>");
    }
}
table();