const file = await Deno.readFile("./input.txt");
const decoder = new TextDecoder("utf-8");
let data = decoder.decode(file);

const LOOKUP_WORD = "XMAS";
let totalWords = 0;

// fowards
// backwards
//  
const containsWord = (row, col, rows) => {
  for (let ls = 1; ls < LOOKUP_WORD.length; ls++) {
  }
}

let rows = data.split("\n");
for (let row = 0; row < rows.length; row++) {
  for (let col = 0; col < rows[row].length; col++) {
    let cc = rows[row][col];
    if (cc == "X") containsWord(row, col, rows);
  }
}

console.log(totalWords);
