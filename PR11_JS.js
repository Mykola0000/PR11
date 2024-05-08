


function shellSort(arr, order) {
    let comparisons = 0;
    let swaps = 0;

    

    console.log(`Shell Sort: ${comparisons} comparisons, ${swaps} swaps`);
}


function quickSort(arr, order) {
    let comparisons = 0;
    let swaps = 0;

    

    console.log(`Quick Sort: ${comparisons} comparisons, ${swaps} swaps`);
}


function createDenseArray(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 100)); 
    }
    return array;
}


function createSparseArray(length) {
    let array = [];
    for (let i = 0; i < length; i++) {
        if (i % 10 === 0) {
            array[i] = Math.floor(Math.random() * 100); 
        }
    }
    return array;
}




let denseArray = createDenseArray(100);
console.log("Dense Array:", denseArray);
shellSort(denseArray.slice(), 'asc'); 
quickSort(denseArray.slice(), 'desc');


let sparseArray = createSparseArray(100);
console.log("Sparse Array:", sparseArray);
shellSort(sparseArray.slice(), 'asc');
quickSort(sparseArray.slice(), 'desc');
