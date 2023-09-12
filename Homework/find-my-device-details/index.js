const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3000
const os = require('os');



app.set('views', './view');
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    const info = {
        hostname: os.hostname(),
        operation_system: os.type(),
        arch: os.arch(),
        cpu: os.cpus()[0]["model"],
        ram: `${formatBytes(os.freemem())} free of : ${formatBytes(os.totalmem())}`,
    } ; 
    res.render('list.ejs', {info});
    
    ////console.log(os.arch()); // 64 , 32
    ////console.log(os.type()); // operating system
    ////console.log(os.hostname()); // pc name 
    ////console.log(os.cpus()); // CPU info 
    ////console.log(formatBytes(os.totalmem())); // Total  space 
    ////console.log(formatBytes(os.freemem()));// free space 
    // return res.json({
    //     hostname: os.hostname() , 
    //     operation_system: os.type() , 
    //     arch: os.arch(),
    //     cpu: os.cpus()[0]["model"],
    //     ram: `${formatBytes(os.freemem())} free of : ${formatBytes(os.totalmem())}`   , 
    // })



})

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));



function formatBytes(bytes) {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let size = bytes;
    let unitIndex = 0;

    while (size >= 1024 && unitIndex < units.length - 1) {
        size /= 1024;
        unitIndex++;
    }

    return size.toFixed(2) + ' ' + units[unitIndex];
}
