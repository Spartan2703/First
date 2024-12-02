function duplic(arr){
    arr.sort();
		var j = 0;
		for (var i = 0; i < arr.length - 1; i++) {
			if (arr[i] != arr[i + 1]) {
				arr[j] = arr[i];
				j++;
			}
			
		}
		arr[j++] = arr[arr.length - 1];
		for (var k = 0; k < j; k++) {
			console.log(arr[k]+" ");
		}
}

const val=[1, 2, 3, 4, 5, 6, 5, 4, 3,3,3,3];
duplic(val)