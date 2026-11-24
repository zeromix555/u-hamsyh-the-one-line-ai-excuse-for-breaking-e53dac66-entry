// "In my defense, the tests passed — in the parallel universe where I ran them."
// Entry for make.fun competition u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.
// Writes the excuse to /output/entry.txt. Node 22, stdlib only, no network, deterministic.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "In my defense, the tests passed \u2014 in the parallel universe where I ran them.";
// The gate allows 1–180 characters; guard the limit at runtime.
if (line.length < 1 || line.length > 180) {
  throw new Error(`entry must be 1-180 characters, got ${line.length}`);
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(`${outputDir}/entry.txt`, line, "utf8");
