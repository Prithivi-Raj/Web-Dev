const fs = require('fs');

const foldername = process.argv[2] || 'Project';

fs.mkdirSync(foldername);

    fs.writeFileSync(`${foldername}/indk.js`,'');
fs.writeFileSync(`${foldername}/jkkk.js`,'');
