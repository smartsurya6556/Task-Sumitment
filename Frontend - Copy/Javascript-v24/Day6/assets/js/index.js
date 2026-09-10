


// for(let i=1;i<=20;)
//     {
//         if(i%2==0){
//             console.log("Even Number :",i); 
//         }
//         else{
//             console.log("Odd Number :",i); 
//         }
//         i++;
// }

// for(let a=12; a>=1; a--){
//     console.log("Num :",a);
// }


// 1.Print 1–10

// console.log("Numbers : 1–10");

// for( let s = 1; s<=10; s++ )
//     {
//     console.log("Number :", s );
// }

// 2. Print even numbers

// console.log(" Even Numbers : 20-1");

// let total=null;

// for(let i =20; i>=1; i--){
//     if(i%2===0){
//         console.log(i);
//         total=total+1;
//     }
// }
// console.log(" Total Even Numbers :",total);


// //3. Print odd numbers

// console.log(" Odd Numbers : 1-25");
// total=null;
// for(i=1; i<=25; i++){
//     if(i%2==0){
//         console.log(i);
//         total=total+1
//     }
// }
// console.log( "Total Odd Numbers :",total);


// //4.Find a number

// let find =84;
// for(i=1; i<=100; i++){
//     if(i===find){
//         console.log("Number fund :", i);
//         break;
//     }
// }

// //5.Find a number in an array

// let numbers= [47,74,40,2,3,24,87,65];
// let findnum=2;
// for(let i =0; i<numbers.length; i++){
//     if(numbers[i] === findnum){
//         console.log("Number found at index :",i);
//         break; 
//     }
// }

//6.String found at 
// let word = "Agreement";
// find="m";
// for(i=0; i<word.length; i++){
//     if(word[i]===find){

//         console.log(find,"is index position :",i);
//         break;
//     }
// }

// //7.Find digit in a number 

// let num=4897136;
// let finddigit=9;
// let found=false;
// let count=null;

// for(;num>0; num=Math.floor(num/10))
//     {
//        let digit = num%10;
//          count=count+1;
//     //    console.log(num);
//     //     console.log(digit);

//     if (digit===finddigit){
//         found=true;
//         break;
//     }
// }

//  if(found){
//         console.log("Found digit");
//     }
// else{
//         console.log("Not Found Unmaching Number ->",finddigit);
        
//     }

// console.log(finddigit,"Position is :",count);

// //8.Count digits 
// num=852565489974523;
// count=0;
// for(;num>0;num=Math.floor(num/10)){
//     count=count+1;
// }
// console.log("Total Digit is :",count);

// //9.count Strings
// let str="ghsfxcsesgsswsbwsvxxv";
// count=0;
// for(i=0;str.length>i; i++){
//     count=count+1;
// }

// console.log("Total String is :",count);

// //10.Reverse numbers


// for(i=15;i>=1; i--){
//     console.log(i);
// }

//11.Reverse Digits 

// num=4578964302;
// num=String(num);

// // for(i=num.length-1; i>=0; i--){

// //     console.log(num[i]);
// // }

// //12. Front Digits

// for(i=0; i<num.length; i++){
//     console.log(num[i]);
// }

//12. 1 முதல் 20 வரை numbers-ஐ single line-ல் print செய்யவும்.

    // for(i=1; i<=20; i++){
    //    process.stdout.write(i + " ");
    // }

//13. 1 முதல் 50 வரை உள்ள even numbers-ஐ single line-ல் print செய்யவும்.

// for(i=50;i>=1; i--){

//     if(i%2===0){

//         process.stdout.write(i + " ");
        
//     }
   
// }

//14. 1 முதல் 50 வரை உள்ள odd numbers-ஐ single line-ல் print செய்யவும்.

// for(i=1;i<=50; i++){
//     if(i%2===1){
//        process.stdout.write(i + " ");  
//     }
// }

//15. 1 முதல் 20 வரை உள்ள அனைத்து numbers-ன் sum கண்டுபிடிக்கவும்.

// sum=0;
// for(s=20; s>=1; s--){
//     sum=sum+s
// }
// console.log("Total sum of :", sum );

//16. 1 முதல் 50 வரை உள்ள even numbers-ன் sum கண்டுபிடிக்கவும்.
// let sum=0;
// let total=0;
// for(i=1; i<=50; i++){
//     if(i%2==0){
//         sum=sum+i;
//         total=total+1;
//     }
// }
// console.log("Total of Even Number :", total);
// console.log("Sum of Even Numbers :", sum);

//17. 1 முதல் 100 வரை எத்தனை even numbers இருக்கிறது என்று count செய்யவும்.

// count=0;
// for(i=1; i<=100; i++){
//     if(i%2===1){
//         count=count+1
//     }
// }

// console.log("Total Odd Number :", count);


//18. 1 முதல் 100 வரை loop செய்து, 73 என்ற number கிடைத்தவுடன் print செய்து loop-ஐ stop செய்யவும்.

// fount=65;
// for (i=100; i>=1; i--){
//     if (i===fount){
//         console.log("Found The Number :", fount);
//         break;
//     }
// }

//19. Reverse Number [487648841664]

// num=1876984164;
// num=String(num);

// for(i= num.length-1; i>=0; i--){
//     console.log(num[i]);  
// }

//20.  Reverse String [Confirmed]

// str="Confirmed";
// count=0;
// for(i=str.length-1;i>=1; i-- ){
//     count=count+1
//     console.log(str[i]); 
// }

// console.log("Total String Count :", count);

// 21. Find Character [Javascript]

 let text = "Javascript";
 let target = "r"

 for(i=0; i<=text.length; i++){
    if (text[i]===target){
        console.log("Target Achive : " + target +":"+i); 
        break; 
    }
 }