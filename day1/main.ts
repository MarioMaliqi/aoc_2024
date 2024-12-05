const file = await Deno.readFile("./input.txt");
const input = new TextDecoder().decode(file);

const INPUT_LENGTH = 1000;

let leftCol = [];
let rightCol = [];

let dists;
input.split('\n').forEach(line => {
  dists = line.split("   ");
  leftCol.push(parseInt(dists[0]));
  rightCol.push(parseInt(dists[1]));
});

console.log(leftCol);
console.log(rightCol);

function sortAsc(a, b) {
  return a - b;
}

leftCol.sort(sortAsc);
rightCol.sort(sortAsc);

let total = 0;
for (let lc = 0; lc < INPUT_LENGTH; lc++) {
  let occ = 0;
  for (let rc = 0; rc < INPUT_LENGTH; rc++) {
    if (leftCol[lc] == rightCol[rc]) occ++;
  }
  total += leftCol[lc] * occ;
}


console.log(total);
