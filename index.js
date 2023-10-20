// Write your solution in this file!
var customerName = "bob";
var bestCustomer;
const leastFavoriteCustomer = "hill"

function upperCaseCustomerName(){
    if(typeof customerName === "string"){
        customerName = customerName.toUpperCase()
    };
}


function setBestCustomer(){
     bestCustomer = "not bob";
}

function overwriteBestCustomer(){
    bestCustomer = "maybe bob";
}


function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "her"}