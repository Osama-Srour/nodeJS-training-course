//import CommonJS Module const module = require('module-name');
//Export CommonJS Module module.exports = value;


function findDataByEmail(email){
    const reader = require('xlsx')
    const file = reader.readFile('NodeJs_course_1.xlsx');
    const sheets = file.SheetNames;
    let item ;

    for(let i = 0; i < sheets.length; i++)
    {
        const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]])
        
        temp.forEach((res) =>{
            
            
             if(String(res["__EMPTY_1"]).toLowerCase().trim() == email.toLowerCase().trim()){
                 item = res;
        }
   } );
    }

    return item;
}


console.log(findDataByEmail('Osamaaljahlani@hotmail.com'));
console.log(findDataByEmail('osamasrour0@gmail.com'));
console.log('sadsafasf');
//impot 












//read file fs.readFile('file' , function(err , data){});
// fs.readFile('NodeJs_course_1.xlsx', function(err,data){
//     console.log('read!');
//     console.log(data);
//     xlsx.parse(data);
    
// });


//fs.writeFile('NodeJs_course_1.txt', data , (err) => {
//     if (err) {
//         console.error('Error writing to file - Osama :', err);
        
//     } else {
//         console.log('File successfully written! - Osama');
//     }
// });











//create file fs.appendFile('filename' , 'data' , function(err){})

// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//   if (err) throw err;
//   console.log('Saved!');
// });


//open file 

// fs.open('mynewfile.txt', 'w', function (err, file) {
//   if (err) throw err;
//   console.log('Saved!');
// });
