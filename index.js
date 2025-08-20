// let num  =  "2abc"

// console.log(typeof Number(num));


const Tea =(tea)=>{
  return `I Love ${tea}`
}

const TeaMaker=(make)=>{
   return make("CHSI")
}

const value  = TeaMaker(Tea)
console.log(value);
