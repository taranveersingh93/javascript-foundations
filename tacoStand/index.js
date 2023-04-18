function createIngredient(inName, inPrice) {
  var ingredient = {
    name: inName || "unknown",
    price: inPrice || 0.00
  }
  return ingredient
}

function createTaco(inName, inIngredients) {
  var taco = {
    name: inName || "custom",
    ingredients: inIngredients || []
  }
  return taco
}

function addIngredientToTaco(inTaco, inIngredient) {
  if(inIngredient) {
    inTaco.ingredients.push(inIngredient);
  }
  return inTaco;
}

function calculatePrice(inTaco) {
  var price = 0;
  for(var i = 0; i < inTaco.ingredients.length; i++) {
    price += inTaco.ingredients[i].price;
  }
  return price;
}

module.exports = {
  createIngredient,
  createTaco,
  addIngredientToTaco,
  calculatePrice
}
