function anagram(a,b){
    var len1=a.length;
    var len2=b.length;
 if(len1==len2){
    var str1=a.split('').sort().join();
    var str2=b.split('').sort().join();

    if(str1==str2){
        console.log("It is an anagram")
    }else{
        console.log("It is not an anagram")
    }
 }
    
}

anagram("race","care")