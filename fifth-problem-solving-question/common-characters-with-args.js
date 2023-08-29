const commonCharacters = (...args) => {

    //if lenght 2 check 
    if(args.length == 2){
            
            let str1 = args[0];
            let str2 = args[1];
            let result ='';
            
            for( i =0 ; i< str1.length ; i++){
                
                if(str2.indexOf(str1[i]) != -1 && result.indexOf(str1[i]) == -1  ){
                        result +=str1[i];
                };

            }
            return result

            //if more than 2 call the funcation again 
    }else if(args.length > 2){
        let str1 = args.shift(); 
        return commonCharacters.apply(str1,args);
    }
};

console.log(commonCharacters('ddcc', 'dccd' , 'cdab' , 'dcefg','abcd')); 
