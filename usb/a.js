/*──────────────────────────────────────────────────────────────────────────────────*/

Object.defineProperties(global,{__:{set:v=>process.exit(_=v)},_:{set:console.log}});
Object.defineProperty(global, '$', {value:{}});

/*──────────────────────────────────────────────────────────────────────────────────*/

const fs = require('node:fs');

/*──────────────────────────────────────────────────────────────────────────────────*/

fs.readFile('xx_scan.txt', 'utf8', (err, data) => {
    if (err) {
        return console.error(err);
    }
    
    // _=f(data).map(f => f.length);
    // f(data);
    _=f(data)
});

/*──────────────────────────────────────────────────────────────────────────────────*/

let f = (data) => {
    let positions = [];
    let start = 0;
    let sep1 = 'SSID ';
    let sep2 = ': ';
    
    while (true) {
        start = data.indexOf(sep1, start);
        if (start < 0) {
            return [...new Set(positions.map((position) => {
                return data.substring(position, position + 32);
            }))];
        }
        start = data.indexOf(sep2, start) + sep2.length;
        positions.push(start);
        start += 32;
    }
};
