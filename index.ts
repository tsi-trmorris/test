#!/usr/bin/env bun

// CLI entrypoint — no features yet
const args = Bun.argv.slice(2);

const vibes = [
  "ship it",
  "one more refactor",
  "tests later",
  "works on my machine",
  "bun speedrun",
];

if (args.length === 0) {
  const vibe = vibes[Math.floor(Math.random() * vibes.length)];
  console.log(`newrepo — ${vibe}`);
  process.exit(0);
}

console.error("No commands implemented yet.");
process.exit(1);