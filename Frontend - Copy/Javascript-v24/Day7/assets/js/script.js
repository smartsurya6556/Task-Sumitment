


                //1. Reversce Number Printing for Loops

                // let num=19456873;
                // console.log(num%10);
                // console.log(num/10);


                // let line="";
                // let count=0;
                // for(;num>0; num= Math.floor(num/10)){

                //     line+=num%10;
                //     count += 1;
                // }

                // console.log("Reversce Number of :"+"\n "+line);
                // console.log("Total Disits Of :",+ count)


                // //2. Front Number Printing for Loops

                // num=649721;
                // count=0;

                // for(let i=0; i < num.toString().length; i++){

                //     console.log(num.toString()[i]);

                //     count+=1;
                    
                // }
                // console.log(count);
                // // console.log(num);


     //         Tasks->  Array,object,Array of objects    [25/08/26] 



        // 1. Array Access

        //Given an array of 5 fruit names, use a for loop to print each fruit on a separate line.

        //             let fruits=["Apple","Orange","Mango","Banana"];

        //             for(i=0; i<fruits.length; i++){

        //                 if(fruits[i]==="Apple"){
        //                     console.log(fruits[i]);
        //                     console.log(fruits[i]=i,"\n","This is Making From India"+"\n Rs 98"); 
        //                 }

        //                 if(fruits[i]==="Orange"){
        //                     console.log(fruits[i]);
        //                     console.log(fruits[i]=i,"\n","This is Kamala Orange"+"\n Rs 75");
        //                 }

        //                 if(fruits[i]==="Mango"){
        //                     console.log(fruits[i]);
        //                     console.log(fruits[i]= i,"\n","This is Making From Selam " +"\n Rs 67");
        //                     break;
        //                 }

        //             }
        //             console.log("Total Fruits :"+ fruits.length);

        // //2. Object Access
        // //Create a student object with name, age, course, and mark. Access and print each property individually.

        //             let students ={
        //                 name:"surya",
        //                 age:25,
        //                 course: "HTML",
        //                 mark:"99",
        //                 grade:"A+",
        //                 from:{
        //                     name:"Tenkasi",
        //                     picode:720648
        //                 }
        //             }
        //             console.log(students["name"]);
        //             console.log(students.age);
        //             console.log(" From : ");

        //             console.log(students["from"],"\n",students.from.name);


//3. Array of Objects
//Create an array containing 3 student objects. Use a for loop to print each student's name and mark.

        // students=[
        //     {
        //     name:"surya",
        //     age:25,
        //     course: "HTML",
        //     mark:"99",
        //     grade:"A+",  
        //     },
        //     {
        //     name:"Karthi",
        //     age:21,
        //     course: "HTML",
        //     mark:"78",
        //     grade:"B", 
        //     },
        //     {
        //     name:"Swetha",
        //     age:23,
        //     course: "CSS",
        //     mark:"85",
        //     grade:"A", 
        //     }
        // ]

        // for(i=0;i<students.length; i++){

        //     console.log("Name :",students[i].name);
        //     console.log(" Age :",students[i].age);
        //     console.log(" Grade :",students[i].grade);
            
        // }

//   4. Find a Student
//Given an array of student objects, use a for loop and if condition to find a student by name and print the student's name and mark.

        //  students=[
        //     {
        //     name:"surya",
        //     age:25,
        //     course: "HTML",
        //     mark:"99",
        //     grade:"A+",  
        //     },
        //     {
        //     name:"Karthi",
        //     age:21,
        //     course: "HTML",
        //     mark:"78",
        //     grade:"B", 
        //     },
        //     {
        //     name:"Swetha",
        //     age:23,
        //     course: "CSS",
        //     mark:"85",
        //     grade:"A", 
        //     }
        // ]

        // // console.log(students[1]);
        // let search ="Swetha"
        // for (i=0; i< students.length; i++){
        //     if(students[i].name===search){
        //         console.log(" Name :",students[i].name);
        //         console.log(" Grade :",students[i].grade);  
        //     }
        // }
    
        
//5. 5. Salary Filter
//Given an array of employee objects, use a for loop and if condition to print employees whose salary is greater than ₹40,000.


        let greater=40000

        let employees = [
            {
                name: "Surya",
                company: "TCS",
                role: "Frontend Developer",
                salary: 48000
            },
            {
                name: "Arun",
                company: "Infosys",
                role: "Java Developer",
                salary: 35000
            },
            {
                name: "Kumar",
                company: "Wipro",
                role: "Python Developer",
                salary: 38000
            },
            {
                name: "Ravi",
                company: "Zoho",
                role: "Software Developer",
                salary: 45000
            },
            {
                name: "Vijay",
                company: "Accenture",
                role: "Web Developer",
                salary: 42000
            }
        ];

        // console.log(employees)
    
        for (i=0; i<employees.length; i++){

            if(employees[i].salary>greater){

                console.log(" Name is :",employees[i].name);
                console.log(" Salery is :", employees[i].salary );
                console.log(" Greater than >",employees[i].salary-greater);
                console.log(" Company name :", employees[i].company );
            }
        }

                