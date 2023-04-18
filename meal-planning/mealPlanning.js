function createMeal(inType, inCalory) {
    var meal = {
        type: inType,
        calorieGoal: inCalory,
        dishes: []
    }
    return meal;
}

function addDish(inMeal, inDish) {
    if (inMeal.calorieGoal > inDish.calories) {
        inMeal.dishes.push(inDish);
        inMeal.calorieGoal -= inDish.calories;
    }
    return inMeal;
}

function calculateCalories(inNewMeal) {
    var calories = 0;
    for (var i = 0; i < inNewMeal.dishes.length; i++) {
        calories += inNewMeal.dishes[i].calories;
    }
    return `${inNewMeal.type} has a total of ${calories} calories.`;
}

module.exports = { 
    createMeal,
    addDish,
    calculateCalories
}