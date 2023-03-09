// Write a JavaScript program to sort the items of an array. 
// Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// Sample Output : -4,-3,1,2,3,5,6,7,8

var arr = [-3, 8, 7, 6, 5, -4, 3, 2, 1];
console.log("Old Array = "+arr);

for(var i=0; i<arr.length; i++)
{
    for(var j=0; j<arr.length; j++)
    {
        if(arr[i] < arr[j])
        {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        } 
    }
}
console.log("New Array = "+arr);
