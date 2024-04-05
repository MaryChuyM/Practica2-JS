console.log ("Body Mass Index Calculator");
//program to calculate IMC using kg & height (m)
function bmiCalculator(weight,height) {
    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0){
        console.log("Unvalid information");
        return null;
    } else {
        const bmi = weight / (height * height);
        console.log("The Body Mass Index is:", bmi);
        return bmi;
   }
}
//comparing BMI results
function bmiresults (bmi) {
    if(bmi < 18.5){
    console.log("Low weight");
} else if (18.5 <= bmi && bmi < 24.9){
    console.log("Healthy weight");
} else if (24.9 <= bmi && bmi < 29.9){
    console.log("Overweight");
} else if (bmi >= 30){
    console.log("Super fat");
}
}
//Call functions
const bmi = bmiCalculator (152,25);
if (bmi !== null){
bmiresults(bmi);
}
