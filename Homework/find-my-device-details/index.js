const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const apiPort = 3000
const os = require('os');
const fs = require('fs');
const { off } = require('process')



app.set('views', './view');
app.set('view engine', 'ejs');

const info = {
    hostname: os.hostname(),
    operation_system: os.type(),
    arch: os.arch(),
    cpu: os.cpus()[0]["model"],
    ram: `${formatBytes(os.freemem())} free of : ${formatBytes(os.totalmem())}`,
};


app.get('/', (req, res) => {
    
    res.render('list.ejs', {info});
})

app.get('/Exportdata', (req, res) => {
    
    const str = `Hostname: ${info.hostname.trim() }
    operation_system : ${info.operation_system.trim() } 
    cpu : ${info.cpu.trim()}
    ram: ${ info.ram }`

    fs.writeFile('PC Information.txt', str, (err) => {
        if (err) {
            res.status(400).json( {"Error" : err} );

        } else {
            res.status(200).send(" \"PC Information.txt\" has been created in your device!" );
        }


    })


        
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



