function removes(val){
    var str="";
    for(var i=0;i<val.length;i++){
        if(val[i]>='A'||val[i]>='Z'&& val[i]>='a'||val[i]>='z'){
            str=str+val[i]
        }
    }
    console.log(str);
}
removes("P@#iy%us&h")