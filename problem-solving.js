// ---------- problem number one---------------
function calculateMoney(ticketSale) {
    if (ticketSale <= 0 || typeof ticketSale !== 'number'){
        return "please input a valid number"
    }
    const ticketPrice = 120;
    const totalTicketSale = ticketSale * ticketPrice;
    const securityGuardPayment = 500;
    const stuffFoodPayment = 50; 
    const all8StuffFoodPrice = stuffFoodPayment * 8;
    const totalSpend = securityGuardPayment + all8StuffFoodPrice;
    const remainingMoney = totalTicketSale - totalSpend;
    return remainingMoney;
    }


// -----------------problem number two-----------
function checkName(name) {
    if (typeof name !== 'string'){
        return "invalid"
    }
    if (name[name.length - 1] === "a" || name[name.length - 1] === "y" || name[name.length - 1] === "i" || name[name.length - 1] === "e" || name[name.length - 1] === "o" || name[name.length - 1] === "u" || name[name.length - 1] === "w" || name[name.length - 1] === "A" || name[name.length - 1] === "Y" || name[name.length - 1] === "I" || name[name.length - 1] === "E" || name[name.length - 1] === "O" || name[name.length - 1] === "U" || name[name.length - 1] === "W"){
        return "Good Name";
    }
    else {
        return "Bad Name";
    }
    }


// -------------problem number three------------
function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "please input an Array";
    }
    const numArray = [];
    for (let someArray of array) {
        if ((typeof someArray === "number") && (!isNaN(someArray))) {
            const num = someArray;
            numArray.push(num);
        }
    }
    return numArray;
}



// -----------------problem number four---------------------








