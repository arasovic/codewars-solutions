const l = [1, 2, 'a', 'b'];
const l2 = [1, 'a', 'b', 0, 15];
const l3 = [1, 2, 'aasf', '1', '123', 123];

// Solution
function filter_list(l) {
    return l.filter(item => typeof item === 'number');
}

console.log(filter_list(l)); // [1, 2]
console.log(filter_list(l2)); // [1, 0, 15]
console.log(filter_list(l3)); // [1, 2, 123]
