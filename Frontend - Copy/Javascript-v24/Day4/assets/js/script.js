



//TASK 1 – AGE CHECK


let age = 18;


if(age>=18)
    {
        console.log("Age is :",age,"Above Your Eligilble for the Voter ID Appleying");

    }
   
    
else{
    console.log("Age is :",age,"So Not Your Eligeble for the voter ID");
    
}

//TASK 2 – EVEN OR ODD


let a =15;

if(a%2===0){
 console.log(a,"is Even Number");
 
}
else{
    console.log(a,"is Odd Number");
    
}

//TASK 3 – MARK GRADE


let mark =28

if(mark>=90 && mark<=100 ){

console.log("Mark :",mark,"\nGrade :(A+) \nGreat Job");
}
else if(mark>=75 && mark<=89){

console.log("Mark :",mark,"\nGrade :(A) \nVery Good ");

}
else if (mark>=50 && mark<=74) {

    console.log("Mark :",mark,"\nGrade :(B) \nWorking More ");    
}
else if (mark>=35 && mark<=49) {

    console.log("Mark :",mark,"\nGrade :(C) \nNormal So Just Pass ");
    
}
else{

    console.log("Mark :",mark,"\nYou Are Fail");
    
}

//TASK 4 – LOGIN CHECK

let userName ="suya"
let userPassword ="556"

if(userName==="surya" && userPassword ==="55246"){

console.log("Login Successfuly");

}

else if (userName!=="surya") {

    console.log("Wrong userNmae Is :" ,userName, "\nPlease Enter Correct userName");
    
}

else if (userPassword!=="55246") {

    console.log("Wrong Password is :" ,userPassword ,  "\nPlease Enter Correct Password");
    
}


else{

    console.log("Try again Invalid Login");
    
}


// TASK 5 – DAY CHECK

let days =1;

switch(days){

case 1:
    console.log("This is a Sunday");
    break
case 2:
    console.log("This is a Monday");
    break
case 3:
    console.log("This is a Tuesday");
    break
case 4:
    console.log("This is a Wendnesday");
    
case 5:
    console.log("This is a Thursday");
    break
case 6:
    console.log("This is a Friday");
    break
case 7:
    console.log("This is a Saturday");
    break

default :
console.log("Invalid Day");

}

//Ternary if else

    let result =age >=18 ?"Adult" : "Minor";

    console.log("You Are :",result);

    //0 == "0" ? && false == 0 ?

    let g="0";
    let f=0;
    console.log(g==f);

    f=String("0");
    console.log(g==f,"\n",g,f);
    

    let h= false;
    console.log(h==f);

    f =Boolean(f);
    g=Boolean(g);

    console.log(f==g);


    
    
    
    