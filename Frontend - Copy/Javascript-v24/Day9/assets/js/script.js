



        //  Day 9 - Js Functions - Scopes - Hoisting --> Tasks [27/08/26]


        
        // Task 1 — Function + Parameters

// Create a function that accepts two numbers as parameters and returns their sum.

        const sum =(a,b) =>{

            let sum=a+b;
           return sum;
        }

        console.log( "Total is :",sum(25,64));
        

        //Task 2 — Function + for Loop

// Create a function that accepts a number n and uses a for loop to print all even numbers from 1 to n

        const num =(s=1,e=15)=>{
        let even=[];

        for(i=s; i<=e; i++){
            if(i%2==0){
                even.push((i))
            }
        }

        return even;
        }
        console.log("   Even Number of :","\n  ",num(1,21));


        //Task 3 — Arrow Function

    // Create an arrow function that accepts a number and returns its factorial.
   
        const fact=(num)=>{
            let fact =1;
            for(i=1; i<=num; i++){
                fact = fact*i;
            }
            return console.log(
                 num,
                " In Factorial = ",fact);
        }

       fact(4);
        
     

        //Task 4 — Scope

    //Create a program demonstrating the difference between global scope, function scope, and block scope using var, let, and const.


        var businessman = "Rathan TATA"
        let pM = "Modi Ji"  //This Three global scopeing, 
        const hero = "Ajith"

        console.log("This is World Scope:",businessman);
        console.log("This is World Scope:",pM);
        console.log("This is World Scope:",hero);
        

        const india=()=>{
            var CM = "Vijay"
            let Police ="Kishor"
            const Postman="Suresh"
            
            console.log("Functional Accese :",CM);
            console.log("Functional Accese :",Police);
            console.log("Functional Accese :",Postman);
            

           /*City-Chennai*/ for(i=1;i>=i; i--){

            let Police ="Kishor"
            const Postman="Suresh"

            console.log("This is World Scope:",businessman);
            console.log("This is World Scope:",pM);
            console.log("This is World Scope:",hero);

            console.log("Functional Accese :",CM);
            console.log("Functional Accese :",Police);
            console.log("Functional Accese :",Postman);
            

            }

            /*City-Tirichi*/ if(true){
                
            let Police ="surya"
            const Postman="Suresh"

                
            console.log("This is World Scope:",businessman);
            console.log("This is World Scope:",pM);
            console.log("This is World Scope:",hero);
            }

            /*City-Dheli*/ if(true){

            let Police ="kavin"
            const Postman="kannan"
            let Armyman = "Soldier"
           
            console.log("This is World Scope:",businessman);
            console.log("This is World Scope:",pM);
            console.log("This is World Scope:",hero);

            console.log("Functional Accese :",Armyman);
            console.log("Functional Accese :",Police);
            console.log("Functional Accese :",Postman);
            
            }
            
         
            console.log("This is World Scope:",businessman);
            console.log("This is World Scope:",pM);
            console.log("This is World Scope:",hero);
        }

         const America =()=>{


            /*City-1*/for(i=1;i>=i; i++){

            
            console.log("This is World Scope:",businessman);
            console.log("This is World Scope:",pM);
            console.log("This is World Scope:",hero);

            }

            /*City-2*/if(true){


           
        console.log("This is World Scope:",businessman);
        console.log("This is World Scope:",pM);
        console.log("This is World Scope:",hero);
            }
        }


        india()