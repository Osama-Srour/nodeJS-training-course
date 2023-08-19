(function(){
        console.log(isPalindrome('A man, a plan, a canal, Panama!')); // Output: true
            console.log(isPalindrome('Race car')); // Output: true
            console.log(isPalindrome('Hello, world!')); // Output: false
        
}());

function isPalindrome ( str ){
            //remove all space and special characters ; 
            str = str.replace(/[^\w]/gi, '');
            str = str.replaceAll('_', '');
            str = str.toUpperCase();


            //devide string to Prefix and Prefix, 
            let prefix;
            let suffix;

            //devide depand of the length - odd or even 
            if (str.length % 2 != 0) {
                prefix = str.substring(0, (str.length - 1) / 2);
                suffix = str.substring(((str.length - 1) / 2) + 1, str.length);
            } else {
                prefix = str.substring(0, (str.length - 1) / 2);
                suffix = str.substring(((str.length - 1) / 2), str.length);
            }

            // reverse suffix 
            suffix = suffix.split('').reverse().join('');

            //check if suffix same Prefix
            if (prefix == suffix) {
                return true;
            } else {
                return false;
            }
        }