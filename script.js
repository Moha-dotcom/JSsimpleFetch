
const fs = require("fs");

const readfile = (filename) => {

    fs.readFile(filename, "utf8", (err, data) => {
        if(err == null){
            console.log('File Name:' + __filename);
            console.log(data); 
        }else{
            console.log('error reading file'); // error so print this
        }
    })

}


readfile("/Users/mohamedabdullahi/JSsimpleFetch/String.txt")

