// --------------problem number five---------------
function monthlySavings(arr , livingCost) {
    if (!Array.isArray(arr) || typeof livingCost !== "number" || isNaN(livingCost)){
        return "input invalid";
    }
    for (let i = 0; i < arr.length; i++){
        if (typeof arr[i] !== "number" || isNaN(arr[i])) {
            return "input invalid";
        }
    }
    let bigArr = [];
    let smallArr = [];
    let sumOne = 0;
    let sumTwo = 0;
    
    for (let isArray of arr){
       if (isArray >= 3000){
        let newValue = 3000 * 20 / 100;
        let originalValue = isArray - newValue;
        bigArr.push(originalValue);
       }
       else if (isArray < 3000){
        smallArr.push(isArray);
       }
    }
    for (let largeValue of bigArr){
        sumOne = sumOne + largeValue;
    }
    for (let smallValue of smallArr){
        sumTwo = sumTwo + smallValue;
    }
    const totalPayment = sumOne + sumTwo;
    const totalSavings = totalPayment - livingCost;
    if (totalSavings < 0){
        return "earn more";
    }
    return totalSavings;
    }
    const payment = [ 1000 , 2000 , 2500] ;
    const cost = 5000;
    const result = monthlySavings(payment , cost);
    console.log(result);  
       
    