function comm(a,b){
   a.sort();
   b.sort();
    var k=0;
    for(var i=0;i<a.length;i++){
        if(a[i]!=a[i+1]){
            for(var j=0;j<b.length;j++){
                if(b[j]!=b[j+1]){
                    if(a[i]==b[j]){
                        a[k]=a[i];
                        console.log(a[k]);
                        k++;
                    }
                }
            }
        }
    }
 a[k++]=a[a.length-1];
}
let a=[1,2,3,4,5,8,9,11,89,91,1,2,91];
let b=[1,2,2,5,9,11,11,91,89,9,11];
comm(a,b);
