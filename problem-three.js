// -------------problem number three------------
function deleteInvalids(array) {
    if (!Array.isArray(array)) {
        return "please input an Array";
    }
    const numArray = [];
    for (let someArray of array) {
        if ((typeof someArray === "number") && (!isNaN(someArray))) {
            const num = someArray;
            numArray.push(num);
        }
    }
    return numArray;
}
const isArray = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
const result = deleteInvalids(isArray);
console.log(result);