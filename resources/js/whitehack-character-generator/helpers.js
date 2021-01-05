// Create prototype function on arrays to allow for inline random selection of one element.
Array.prototype.random = function() {
    return this[Math.floor(Math.random() * this.length)];
}

// Create prototype function on arrays to shuffle the order of their elements and return it as a new array.
// This implements the Fisher-Yates shuffle algorithm.
Array.prototype.shuffle = function() {
    let newArray = this;
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }

    return newArray;
}

// Helper function for dice-rolling.
function d(size, count) {
    let faces = Array.from(new Array(size), (x, i) => i + 1);
    let sum = 0;
    for (let i = 0; i < count; i++) {
        sum = sum + faces.random();
    }

    return sum;
}