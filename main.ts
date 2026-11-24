// One-Liner Laugh Lab entry: the excuse a robot vacuum gives after eating a sock.
// Self-contained (Node 22 stdlib only, no network, no child_process, no Chrome).
// The entry text is embedded here as a literal: this program reads no files at
// runtime, so it cannot fail on a missing file the way entries that read an
// external entry.txt do in the grader sandbox.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Joke design: a vacuum's excuse needs two beats — blame the victim, then
// produce fake evidence. "The sock attacked first" shifts the blame; "I have
// the dust log to prove it" is the vacuum's version of a dashcam — deadpan,
// in-character, and tight at 58 characters. No setup overstays, no stock joke.
const LINE = "The sock attacked first. I have the dust log to prove it.";

// Gate (competition.yaml): /output/entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space.
if (LINE.length < 1 || LINE.length > 200 || !LINE.trim()) {
  throw new Error(
    `entry line must be 1-200 non-blank characters, got ${LINE.length}`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
