#!/usr/bin/env node
const fs = require('fs');
let lines = fs.readFileSync(process.argv[2], 'utf8').split('\n');
lines = lines.slice(lines.findIndex((v) => v === 'PRINTSLIST="') + 1).filter(Boolean);
lines = lines.slice(0, lines.length - 1);
console.log(JSON.stringify(lines.map((v) => {
  const split = v.split('=');
  const fingerprints = split.slice(1).join('=').split(';');
  const [ name, brand, device ] = split[0].split(':');
  return {
    name,
    brand,
    device,
    fingerprints
  };
}), null, 2));
