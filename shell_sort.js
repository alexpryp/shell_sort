"use strict"

//Shell sort
function ShellSort(arr) {
    function change(i, j) {
        var temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
    }


    var step = Math.floor(arr.length / 2);
    while (step > 0) {
        for(var i = 0, j = i + step; j < arr.length; j++, i++) {
            if(arr[i] > arr[j]) {
                change(i, j);
                for(var k = i, l = i - step; k > 0 && l > 0; k -= step, l -= step) {
                    if ( arr[l] > arr[k]) {
                        change(l, k);
                    }
                }
            }
        }
        step = Math.floor(step / 2);
    }
    return arr;
}

//Test
console.log(ShellSort([5, 4, 6, 3, 7, 2, 8, 1, 9, 10, 11, 19, 20, 12, 18, 13, 17, 14, 16, 15,]));
