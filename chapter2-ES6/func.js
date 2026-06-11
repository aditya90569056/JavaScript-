// const outer=(a)=>(b)=>(c)=>a+b+c;
// console.log(outer(1)(2)(10));
// const adi = (name)=>(role)=>(dept)=>`hello ${name} you'r a ${role} in ${dept}`
// console.log(adi("aditya")("Ai engineer")("Open Ai"));
// let obj={
//     a,
//     b,
//     c
// }
// console.log(obj);
// function sample(name,age){
    // this.name = name;
    // this.age  = age;
// }
// adi = new  sample("aditya",20);
// aman = new sample("aman",20);
// console.log(adi.name);
// this. = function(){
//     console.log("wow");
// }
// console.log(this);
// wow();
// func=(name = "aditya")=>{
// console.log(name);
// }
// func("aman");
// function count(val = false){
//     if(val){
//         for(i=1;i<=5;){
//             console.log(`Count: ${i}`);
//             i++;
//         }
//     }
// }
// count(1);
// function getPerson(name,age,ht){
//     return {
//         name,
//         age,
//         ht
//     }
// }
// const adi =  getPerson("aditya",20,21.9)
// const aman = new getPerson("aman",20,20.3);
// console.log(adi);
// function abc(val){
//     console.log(val.name);
// }
// abc({name:"aditya",age:20});
// const obj1 = {x:1,y:2};
// const obj2 = {z:3};
// const obj3 = {...obj1,...obj2};
// console.log(obj3);
// [a,b,c] = [1,2,3];
// // console.log(b);
// [...a] = [1,2,3,4,5,6]
// console.log(a);

// function abcd(...a){
//     return a.reduce(function(acc,crr){
//         return acc+crr
//     });
// }
// console.log(abcd(1,2,3,4));
// val = [1,2,3,4].map((a,b,c)=>a/2);
// console.log(val);
// [1,2,3,5].forEach((a,b,c)=>{console.log(a/2)});
// console.log(val);
// const student = {name:"aditya",age:20};
// const {...info} = student;
// console.log(info.name);
// function abcd(){
    // return [1,2,3,4]
// }
// [a,,b] = abcd();
// console.log(a,b);
// function one(){
//     console.log("one");
// }
// function two(){
//     console.log("Two");
// }
// [a,b] = [one,two];
// a();