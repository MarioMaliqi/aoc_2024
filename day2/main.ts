const file = await Deno.readFile("./input.txt");
const decoder = new TextDecoder("utf-8");
let data = decoder.decode(file);

let totalSafe: number = 0;
const MAX_LEVEL_DIFF: number = 3;

const dampendLevelIsSafe = (levels: string[]) => {
  for (let i = 0; i < levels.length; i++) {
   let tmp_lvl: string[] = levels.slice();
   tmp_lvl.splice(i, 1);
   if (levelIsSafe(tmp_lvl, false)) return true;
  }
  return false;
}

const levelIsSafe = (levels: string[], dampener: boolean) => {
  let incr: boolean = false;
  let decr: boolean = false;
  let level: number;
  let llevel: number; 
  let diff: number;

  // 7 6 4 2 1
  for (let i = 1; i < levels.length; i++) {
    level = parseInt(levels[i]);
    llevel = parseInt(levels[i-1]);
    diff = llevel - level;


    if (
      diff > MAX_LEVEL_DIFF ||
      diff < -MAX_LEVEL_DIFF ||
      diff === 0
    ) {
      if (dampener) 
        if (dampendLevelIsSafe(levels)) return true;
      return false;
    }

    if (diff >= 1) decr = true;
    else incr = true;

    if (incr && decr) {
      if (dampener) 
        if (dampendLevelIsSafe(levels)) return true;
      return false;
    }
  }
  return true;
}

let rows = data.split("\n");
rows.pop();
rows.forEach(row => {
  if (levelIsSafe(row.split(" "), true)) totalSafe++;
});

console.log(totalSafe);
