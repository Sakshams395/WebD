//taking user inputs in arrya

var size = 3;
var names = [];

alert("Enter "+size+" names...");
//scanning array
for(var i=0; i<size; i++)
{
    names[i] = prompt("Enter data: ");
}
//printing array
for(var j=0; j<size; j++)
{
    document.write(names[j]+"<br>");
}
