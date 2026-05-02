const fs = require('fs');
const path = require('path');

const folder = '../assets/gfx_images';
const files = fs.readdirSync(folder).filter(f => 
  /\.(png|jpg|jpeg|gif|webp)$/i.test(f)
);

const html = files.map(f => 
  `  <img src="assets/gfx_images/${f}" alt="gfx_full">`
).join('\n');

console.log('<div class="container">\n' + html + '\n</div>');