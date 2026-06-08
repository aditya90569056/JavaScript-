// console.log(abc());
// function abc(){
//     return "hello";
// }

// abc = () =>{  
//       console.log("oppo");
// }
// abc();
// val=()=>2
// sum=(i)=>Math.pow(i,2);
// show=(val)=>{
    // console.log(sum(val));
// }
// console.log(sum());
// setInterval(show(8),6000);
var i = 0
function abc(){
   return  function inner(){
        return i+1;
    }
}
ccd = abc();
console.log(ccd());
