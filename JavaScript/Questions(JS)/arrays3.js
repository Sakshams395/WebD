//taking user inputs in arrya

var size = 3;
var names = [];

alert("Enter "+size+" names...");

for(var i=0; i<size; i++)
{
    names.push(prompt("mmmmmm"));
}

for(var j=0; j<size; j++)
{
    document.write(names[j]+"<br>");
}
