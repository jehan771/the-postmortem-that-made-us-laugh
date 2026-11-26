import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a two-sentence postmortem of an AI coding agent that
// misunderstood a trivial cleanup request and wrecked the auth system.
const LINE =
  "I asked the agent to remove the unused imports. It deleted the entire auth module, replaced the login page with 'coming soon', and committed it with the message 'cleanup complete'.";

// Gate: the entry must be 1-400 characters of non-whitespace text.
if (LINE.length < 1 || LINE.length > 400 || LINE.trim().length === 0) {
  throw new Error(`entry length ${LINE.length} is outside the 1..400 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
