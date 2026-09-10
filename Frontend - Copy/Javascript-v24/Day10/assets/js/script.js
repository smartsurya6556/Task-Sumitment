


   //   Day 10 — ES6 & ES6+ Interview Tasks [28/08/26]
   
  /* Task 1
Convert the following normal functions into arrow functions. Show both explicit return and implicit return.

function add(a, b) {
    return a + b;
}

function square(n) {
    return n * n;
} */


//   function add (a,b){
//         return  a+b;
//     }
//     console.log(`Addsition : ${add(41,40)}`,add(32,65));
    

//     // Explicit return	const add = (a, b) => { return a + b; }
//    const square=(n) =>{

//     return n*n;
//    }
//    console.log(`Square Value : ${square(27)}`);


//    // Implicit return	const add = (a, b) => a + b


//    const adding =(a)=> a + a

//    console.log(`Adding : ${adding(54)}`);
   

//         /*   Quick Difference
//         Type	Syntax
//         Explicit return	const add = (a, b) => { return a + b; }
//         Implicit return	const add = (a, b) => a + b */
//         //1. { } → usually use return explicitly.
//         //2. No { } → value is returned implicitly.




//   // Task 2
//   // Using the following data, extract the required values using array destructuring and object destructuring.


//   let arry =[5,78,64,12]

//   const student={

//         name:"surya",
//         age:21,
//         course:"Ai Learning"
//   }
  

//   let [a=4,b=1,c,d]=arry;

//   console.log(a,b,c,d);
  
//   const {name:myName,age:myAge,course:myCourse} = student;

//     console.log("Object Detaile :",student);

//         // Simple rule:
//      // Array  → [] → position/order matters
//     // Object → {} → property name matters

//     // Task 4
//     // Explain the difference between Rest Parameter and Spread Syntax. Write one program using Rest and one program using Spread.


//     const fun =( ...nums) =>{

//         console.log(`Numbers :${nums}`);

//         let array =[...nums,78,64,45,32,18,97]
//         return array;
        
//     }

//     console.log(`List of Array :${fun(6,8,4)}`);

//     const mergeArrays = (...arrays) => [].concat(...arrays);

//     console.log(mergeArrays([1, 2, 3], [4, 5], [6, 7]));

//     // Task 5
//     // Create a function that accepts name, course, and city. Give "Chennai" as the default value for city and use a template literal to generate the output.

    

//     const details=(name,course,city="Chennai") =>{

//         return console.log(`  Student Details 
//     Name : ${name}
//     Course : ${course}
//     City : ${city}`);
//     }

//     details("Surya","Fullstock","Velachery")

// // Task 6
// // Create a Student class with name, age, and mark properties and a displayDetails() method. Create two student objects and display their details.

//     class Student {
//         constructor(name, age, mark) {
//             this.name = name;
//             this.age = age;
//             this.mark = mark;
//         }

//         displayDetails() {
//             console.log(`Name: ${this.name}`);
//             console.log(`Age: ${this.age}`);
//             console.log(`Mark: ${this.mark}`);
//         }
//     }

//     // Create two student objects
//     const student1 = new Student("Ravi", 20, 85);
//     const student2 = new Student("Arun", 21, 90);

//     // Display details
//     student1.displayDetails();
//     student2.displayDetails();


//    // Task 8
//   //Using the following object, use optional chaining (?.) and nullish coalescing (??) to safely access the city and display "City Not Available" when the city does not exist.

//         const obj = {
//             name:"karthi",
//             age: 23,
//             city:"Chennai"
//         }

//         const city = obj?.city?? "City Not Available"
//         const age = obj?.age?? "No Age"

//         console.log(city);
//         console.log(age);

        //?. → safely access a property
       //?? → provide a default value


    /*
         Task-10

       Here is the ES5 → ES6+ conversion using all four concepts.
           1.const / let
           2.Template literals `${}`
           3.Object shorthand { name, age }
           4.Arrow functions () => {}
    */



            const name = "Ravi";
            const age = 25;

            const student = {
                name,
                age
            };

            const displayStudent = (student) => {
                return `Name: ${student.name}, Age: ${student.age}`;
            };

            console.log(displayStudent(student));