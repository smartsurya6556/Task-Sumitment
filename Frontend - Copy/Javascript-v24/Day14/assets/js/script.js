


const num =[11,22,15,5,8,44]

let j= 0;

let squear=[]


for (s=0; s<num.length; s++){
    squear[j] = num[s]*num[s]*num[s]
    j++;
}
console.log(` Square of Array : ${squear}`);



let numbers = [10, 20, 10, 30, 20, 40];

for (let i = 0; i < numbers.length; i++) {

    for (let j = i+1; j < numbers.length; j++) {

        if (numbers[i] == numbers[j]) {
            console.log("Duplicate:", numbers[j]);
        }
    }
}


let even = ""

for(s=1; s<=50; s++){

    if (s%2==0){

        even +=s+" "
    }
}

console.log(`Even Numbers : ${even}`);


const Time =
{
time:{india:12,
    Raiway:24
}
}



const students = [

    { name: "Arun", mark: 85 },
    { name: "Bala", mark: 65 },
    { name: "Charan", mark: 90 },
    { name: "Deepak", mark: 70 }


];

students.forEach(s => {
    if (s.mark > 75) {
        console.log(s.name);
    }
});



function studentInfo(name, age) {
    return `My name is ${name} and I am ${age} years old.` ;
}

console.log( studentInfo ("Ravi", 25)) ;



let prushed = 1487;
const Amount  = prushed > 1000 ? prushed/10 :prushed/5;

console.log (`Discound :${Amount} `) ;
