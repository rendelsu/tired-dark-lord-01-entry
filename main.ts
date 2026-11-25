const fs = require("node:fs");
const path = require("node:path");

const TEXT = "Come in. Mind the third step. I had it fixed twice. The mason is a toad now, so the step is still broken. Sit. No, not there. That chair is for the ambassador I poisoned in spring. Spring. Was it spring? The banners still say spring, and nobody has changed them. Three hundred years ruling seven valleys taught me one thing: kingdoms are paperwork with better lighting. Prophecy says a farm boy with a rusty sword ends me. Fine. I left the gate open, the tea warm. Ah \u2014 one thing. If you are the farm boy... could you knock? The doorbell broke Tuesday.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outDir, { recursive: true });
const outFile = path.join(outDir, "entry.txt");
fs.writeFileSync(outFile, TEXT, "utf8");
fs.chmodSync(outFile, 0o644);
