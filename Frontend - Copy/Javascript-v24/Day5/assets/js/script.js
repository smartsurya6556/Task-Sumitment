//Factorial

let no = 7;
let fact = no;

while(no>1)
    {
    no--;
    fact=fact*no;    
}
console.log("Factorial is while -- :",fact);


    /*
    1st loop
    
    Check ->  no > 1; 7 > 1= True 
    Going to insaide a block -> {}
    no--; -> 7-1= 6
    store & Replace -> fact=fact*no; fact = 7 * 6 = 42
    then Golble variable outside a loop 
    let fact store value = 42

    2nd loop
    
    Check ->  no > 1; 6 > 1= True 
    Going to insaide a block -> {}
    no--; -> 6-1= 5
    store & Replace -> fact=fact*no; fact = 42 * 5 = 210
    
    3rd loop

    Check ->  no > 1; 5 > 1= True 
    Going to insaide a block -> {}
    no--; -> 5-1= 4
    store & Replace -> fact=fact*no; fact = 210 * 4 = 840

    4th
    Check ->  no > 1; 4 > 1= True 
    Going to insaide a block -> {}
    no--; -> 4-1= 3
    store & Replace -> fact=fact*no; fact = 840 * 3 = 2520

    5th
    Check ->  no > 1; 3 > 1= True 
    Going to insaide a block -> {}
    no--; -> 3-1= 2
    store & Replace -> fact=fact*no; fact = 2520 * 2 = 5040
    
    6th
    Check ->  no > 1; 2 > 1= True 
    Going to insaide a block -> {}
    no--; -> 2-1= 1
    store & Replace -> fact=fact*no; fact = 5040 * 1 = 5040

    7th
    Check ->  no > 1; 1 > 1= false
    False Loop is Stop / Breck 
    Not Going to block inside -> {}

    */

    /*

    Next Statment checking
    
    console.log("Factorial is :", fact)
    
    output : Factorial is : 5040

    */

   no = 7;
   fact=no;
    while(no>1){
        no--; 
        fact=fact*no;
        console.log(no);
        console.log(fact);
        
    }


    no=1
    fact=10
    while(fact>=no){
        console.log(fact);
        fact--;
    }

    

   let num = 6;
   let factorial = 1;

   for(i=1;i<=num; i++){
    factorial = factorial*i;
   }
   console.log(num,"Factorial is ++ :",factorial);
   
    no=4;
    fact=no;
    for(i=4; i>1;){
        i--
        fact=fact*i;
    }

    console.log(no,"Factorial is --:",fact);
    console.log("fftgb");



    
    