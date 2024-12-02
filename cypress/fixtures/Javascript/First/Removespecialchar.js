let statement = "T!P, Wher$%e Y@ou F*ind L@ot O!f Courses"
         function replacespecial(value){
            var lowerCase = value.toLowerCase();
            var upperCase = value.toUpperCase();
            var replacement = "";
            for(var i=0; i<lowerCase.length; ++i) {
               if(lowerCase[i] != upperCase[i] || lowerCase[i].trim() === '' || lowerCase[i].trim() === "." ||
               lowerCase[i].trim() === ";")
               replacement += value[i];
              
            }
            console.log(replacement);
            return replacement;
         }
         let result = replacespecial(statement)
         