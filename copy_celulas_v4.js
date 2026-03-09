const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/mauro/Downloads';
const destDir = 'C:/Users/mauro/OneDrive/Desktop/opengravity/carmen-next/public';

const files = fs.readdirSync(srcDir);
const targetPattern = 'premium_photo-1722937579971-de9619be2fde';

const foundFile = files.find(f => f.startsWith(targetPattern));

if (foundFile) {
    const ext = path.extname(foundFile);
    const newName = 'treatment_celulas_madre_v4' + ext;
    fs.copyFileSync(path.join(srcDir, foundFile), path.join(destDir, newName));
    console.log(`Successfully copied ${foundFile} to ${newName}`);
} else {
    console.log('File not found matching pattern: ' + targetPattern);
}
