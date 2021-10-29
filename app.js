//----------------------------------TASK TO EXTRACT .ZIP FILES ------------------------------//

const admzip = require('adm-zip');
const fs = require('fs');

const unzip = filePath => {

    //Reading archives
    const adm = new admzip(filePath);
    const allEntries = adm.getEntries();

    //Getting all entries of files
    allEntries.map(entry => console.log(entry.entryName.toString("utf8"), "-------" + entry.header.size + " bytes"))

    //Path for extracting zip files
    const dirPath = '../ExtractedZip';   //Path can be modified
    //if dir already exists don't make another one
    if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, (err) => {
            if (err) {
                return console.log(err);
            }
            console.log("Folder created successfully");
        })
    }

    // Extracting all files to new Folder
    adm.extractAllTo(dirPath,/*{overwrite}*/ true)
}

unzip("../zipfiles.zip");
