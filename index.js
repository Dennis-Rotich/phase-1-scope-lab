var customerName = 'bob';
function upperCaseCustomerName(){
   customerName = customerName.toUpperCase();
   console.log(customerName);
}
function setBestCustomer(){
   bestCustomer = 'not bob'; 
}
function overwriteBestCustomer(){
   bestCustomer = 'maybe bob';
   return bestCustomer;
}
const leastFavoriteCustomer = 'sheldon';
function changeLeastFavoriteCustomer(){
   leastFavoriteCustomer = 'george'
   return leastFavoriteCustomer;
}


 // Write your solution in this file!
