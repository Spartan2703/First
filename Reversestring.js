/*var str="My name is piyush";
let reversestr=str.split(' ')
.map(word=>
    word.split('').reverse().join('')
).join(' ');

console.log(reversestr)
*/

var str="My name is piyush";
		var word=str.split(" ");
		var wordrev="";
		var finalrev="";
		
		for(var i=0;i<word.length;i++) {
			wordrev="";
			for(var j=word[i].length-1;j>=0;j--) {
				wordrev=wordrev + word[i].charAt(j);
			}
			finalrev= finalrev + " " + wordrev;
		}
		console.log(finalrev);