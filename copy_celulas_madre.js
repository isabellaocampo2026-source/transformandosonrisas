const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/mauro/Downloads';
const destDir = 'C:/Users/mauro/OneDrive/Desktop/opengravity/carmen-next/public';

const files = fs.readdirSync(srcDir);
const targetPattern = 'premium_photo-1676333345832-d2901e1b5a8c';

const foundFile = files.find(f => f.startsWith(targetPattern));

if (foundFile) {
    const ext = path.extname(foundFile);
    const newName = 'treatment_celulas_madre_v3' + ext;
    fs.copyFileSync(path.join(srcDir, foundFile), path.join(destDir, newName));
    console.log(`Successfully copied ${foundFile} to ${newName}`);
} else {
    console.log('File not found matching pattern: ' + targetPattern);
}
