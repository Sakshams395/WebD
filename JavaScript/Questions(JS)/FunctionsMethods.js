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
// document.write("<br>");
// let name2 = 
// {
//     firstName : 'samantha',
//     lastName : 'suri',
// }

// //.call() method basically called function borrowing 
// name.printFullName.call(name2);

// exmaple 2

// let printFullName = function()
// {
//     document.write( this.firstName+" "+ this.lastName);
// }

// var name1 =
// {
//     firstName : 'saksham',
//     lastName : 'sharma',
// }
// var name2 = 
// {
//     firstName : 'manav',
//     lastName : 'saini',
// }
// printFullName.call(name2);
// printFullName.call(name1);

// passing parameters into a method
// let printFullName = function(hometown)
// {
//     document.write( this.firstName+" "+ this.lastName+" from "+hometown);
// }
// let name2=
// {
//     firstName : "saksham",
//     lastName : "sharam",
// }
// printFullName.call(name2, "Mohali");

//here name2 is always reffered to 'this keyword' rest argument(i.e,hometown) will be the arguments to the functions

// .apply() method
// let printFullName = function(hometown, state)
// {
//     document.write( this.firstName+" "+ this.lastName+" from "+hometown);
// }
// let name2=
// {
//     firstName : "saksham",
//     lastName : "sharam",
// }
// printFullName.call(name2, "Mohali", "punjab");
// here in the apply method we pass the argument as a single argument in the form of an array list

// bind method
// var printFullName = function()
// {
//     document.write(this.fname+this.lname);
// }

// var name1=
// {
//     fname : "saksham",
//     lname : "sharma",
// }

// var printMyName = printFullName.bind(name1);

// printMyName();