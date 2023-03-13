//creating and calling a function
let name = 
{
    firstName : 'saksham',
    lastName : 'sharma',
    printFullName : function()
    {
        document.write(this.firstName+" "+this.lastName); 
    }
}
name.printFullName();