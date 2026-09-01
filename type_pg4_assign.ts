

// Alias name for values
type paymentmethod='UPI'|'creditcard'|'Paypal'
function makePayment(payment:paymentmethod) {
    console.log("making payment")
    console.log(payment)
}

makePayment('UPI')
makePayment('creditcard')