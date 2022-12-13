arr1 = [2,31,6,4,20,1]

function inSort(arr){
    for (let i = 1; i< arr.length; i++){
        for (let j = i; j > 0; j--){
            if (arr[j] < arr[j-1]){
                temp = arr[j];
                arr[j] = arr[j-1];
                arr[j-1] = temp
            }
        }
    }
    return arr
}

console.log(inSort(arr1))