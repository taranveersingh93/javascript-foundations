function createFavoriteFood(foodObject) {
    var dish = {
        name: foodObject.dish,
        ingredients: foodObject.ingredients,
        isSpicy: foodObject.isSpicy,
        timesOrdered: 0
    };
    return dish;
}

function commentOnSpiciness(foodObject) {
    if(foodObject.isSpicy === true) {
        return `Wow, this ${foodObject.name} is so spicy!`
    } else {
        return `Phew, this ${foodObject.name} is not very spicy.`
    }
}

function orderFood(dish) {
    dish.timesOrdered += 1;
    return dish;
}

function createShoppingList(dishes) {
    var allIngredients = [];
    for(var i = 0; i < dishes.length; i++) {
        for(var j = 0; j < dishes[i].ingredients.length; j++) {
            allIngredients.push(dishes[i].ingredients[j]);
        }
    }
    return allIngredients;
}

module.exports = {
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList
 };