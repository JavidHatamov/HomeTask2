alert("The first task...");
alert("Add a number!");
const A=+prompt("Number A is :");
for(let counter=1;counter<=1000;counter++){
    if(counter%A===0){
        console.log(counter);
}
}
alert("The second task...");
alert("Add a number!");
const A1=+prompt("Number A is :");
let n=1;
while(n*n<A1){
    console.log(n);
    n++;
}

alert("The third task...");
alert("Add a number!");
const A2=+prompt("Number A is :");
let Result=0;
for(let divisor=1;divisor<A2;divisor++){
    if(A2%divisor===0){
        Result=divisor;
}
}
console.log(Result);


alert("The fourth task...");
alert("Add a number!");
const A3=+prompt("Number A is :");
const B3=+prompt("Number B is :");
let sum=0;
if(A3<B3){
for(let counter=A3+1;counter<=B3;counter++){
    if(counter%7===0){
    sum+=counter;   
}
}
}
else{
    for(let counter=B3+1;counter<=A3;counter++){
        if(counter%7===0){
        sum+=counter;   
    }
    }
}
console.log(sum);

alert("The fifth task...");
alert("Add a number!");
const A4=+prompt("Number A is :");
const array=[1,1];
let i=2;
if(A4<=0){
console.log("Number must be greater than 0 !");
}else{
        while(i<=A4){
        array[i]=array[i-1]+array[i-2];
        i++;
        }
        console.log(array[i-2]);
    }

alert("The sixth task...");
alert("Add two numbers !");
const A5=+prompt("Number A is :");
const B5=+prompt("Number B is :");
let GCD=0;
for(let i=1;i<=A5 && i<=B5;i++){
if(A5%i===0 && B5%i===0){
GCD=i;
}
}
console.log(GCD);

alert("The seventh task...");
alert("Add a number!");
const A6=+prompt("Number A is :");
let digit=A6;
let remainder=0;
String='';
while(digit!=0){
remainder=digit%10;
digit=Math.floor(digit/10);
String +=remainder;
}
console.log(+String);


alert("Eigth task ...");
alert("Add the numbers :");
const firstnumber=prompt("Add First Number :");
const secondnumber=prompt("Add Second Number :");
let flag=false;
let length_first=firstnumber.length;
let length_second=secondnumber.length;
for(let i=0;i<length_first;i++){  
    for(let j=0;j<length_second;j++){
        if(firstnumber[i]===secondnumber[j]){
        console.log("Yes");
        flag=true;
        break;    
        }
    }
    if(flag){
        break;
    }
}
if(!flag){
    console.log("No");
}










