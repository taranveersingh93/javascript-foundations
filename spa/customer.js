function createCustomer(inName, inBill, inBookings) {
  var customer = {
    name: inName,
    bill: inBill,
    bookings: inBookings || [],
  }
  return customer
}

function greeting(inCustomer) {
  if(inCustomer.bookings.length) {
    return `${inCustomer.name}! Welcome back to Happy Spa`
  } else {
    return `${inCustomer.name}! Welcome to Happy Spa`
  }
}

function createService(inName, inCost) {
  if(arguments.length) {
    var service = {
      name:inName,
      cost:inCost
    }
    return service;
  } else {
    return `Please provide service name and cost.`
  }
}

function bookServices(customer, service) {
  customer.bookings.push(service.name);
  customer.bill += service.cost;
  return customer;
}

function applyGiftCard(inAllServices, inCardValue) {
  
  var affordableServices = [];
  for (var i = 0; i < inAllServices.length; i++) {
    if(inAllServices[i].price <= inCardValue) {
      affordableServices.push(inAllServices[i].name)
    }
  }
  return affordableServices;
}

module.exports = { 
  createCustomer,
  greeting,
  createService,
  bookServices, 
  applyGiftCard
 }
