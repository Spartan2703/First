function printDuplicates(str) {
    let len = str.length;

    str = str.split('').sort().join('');
    str=str.toLowerCase();

    for (let i = 0; i < len; i++) {
        let count = 1;
        if (str.charAt(i) == 'a' || str.charAt(i) == 'e'|| str.charAt(i) == 'i'|| str.charAt(i) == 'o'
           || str.charAt(i) == 'u'){
            while (i < len - 1 && str[i] == str[i + 1]) {
                count++;
                i++;
            }
            if (count > 1) {
                console.log(str[i] + ", count = " + count);
            }

           }
        
    }
}

let str = "Aeiousstthhggaeiouuuu";
printDuplicates(str);
