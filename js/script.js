// var eng=32;
// let chem=75;
// const urdu=56;
// var name="sanwal";
// eng=46;
// eng=46+2;
// f_name='Sanwal'
// l_name='khan'
// var win= true;
// var names=['Ali',"Ahmad","Anaya"];
// var marks=[12,54,65];
// var stdName=[];
// stdName[0]="Sanwal";
// stdName[1]="ahmad";
// stdName[2]="aadil";
//  console.log(stdName);
//  var names2= new Array("Sanwal","ahmad","Aadil");
//  console.log(names2);


// var mul_Line_string=` sanwal
// khan 
// hp
// laptop`
// // console.log(chem);
// // console.log(eng);
// // console.log(urdu);
// console.log(name);
// console.log(mul_Line_string);
// console.log(f_name+" "+l_name);
// console.log(win);
// console.log(names[2]);
// console.log(marks[2]);
// console.log(names);
// names.splice(0,1);
// console.log(names);
// names.push("ikram");
// console.log(names);
// names.push("zeeshan");
// names.push("bilal");
// names.push("hamza");
// console.log(names);
// names.sort();
// console.log(names);
// names.reverse();
// console.log(names);
var car={
    color:'red',
    model:1998,
    price:"2000$"
};
// console.log(car);
// console.log(car.price);
// car.model=2016;
// console.log(car);
// JavaScript Object Notation JSON

var convertedStringFromObj=JSON.stringify(car);
console.log(car);
console.log(convertedStringFromObj);

var convertedObjFromString=JSON.parse(convertedStringFromObj);
console.log(convertedObjFromString);

console.log("*******");
var link1= document.getElementById("link1");
console.log(link1.tagName);

document.getElementById("btn").textContent="JAvaScript tbn";


