class SelectionSort {

    constructor(inputArray){
        this.inputArray = inputArray;
    };

    swap(ary, a, b){
        const temp = ary[a];
        ary[a] = ary[b];
        ary[b] = temp;
        return ary;
    };

    // Start from left most part of the array
    selectionSort(){
        let A = this.inputArray;
        // T(n) => n linear scan 
        for (let i = 0; i < A.length; i++) {
            let minValue = A[i];
            let minIdx = i; 
            console.log(`current min value ==> ${minValue}`);
            console.log(`current min index ==> ${minIdx}`);
            console.log(`==========================`);
            // T(n) => n linear scan
            for (let rightIdx = minIdx + 1; rightIdx < A.length; rightIdx++) {
                // Check if current value is < minimum value seen thus far
                // If true reset the minimum value and minimum index 
                if (A[rightIdx] < minValue) {
                    minValue = A[rightIdx];
                    minIdx = rightIdx;
                    console.log(`updated min value ==> ${minValue}`);
                    console.log(`updated min index ==> ${minIdx}`);
                    console.log(`==========================`)
                    // Perform in-place swap
                    const temp = A[i];
                    A[i] = A[minIdx];
                    A[minIdx] = temp;
                }
            }
        }
        return A;
    };
}

let sorter = new SelectionSort([2,1,4]);
console.log(`Selection Sorted Array ===> [${sorter.selectionSort()}]`);

sorter = new SelectionSort([2,1,4,6,6,9,3,2,0,100,509032,77]);
console.log(`Selection Sorted Array ===> [${sorter.selectionSort()}]`);