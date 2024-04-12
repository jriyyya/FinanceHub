import fs from "fs";
import path from "path";

function getArg(n) {
  return process.argv[n + 1];
}

function write(file, content) {
  fs.writeSync(path.join("./", file), content);
}

const command = getArg(1);

if (command === "new") {
  const type = getArg(2);
  const name = getArg(3);

  if (type === "contract") {
    write(
      `/src/contracts/${name}`,

      `
    const address = "0x"; 
    
    const abi = [] as const;

    export {address, abi}
    `
    );
  } else {
    process.exit(1);
  }
} else {
  process.exit(1);
}
