export function selectPayment(payment){
    console.log("you clicked on payment ", payment.name)
    return {
        type: "PAYMENT_SELECTED",
        payload:payment
    }
};
