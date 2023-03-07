var fname = 'saksham ';
var lname = 'sharma';

//concatination
var fullname = fname.concat(lname);
document.write(fullname+"<br>");

//to check the length of a string
document.write(fullname.length+"<br>");

// to convert the string to uppercases
document.write(fullname.toUpperCase()+"<br>");

// to convert the string to lowercases
document.write(fullname.toLowerCase()+"<br>");

//to remove space from the start and the ending of the string
document.write(fullname.trim()+'<br>');

//to replace words in a string
var sen = 'ram loves eating apples and ram loves to read';
var newSen = sen.replace('ram', 'saksham');

document.write(sen+'<br>');
document.write(newSen+'<br>');

//upper cases doesnt matter in the word and replcaes right away(i stands for insensitive)
var sen = 'ram loves eating apples and ram loves to read';
var newSen = sen.replace(/ram/i, 'saksham');

document.write(sen+'<br>');
document.write(newSen+'<br>');


//replaces all the repeating letters(g stansd for global)
var sen = 'ram loves eating apples and ram loves to read';
var newSen = sen.replace(/ram/g, 'saksham');

document.write(sen+'<br>');
document.write(newSen+'<br>');


//both the insensitive and global is applied
var sen = 'ram loves eating apples and ram loves to read';
var newSen = sen.replace(/ram/ig, 'saksham');

document.write(sen+'<br>');
document.write(newSen+'<br>');

//slicing 
//excludes the last index given
var slicedName = fullname.slice(0,8);
document.write('<br>'+slicedName);

//substring
//similar to the slicing method
var substring = fullname.substring(0,4);
document.write('<br>'+substring);


//charAt method gives you the character on the given index
var perticularChar = fullname.charAt(5);
document.write('<br>'+perticularChar);