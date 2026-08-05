import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

test("integration workbench exposes bounded DES contracts", async () => {
  const page = await readFile(
    new URL("../src/pages/clients.astro", import.meta.url),
    "utf8",
  );

  for (const expected of [
    "Select client language",
    "TypeScript / HTTP",
    "MCP tool call",
    "/des/api/v1/catalog",
    "/des/api/v1/solve",
    "No dedicated client package yet",
  ]) {
    assert.ok(page.includes(expected), `missing ${expected}`);
  }

  assert.match(page, /navigator\.clipboard/);
  assert.match(page, /prefers-reduced-motion/);
});
