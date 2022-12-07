
all = ["arr1", "arr2", "arr3", "arr4"]
arr1 = [1,2,3,4,5]
arr2 = [6,7,8,9,10]
arr3 = [12,13,14,15]
arr4 = [3,4,5,6,7]

/*function check(arr1,arr2,arr3,arr4){
    // check what overlaps with arr1
    for (i = 0; i < arr1.length; i++){
        if (arr2.includes(arr1[i])){
            var overlap = [ all[1]]
        }
        else {overlap = ""}
    }
    for (i = 0; i < arr1.length; i++){
        if (arr3.includes(arr1[i])){
            overlap1 = [ all[2]]
        }
        else {overlap1 = "none "}
    }
    for (i = 0; i < arr1.length; i++){
        if (arr4.includes(arr1[i])){
            overlap2 = [all[3]]
        }
        else {overlap2 ="none "}
    }
    //check what overlaps with arr2
    for (i = 0; i < arr2.length; i++){
        if (arr3.includes(arr2[i])){
            check1 = [ all[2]]
        }
        else {check1 = "none "}
    }
    for (i = 0; i < arr2.length; i++){
        if (arr4.includes(arr2[i])){
            check2 = [all[3]]
        }
        else {check2 ="none "}
    }
    //check what overlaps with arr3
    for (i = 0; i < arr3.length; i++){
        if (arr4.includes(arr3[i])){
            check3 = [all[3]]
        }
        else {check3 ="none "}
    }
    return "(" + overlap + overlap1 + overlap2 + " ) are overlaping arr1 and ( "+ check1 + check2 + "are overlaping arr2 and (" + check3 + ") are overlapping arr3 ."

}*/

function findLong("string"){
    var result = ""
    for(i = 0; i < string.length;){
        result += string
        string.shift()
    }
}
findLong("abcdefghijklmnop")

