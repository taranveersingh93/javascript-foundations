function issueCard(inName, inAge) {
    var card = {
        name: inName,
        age: inAge,
        numBooksCheckedOut: 0,
        isChild: false
    };
    
    if (card.age < 12) {
        card.isChild = true;
    }

    return card;
}

function searchByAuthor(inCollection, inAuthor) {
    var resultArray = [];
    for (var i = 0; i < inCollection.length; i++) {
        if(inCollection[i].author === inAuthor) {
            resultArray.push(inCollection[i]);
        }
    }
    if(resultArray.length > 0) {
        return resultArray;
    } else {
        return `No book found for search criteria`;
    }
}

module.exports = { 
    issueCard,
    searchByAuthor
 };