#!/usr/bin/env bun

// CLI entrypoint — no features yet
const args = Bun.argv.slice(2);

if (args.length === 0) {
  console.log("Weeeee");
  process.exit(0);
}

console.error("No commands implemented yet.");
process.exit(1);