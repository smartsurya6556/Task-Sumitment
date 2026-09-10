



// const arry=[7,8,9,5,6,4]

// console.log(arry.reverse());


// Day 8 - JS - Functions - Parameters - Arguments Tasks [26/08/26]





            // Loop Through Array — 4 Tasks

        //1. Create an array of 5 numbers. Use a for loop to print all the numbers.

        // let array=[7,8,9,5,6,4,"46573"]
        // let line = []
        // for (i=0; i<array[6].length; i++){
        //         line.push(Number(array[6][i]));
        //         console.log(array[6][i]);   
        // }

        // console.log("Numbers :",line);
        // for(i=array.length-1;i>=0; i--){
        //     line+=array[i];
        // }
        // console.log("String :", [line] );
        


        
        /*    
        
        Get → Convert → Store

        arr[0][i]  →  Number()  →  push()
        Get         Convert      Store
        
        */


        // let str =[7,8,9,5,6,4]
        // let line = []
        // for(i=str.length-1;i>=0;i--){
        //     line+=str[i]
        // }
        // console.log("Reverce String :" ,[line] );
        


        //2. Create an array of 5 student names. Use a for loop to print each name on a separate line.

        // const studentnames =["Surya","Swetha","Karthi","Arun"]
        //     console.log(" Students :");

        // for(let i=0; i<studentnames.length;i++){
            
        //     console.log(studentnames[i]);  
        // }


        //3. Create an array of numbers. Use a for loop to find and print only the even numbers.

        let num=[441,521,766,773,32,47,54,53,740,];
        let even=[];
        let odd=[];

        for(i=0; i<num.length;i++){

            if(num[i]%2==0){
                even.push(num[i]);
            }
            else{
                odd.push(num[i]);
            }
        }

        console.log("List Of Even Numbers :\n",even);
        console.log("List Of Odd Numbers :\n",odd);
        


        //4. Create an array of student objects containing name and mark. Use a for loop to print the names of students who scored more than 80.

        const students = [
    {
        name: "Surya",
        mark: 98,
        grade: "A+"
    },
    {
        name: "Swetha",
        mark: 92,
        grade: "A+"
    },
    {
        name: "Karthi",
        mark: 76,
        grade: "B"
    },
    {
        name: "Arun",
        mark: 68,
        grade: "C"
    },
    {
        name: "Priya",
        mark: 88,
        grade: "A"
    },
    {
        name: "Divya",
        mark: 95,
        grade: "A+"
    }
];


for(i=0; i<students.length; i++){

    if(students[i].mark>80){

        console.log(" Name : "+students[i].name,
                    "\n Mark : "+students[i].mark,
                    "\n Grade : "+students[i].grade
        );
        
    }
}


    //5. Create an arrow function that accepts two numbers as parameters and returns their sum.



    //Multi Line => Function

        let oprations = (a=0,b=0,c=0) =>{

                console.log("Addition + :",a+b+c);

                console.log("Subraction - :",a-b-c);

                console.log("Multipication * :",a*b);

                console.log("Division / :",a/b/c);

                console.log("Remainder % :", a%b);
                
                
                return a+b+c ;

        };

        console.log(oprations (42,13));
    


        ////Single Line => Function

        const arro =(a,b)=> a+b;

        console.log("Addition ++ :",arro(81,40));

    // 6. Create an arrow function that accepts a student's name and mark as parameters and returns a message containing the student's name and mark.

            const schoole =(name,mark)=>{

                console.log("    Student ");
                
                // let student=1;
        
                
            //    student +="  Name : ",name,"\n  Mark : ",mark

               return "  Name : "+name+"\n  Mark : "+mark;
            }

            console.log(schoole("Surya",98));
            
            
        