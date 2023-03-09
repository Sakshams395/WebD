// //printing a pre-defined 2d array
// var arr = [
//     ['saksham', 22, 'Mohali'],
//     ['shagun', 27, 'Mohali']
// ]

// for(var i=0; i<=arr.length; i++)
// {
//     for(var j=0; j<=arr.length; j++)
//     {
//         document.write(arr[i][j]);
//         document.write(" ");
//     }
//     document.write("<br>");
// }


//scanning and priniting userdefined 2d array

var arr = [[],[]];
//scanning array
for(var i=0; i<2; i++)
{
    for(var j=0; j<2; j++)
    {
        arr[i][j] = prompt("Enter info: ");
    }
}
//printing array
for(var x=0; x<arr.length; x++)
{
    for(var y=0; y<arr.length; y++)
    {
        document.write(arr[x][y]+" ");
    }
    document.write("<br>");
}