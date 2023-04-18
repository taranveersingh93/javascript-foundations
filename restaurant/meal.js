function createMeal(inName, inReq, inTable) {
  var meal = {
    name: inName,
    specialRequests: inReq,
    tableNumber: inTable,
    complete: false
  };
  return meal;
}

function getMade(inMeal) {
  inMeal.complete = true;
  return inMeal;
}
function announceMeal(inMeal) {
  if (inMeal.complete) {
    return `Order up - ${inMeal.name} for table ${inMeal.tableNumber}!`;
  } else {
    return `This ${inMeal.name} is not completed yet`;
  }
}

function createOrder(inOrder) {
  var order = {
    tableNumber: inOrder.tableNumber,
    meals: inOrder.meals,
    completedMeals: []
  }
  return order;
}

function cookMeal(inOrder, inMeal) {
  if (inOrder.tableNumber === inMeal.tableNumber) {
    inOrder.completedMeals.push(inMeal.name);
  } 
  return inOrder;
}

function listOrders(inOrder) {
  console.log(inOrder)
  var list = [];
  for( var i = 0; i < inOrder.meals.length; i++) {
    list.push(inOrder.meals[i].name);
  }
  return list;
}

module.exports = { 
  createMeal,
  getMade,
  announceMeal,
  createOrder,
  cookMeal,
  listOrders
};
