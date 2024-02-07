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
    const ticketNumber = -130;
    const ticketNum = calculateMoney(ticketNumber);
    console.log(ticketNum);









    
    









