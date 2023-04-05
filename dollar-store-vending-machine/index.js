
function createItemStock(name, quantity, price) {
    var itemStock = {
        name: name || "unknown",
        price: price || 1.00,
        quantity: quantity || 0
    };
    return itemStock;
}

function makePurchase(item, money) {
    if (item.price > money) {
        return `Sorry, you need at least $${item.price} to make that purchase`;
    } 
    
    if (item.quantity === 0) {
        return `Sorry, there are none left`
    } else {
        return `Here are your ${item.name}`
    }
}

function collectChange(looseChange) {
    return looseChange.reduce((a,b)=> a+b, 0);
}
 
module.exports = {
    createItemStock,
    makePurchase,
    // collectChange

}






