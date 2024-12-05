const file = await Deno.readFile("./input.txt");
const decoder = new TextDecoder("utf-8");
let data = decoder.decode(file);

let regex = /mul\((([0-9]|[1-9][0-9]|[1-9][0-9][0-9])),(([0-9]|[1-9][0-9]|[1-9][0-9][0-9]))\)|do\(\)|don't\(\)/gi;


let res: any = data.match(regex);

let product = 0;
let enabled = true;

res.forEach(instr => {
  if (instr.startsWith("don't")) {
    enabled = false;
  } else if (instr.startsWith("do")) {
    enabled = true;
  } else if (instr.startsWith("mul")) {
    if (!enabled) return;
    instr = instr.slice(4, -1);
    let nums: string[] = instr.split(",");
    product += parseInt(nums[0]) * parseInt(nums[1]);
  }
});

console.log(product);
