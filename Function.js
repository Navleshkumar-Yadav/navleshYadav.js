function getToEveryone(){
        console.log("how are you");
        console.log("what is your name");
        console.log("where are you come from");
}
getToEveryone();

function isEvenorOdd(x){
        if(x%2==0){
                console.log("even");
        }
        else{
                console.log("odd");
        }
}
isEvenorOdd(91)
function multiply(x,y){
       console.log(x*y);
       console.log(x);
}
multiply(91);


function test(){
        let x = 10;
        x+=2;

}
let ans = test();

console.log(ans);



function add(x,y=5 ,z){
        console.log(x);
        console.log(y);
        console.log(z);
        return x+y+z;

}
console.log(add(10,55,3));



function fun(...values){
        console.log(values);
}
fun(10,20,30,60,80,901);


console.log(Math.abs(5));
console.log(Math.abs(-5));

console.log(Math.floor(8.7));
console.log(Math.ceil(8.7));
console.log(Math.round(8.1));
console.log(Math.min(-5,3,-2,-10,6));
console.log(Math.max(-5,3,8,-2,-10,8));


console.log("hello world");
console.log('hello world');
console.log(`helllo world`);

let s1 = "I don't have a money";
console.log(s1);


let x = 1000;
let s4 = `value of x is ${x}`;
console.log(s4);
