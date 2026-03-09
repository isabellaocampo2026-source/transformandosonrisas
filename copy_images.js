const fs = require('fs');
const path = require('path');

const srcDir = 'C:/Users/mauro/Downloads';
const destDir = 'C:/Users/mauro/OneDrive/Desktop/opengravity/carmen-next/public';

const files = fs.readdirSync(srcDir);

const targets = {
    'photo-1655807946138': 'treatment_blanqueamiento',
    'premium_photo-1674368232416': 'treatment_laser',
    'photo-1575468130797': 'treatment_celulas_madre_v2',
    'istockphoto-1675540369': 'treatment_embarazo'
};

for (const f of files) {
    for (const prefix in targets) {
        if (f.startsWith(prefix)) {
            const ext = path.extname(f);
            const newName = targets[prefix] + ext;
            fs.copyFileSync(path.join(srcDir, f), path.join(destDir, newName));
            console.log(`Successfully copied ${f} to ${newName}`);
        }
    }
}
