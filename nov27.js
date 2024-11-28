
//Eligibility for vote 

var userInput= prompt("enter your age :");
if(userInput>=18){
    console.log("you are eligible for vote");
}
else{
    console.log("you are not eligible");
}

// Marriage Eligibility

var a=prompt("enter your gender :");
var b=prompt("enter your age :");
var male
var female
if(a==male){
    if(b >=21)
    {
        console.log("you are eligible to get married")
    }
    else{
        console.log("you are not eligible")
    }
}
else(a==female)
{
    if(b >=18)
    {
        console.log("you are eligible to get married")
    }
    else{
        console.log("you are not eligible")
    }
}

// Driving License Eligibility

var a=prompt("enter your age :")
if(a >= 18){
    console.log("you are eligible for licence");
}
else{
    console.log("you are not eligible");
}

//Exam Eligibility

var b=prompt("enter your percentage :")
if(b >= 75){
    console.log("you are eligible for exam")
}
else{
    console.log("you are not eligible")
}

//Senior Citizen Discount Eligibility

var a=prompt("enter your age :")
if(a >= 60){
    console.log("you are eligible for discount")
}
else{
    console.log("you are not eligible for discount")
}
