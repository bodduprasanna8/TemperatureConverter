const temp=document.querySelector(".temp input");
const res=document.querySelector(".res input");
const inputTempUnit=document.querySelector(".temp select");
const outputTempUnit=document.querySelector(".res select");

temp.oninput=function(){
    let inputTempUnitVal=inputTempUnit.value;
    let outputTempUnitVal=outputTempUnit.value;
    let CelciusToKelvin = inputTempUnitVal === "Celcius" && outputTempUnitVal === "Kelvin";
    let CelciusToFahrenheit = inputTempUnitVal === "Celcius" && outputTempUnitVal === "Fahrenheit";
    let KelvinToCelcius = inputTempUnitVal === "Kelvin" && outputTempUnitVal === "Celcius";
    let KelvinToFahrenheit = inputTempUnitVal === "Kelvin" && outputTempUnitVal === "Fahrenheit";
    let FahrenheitToCelcius = inputTempUnitVal === "Fahrenheit" && outputTempUnitVal === "Celcius";
    let FahrenheitToKelvin = inputTempUnitVal === "Fahrenheit" && outputTempUnitVal === "Kelvin";
    let sameUnits = inputTempUnitVal === outputTempUnitVal;

    let inputTempVal = temp.value;
    let convertTemp = 0;
    if(CelciusToKelvin){
        convertTemp = (inputTempVal * 1) + 273.15;
        res.value = convertTemp.toFixed(2);
    }
    else if (CelciusToFahrenheit){
        convertTemp = (9/5 * inputTempVal) + 32;
        res.value = convertTemp.toFixed(2);
    }
    else if (KelvinToCelcius) {
        convertTemp = (inputTempVal - 273.15);
        res.value = convertTemp.toFixed(2);
    }
    else if (KelvinToFahrenheit) {
        convertTemp = 9/5 * (inputTempVal - 273.15) + 32;
        res.value = convertTemp.toFixed(2);
    }
    else if (FahrenheitToCelcius) {
        convertTemp = 5/9 * (inputTempVal - 32);
        res.value = convertTemp.toFixed(2);
    }
    else if (FahrenheitToKelvin) {
        convertTemp = 5/9 * (inputTempVal - 32) + 273.15;
        res.value = convertTemp.toFixed(2);
    }
    else if (sameUnits) {
        res.value = inputTempVal;
    }
    

}