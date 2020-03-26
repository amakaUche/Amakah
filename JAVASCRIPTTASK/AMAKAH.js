// Name variable
let name = "Uche chiamaka";
// course array
let courses = ["Html", "Css", "Javascript"]

console.log(`my name is ${name} and my courses are :`);

courses.forEach((course, index) => console.log(`${index + 1} - ${course}`))

for (let index = 0; index < 200; index++) {  
    if(index % 2 !== 0 ){
        console.log(index)
    }   
}

