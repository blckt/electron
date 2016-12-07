const fs = require('fs');
const path = require('path');
class Service {
    constructor() {
        this.getFileRecursevly = this.getFileRecursevly.bind(this);
        this.getFiles = this.getFiles.bind(this);
    }
    getFileRecursevly(folderPath, shortPath = '') {
        var files = [];
        var folder = fs.readdirSync(path.resolve(__dirname, folderPath));
        var x = folder.forEach(file => {
            var filePath = path.resolve(folderPath, file);
            if (fs.lstatSync(filePath).isDirectory()) {
                files.push({
                    folder: file,
                    files: this.getFileRecursevly(filePath, file)
                })
            } else {
                files.push({ file: file, folder: shortPath });
            }
        })

        return files;
    }
    getFiles(path) {
        return new Promise((resolve, reject) => {
            var files = this.getFileRecursevly(path)
            resolve(files)
        })
    }
}
module.exports = Service;