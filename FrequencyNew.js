let str = "My name is piyush";    
let freq = [str.length];    
let i, j;    
    
//Converts given string into character array    
let string = str.toCharArray();    
    
for(i = 0; i <str.length; i++) {    
    freq[i] = 1;    
    for(j = i+1; j <str.length; j++) {    
        if(string[i] == string[j]) {    
            freq[i]++;    
                
            //Set string[j] to 0 to avoid printing visited character    
            string[j] = '0';    
        }    
    }    
}    
    
//Displays the each character and their corresponding frequency    
//ystem.out.println("Characters and their corresponding frequencies");    
for(i = 0; i <freq.length; i++) {    
    if(string[i] != ' ' && string[i] != '0')    
        console.log(string[i] + "-" + freq[i]);    
} 