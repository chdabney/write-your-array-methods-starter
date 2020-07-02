// Starter code for Create Your Own Array Methods Activity:

// sample arrays for testing your functions:
let testNumsArray = [3, 1, -5, 2, 105, -24, 495, 8, 246]
let testWordsArray = ['potato', 'rainbow', 'cloud', 'duck', 'orange', 'three']

// This is one example of implementing the functionality of forEach:
function newForEach(array, callback) {
    for (let index = 0; index < array.length; index = index + 1) {
        let currentItem = array[index]
        callback(currentItem, index, array)
    }
}

// complete the functions below so that they mimic the built in methods
function newSome(array, callback) {
    for (let index = 0; index < array.length; index++) {
        let currentItem = array[index]
        if (callback(currentItem, index, array)) {
            return true
        }
    }
    return false
}

function newEvery(array, callback) {
    for (let index = 0; index < array.length; index++) {
        let currentItem = array[index]
        if (callback(currentItem, index, array) === false) {
            return false
        }
    }
    return true
}

function newFind(array, callback) {
    for (let index = 0; index < array.length; index++) {
        let currentItem = array[index];
        if (callback(currentItem)) {
            return currentItem
        }
    }

}

function newFindIndex(array, callback) {
    for (let index = 0; index < array.length; index++) {
        let currentItem = array[index];
        if (callback(currentItem)) {
            return index
        }
    }
    return -1
}

function newMap(array, callback) {
    let newArray = []
    for (let index = 0; index < array.length; index++) {
        let currentItem = array[index]
        newArray.push(callback(currentItem))

    }
    return newArray
}

function newFilter(array, callback) {
    let newArray = []
    for (let index = 0; index < array.length; index++) {
        let currentItem = array[index];
        if (callback(currentItem)) {
            newArray.push(currentItem)

        }
    }
    return newArray
}

function newIncludes(array, input) {
    for (let index = 0; index < array.length; index++) {
        let currentItem = array[index];
        if (currentItem === input) {
            return true

        }
    }
    return false
}

function newConcat(array, userArray) {
    let newArray = [...array, ...userArray]
    return newArray
}

function newIndexOf(array, userInput) {
    for (let index = 0; index < array.length; index++) {
        let currentItem = array[index];
        if (currentItem === userInput) {
            return index

        }
    }
    return -1
}

function newJoin(array, seperator) {
    let newString = ''
    for (let index = 0; index < array.length; index++) {
        let currentItem = array[index];
        newString += `${currentItem}${seperator}`
    }
    return newString.slice(0, -1)
}

function newSlice(array, start, end) {
    if (!end) {
        end = array.length
    }
    let newArray = []
    for (let index = 0; index < array.length; index++) {
        let currentItem = array[index];
        if (index >= start && index < end) {
            newArray.push(currentItem)
        }
    }
    return newArray
} 